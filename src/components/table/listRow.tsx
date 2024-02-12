import CheckBox from "./checkBox";

const ListRow = ({ children, onClick, isOpened, hasCheckBox }: any) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div
      className='table-row cursor-pointer'
      onClick={handleClick}
    >
      {hasCheckBox ? <div className='mt-6'><CheckBox /> </div> : null}
      {children}
    </div>

  );
};

export default ListRow;