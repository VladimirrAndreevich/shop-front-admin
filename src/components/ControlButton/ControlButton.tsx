import Image from "next/image";
import { Button } from "./styled";

type ControlButtonProps = {
  type: "delete" | "edit";
};

const ControlButton: React.FC<ControlButtonProps> = ({ type }) => {
  return (
    <Button>
      <Image
        src={`/icons/${type}.svg`}
        width={20}
        height={20}
        alt={`The icon of ${type}`}
      />
    </Button>
  );
};

export default ControlButton;
