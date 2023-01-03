let video = document.getElementById("video");
let canvas = document.body.appendChild(document.createElement("canvas"));
let ctx = canvas.getContext("2d");

ctx.canvas.width = 600;
ctx.canvas.height = 400;

const startStream = () => {
    navigator.mediaDevices.getUserMedia ({
        video : {width:600, height:400},
        audio : false
    }).then((stream) => {
        video.srcObject = stream;
    });
}

const detect = async () => {
    const model = await blazeface.load();

    const returnTensors = false;
    const predictions = await model.estimateFaces(video, returnTensors);

    console.log(predictions);

    ctx.drawImage(video, 0, 0, 600, 400);

    predictions.forEach(element => {
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "yellow";
        ctx.rect(
            element.topLeft[0], element.topLeft[1],
            element.bottomRight[0] - element.topLeft[0],
            element.bottomRight[1] - element.topLeft[1]
        )
    });
    ctx.stroke;
}

startStream();
video.addEventListener('loadeddata', async () => {
    setInterval(detect, 100);
});