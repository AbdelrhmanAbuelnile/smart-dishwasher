import { useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: '2022', value: 400 },
];

const data02 = [
  { name: '2023', value: 60 },
];

function ProfitChart() {
  let [width, setWidth] = useState(400)
  let [height, setHeight] = useState(400)
  let innerRadius, outerRadius
  useEffect(()=>{
    
    if(window.innerWidth < 550){
      setWidth(200)
      setHeight(200)
    }
  },[])
  return (
    <div className="bg-secondaryback rounded-[20px] p-4 h-[435px] w-full text-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={width} height={height}>
          <Pie dataKey="value" startAngle={90} endAngle={403.2} data={data02} cx="50%" cy="53%" innerRadius={40} outerRadius={75} fill="#8D8D99" />
          <Pie dataKey="value" startAngle={90} endAngle={324} data={data01} cx="50%" cy="50%" innerRadius={40} outerRadius={80} fill="#C4DEFF" />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProfitChart