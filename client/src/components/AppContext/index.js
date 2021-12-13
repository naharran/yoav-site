import React, { createContext } from "react";
export const apiUrl = "https://yoav-site.herokuapp.com";
const appContextDefaultValue = {
  productsData: [],
  userType: "owner",
  isMobile: false,
  apiUrl,
};
export const AppContext = createContext(appContextDefaultValue);
