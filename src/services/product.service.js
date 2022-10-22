import api from '../config/api'
const productService={
    getProduct(){
        return api.get('/product')
    }
}
export default productService