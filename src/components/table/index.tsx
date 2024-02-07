import React from 'react';

const GridList = ({ children }: any) => {
  const [gridTemplate, setGridTemplate] = React.useState('');
  const elem = Array.isArray(children) ? children : [children];

  return (
    <div style={{ display: 'table', borderCollapse: 'collapse', width: ' 100%' }}>
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

const ListHeading = ({ children, setGridTemplate }: any) => {
  const elem = React.useMemo(() => Array.isArray(children) ? children : [children], []);
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

const ListHeader = ({ children = '' }) => {
  return (
    <div className='table-cell py-4 border-b-4 border-content-bg'>
      {children}
    </div>
  );
};

const ListBody = ({ children, gridTemplate }: any) => {
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

const ListCol = ({ children, ...props }: any) => {
  return (
    <div {...props} className='table-cell align-middle py-4 border-b-2 border-content-bg text-sm'>
      {children}
    </div>
  );
};

const CheckBox = () => {
  return <input type="checkbox" />
}

const RenderListHeader = (headers: any, hasAction: boolean, hasCheckBox: boolean) => {
  const listHeaders = headers?.map((header: any, idx: number) => <ListHeader key={idx}>{header}</ListHeader>);
  if (hasAction) {
    listHeaders.push(<ListHeader>Actions</ListHeader>);
  }
  if (hasCheckBox) {
    listHeaders.unshift(<CheckBox />)
  }
  return listHeaders;
};

const RenderColumns = ({ columns, hasAction }: any) => {
  return (
    <>
      {columns?.map((cell: any, index:number) => {
        return (
          <>
            <ListCol key={index}>{cell}</ListCol>
          </>
        );
      })}
      {hasAction && (
        <ListCol>
          more
        </ListCol>
      )}
    </>
  );
};

const Table = ({ headers, rows, hasAction, hasCheckBox, ...props }: any) => {
  return (
    <GridList>
      <ListHeading>{RenderListHeader(headers, hasAction, hasCheckBox)}</ListHeading>
      <ListBody {...props}>
        {rows?.map(({ columns, actions, onRowClick, isOpened, record }: any, idx: number) => {
          return (
            <>
              <ListRow isOpened={isOpened} key={idx} onClick={onRowClick} clickable={true} hasCheckBox={hasCheckBox}>
                <RenderColumns columns={columns} actions={actions} hasAction={hasAction} />
              </ListRow>
              {/* {isOpened && <CollapseContent record={record} actions={actions} />} */}
            </>
          );
        })}

        {/*  */}
      </ListBody>
    </GridList>
  );
};

export default Table;