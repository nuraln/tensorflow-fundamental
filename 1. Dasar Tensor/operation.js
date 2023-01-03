const a = tf.tensor1d([1, 2, 3, 4, 5]);
const b = tf.tensor1d([6, 7, 8, 9, 10]);
const d = tf.tensor1d([10]) //jika dioperasikan dengan tensor a atau c, maka setiap nilai di tensor a atau b
                            //akan ditambah dengan 10
a.print()
b.print();

console.log("--------Tambah--------");
const tambah = tf.add(a, b);
const tambah1 = a.add(b);
tambah.print();
tambah1.print();


console.log("--------Kurang--------");
const kurang = tf.sub(a, b);
const kurang1 = a.sub(b);
kurang.print();
kurang1.print();


console.log("--------Kali--------");
const kali = tf.mul(a, b);
const kali1 = a.mul(b);
kali.print();
kali1.print();


console.log("--------Bagi--------");
const bagi = tf.div(a, b);
const bagi1 = a.div(b);
bagi.print();
bagi1.print();


console.log("--------Modulus--------");
const modulus = tf.mod(a, b);
modulus.print();


console.log("--------Floor Div--------");
const floor_div = tf.floorDiv(a, b);
floor_div.print();

console.log("--------Maximum--------"); //mengambil nilai maksimum dari setiap tensor
const maximum = tf.maximum(a, b);
maximum.print();

console.log("--------Minimum--------"); //mengambil nilai minimum dari setiap tensor
const minimum = tf.minimum(a, b);
minimum.print();

console.log("--------Gather--------"); //Mengambil tensor berdasarkan index
const index = tf.tensor1d([1, 2, 4], 'int32');
const gather = tf.gather(a, index); //menampilkan angka dengan index ke 1, 2, dan 4 dari tensor a
gather.print();

console.log("--------Concat--------"); //untuk menggabungkan beberapa data tensor
const concat = tf.tensor([a, b, d]);
concat.print();

console.log("--------Reverse--------"); //Untuk membalikkan nilai tensor
const reverse = tf.reverse(a);
reverse.print();

const yang2d = tf.tensor2d([
                                [1, 2, 3, 4, 5],
                                [6, 7, 8, 9, 10]
                            ]);
yang2d.print();
const reverse2d = tf.reverse(a);
reverse2d.print();

console.log("--------Transpose--------"); 
const transpose = tf.transpose(yang2d);
transpose.print();

console.log("--------Equal--------"); //untuk membandingkan kesamaan nilai tensor, hasilnya true atau false
const equal = tf.equal(a, b); //membandingkan apakah a = b
equal.print(); 

console.log("--------Greater--------");  //untuk membandingkan nilai tensor lebih besar dari, hasilnya true atau false
const greater = tf.greater(a, b);
greater.print();