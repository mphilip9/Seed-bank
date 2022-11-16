import React from 'react';
import Search from './Search';
import ByMonth from './ByMonth'
import { renderToString } from "react-dom/server";
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };
// const colstyle = {
//   width: "30%"
// };
// const tableStyle = {
//   width: "100%"
// };

const Home = ({searchZones, currentPlants, currentZone}) => {
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
  return (
    <div className="flex flex-col gap-3 ... ">
      <div className="self-center text-3xl">Current Climate Zone: {currentZone}</div>
      <Search searchZones={searchZones}/>
      {currentPlants.length > 0 ? <button onClick={() => print()}>Download PDF</button> : null}
      <div id="pdf">
      {currentPlants.length > 0 ? <ByMonth currentPlants={currentPlants} /> : null }
      </div>
    </div>
  )
}

// const print = () => {
//   const string = renderToString(<ByMonth />);
//   const pdf = new jsPDF("p", "mm", "a4");
//   const columns = [
//     "SOW Creation Date",
//     "SOW Start Date",
//     "Project",
//     "Last Updated",
//     "SOW End Date"
//   ];
//   var rows = [
//     [
//       "Dec 13, 2017",
//       "Jan 1, 2018",
//       "ABC Connect - ABCXYZ",
//       "Dec 13, 2017",
//       "Dec 31, 2018"
//     ]
//   ];
//   pdf.fromHTML(string);
//   pdf.save("pdf");
// };

export default Home;