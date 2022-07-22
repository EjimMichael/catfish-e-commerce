import React, { useEffect, useState } from "react";
import { auth, fs } from "../FirebaseConfig/Firebase";
import NavBar from "./NavBar";

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
  return (
    <>
      <NavBar user={user} totalProducts={totalProducts} />
    </>
  );
}

export default Cart;
