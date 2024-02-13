
interface IListHeader {
  children: React.ReactNode
}
const ListHeader = ({ children = '' }: IListHeader) => {
  return (
    <div className='table-cell py-4 border-b-4 border-content-bg'>
      {children}
    </div>
  );
};

export default ListHeader
