import React, { createContext } from "react";
export const apiUrl = "https://yoav-store-backend.herokuapp.com/";
const appContextDefaultValue = {
  productsData: [],
  userType: "owner",
  isMobile: false,
  apiUrl,
};
export const AppContext = createContext(appContextDefaultValue);
