

import {DyTable} from "dynamochart";
import "./Bar.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const Table = () => {
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"Marius"},tag:"sent" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"Tim"},tag:"transit"},
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"Rick"} ,tag:"sent"},
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"laura"} ,tag:""},
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"Flo"},tag:"sent" },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 ,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"Jim"},tag:"delivered"},
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"John"} ,tag:"transit"},
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 ,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"Side"},tag:"transit"},
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 ,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"Liliya"},tag:"excption"},
  ];

  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {field: 'age',headerName: 'Age', type: 'number',width: 90},
   
  ];
  const colors = {
    sent: '#c3f4ab',
    delivered: '#e3f781',
    transit: '#f0f8ff',
    excption: 'pink',
  };


  const codeString1 = `  import React from 'react'
  import {DyTable} from 'dynamochart';

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"Marius"},tag:"sent" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"Tim"},tag:"transit"},
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"Rick"} ,tag:"sent"},
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"laura"} ,tag:""},
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"Flo"},tag:"sent" },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 ,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"Jim"},tag:"delivered"},
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"John"} ,tag:"transit"},
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 ,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"Side"},tag:"transit"},
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 ,value:{Customers_Booked:20,Revenue_Geerated:4000,Manager:"Liliya"},tag:"excption"},
  ];

  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {field: 'age',headerName: 'Age', type: 'number',width: 90},
   
  ];
  const colors = {
    sent: '#c3f4ab',
    delivered: '#e3f781',
    transit: '#f0f8ff',
    excption: 'pink',
  };

  
    return (
      <div>
      <DyTable 
          rows={rows}
          columns={columns}
          pagesSize={10}
          chartMaxWidth={900}
          showSearch={true}
          tableTemplate="t1" 
          />
      </div>
    );
  };
  
  export default App;`;


  return (
    <div className="mainchartsBar">
        <div className="mainchartsBar1">
        <div className="mainchartsBarooo">
        <DyTable 
        rows={rows}
        colors={colors}
        columns={columns}
        pagesSize={10}
        chartMaxWidth={1700}
        showSearch={true}
        tableTemplate="t1" 
      />
       </div>
     <div className="mainchartsBarooo">
      
<DyTable 
        rows={rows}
        colors={colors}
        columns={columns}
        pagesSize={10}
        chartMaxWidth={1700}
        showSearch={true}
        tableTemplate="t2" 
      />
</div>


        </div>
        <div className="mainchartsBar2">
        <div className="props-container">
        <h2>Chart Code</h2>
          <div className="sampleCodebar">
         
            <SyntaxHighlighter language="javascript" >
              {codeString1}
            </SyntaxHighlighter>
          </div>
          </div>
        
          <div className="props-container">
          <h2>DyTable Component Properties</h2>
            <ul>
              <li><strong>rows:</strong> Array of data objects to be displayed as rows in the table.</li>
              <li><strong>columns:</strong> Array of objects defining the columns of the table, including header names and field mappings.</li>
              <li><strong>pagesSize:</strong> The number of rows to display per page in the table.</li>
              <li><strong>chartMaxWidth:</strong> The maximum width of the table in pixels.</li>
              <li><strong>showSearch:</strong> A boolean indicating whether to display a search input for filtering table rows.</li>
              <li><strong>tableTemplate:</strong> A string indicating the styling template to be applied to the table. For example, 't1' could be a specific design theme.</li>
            </ul>
          </div>



        </div>
        <div className="step">
      <div className='stepotitleget'>
    
      <div className='title1get'> <span>Tutorial on how to create a Table in the DynamoChart library </span></div>
  
      </div>
 

      <div className='codevideo2'>
          <div className='jusiframe1'>
        <iframe 
                width="850" 
                height="478" 
                src="https://www.youtube.com/embed/NQf95LlbXXs" 
                title="YouTube video player" 
              
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              </div>
             
          </div>
        </div>



    </div>
  );
};

export default Table;


