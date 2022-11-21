import React from 'react';
import Search from './Search';
import ByMonth from './ByMonth'
import ModalZone from './ModalZone'
import ModalCaution from './ModalCaution'
import { renderToString } from "react-dom/server";
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const Home = ({searchZones, currentPlants, currentZone, month, notFound}) => {
  const print = (currentPlants) => {
   const input = document.getElementById('pdf')
   html2canvas(input, {logging: true, letterRendering: 1, useCORS: true}).then(
    canvas => {
     const imgWidth = 208;
     const imgHeight = canvas.height * imgWidth / canvas.width;
     const imgData = canvas.toDataURL('img/png');
     const pdf = new jsPDF('p', 'mm', 'a4');
     pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
     pdf.save("seed-by-month.pdf")
    }
   )
  };
  const handleSelect = (e) => {
    searchZones(currentZone, e.target.value)
  }
  return (
    <div className="flex flex-col gap-3  ... ">

      <div className="flex flex-row self-center pt-2">
        <ModalZone zone={currentZone}/>
        <ModalCaution />
        </div>


      <div>

      <Search searchZones={searchZones} month={month}/>
        {notFound === true ? <div className="text-red-500 pl-2">Zipcode not found. Please try another nearby zipcode</div> : null}
      </div>


      <div className="flex flex-row justify-between ">
        <div className="flex flex-row pl-3">
            <select onChange={handleSelect} className="hover:cursor-pointer w-60 border-black md:p-2.5 text-black bg-white border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600 ">
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9}>October</option>
                <option selected value={10}>November</option>
                <option value={11}>December</option>
            </select>
            <div className="pl-2 pt-3">Choose a month to see what you can plant</div>
            </div>
            <div className="md:pr-3">{currentPlants.length > 0 ? <button className="align-self-end bg-forest hover:bg-blue-700 text-white font-bold md:py-2 md:px-4 rounded-full w-15" onClick={() => print()}>Download PDF</button> : null}</div>
        </div>
      <div id="pdf">
      {currentPlants.length > 0 ? <ByMonth currentPlants={currentPlants} /> : null }
      </div>
    </div>
  )
}

export default Home;