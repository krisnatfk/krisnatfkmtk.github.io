// Fungsi ini memastikan bahwa hasil operasi modulo selalu tidak negatif.
function mod(n, m) {
    return ((n % m) + m) % m;
}
// angka yang telah di input dirubah ke array
function enkripsi() {
    let matriks = [
        parseInt(document.getElementById("matriks1").value),
        parseInt(document.getElementById("matriks2").value),
        parseInt(document.getElementById("matriks3").value),
        parseInt(document.getElementById("matriks4").value)
    ];

    let plaintext = document.getElementById("plaintext").value.toUpperCase().replace(/[^A-Z]/g, '');
    // jika teks berupa ganjil maka ditambahkan huruh lain contoh nya "A"
    if (plaintext.length % 2 !== 0) {
        plaintext += 'A';
    }
// proses menenkripsikan teks
    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i += 2) {
        let pair = [plaintext.charCodeAt(i) - 65, plaintext.charCodeAt(i + 1) - 65];
        let encryptedPair = [
            mod(matriks[0] * pair[0] + matriks[1] * pair[1], 26),
            mod(matriks[2] * pair[0] + matriks[3] * pair[1], 26)
        ];
        ciphertext += String.fromCharCode(encryptedPair[0] + 65) + String.fromCharCode(encryptedPair[1] + 65);
    }

    //hasil teks yang telah dienkripsikan
    document.getElementById("ciphertext").value = ciphertext;
}