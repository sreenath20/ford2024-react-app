import { axiosInstance } from "./Axios-http-client";

class ProductService {

    getAllProducts() {
        console.log("get all products");
        return axiosInstance.get('http://localhost:8090/products');
    }

}
export default new ProductService();