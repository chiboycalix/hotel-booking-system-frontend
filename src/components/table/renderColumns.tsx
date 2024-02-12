import ListCol from "./listCol";

const RenderColumns = ({ columns, hasAction }: any) => {
  return (
    <>
      {columns?.map((cell: any, index: number) => {
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
