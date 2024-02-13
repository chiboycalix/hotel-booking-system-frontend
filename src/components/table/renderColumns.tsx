import ListCol from "./listCol";

interface IRenderColumns {
  columns: React.ReactNode[];
  hasAction: boolean;
  actions?:React.ReactNode[];
}
const RenderColumns = ({ columns, hasAction }: IRenderColumns) => {
  return (
    <>
      {columns?.map((cell: React.ReactNode, index: number) => {
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

export default RenderColumns;
