import { getStoreInstance } from "@/store/userStore";
import {
  ListItemText,
  MenuItem,
  MenuItemProps,
  MenuList,
  styled,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AsideMenu: React.FC = () => {
  const router = useRouter();
  const [activeElement, setActiveElement] = useState<number | undefined>(
    undefined
  );
  const userStore = getStoreInstance();

  const menuList = [
    { title: "Products", href: "/products" },
    { title: "Users", href: "/users" },
    {
      title: "Logout",
      clickHandling: () => {
        userStore.logout();
        router.push("/");
      },
    },
  ];

  useEffect(() => {
    const currentHref = router.asPath;
    const index = menuList.findIndex((item) => item.href === currentHref);

    if (index !== -1) {
      setActiveElement(index);
    }
  }, []);

  return (
    <aside>
      <MenuList>
        {menuList.map((item, index) => {
          const menuItem = (
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
          );

          return item?.href ? (
            <Link href={item.href}>{menuItem}</Link>
          ) : (
            menuItem
          );
        })}
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
