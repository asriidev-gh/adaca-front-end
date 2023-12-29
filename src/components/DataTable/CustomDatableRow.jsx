import React from "react";
import CustomDataTableCell from "./CustomDataTableCell";

const CustomDataTableRow = ({ rowData }) => {
  return (
    <tr>
      {rowData.map((data, index) => (
        <CustomDataTableCell key={index} data={data} />
      ))}
    </tr>
  );
};

export default CustomDataTableRow;
