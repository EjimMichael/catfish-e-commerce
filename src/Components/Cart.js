import React, { useEffect, useState } from "react";
import { auth, fs } from "../FirebaseConfig/Firebase";
import CartProducts from "./CartProducts";
import NavBar from "./NavBar";
import StripeCheckout from "react-stripe-checkout";


function Cart() {
  function GetCurrentUser() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              setUser(snapshot.data().FullName);
            });
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }

  const user = GetCurrentUser();

  // state of cart products
  const [cartProducts, setCartProducts] = useState([]);

  // getting cart products from firestore collection and updating the state
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart " + user.uid).onSnapshot((snapshot) => {
          const newCartProduct = snapshot.docs.map((doc) => ({
            ID: doc.id,
            ...doc.data(),
          }));
          setCartProducts(newCartProduct);
        });
      } else {
        console.log("user is not signed in to retrieve cart");
      }
    });
  }, []);

  // console.log(cartProducts);

  // getting the qty from cartProducts in a seperate array
  const qty = cartProducts.map((cartProduct) => {
    return cartProduct.qty;
  });

  // reducing the qty in a single value
  const reducerOfQty = (accumulator, currentValue) =>
    accumulator + currentValue;

  const totalQty = qty.reduce(reducerOfQty, 0);

  // console.log(totalQty);

  // getting the TotalProductPrice from cartProducts in a seperate array
  const price = cartProducts.map((cartProduct) => {
    return cartProduct.TotalProductPrice;
  });

  // reducing the price in a single value
  const reducerOfPrice = (accumulator, currentValue) =>
    accumulator + currentValue;

  const totalPrice = price.reduce(reducerOfPrice, 0);

  // global variable
  let Product;

  // cart product increase function
  const cartProductIncrease = (cartProduct) => {
    // console.log(cartProduct);
    Product = cartProduct;
    Product.qty = Product.qty + 1;
    Product.TotalProductPrice = Product.qty * Product.price;

    // updating in database
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart " + user.uid)
          .doc(cartProduct.ID)
          .update(Product)
          .then(() => {
            console.log("increment added");
          });
      } else {
        console.log("user is not logged in to increment");
      }
    });
  };

  // cart product decrease functionality
  const cartProductDecrease = (cartProduct) => {
    Product = cartProduct;
    if (Product.qty > 1) {
      Product.qty = Product.qty - 1;
      Product.TotalProductPrice = Product.qty * Product.price;
      // updating in database
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("Cart " + user.uid)
            .doc(cartProduct.ID)
            .update(Product)
            .then(() => {
              console.log("decrement");
            });
        } else {
          console.log("user is not logged in to decrement");
        }
      });
    }
  };

  // state of totalProducts
  const [totalProducts, setTotalProducts] = useState(0);

  // getting cart products
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart " + user.uid).onSnapshot((snapshot) => {
          const qty = snapshot.docs.length;
          setTotalProducts(qty);
        });
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} totalProducts={totalProducts} />
      <br />

      {cartProducts.length > 0 && (
        <div className="container-fluid">
          <h1 className="text-center">Cart</h1>
          <div className="products-box">
            <CartProducts
              cartProducts={cartProducts}
              cartProductIncrease={cartProductIncrease}
              cartProductDecrease={cartProductDecrease}
            />
          </div>

          <div className="summary-box">
            <h5>Cart Summary</h5>
            <br />
            <div>
              Total No of Products: <span>{totalQty}</span>
            </div>
            <div>
              Total Price to Pay: <span>$ {totalPrice}</span>
            </div>
            <br />
            <StripeCheckout
              stripeKey="pk_test_51LOUceLKe9UpdMvOJTZYtfeTR9YTXUfvnvFISflFCehezSy6pSJoUOR2y5vhWPg5ieD6WbiydJro6oAAMl31Rv1100yPKIrP0h"
              //token={handleToken}
              billingAddress
              shippingAddress
              name="All Products"
              amount={totalPrice * 100}
            ></StripeCheckout>
            <h6 className="text-center" style={{ marginTop: 7 + "px" }}>
              OR
            </h6>
            <button
              className="btn btn-secondary btn-md"
              //onClick={() => triggerModal()}
            >
              Cash on Delivery
            </button>
          </div>
        </div>
      )}

      {cartProducts.length < 1 && (
        <div className="container-fluid">No products to show</div>
      )}
    </>
  );
}

export default Cart;
