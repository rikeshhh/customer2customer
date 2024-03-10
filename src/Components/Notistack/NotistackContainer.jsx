import React from "react";
import { SnackbarProvider as NotistackContainer } from "notistack";

const CustomNotistackContainer = () => {
  return <NotistackContainer autoHideDuration={5000} />;
};

export default NotistackContainer;
