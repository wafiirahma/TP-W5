// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
    return `_${Math.random().toString(36).slice(2, 9)}`;
  }
  
  // TODO: buatlah variabel yang menampung data orders
  let orders = [];
  
  // TODO: selesaikan fungsi addOrder
  function addOrder(customerName, items) {
    // Menghitung total harga dari items
    const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
    
    // Membuat pesanan baru dengan id unik dan status default 'Menunggu'
    const newOrder = {
      id: generateUniqueId(),
      customerName,
      items,
      totalPrice,
      status: 'Menunggu',
    };
  
    // Menambahkan pesanan baru ke daftar orders
    orders.push(newOrder);
  }
  
  // TODO: selesaikan fungsi updateOrderStatus
  function updateOrderStatus(orderId, status) {
    // Mencari pesanan berdasarkan ID dan memperbarui statusnya
    const order = orders.find(order => order.id === orderId);
    if (order) {
      order.status = status;
    }
  }
  
  // TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
  function calculateTotalRevenue() {
    // Menghitung total pendapatan dari pesanan dengan status 'Selesai'
    return orders
      .filter(order => order.status === 'Selesai')
      .reduce((acc, order) => acc + order.totalPrice, 0);
  }
  
  // TODO: selesaikan fungsi deleteOrder
  function deleteOrder(id) {
    // Menghapus pesanan dari array berdasarkan ID
    orders = orders.filter(order => order.id !== id);
  }
  
  export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };  