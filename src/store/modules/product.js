 
import axios from "axios";
 
export default {
  namespaced: true, 
  state: {
    products: [],
    data:null,
    log:null,
    
    
  },
  getters: {
    totalPrice(state) {
      return state.products.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
    productsInCart(state) {
      return state.products.filter(p => p.quantity > 0);
    },
     data(state) {
      return state.data;
    },
  },
  mutations: {
    addToCart(state, product) {
      const item = state.products.find(p => p.id === product.id);
      if (item) item.quantity++;
    },
    clearCart(state) {
      state.products.forEach(p => (p.quantity = 0));
    },
    setData(state, data){
        state.data = data;
      },
    setProducts(state, products) {
    state.products = products;
  },
    insertProducts(state,products){
      state.log = products;
    }

  },
  actions: {
    async purchaseItems({ commit }) {
      await new Promise(resolve => setTimeout(resolve, 3000));
      commit('clearCart');
    },
    

  async fetchData({ commit }) {
    const response = await axios.get('https://m3h-inoue-0804-hqfqcvdphpbgered.japaneast-01.azurewebsites.net/api/SELECT?');
    const productList = response.data.List.map(item => ({
      id: item.ID,
      name: item.Name,
      price: item.Price,
      quantity: item.Quantity
    }));
    commit('setProducts', productList);
    commit('setData', response.data);
  },

async insertProduct({ dispatch }, form) {
  
  await axios.get("https://m3h-inoue-0804-hqfqcvdphpbgered.japaneast-01.azurewebsites.net/api/INSERT", {params: form});
  await dispatch('fetchData');
}
}
}