export const mockApi = {
  async getUser() {
    // simulate network latency
    await new Promise((res) => setTimeout(res, 1000));
    return {
      id: "user1",
      name: "Jane Doe",
      wallet: {
        balance: 253.75,
        bankName: "Chase",
        bankLast4: "1234",
      },
    };
  },

  async getTransactions() {
    await new Promise((res) => setTimeout(res, 500));
    return [
      {
        id: "tx1",
        merchantName: "CoffeeCo",
        createdAt: new Date().toISOString(),
        amount: -6.75,
        cashback: 0.13,
      },
      {
        id: "tx2",
        merchantName: "GroceriesRUs",
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        amount: -42.3,
        cashback: 0.84,
      },
    ];
  },

  async postPayment(draft: any) {
    await new Promise((res) => setTimeout(res, 1000));
    // In a real API we'd return updated wallet etc. Here just echo success
    return { success: true };
  },
};
