import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";

function App() {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const cartItems = useSelector((state) => state.cart.itemLists);
  console.log(cartItems);

  useEffect(() => {
    const sendRequest = async () => {
      dispatch(uiActions.showNotification({
        open: 
      }))

      const res = await fetch(
        "https://redux-tut-461bf-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json()
    };
    sendRequest();
  }, [cart]);

  return (
    <div className="App">
      <Notification type='success' message={'This is dummy message'}/>
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
