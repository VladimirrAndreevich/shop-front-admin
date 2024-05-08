import ChoiceItem from "@/components/ChoiceItem/ChoiceItem";
import { MainWrapper } from "../styled";
import { List } from "./styled";
import ControlItem from "@/components/ControlItem/ControlItem";

const dummyProducts = [
  {
    title: "Product 1",
  },
  {
    title: "Product 2",
  },
  {
    title: "Product 3",
  },
  {
    title: "Product 4",
  },
];

const ProductsPage: React.FC = () => {
  return (
    <MainWrapper>
      <List>
        {dummyProducts.map((item) => (
          <ControlItem itemData={item} />
        ))}
      </List>
    </MainWrapper>
  );
};

export default ProductsPage;
