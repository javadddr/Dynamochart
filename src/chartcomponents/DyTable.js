import React, { useState, useMemo,useEffect } from 'react';
import * as XLSX from 'xlsx';

import './DyTable.css';


const DyTable = ({ rows, columns, pagesSize,chartMaxWidth,showSearch,tableTemplate}) => {
  useEffect(() => {
    const postData = async () => {
      const url = window.location.href; // gets the current URL
      const data = {
        text: "table",
        url: url
      };

      const response = await fetch('https://api.globalpackagetracker.com/chart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-key': 'e959193e25ae483c367419abb8c10fbc9f9a1017025561b7ce421f441bf75c6cd7aa9b66f930885221e0a1ddb839e408d69ea2a19fbb488ab60878f953c55724'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        // handle the error
        console.error('Error:', response.statusText);
        return;
      }

      const responseData = await response.json();
      console.log('Success:', responseData);
    };

    postData();
  }, []);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [searchTerms, setSearchTerms] = useState([{ value: '', condition: 'OR' }]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(pagesSize); // Default page size
  const pageSizeOptions = [5, 10, 25, 50, 100, 'all'];

  const getSortIndicator = (columnName) => {
    if (!sortConfig || sortConfig.key !== columnName) {
      return ' ↕'; // Use &harr; in HTML
    }
    return sortConfig.direction === 'ascending' ? ' ↑' : ' ↓'; // Use &uarr; for '↑' and &darr; for '↓' in HTML
  };
  

  const sortedRows = useMemo(() => {
    return [...rows].sort((a, b) => {
      if (!sortConfig.key) return 0;
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });
  }, [rows, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleSearchChange = (index, value) => {
    const newSearchTerms = [...searchTerms];
    newSearchTerms[index].value = value;
    setSearchTerms(newSearchTerms);
  };

  const handleConditionChange = (index, condition) => {
    const newSearchTerms = [...searchTerms];
    newSearchTerms[index].condition = condition;
    setSearchTerms(newSearchTerms);
  };


  const filteredRows = useMemo(() => {
    return sortedRows.filter(row => {
      const rowString = Object.values(row).join(' ').toLowerCase();
      return searchTerms.reduce((acc, term, index) => {
        const match = term.value ? rowString.includes(term.value.toLowerCase()) : true;
        if (index === 0) return match;
        return term.condition === 'AND' ? acc && match : acc || match;
      }, false);
    });
  }, [sortedRows, searchTerms]);
  const resetSearch = () => {
    setSearchTerms([{ value: '', condition: 'OR' }]);
  };
  
  const totalPages = pageSize === 'all' ? 1 : Math.ceil(filteredRows.length / pageSize);
  const paginatedRows = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = pageSize === 'all' ? filteredRows.length : start + pageSize;
    return filteredRows.slice(start, end);
  }, [filteredRows, currentPage, pageSize]);
const changePage = (newPage) => {
  if (newPage >= 1 && newPage <= totalPages) {
    setCurrentPage(newPage);
  }
};
const exportToXLSX = () => {
  // Create a new workbook and add a new sheet to it
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(filteredRows);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
  // Trigger the download
  XLSX.writeFile(workbook, 'DyTable.xlsx');
};

return (
  <div className='maintablea' style={{maxWidth:chartMaxWidth}}>
   {showSearch && <div className="search-section">
      {searchTerms.map((term, index) => (
        <div key={index}>
          {index > 0 && (
            <select
              value={term.condition}
              onChange={(e) => handleConditionChange(index, e.target.value)}
            >
              <option value="AND">AND</option>
              <option value="OR">OR</option>
            </select>
          )}
          <input
            type="text"
            placeholder='Search'
            value={term.value}
            onChange={(e) => handleSearchChange(index, e.target.value)}
          />
        </div>
      ))}
    
        <button  onClick={() => setSearchTerms([...searchTerms, { value: '', condition: 'OR' }])} >+</button>

      <button onClick={resetSearch}>Reset</button>
      <button className="export-button" onClick={exportToXLSX}>Export to XLSX</button>
    </div>}
    <div className="dy-table-container">
    <table className="dy-table">
      <thead style={{backgroundColor: tableTemplate==="t1"?"#000000":tableTemplate==="t2"?"#1F1F1F":tableTemplate==="t3"?"#A7ACD9":"#000000",color: tableTemplate==="t1"?"#FFFFFF":tableTemplate==="t2"?"#D8DD2B":tableTemplate==="t3"?"#000000":"#FFFFFF"}}>
        <tr>
          {columns.map((column) => (
            <th
              key={column.field}
              style={{ width: column.width }}
              onClick={() => requestSort(column.field)}
              className={`sortable-header ${sortConfig.key === column.field ? sortConfig.direction : ''}`}
            >
              {column.headerName}
              <span className="sort-indicator">{getSortIndicator(column.field)}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {paginatedRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.field}>{row[column.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <div className="pagination">
    <div className="paginationchild">
      <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>&gt;</button>
      <select value={pageSize} onChange={(e) => setPageSize(e.target.value === 'all' ? 'all' : Number(e.target.value))}>
        {pageSizeOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      </div>
    </div>
  </div>
);

};

export default DyTable;
