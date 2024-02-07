import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";
import CustomerPage from './Pages/CustomerPage.jsx';
import Customers from './Pages/Customers.jsx';
import Layout from './Pages/Layout.jsx';
import Orders from "./Pages/Orders.jsx";
import Reports from "./Pages/Reports.jsx";
import { useEffect,useState } from "react";
import OrderDetails from "./Pages/OrderDetails.jsx";


function App() {

  // const [isMobile, setIsMobile] = useState(false)

  // useEffect(()=>{
  //   if(window.innerWidth < 500){
  //     setIsMobile(true) 
  //   }
  // },[])


	return (
		<>
      {/* {
        isMobile ? <div className="w-screen h-screen flex flex-col justify-center items-center gap-10 bg-primary text-red-700 ">
          <p className="font-bold text-4xl">افتح من اللابتوب يا نجم</p>
          <p className="font-smibold text-xl">لسه شغال علي الفون والله</p>
        </div>
        : */}

			<Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Reports />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customer/:id" element={<CustomerPage />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/order/:id' element={<OrderDetails />} />
          </Route>
        </Routes>
      </Router>
      {/* } */}
		</>
	);
}

export default App;
