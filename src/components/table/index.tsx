import GridList from './gridList';
import ListHeading from './listHeading';
import ListRow from './listRow';
import ListBody from './listBody';
import RenderColumns from './renderColumns';
import RenderListHeader from './renderListHeader';

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
            </>
          );
        })}
      </ListBody>
    </GridList>
  );
};

export default Table;