import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import { FormEvent, useState } from "react";
import LoadingBtn from "../LoadingBtn/LoadingBtn";
import { I_LoginRes } from "@/types";
import { useRouter } from "next/router";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // const userStore = getStoreInstance();

  const submitHandler = async () => {
    setIsSubmitting(true);
    if (email === "" || password === "") {
      setErrorMessage("Enter all inputs");
      setIsSubmitting(false);
      return;
    }

    const sendData = {
      loginOrEmail: email,
      password,
    };

    const response = await fetch(
      process.env.API_URL_BACKEND + "/admins/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      }
    );

    if (!response.ok) {
      // throw new Error(`HTTP error! status: ${response.status}`)
      console.error(`HTTP error! status: ${response.status}`);
      const formattedRes: I_LoginRes = await response.json();
      if (formattedRes.message) {
        setErrorMessage(formattedRes.message);
      } else {
        setErrorMessage(`Server error! ${response.status}`);
      }
    } else {
      const formattedRes: I_LoginRes = await response.json();
      if (formattedRes.data.accessToken) {
        localStorage.setItem("token", formattedRes.data.accessToken);
        // userStore.initToken(formattedRes.data.accessToken);
        router.push("/");
      }
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    switch (event.currentTarget.name) {
      case "email":
        setEmail(event.currentTarget.value);
        break;
      case "password":
        setPassword(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  return (
    <Stack
      direction="column"
      spacing={1.5}
      component="form"
      onSubmit={submitHandler}
    >
      <Box
        p={3}
        component="input"
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleInputChange}
        required
      />
      <Box
        p={3}
        component="input"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleInputChange}
        required
      />
      <LoadingBtn
        sx={{ py: 2, fontSize: 17 }}
        loading={isSubmitting}
        clickHandler={() => {
          submitHandler();
        }}
      >
        Login
      </LoadingBtn>
      <Typography
        color="red"
        textAlign="center"
        sx={{
          transition: "opacity 2s ease",
          opacity: errorMessage === "" ? 0 : 1,
        }}
      >
        {errorMessage} &nbsp;
      </Typography>
    </Stack>
  );
};

export default LoginForm;
