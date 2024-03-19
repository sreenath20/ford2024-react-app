import { useEffect, useState } from "react";
import productService from "../services/ProductService";


function ProductTable({ products, onDeleteProduct }) {

    return (

        <>
            <h3> All Product Details:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) =>
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => onDeleteProduct(product.id)} className="btn btn-danger"> Delete </button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </>

    );
}



function DisplayProducts() {

    const [products, setProducts] = useState([])

    useEffect(
        () => { //Runs only on the first render
            console.log("useEffect call back");
            loadAllProducts();
        }, []);

    const loadAllProducts = () =>
        productService.getAllProducts()
            .then(
                (resp) => {
                    console.log(resp.data)
                    setProducts(resp.data);
                    console.log(products); // prints previous state i.e current snapshot
                }
            )
            .catch(
                (err) => console.log(err)
            )
            .finally(
                () => console.log("Server completed sending data.")
            );

    const handleDeleteProduct = (id) => {
        console.log(id);
        productService.deleteProductById(id)
            .then(
                (resp) => {
                    console.log(resp);
                    setProducts(products.filter((p) => p.id != id));
                }
            )
            .catch(
                (err) => {

                    console.log(err);
                }
            );

    }
    return (
        <>

            {products.length > 0 ?
                <ProductTable products={products} onDeleteProduct={handleDeleteProduct} />
                : <h3>No Products to Display.</h3>}
        </>
    )
}

export default DisplayProducts;