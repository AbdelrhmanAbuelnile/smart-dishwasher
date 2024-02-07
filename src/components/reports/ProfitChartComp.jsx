import React from 'react'
import ProfitChart from './ProfitChart'

function ProfitChartComp({text,data}) {
  return (
    <div className="w-full bg-LightGray rounded-[20px] p-1.5 md:py-2 lg:py-8  lg:pl-6 text-center flex flex-col justify-center items-start gap-4 h-[250px] lg:h-[300px]">
				<h2 className="text-xl font-bold text-primary capitalize">{text}</h2>
				<div className="w-full h-full">
        <ProfitChart data={data}/>
				</div>
			</div>
  )
}

export default ProfitChartComp