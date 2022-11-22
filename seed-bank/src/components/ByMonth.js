import React from 'react';



const ByMonth = ({currentPlants}) => {
  return (
    <div className="lg:pl-3 lg:pr-3 lg:pt-10 sm:pt-2 overflow-x-scroll rounded">
    <table className="table-auto overflow-x-scroll w-full text-center rounded-md">
        <thead className="border-b bg-forest dark:bg-black">
    <tr>
      <th scope="col" className="text-lg font-medium text-white  px-6 py-4">Common Name</th>
      <th  scope="col" className="text-lg font-medium text-white px-6 py-4">First Planting</th>
      <th  scope="col" className="text-lg font-medium text-white px-6 py-4">Second Planting</th>
      <th  scope="col" className="text-lg font-medium text-white px-6 py-4">Days to Maturity</th>
      <th  scope="col" className="text-lg font-medium text-white px-6 py-4">Annual/Perennial</th>
      <th  scope="col" className="text-lg font-medium text-white px-6 py-4">Need more info?</th>

      </tr>
  </thead>
  <tbody>
  {currentPlants.map((row, index) => {
    let alternate = ''
    index % 2 === 0 ? alternate = "bg-slate-200" : alternate = "bg-slate-300"
    return(
    <tr className={`${alternate} items-left text-black`} key={row.plant_id}>
         <td className="font-black pt-2 pb-2 ">{row.plant_name}</td>
         {row.first_planting_start ? <td className=" pt-2 pb-2">{row.first_planting_start} -- {row.first_planting_end}</td> : <td className="self-center pt-2 pb-2"></td>}
         {row.second_planting_start ? <td >{row.second_planting_start} -- {row.second_planting_end}</td> : <td></td>}
         <td className=" pt-2 pb-2">{row.time_to_harvest}</td>
         <td className=" pt-2 pb-2">{row.annual_perennial}</td>
         <td className=" underline pt-2 pb-2 "><a className="text-blue-800 hover:shadow-sm" href={`https://extension.psu.edu/catalogsearch/result/?q=${row.plant_name}`}>More Info</a></td>
      </tr>
    )
      })}
  </tbody>
    </table>
    </div>
  );
}



export default ByMonth;