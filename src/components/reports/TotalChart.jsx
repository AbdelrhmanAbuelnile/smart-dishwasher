import AreaChar from "./AreaChar";

function TotalChart({ data, overallResult, percentage, text }) {
  return (
    <div className="w-full bg-LightGray rounded-[20px] py-3 pl-6 text-center flex flex-col justify-center items-start gap-4 h-[250px] lg:h-[300px]">
				<h2 className="text-xl font-bold text-primary capitalize">{text}</h2>
				<div className="w-full h-full">
					<AreaChar
						data={data}
						className="w-full"
						fill={overallResult ? "#15cab85e" : "#FB3B3A44"}
						stroke={overallResult ? "#15CAB8" : "#f10000"}
					/>
				</div>
			</div>
  )
}

export default TotalChart