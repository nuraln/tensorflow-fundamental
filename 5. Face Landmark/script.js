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

async function main(){
    const model = await faceLandmarksDetection.load(
        faceLandmarksDetection.SupportedPackages.mediapipeFacemesh);

    const faces = await model.estimatedFaces({
        input: video
    }); 

    if (faces.length > 0){
        faces.forEach(face => {
            console.log(face);
            const keypoints = faces.scaleMesh;

            // long facial keypoints
            for (let i = 0; i < keypoints.length; i++){
                const [x, y, z] = keypoints[i]

                console.log('keypoint ${i} : [${x}, ${y}, ${z}]');
            }
        
        });
    }
}
main();

startStream()
