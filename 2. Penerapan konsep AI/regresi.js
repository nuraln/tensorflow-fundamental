// -- STEP 02. Load Data

const fileData = '/data/xy.csv';
let x = new Array();
let y = new Array();

Papa.parse(fileData, {
    download : true,
    step : function(row, parser) {
        if (row.data[0] != "Header"){
            x.push(parseFloat(row.data[1]));
            y.push(parseFloat(row.data[2]));
        }
    },
    complete : proses
})

function proses(){

    //- Split data Training & Testing
    const persen = 70/100;
    let x_train = new Array();
    let y_train = new Array()
    let x_test  = new Array()
    let y_test  = new Array()

    x_train = x.splice(0, (x.length * persen));
    y_train = y.splice(0, (y.length * persen));

    x_test = x;
    y_test = y;

    // -- STEP 03. Konversi menjadi Tensor
    const trainTensors = {
        x : tf.tensor2d(x_train, [x_train.length, 1]),
        y : tf.tensor2d(y_train, [y_train.length, 1])
    }

    const testTensors = {
        x : tf.tensor2d(x_test, [x_test.length, 1]),
        y : tf.tensor2d(y_test, [y_test.length, 1])
    }    

    // -- STEP 04: Membuat Model
    const model = tf.sequential();
    const opt = tf.train.adam(0.2);
    model.add(tf.layers.dense({inputShape : [1], units: 1}));
    model.compile({optimizer: opt, loss: 'meanAbsoluteError'});
    model.summary();

    // -- STEP 05. Melatih Model
    //- Melatih Model 
    async function train() {
        for(let i = 1; i<=100; i++) {
            const hasil = await model.fit(
                trainTensors.x, 
                trainTensors.y, 
                {
                    epochs: 1
                }
        );   
         // KERNEL & BIAS
        //  console.log(`================== ITERASI ${i} ====`)
        //  console.log("KERNEL");
        //  model.layers[0].getWeights()[0].print();  
        //  console.log("BIAS");
        //  model.layers[0].getWeights()[1].print();     
        
        //- Evaluasi Model
        console.log(`===== EVALUASI ${i} =====`);
        console.log(hasil.history.loss[0]);
        model.evaluate(testTensors.x, testTensors.y).print();
        }
    }

    train().then(()=>{
        // -- STEP 06. Prediksi
        const var1 = 1;
        const var2 = 6;
        const var3 = 10;
                
        console.log("===== PREDIKSI =====");
        model.predict(tf.tensor2d([[var1],[var2],[var3]])).print();
    });

}