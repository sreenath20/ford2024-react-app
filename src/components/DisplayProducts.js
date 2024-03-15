import productService from "../services/ProductService";

function DisplayProducts() {

    productService.getAllProducts()
        .then(
            (data) => console.log(data)
        )
        .catch(
            (err) => console.log(err)
        )
        .finally(
            () => console.log("Server completed sending data.")
        );

    return (
        <>
            <h3>Display all products</h3>

        </>
    )
}

export default DisplayProducts;