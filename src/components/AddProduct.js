import productService from "../services/ProductService";

const { useState } = require("react");

function AddProduct() {

    let [newProduct, setNewProduct] = useState({
        "name": '',
        "price": 0

    });

    // let [offer, setOffer] = useState({
    //     "discount": 0
    // });

    let [message, setMessage] = useState("");
    let [errorMessage, setErrorMessage] = useState("");




    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(newProduct);
        // console.log(offer);
        // console.log({...newProduct,'offer':offer});

        productService.addProduct(newProduct)
            .then(
                (resp) => {
                    console.log(resp);
                    setMessage("Product Added successfully");
                    setErrorMessage("");

                }
            )
            .catch(
                (err) => {
                    console.log(err);
                    setMessage("");
                    setErrorMessage("Could not add product.");
                }
            )
    };
    const handleProductChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setNewProduct({ ...newProduct, [name]: value });
    }
    // const handleDiscountChange = (e) => {
    //     let name = e.target.name;
    //     let value = e.target.value;

    //     setOffer({ ...offer, [name]: value });

    // }

    const elementForm = (
        <>
            <h3> Add Product</h3>

            {
                message && <div className="alert alert-success">{message}</div>
            }

            {
                errorMessage && <div className="alert alert-danger">{errorMessage}</div>
            }

            <form onSubmit={handleSubmit}>
                <p>
                    Name:
                    <input type="text" name="name" value={newProduct.name} onChange={handleProductChange} required pattern="[a-zA-Z ]{3,}" title="Name should contain only chars and has min 3 chars length."></input>
                </p>
                <p>
                    Price:
                    <input type="text" name="price" value={newProduct.price} onChange={handleProductChange} required pattern="[0-9]{2,}" title="Please enter min 2 digit price"></input>
                </p>

                {/* <p>
                    Discount %:
                    <input type="number" name="discount" value={offer.discount} onChange={handleDiscountChange}></input>
                </p> */}
                <button type="submit" >Add Product</button>
            </form>
            {/* {newProduct.name}:{newProduct.price} */}

        </>
    );

    return (
        <>
            {elementForm}
        </>
    );

}

export default AddProduct;