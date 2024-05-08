import ChoiceItem from "@/components/ChoiceItem/ChoiceItem";
import { MainWrapper } from "../styled";
import { MenuList } from "./styled";

const ProductsPage: React.FC = () => {
  return (
    <MainWrapper>
      <MenuList>
        <ChoiceItem
          chevronPath="icons/plus.svg"
          chevronAlt="plus"
          linkTo="/products/add"
        >
          Add new product
        </ChoiceItem>
        <ChoiceItem
          chevronPath="icons/update.svg"
          chevronAlt="update"
          linkTo="/products/update"
        >
          Update a product
        </ChoiceItem>
        <ChoiceItem
          chevronPath="icons/minus.svg"
          chevronAlt="minus"
          linkTo="/products/remove"
        >
          Remove a product
        </ChoiceItem>
      </MenuList>
    </MainWrapper>
  );
};

export default ProductsPage;
