import { useLocation } from 'react-router-dom';
import customers from '../data/customers.json';

function CustomerPage() {
  const location = useLocation();
  let customerId = location.pathname.split('/').pop();
  let customer = customers.find((customer) => customer.id === parseInt(customerId));

  if (!customer) {
    return <div>Customer not found</div>;
  }

  return (
    <div className="text-primary mt-40">
      <h1 className="text-2xl font-semibold mb-4 border-b border-secondary">{customer.customerName}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
          <p>Email: <span className='text-secondary'>{customer.customerEmail}</span></p>
          <p>Phone Number: <span className='text-secondary'>{customer.phoneNumber}</span></p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Order Information</h2>
          <p>Fridge Model: <span className='text-secondary'>{customer.fridge_model}</span></p>
          <p>Location: <span className='text-secondary'>{customer.location}</span></p>
          <p>Number of Items: <span className='text-secondary'>{customer.number_of_items}</span></p>
          <p>Total: <span className='text-secondary'>${customer.total}</span></p>
          <p>Date: <span className='text-secondary'>{customer.date}</span></p>
        </div>
      </div>
    </div>
  );
}

export default CustomerPage;
