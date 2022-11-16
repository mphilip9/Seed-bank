import * as React from 'react';



const ByMonth = ({currentPlants}) => {
  return (
    <div className="pt-10">
    <table className="min-w-full text-left border table-auto">
        <thead className="border-b bg-gray-800">
    <tr>
      <th scope="col" className="text-sm font-medium text-white px-6 py-4">Common Name</th>
      <th  scope="col" className="text-sm font-medium text-white px-6 py-4">Latin Name</th>
      <th  scope="col" className="text-sm font-medium text-white px-6 py-4">Transplant/Indoors</th>
      <th  scope="col" className="text-sm font-medium text-white px-6 py-4">Direct Sowing</th>
      <th  scope="col" className="text-sm font-medium text-white px-6 py-4">Time to Harvest</th>
      <th  scope="col" className="text-sm font-medium text-white px-6 py-4">Germination time</th>
      <th  scope="col" className="text-sm font-medium text-white px-6 py-4">More Info</th>
      </tr>
  </thead>
  <tbody>
  {currentPlants.map(row => {
    return(
    <tr key={row.plant_id}>
         <td>{row.plant_name}</td>
         <td>{row.latin_name}</td>
         <td >Add me</td>
         <td >Add me</td>
         <td>{row.time_to_harvest}</td>
         <td>{row.germination_time}</td>
         <td>More Info</td>
      </tr>
    )
      })}
  </tbody>
    </table>
    </div>
  );
}



export default ByMonth;