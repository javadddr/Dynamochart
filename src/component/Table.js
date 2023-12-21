

import DyTable from "../chartcomponents/DyTable";
import "./StackVertica.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const Table = () => {
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {field: 'age',headerName: 'Age', type: 'number',width: 90},
   
  ];


  const codeString1 = `  import React from 'react'
  import {DyTable} from 'dynamochart';

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {field: 'age',headerName: 'Age', type: 'number',width: 90},
   
  ];
  
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
        <DyTable 
          rows={rows}
          columns={columns}
          pagesSize={10}
          chartMaxWidth={900}
          showSearch={false}
          tableTemplate="t1" 
          />
     <DyTable 
          rows={rows}
          columns={columns}
          pagesSize={10}
          chartMaxWidth={900}
          showSearch={true}
          tableTemplate="t2" 
        />


        </div>
        <div className="mainchartsBar2">
        <div class="props-container">
        <h2>Chart Code</h2>
          <div className="sampleCodebar">
         
            <SyntaxHighlighter language="javascript" >
              {codeString1}
            </SyntaxHighlighter>
          </div>
          </div>
        
          <div class="props-container">
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
                src="https://www.youtube.com/embed/8C9QLHS9FkM" 
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


