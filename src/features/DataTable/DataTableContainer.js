import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRow } from './DataTableSlice'; // Import actions from slice
import CustomDataTable from '../../components/DataTable/CustomDataTable';

const DataTableContainer = () => {
  const tableData = useSelector((state) => state.dataTable.data);
  const dispatch = useDispatch();

  const handleAddRow = () => {
    const newRow = ['New', 'Row', 0];
    dispatch(addRow(newRow));
  };

  return (
    <div>
      <CustomDataTable tableData={tableData} />
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default DataTableContainer;