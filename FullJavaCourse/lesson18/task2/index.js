const wallet = {
  transactions: [1, 2, 3, 4, 5, 6],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

console.log(wallet.getMin());
console.log(wallet.getMax());
