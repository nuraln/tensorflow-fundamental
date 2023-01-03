function process() {
    const a = tf.fill([3000,3000], 77);
    const b = tf.fill([2000,500], 88);
    const c = tf.transpose(b);

    // Proses data tensor


    tf.dispose(a);
    tf.dispose(b);
    tf.dispose(c);

    console.log("Byte : " + tf.memory().numBytes);    
}

function processTidy(){

    tf.tidy(() => {
        const a = tf.fill([3000,3000], 77);
        const b = tf.fill([2000,500], 88);
        const c = tf.transpose(b);
    
        // Proses data tensor

         
    });

    console.log("Byte : " + tf.memory().numBytes);       

}

setInterval(processTidy, 10)