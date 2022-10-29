import api from "../config/api";

const cartService = {
  getCart() {
    return api.get("/ecommerce/v1/cart");
  },
  updateQuantity(id, data) {
    return api.put(`/ecommerce/v1/cart/quantity/${id}`, data);
  },
  addProduct(id) {
    return api.put(`/ecommerce/v1/cart/quantity/${id}`, { quantity: 1 });
  },
  removeItem(id) {
    return api.delete(`/ecommerce/v1/cart/remove-item/${id}`);
  },
  addPromotion(data) {
    return api.post("/ecommerce/v1/cart/add-promotion-code", data);
  },
};
export default cartService