import React from "react";
import CheckBox from "./checkBox";

export interface IListRow {
  children: React.ReactNode;
  hasCheckBox: boolean;
  onRowClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  value: number;
  clickable: boolean;
}
const ListRow = ({ children, hasCheckBox, onRowClick, isChecked, value, clickable }: IListRow) => {

  return (
    <div className='table-row cursor-pointer'>
      {hasCheckBox ?
        <div className='mt-6'>
          <CheckBox onRowClick={(e: React.ChangeEvent<HTMLInputElement>) => onRowClick(e)} isChecked={isChecked} value={value} />
        </div>
        : null
      }
      {children}
    </div>

  );
};

export default ListRow;