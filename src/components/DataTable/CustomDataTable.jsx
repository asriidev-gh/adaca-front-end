import React from "react";
import CustomDataTableRow from "./CustomDatableRow";

const CustomDataTable = ({ tableData }) => {
  return (
    <table>
      <tbody>
        {tableData.map((rowData, index) => (
          <CustomDataTableRow key={index} rowData={rowData} />
        ))}
      </tbody>
    </table>
  );
};

export default CustomDataTable;
