import React from "react";
import { ChevronImage, Item, ItemLink } from "./styled";
import Link from "next/link";

type ChoiceItemProps = {
  chevronPath?: string;
  chevronAlt?: string;
  linkTo: string;
  children: string | React.ReactNode;
};

const ChoiceItem: React.FC<ChoiceItemProps> = ({
  chevronPath,
  chevronAlt,
  linkTo,
  children,
}) => {
  return (
    <Item>
      <ItemLink href={linkTo}>
        {chevronPath && (
          <ChevronImage
            src={chevronPath}
            width={13}
            height={13}
            alt={`The icon of ${chevronAlt}`}
          />
        )}
        {children}
      </ItemLink>
    </Item>
  );
};

export default ChoiceItem;
