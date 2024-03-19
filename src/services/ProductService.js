import { axiosInstance } from "./Axios-http-client";
class ProductService {

    getAllProducts() {
        console.log("get all products");
        return axiosInstance.get('http://localhost:8090/products');
    }

    deleteProductById(id){
        return axiosInstance.delete("http://localhost:8090/product/"+id);
    }

    addProduct(newProduct){
        return axiosInstance.post('http://localhost:8090/product',newProduct);
    }
}
export default new ProductService();