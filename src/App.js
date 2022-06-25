import { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Header from "./components/Header";
import Notification from './components/shared/Notification';
import ProductList from "./components/Shop/ProductList";
import { uiActions } from './store/ui-slice';

const collection = 'cart'
const FIREBASE_URL =
  `https://react-http-7483e-default-rtdb.asia-southeast1.firebasedatabase.app/${collection}.json`

let isInitial = true

function App() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  const showCart = useSelector(state => {
    return state.ui.cartIsVisible
  })

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending..',
        message: 'Sending cart data.'
      }))
      const response = await fetch(FIREBASE_URL, {
        method: 'PUT',
        body: JSON.stringify(cart),
      })
      if (!response.ok) {
        throw new Error('Failed.')
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Sent cart data succesfully!'
      }))
    }

    if (isInitial) {
      isInitial = false
      return
    }

    sendCartData().catch(err => (
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Data failed to send!'
      }))
    ))
  }, [dispatch, cart])

  const dismissHandler = () => {
    console.log('Dismiss')
    dispatch(uiActions.dismissNotification())
  }

  return (
    <Fragment>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
        onDismiss={dismissHandler}
      />}
      {/* <Notification /> */}
      <Header />
      <main className="flex flex-col justify-center items-center pt-14" >
        {showCart && <Cart />}
        <ProductList />
      </main>
    </Fragment>
  );
}

export default App;
