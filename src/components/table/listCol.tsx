interface IListCol {
  children: React.ReactNode;
}
const ListCol = ({ children, ...props }: IListCol) => {
  return (
    <div {...props} className='table-cell align-middle py-4 border-b-2 border-content-bg text-sm'>
      {children}
    </div>
  );
};

export default ListCol