import React from 'react';

const ListHeader = ({ children = '' }) => {
  return (
    <div className='table-cell py-4 border-b-4 border-content-bg'>
      {children}
    </div>
  );
};

export default ListHeader
