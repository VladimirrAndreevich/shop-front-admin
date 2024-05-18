import MainContainer from "@/components/MainContainer/MainContainer";
import { getStoreInstance } from "@/store/userStore";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useEffect } from "react";

type AuthGuardProps = {
  children: React.ReactNode;
};

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const userStore = getStoreInstance();
  const router = useRouter();

  useEffect(() => {
    if (!userStore.isLogged && !userStore.isTryingLogin) {
      router.push("/");
    }
  }, [router]);

  if (!userStore.isLogged && userStore.isTryingLogin) {
    return (
      <MainContainer sx={{ py: 40, minHeight: "calc(100vh - 187px)" }}>
        <Stack alignItems="center">
          <Typography fontSize={30}>Checking auth...</Typography>
          <CircularProgress sx={{ mt: 3, color: "black" }} />
        </Stack>
      </MainContainer>
    );
  }

  if (userStore.isLogged) {
    return children;
  } else {
    return <></>;
  }
};

export default observer(AuthGuard);
