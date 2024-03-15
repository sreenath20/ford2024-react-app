function Button({ onAddToCart, children }) {
    return (
      <button onClick={onAddToCart}>
        {children}
      </button>
    );
  }

function EventDemo() {

    const clickHandler = (name) => alert("Handle Click event:"+name);

    const addToCartHandler = ()=>{
        alert("Add Product to cart");
    }
    return (

        <>
            <button onClick={()=>clickHandler("Ford")}>Click me</button>
            <Button onAddToCart={addToCartHandler}>Add To Cart</Button>
        </>
    );
}

export default EventDemo;