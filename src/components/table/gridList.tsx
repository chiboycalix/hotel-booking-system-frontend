import React from 'react';

interface IGridList {
  children: React.ReactNode;
}
const GridList = ({ children }: IGridList) => {
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