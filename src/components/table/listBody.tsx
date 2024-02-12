import React from 'react';

const ListBody = ({ children, gridTemplate }: any) => {
  const elem = Array.isArray(children) ? children : [children];

  return (
    <div className='table-row-group overflow-hidden'>
      {elem?.map((child, idx) =>
        React.cloneElement(child, {
          ...child.props,
          gridTemplate,
        })
      )}
    </div>
  );
};

export default ListBody;
