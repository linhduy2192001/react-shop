import api from '../config/api'
const productService={
    getProduct(query = ''){
        return api.get(`/product${query}`)
    }
}
export default productService