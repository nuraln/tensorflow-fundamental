const BASE_URL = "https://storage.googleapis.com/tfjs-examples/multivariate-linear-regression/data/";
const TRAIN_DATA = "train-data.csv";
const TRAIN_TARGET = "train-target.csv";
const TEST_DATA = "test-data.csv";
const TEST_TARGET = "test-target.csv";

// papaparse.com -> library untuk membantu mengambil data csv dari public url, bisa juga mengkonversi csv menjadi json

function loadData(csv){
    const url = '${BASE_URL}${TRAIN_DATA}';
    papa.parse(url, {
        download: true,
        complete: function(results) {
            console.log(url);
            // console.log(results);
    
            // convert data menjadi tensor
            const data = tf.tensor(result['data']);
            data.print();
        }
    });
}

loadData(TRAIN_DATA);
loadData(TRAIN_TARGET);
loadData(TEST_DATA);
loadData(TEST_TARGET);