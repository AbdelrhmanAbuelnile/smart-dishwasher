import { Link } from "react-router-dom";
import customers from "../data/customers.json";
import { useState } from "react";

function Customers() {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredCustomers = customers.filter(
		(customer) =>
			customer.fridge_model.toLowerCase().includes(searchTerm.toLowerCase()) ||
			customer.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.id.toString().includes(searchTerm.toLowerCase()) ||
      customer.location.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return (
		<>
			<div className="">
				<div className="flex flex-col items-start relative">
					<input
						type="text"
						placeholder="Search by fridge model, customer name, customer id, or location"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full lg:w-4/12 p-2 mb-4 border border-secondary rounded-md focus:outline-none focus:border-primary bg-transparent text-secondary"
					/>
				</div>
				<div className="w-full rounded-md">
					<div className="flex flex-row font-semibold bg-secondary text-darkGray rounded-t-md">
						<div className="w-1/6 p-2 text-center">Customer ID</div>
						<div className="w-1/6 p-2 text-center">Customer Name</div>
						<div className="w-1/6 p-2 text-center">Product</div>
						<div className="w-1/6 p-2 text-center">Quantity</div>
						<div className="w-1/6 p-2 text-center">Total Price</div>
						<div className="w-1/6 p-2 text-center">Purchase Date</div>
						<div className="w-1/6 p-2 text-center">Purchase Location</div>
					</div>
					{filteredCustomers.map((customer) => (
						<Link
							to={`/customer/${customer.id}`}
							key={customer.id}
							className="flex flex-row border border-gray-400 items-center text-gray-400 hover:bg-gray-100 w-full hover:rounded-md duration-300 hover:text-secondaryback"
						>
							<div className="w-1/6 p-2 text-center">{customer.id}</div>
							<div className="w-1/6 p-2 text-center">{customer.customerName}</div>
							<div className="w-1/6 p-2 text-center">
								{customer.fridge_model}
							</div>
							<div className="w-1/6 p-2 text-center">
								{customer.number_of_items}
							</div>
							<div className="w-1/6 p-2 text-center">{customer.total}</div>
							<div className="w-1/6 p-2 text-center">{customer.date}</div>
							<div className="w-1/6 p-2 text-center">{customer.location}</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

export default Customers;
