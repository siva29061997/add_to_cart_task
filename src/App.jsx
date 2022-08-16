
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import CardItem from './CardItem';
import { useState } from "react";


function App() {
  
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [products, setproduct] = useState([
    {
      id: 1,
      tittle: "Mobile",
      price: 39999,
      img: "assets/mobile_demo.jpg"
    },
    {
      id: 2,
      tittle: "Laptop",
      price: 49999,
      img: "assets/51AjMkwsBzL._SY550_.jpg"
    },
    {
      id: 3,
      tittle: "Smart Watch",
      price: 2499,
      img: "assets/download.jpg"
    },
    {
      id: 4,
      tittle: "Smart Tv",
      price: 69999,
      img: "assets/41WjRcff4-L.jpg"
    },
    {
      id: 5,
      tittle: "Charger",
      price: 499,
      img: "assets/product-jpeg-500x500.jpg"
    },
    {
      id: 6,
      tittle: "Router",
      price: 1999,
      img: "assets/download.png"
    },])

  let addToCart = (value) => {
    setCart([...cart, value]);
    setTotal(total + value.price);
  }

  let removeFromCart = (value) => {
    let index = cart.findIndex((obj) => obj.id === value.id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - value.price)
  }
  return (


    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {
              products.map((value) => {
                return (<Card value={value} CardItem={cart} handdleAddToCart={addToCart}></Card>)
              })
            }
          </div>
        </div>
        <div className="col-lg-4">
          {cart.length === 0 ? (
            <div>No Item to cart</div>
          ) : (
            <div className="row">
              <ol class="list-group list-group-numbered">
                {
                  cart.map((CardItem) => {
                    return <CardItem CardItem={CardItem} removeFromCart={removeFromCart}></CardItem>
                  })
                }
              </ol>
              <h2>Total price {total}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
