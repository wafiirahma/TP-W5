/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungsi `item.displayDetails()`).
 */

class Inventory {
    constructor() {
      this.items = []; // Properti untuk menampung daftar item
    }
  
    // Method untuk menambahkan item ke dalam inventaris
    addItem(item) {
      this.items.push(item);
    }
  
    // Method untuk menghapus item dari inventaris berdasarkan id
    removeItem(id) {
      this.items = this.items.filter(item => item.id !== id);
    }
  
    // Method untuk menampilkan daftar item di inventaris
    listItems() {
      return this.items.map(item => item.displayDetails()).join('\n');
    }
  }
  
  // Jangan hapus kode di bawah ini!
  export default Inventory;  