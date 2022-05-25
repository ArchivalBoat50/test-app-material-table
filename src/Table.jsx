import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import Select from 'react-select';
import MultipleSelectChip from './MultipleSelectChip';

function Table(props) {
    // This is what the row data looks like
    const allData = [
        { name: 'Mehmet', company: 'Apple', birthYear: 1987, birthCity: 63 },
        { name: 'John', company: 'Apple', birthYear: 1987, birthCity: 63 },
        { name: 'Usylles', company: 'Vanilla', birthYear: 1987, birthCity: 63 },
        { name: 'Severin', company: 'Banana', birthYear: 1987, birthCity: 63 },
        { name: 'Leonard', company: 'Apple', birthYear: 1987, birthCity: 63 },
        { name: 'Pilldas', company: 'Vanilla', birthYear: 1987, birthCity: 63 },
        { name: 'Bilbo', company: 'Banana', birthYear: 1987, birthCity: 63 },
      ];
    
    const companyList = allData.map(value => value.company);
    console.log(companyList);

    const [rowData, setRowData] = useState(allData);
    const [filterData, setFilterData] = useState([]);

    // Method for adding new data to filterData
    const addFilterData = (arr) => {
      // const newArr = filterData.slice();
      // const newArr = [];
      // newArr.push(arr);
      // setFilterData(newArr);
      setFilterData(arr);
      
    }

    // Perhaps a set can be used instead of an array to filter
    function filterRowData(arr, companies) {
        return arr.filter((e) => companies.includes(e["company"]));
      }
    
    // Update the row data whenever we get new filterData
    useEffect(() => {
      setRowData(filterRowData(allData, filterData));
    }, [filterData])

    console.log(filterData);
    // console.log([['Banana', 'Apple']]);
    // console.log(['Banana', 'Apple']); 
    return (
        <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'Name', field: 'name' },
            { title: <MultipleSelectChip addFilterData={addFilterData}/>, field: 'company' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            { title: 'City', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
          ]}
          data={rowData}
          title="Demo Title"
        />
        <button onClick={() => setRowData(filterRowData(allData, filterData))}>Click me</button>
        {/* <button onClick={() => addFilterData(1)}>Test</button> */}
      </div>
    )
}

export default Table;