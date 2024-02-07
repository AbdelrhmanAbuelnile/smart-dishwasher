import { data1, overallResult1, percentage1 } from "../data/char1Data";
import { data2, overallResult2, percentage2 } from "../data/char2Data";
import { data3, overallResult3, percentage3 } from "../data/char3Data";
import SalesChartComp from "../components/reports/SalesChartComp";
import TotalChart from "../components/reports/TotalChart";
import ProfitChartComp from "../components/reports/ProfitChartComp";

function Reports() {

	const soldFor = [
		{ name: 'Cafes', value: 400 },
		{ name: 'Restaurants', value: 350 },
		{ name: 'Bakers', value: 180 },
		{ name: 'Homes', value: 900 },
	]

	const soldPart = [
		{ name: 'Cups', value: 400 },
		{ name: 'Dishes', value: 300 },
		{ name: 'Pots', value: 300 },
	];


  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">

			<div className="w-full flex flex-col  justify-center items-start gap-4">
				<div className="w-full flex flex-col lg:flex-row justify-center items-start gap-4">
					<ProfitChartComp text={"sold for"} data={soldFor}/>
					<ProfitChartComp text={"sold partitions"} data={soldPart}/>
				</div>
				<div className="w-full flex flex-col justify-center items-start gap-4">
					<SalesChartComp />
				</div>
				
			<div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
				<TotalChart data={data1} overallResult={overallResult1} percentage={percentage1} text={"active users"} />

				<TotalChart data={data2} overallResult={overallResult2} percentage={percentage2} text={"total orders"} />

				<TotalChart data={data3} overallResult={overallResult3} percentage={percentage3} text={"total profits"} />
			</div>
			</div>

		</div>
  )
}

export default Reports