import GridList from './gridList';
import ListHeading from './listHeading';
import ListRow from './listRow';
import ListBody from './listBody';
import RenderColumns from './renderColumns';
import RenderListHeader from './renderListHeader';

interface IRow {
  value: number;
  isChecked: boolean;
  onRowClick: (e:React.ChangeEvent<HTMLInputElement>) => void;
  columns: React.ReactNode[];
  actions: React.ReactNode[];
}

interface ITable {
  headers: string[];
  rows: IRow[];
  hasAction:boolean;
  hasCheckBox:boolean;
}

const Table = ({ headers, rows, hasAction, hasCheckBox, ...props }: ITable) => {
  return (
    <GridList>
      <ListHeading>{RenderListHeader(headers, hasAction, hasCheckBox)}</ListHeading>
      <ListBody {...props}>
        {rows?.map(({ columns, actions, onRowClick, isChecked, value }: IRow, idx: number) => {
          return (
            <>
              <ListRow key={idx} clickable={true} hasCheckBox={hasCheckBox} onRowClick={onRowClick} isChecked={isChecked} value={value}>
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