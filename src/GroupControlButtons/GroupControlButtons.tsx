import ControlButton from "@/components/ControlButton/ControlButton";
import { Buttons } from "./styled";

const GroupControlButtons: React.FC = () => {
  return (
    <Buttons>
      <ControlButton type="edit" />
      <ControlButton type="delete" />
    </Buttons>
  );
};

export default GroupControlButtons;
