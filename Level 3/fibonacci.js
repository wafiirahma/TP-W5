function fibonacci(n) {
    // Basis: Jika n adalah 0 atau 1, kembalikan n itu sendiri
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
    // Rekursi: Deret Fibonacci didefinisikan sebagai penjumlahan dari dua elemen sebelumnya
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Jangan hapus kode di bawah ini!
  export default fibonacci;  