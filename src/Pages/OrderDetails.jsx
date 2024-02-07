import { useLocation } from 'react-router-dom';
import orders from '../data/orders.json';
import OrderState from '../components/OrderState';

function OrderDetails() {
  const location = useLocation();
  let orderID = location.pathname.split('/').pop();
  let order = orders.find((order) => order.id === parseInt(orderID));

  return (
    <div className="text-primary mt-40">
    <h1 className="text-2xl font-semibold mb-4 border-b border-secondary">{order.customerName}</h1>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
        <p>Email: <span className='text-secondary'>{order.customerEmail}</span></p>
        <p>Phone Number: <span className='text-secondary'>{order.phoneNumber}</span></p>
      </div>
      <div className='flex flex-col justify-center items-start gap-2'>
        <h2 className="text-lg font-semibold mb-2">Order Information</h2>
        <p>Fridge Model: <span className='text-secondary'>{order.fridge_model}</span></p>
        <p>Location: <span className='text-secondary'>{order.location}</span></p>
        <p>Number of Items: <span className='text-secondary'>{order.number_of_items}</span></p>
        <p>Total: <span className='text-secondary'>${order.total}</span></p>
        <p>Date: <span className='text-secondary'>{order.date}</span></p>
        <p>Order State: <OrderState state={order.order_state} /></p>
      </div>
    </div>
  </div>
  )
}

export default OrderDetails