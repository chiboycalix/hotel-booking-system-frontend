import React from 'react';

interface IListBody {
  children: React.ReactNode;
  gridTemplate?: React.ReactNode
}
const ListBody = ({ children, gridTemplate }: IListBody) => {
  const elem = Array.isArray(children) ? children : [children];

  return (
    <div className='table-row-group overflow-hidden'>
      {elem?.map((child) =>
        React.cloneElement(child, {
          ...child.props,
          gridTemplate,
        })
      )}
    </div>
  );
};

export default ListBody;
