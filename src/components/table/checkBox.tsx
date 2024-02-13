const CheckBox = ({ onRowClick, isChecked, value }:any) => {
  return <input type="checkbox" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onRowClick(e)} checked={isChecked} value={value}/>
}

export default CheckBox;