let img = document.getElementById("img");
let canvas = document.body.appendChild(document.createElement("canvas"));
let ctx = canvas.getContext("2d");

ctx.canvas.width = img.width;
ctx.canvas.height = img.height;

async function main() {
    // Load the model.
    const model = await blazeface.load();

    // Pass in an image or video to the model. The model returns an array of
    // bounding boxes, probabilities, and landmarks, one for each detected face.

    const returnTensors = false; // Pass in `true` to get tensors back, rather than values.
    const predictions = await model.estimateFaces(img, returnTensors); // script tensorflow hanya satu baris ini, coding selebihnya adalah manipulasi html

    ctx.drawImage(img, 0,0, img.width, img.height);
    console.log(predictions);

    // Jika ada wajah yang terdeteksi di dalam gambar
    if (predictions.length > 0) {
        
        // Baca semua wajah yang terdeteksi
        predictions.forEach(element => {
            console.log(element);
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = "yellow";

            ctx.rect(
                element.topLeft[0], element.topLeft[1],
                element.bottomRight[0] - element.topLeft[0],
                element.bottomRight[1] - element.topLeft[1],
            );
            ctx.stroke();

            // Menandai titik-tik landmarks
            ctx.fillStyle = "yellow";
            element.landmarks.forEach((landmark) => {
                ctx.fillRect(landmark[0], landmark[1], 4, 4);
            });
        });

//-------------codingan dari dokumentasi Blazeface Github---------------
        // for (let i = 0; i < predictions.length; i++) {
        //     const start = predictions[i].topLeft;
        //     const end = predictions[i].bottomRight;
        //     const size = [end[0] - start[0], end[1] - start[1]];
    
        //     // Render a rectangle over each detected face.
        //     ctx.fillRect(start[0], start[1], size[0], size[1]);
        // }
        }
    }
    
    main();