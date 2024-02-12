import React from 'react';

const GridList = ({ children }: any) => {
  const [gridTemplate, setGridTemplate] = React.useState('');
  const elem = Array.isArray(children) ? children : [children];

  return (
    <div className='table border-collapse w-full'>
      {elem?.map((child) =>
        React.cloneElement(child, {
          ...child.props,
          gridTemplate,
          setGridTemplate
        })
      )}
    </div>
  );
};

export default GridList