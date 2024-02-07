import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { PiPackageFill } from "react-icons/pi";
import { MdOutlineInsertChart } from "react-icons/md";
import { FaPeopleCarry } from "react-icons/fa";

function SideNav() {
	return (
		<>
			<div className="w-full max-w-[133px] h-full max-h-[500px] py-10 flex flex-col justify-center items-center gap-32 bg-nav z-20 rounded-[20px] fixed inset-0 top-2/4 left-6 -translate-y-[40%]">
      <NavLink
					to={"/"}
					className="
          rounded-xl p-1.5 md:p-3 text-base md:text-xl active:bg-primary
          font-semibold text-white hover:bg-primary
          hover:text-white duration-300 flex flex-col justify-center items-center gap-2
						"
				>
					<MdOutlineInsertChart />
          <span className="text-base font-medium">
            Reports
          </span>
				</NavLink>

				<NavLink
					to={"/customers"}
					className="
							rounded-xl p-1.5 md:p-3 text-base md:text-xl
							font-semibold text-white hover:bg-primary
							hover:text-white duration-300 flex flex-col justify-center items-center gap-2
						"
				>
					<FaPeopleCarry />
					<span className="text-base font-medium">Customers</span>
				</NavLink>

				<NavLink
					to={"/orders"}
					className="
          rounded-xl p-1.5 md:p-3 text-base md:text-xl
          font-semibold text-white hover:bg-primary
          hover:text-white duration-300 flex flex-col justify-center items-center gap-2
						"
				>
					<PiPackageFill />
          <span className="text-base font-medium">
            Orders
          </span>
				</NavLink>


			</div>
		</>
	);
}

export default SideNav;
