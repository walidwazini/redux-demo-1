import { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import ValueButton from './components/Cart/ValueButton';
import Header from "./components/Header";
import Notification from './components/shared/Notification';
import ProductList from "./components/Shop/ProductList";
import { uiActions } from './store/ui-slice';

const collection = 'cart'
const FIREBASE_URL =
  `https://react-http-7483e-default-rtdb.asia-southeast1.firebasedatabase.app/${collection}.json`

let isInitial = true

function App() {
  const [name, setName] = useState('')
  // const uiName = useSelector(state => state.ui.text)
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  const showCart = useSelector(state => {
    return state.ui.cartIsVisible
  })

  const dismissHandler = () => {
    dispatch(uiActions.dismissNotification())
  }

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
    setTimeout(() => {
      // After 3 seconds set the show value to false
      dispatch(uiActions.dismissNotification())
    }, 5000)

  }, [dispatch, cart])

  const submitHandler = (ev) => {
    ev.preventDefault()
    console.log(name)
    // console.log(uiName)

    dispatch(uiActions.addText(name))
  }

  return (
    <Fragment>
      <div className='text-white text-center' >
      </div>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
        onDismiss={dismissHandler}
      />}
      {/* <Notification /> */}
      <Header />
      <main className="flex flex-col justify-center items-center pt-14" >
        {/* <p>{uiName}</p>
        <form onSubmit={submitHandler} >
          <input value={name} onChange={ev => setName(ev.target.value)} />
          <button type='submit' className='w-16 bg-blue-400' >Hello</button>
        </form> */}
        {showCart && <Cart />}
        <ProductList />
      </main>
    </Fragment>
  );
}

export default App;
