import React, { useState } from 'react';
import Papa from 'papaparse'
const YourComponent = () => {
   const [data, setData] = useState([]);

   const handleCSVFile = (file) => {
      Papa.parse(file, {
         header: true,
         skipEmptyLines: true,
         complete: (result) => {
            console.log(result, 'res1')
            const first1000Records = result.data.slice(0, 1000);
            setData(first1000Records);
         },
         error: (error) => {
            console.error('CSV Parsing Error:', error.message);
         },
      });
   };
   console.log(data)
   return (
      <div>
         <input
            type="file"
            accept=".csv"
            onChange={(e) => {
               const file = e.target.files[0];
               if (file) {
                  handleCSVFile(file);
               }
            }}
         />
         {/* Display or process the first 1000 records stored in the 'data' state */}
      </div>
   );
};

export default YourComponent;
