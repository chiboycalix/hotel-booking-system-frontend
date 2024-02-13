import CheckBox from "./checkBox";
import ListHeader from "./listHeader";

const RenderListHeader = (headers: string[], hasAction: boolean, hasCheckBox: boolean) => {
  const listHeaders = headers?.map((header: string, idx: number) => <ListHeader key={idx}>{header}</ListHeader>);
  if (hasAction) {
    listHeaders.push(<ListHeader>Actions</ListHeader>);
  }
  if (hasCheckBox) {
    listHeaders.unshift(<CheckBox />)
  }
  return listHeaders;
};

export default RenderListHeader;