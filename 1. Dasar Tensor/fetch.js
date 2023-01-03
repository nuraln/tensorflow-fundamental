const URL_CSV = "https://storage.googleapis.com/tfjs-examples/multivariate-linear-regression/data/train-data.csv";
console.log(URL_CSV);

function csvToArray(csv, delimiter = ",", removeHeader = false) {
    return csv.slice(removeHeader ? csv.indexOf('\n')+1 : 0)
              .split("\n")
              .map((element) => element.split(delimiter));
  }
  

const response = fetch(URL_CSV)
.then(response => response.text())
.then(csv => {
    const data = csvToArray(csv);
    const tensor = tf.tensor(data);
    tensor.print()
})
.catch(err => console.log(err));
