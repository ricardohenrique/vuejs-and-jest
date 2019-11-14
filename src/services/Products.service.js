import MockProducts from '../data/products.json';

/**
 * Manage products
 *
**/
const ProductService = {
    getProduct(id){
        return MockProducts.filter(item => {
            return item.id == id
        })[0]
    },
    getProductByName(name){
        return MockProducts.filter(item => {
            return item.name == name
        })[0]
    },
    getProducts(){
        return MockProducts
    }
}

export default ProductService

export { ProductService }