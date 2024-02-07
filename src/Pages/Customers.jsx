import { Link } from "react-router-dom";
import customers from "../data/customers.json";
import { useState } from "react";

function Customers() {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredCustomers = customers.filter(
		(customer) =>
			customer.partition.toLowerCase().includes(searchTerm.toLowerCase()) ||
			customer.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.id.toString().includes(searchTerm.toLowerCase()) ||
      customer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
			customer.customer_usage.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return (
		<>
			<div className="">
				<div className="flex flex-col items-start relative">
					<input
						type="text"
						placeholder="Search by customer name, partition, location, or ID..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full lg:w-4/12 p-2 mb-4 border border-secondary rounded-md focus:outline-none focus:border-primary bg-transparent text-secondary"
					/>
				</div>
				<div className="w-full rounded-md">
					<div className="flex flex-row font-semibold bg-third text-primary rounded-t-md capitalize">
						<div className="w-1/6 p-2 text-center">Customer ID</div>
						<div className="w-1/6 p-2 text-center">Customer Name</div>
						<div className="w-1/6 p-2 text-center">partition</div>
						<div className="w-1/6 p-2 text-center">sold for</div>
						<div className="w-1/6 p-2 text-center">Quantity</div>
						<div className="w-1/6 p-2 text-center">Total Price</div>
						<div className="w-1/6 p-2 text-center">Purchase Date</div>
						<div className="w-1/6 p-2 text-center">Purchase Location</div>
					</div>
					{filteredCustomers.map((customer) => (
						<Link
							to={`/customer/${customer.id}`}
							key={customer.id}
							className="flex flex-row border border-secondary items-center text-secondary hover:bg-third w-full hover:rounded-md duration-300 hover:text-secondaryback"
						>
							<div className="w-1/6 p-2 text-center">{customer.id}</div>
							<div className="w-1/6 p-2 text-center">{customer.customerName}</div>
							<div className="w-1/6 p-2 text-center">
								{customer.partition}
							</div>
							<div className="w-1/6 p-2 text-center">
								{customer.customer_usage}
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
