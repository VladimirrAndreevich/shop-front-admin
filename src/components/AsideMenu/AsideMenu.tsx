import { getStoreInstance } from "@/store/userStore";
import {
  ListItemText,
  MenuItem,
  MenuItemProps,
  MenuList,
  styled,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useState } from "react";

const AsideMenu: React.FC = () => {
  const [activeElement, setActiveElement] = useState(0);
  const userStore = getStoreInstance();
  const router = useRouter();

  return (
    <aside>
      <MenuList>
        {[
          { title: "Products" },
          { title: "Users" },
          {
            title: "Logout",
            clickHandling: () => {
              userStore.logout();
              router.push("/login");
            },
          },
        ].map((item, index) => (
          <MenuItemStyled
            key={index}
            isActive={activeElement === index}
            onClick={() => {
              setActiveElement(index);
              if (item.clickHandling) {
                item.clickHandling();
              }
            }}
          >
            <ListItemText inset>{item.title}</ListItemText>
          </MenuItemStyled>
        ))}
        {/* <MenuItemStyled
          isActive={activeElement === 0}
          onClick={() => setActiveElement(0)}
        >
          <ListItemText inset>Products</ListItemText>
        </MenuItemStyled>
        <MenuItemStyled
          isActive={activeElement === 1}
          onClick={() => setActiveElement(1)}
        >
          <ListItemText inset>Users</ListItemText>
        </MenuItemStyled>
        <MenuItemStyled
          isActive={activeElement === 2}
          onClick={() => setActiveElement(2)}
        >
          <ListItemText inset>Logout</ListItemText>
        </MenuItemStyled> */}
      </MenuList>
    </aside>
  );
};

interface StyledMenuItemProps extends MenuItemProps {
  isActive?: boolean;
}

const MenuItemStyled = styled(MenuItem)<StyledMenuItemProps>(
  ({ isActive }) => ({
    paddingTop: 15,
    paddingBottom: 15,
    borderRight: "1px solid black",

    "&:hover": {
      backgroundColor: isActive ? "black" : "#d1d1d1",
    },

    transitionProperty: "color, background-color",
    transitionDuration: "0.4s",
    transitionTimingFunction: "ease",

    ...(isActive && {
      backgroundColor: "black",
      color: "white",
    }),
  })
);

export default observer(AsideMenu);
