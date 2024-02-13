import React from 'react';

interface IListHeading {
  children: React.ReactNode;
  setGridTemplate?: (templateSize: string) => void;
}

const ListHeading = ({ children, setGridTemplate }: IListHeading) => {
  const elem = React.useMemo(() => Array.isArray(children) ? children : [children], [children]);
  const appendToItem = (str = '', list: any) => {
    if (!Array.isArray(list) || !list?.length) {
      return '';
    }
    return list.join(`${str} `) + str;
  };

  const templateSize = React.useMemo(() => {
    const sizes =
      elem?.map((child) => {
        return child?.props?.size || 1;
      }) || [];

    return appendToItem('fr', sizes);
  }, [elem]);

  React.useEffect(() => {
    setGridTemplate?.(templateSize);
  }, [templateSize, setGridTemplate]);

  return <div className='table-header-group'>{children}</div>;
};

export default ListHeading;
