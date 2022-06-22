import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import Select from 'react-select';
import MultipleSelectChip from './MultipleSelectChip';

function Table(props) {
    // This is what the row data looks like
    const allData = [
        { name: 'Mehmet', company: 'Apple', birthYear: 1987, birthCity: 'Istanbul' },
        { name: 'John', company: 'Apple', birthYear: 1987, birthCity: 'Toronto' },
        { name: 'Usylles', company: 'Vanilla', birthYear: 1987, birthCity: 'Toronto' },
        { name: 'Severin', company: 'Banana', birthYear: 1987, birthCity: 'Istanbul' },
        { name: 'Leonard', company: 'Apple', birthYear: 1987, birthCity: 'Toronto' },
        { name: 'Pilldas', company: 'Vanilla', birthYear: 1987, birthCity: 'Istanbul' },
        { name: 'Bilbo', company: 'Banana', birthYear: 1987, birthCity: 'Toronto' },
      ];
    
    const companyIds = {'Apple': 0, 'Banana': 1, 'Vanilla': 2};
    
    const companyList = allData.map(value => value.company);
    console.log(companyList);


    // for (var item in allData) {
    //   if (allData[item].company in companyIds) {
    //     allData[item].company = companyIds[allData[item].company];
    //   }
    // }

    console.log(allData);
    
    const [rowData, setRowData] = useState(allData);

    return (
        <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'Name', field: 'name', filtering: false },
            { title: <MultipleSelectChip />, field: 'company' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            { title: 'City', field: 'birthCity', lookup: { 'Istanbul': 'Istanbul', 'Toronto': 'Toronto' } }
          ]}
          data={rowData}
          title="Demo Title"
          options={{
            filtering: true
          }}
        />
      </div>
    )
}

export default Table;