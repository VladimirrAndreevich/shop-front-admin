import Image from "next/image";
import { Item } from "./styled";
import GroupControlButtons from "@/GroupControlButtons/GroupControlButtons";

type ControlItemProps = {
  itemData: any;
};

const ControlItem: React.FC<ControlItemProps> = ({ itemData }) => {
  return (
    <Item>
      {itemData.title}
      <GroupControlButtons />
    </Item>
  );
};

export default ControlItem;
