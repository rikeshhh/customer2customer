import React from "react";
import { SnackbarProvider as NotistackContainer } from "notistack";

// Component to customize the Notistack container with autoHideDuration
const CustomNotistackContainer = () => {
  return <NotistackContainer autoHideDuration={5000} />;
};

export default CustomNotistackContainer;
