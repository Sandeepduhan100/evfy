'use client'
import React, { useState } from 'react';

const TableComponent = () => {
  const [showMoreVisible, setShowMoreVisible] = useState(false);

  const toggleShowMoreVisibility = () => {
    setShowMoreVisible(!showMoreVisible);

    if(showMoreVisible){

    }
  };

  return (
    <div>
      <table className="border-collapse w-full">
        <thead className=''>
          <tr>
            <th colSpan={2} className="py-5 px-2 flex justify font-normal">
              Exterior
            </th>
            <th colSpan={2} className="py-5 px-9 justify-start font-normal">
              Interior
            </th>
            <th colSpan={2} className="py-5 justify-start  font-normal">
              BEV Performance
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-lg p-2 font-light">Body Style</td>
            <td className="text-lg p-2 font-light">Hatchback</td>
            <td className="text-lg p-2 font-light">Seating</td>
            <td className="text-lg p-2 font-light">5 adults </td>
            <td className="text-lg p-2 font-light">Horsepower </td>
            <td className="text-lg p-2 font-light">107 hp </td>
          </tr>
          <tr>
            <td className="text-lg p-2 font-light">Exterior Colour</td>
            <td className="text-lg p-2 font-light">Blue</td>
            <td className="text-lg p-2 font-light">Interior Colour</td>
            <td className="text-lg p-2 font-light">N/A </td>
            <td className="text-lg p-2 font-light">MPGe  </td>
            <td className="text-lg p-2 font-light">102 </td>
          </tr>
          <tr>
            <td className="text-lg p-2 font-light">Length</td>
            <td className="text-lg p-2 font-light">175"</td>
            <td className="text-lg p-2 font-light">Head Room Front</td>
            <td className="text-lg p-2 font-light">41" </td>
            <td className="text-lg p-2 font-light">Top Speed</td>
            <td className="text-lg p-2 font-light">90 </td>
          </tr>
          <tr>
            <td className="text-lg p-2 font-light">Wheelbase</td>
            <td className="text-lg p-2 font-light">106"</td>
            <td className="text-lg p-2 font-light">Head Room Rear</td>
            <td className="text-lg p-2 font-light">37" </td>
            <td className="text-lg p-2 font-light" colSpan={2}> </td>
            <td className="text-lg p-2 font-light" colSpan={2}> </td>
          </tr>
          <tr>
            <td className="text-lg p-2 font-light">Width</td>
            <td className="text-lg p-2 font-light">69.7"</td>
            <td className="text-lg p-2 font-light">Leg Room Front</td>
            <td className="text-lg p-2 font-light">42" </td>
            <td className="text-lg p-2 " colSpan={2}>Charging </td>
            <td className="text-lg p-2 font-light"></td>
          </tr>
          <tr>
            <td className="text-lg p-2 font-light">Full Width</td>
            <td className="text-lg p-2 font-light">N/A</td>
            <td className="text-lg p-2 font-light">Leg Room Rear</td>
            <td className="text-lg p-2 font-light">33" </td>
            <td className="text-lg p-2 font-light">Electric Range </td>
            <td className="text-lg p-2 font-light">73 Mi.</td>
          </tr>
          <tr>
            <td className="text-lg p-2 font-light">Clearance</td>
            <td className="text-lg p-2 font-light">6"</td>
            <td className="text-lg p-2 font-light">Shoulder Room Front</td>
            <td className="text-lg p-2 font-light">54" </td>
            <td className="text-lg p-2 font-light">Battery Size </td>
            <td className="text-lg p-2 font-light">24 kWh</td>
          </tr>
          <tr>
            <td className="text-lg p-2 font-light"></td>
            <td className="text-lg p-2 font-light"></td>
            <td className="text-lg p-2 font-light">
              <button
                onClick={toggleShowMoreVisibility}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Show More →
              </button>
              
            </td>
            <td className="text-lg p-2 font-light"> </td>
            <td className="text-lg p-2 font-light">Cost to Charge (Full) </td>
            <td className="text-lg p-2 font-light">$2.50</td>
              
          </tr>
            


          {showMoreVisible && (
            <tr>
              <td className="text-lg p-2 font-light"></td>
              <td className="text-lg p-2 font-light"></td>
              <td colSpan={4} className="text-lg p-2 font-light">
              <tr>
           
            <td className="text-lg font-light">Shoulder Room Front</td>
            <td className="text-lg px-14 p-2 font-light">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;54" </td>
            <td className="text-lg p-2 font-light"></td>
            <td className="text-lg p-2 font-light"></td>
            
          </tr>
              <tr>
          
            <td className="text-lg  font-light">Shoulder Room Front</td>
            <td className="text-lg px-14 p-2  font-light">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;54" </td>
            <td className="text-lg p-2 font-light"></td>
            <td className="text-lg p-2 font-light"></td>
            
          </tr>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
