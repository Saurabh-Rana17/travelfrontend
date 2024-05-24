import React from "react";
import { createContext, useReducer } from "react";

export const userContext = createContext({
  userState: {},
  setUserState: () => {},
});
function userReducer(state, action) {
  const { type } = action;

  switch (type) {
    case "setUserState":
      const user = action.payload;
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      } else {
        localStorage.removeItem("user");
        return user;
      }

    default:
      return state;
  }
}

export default function UserProvider({ children }) {
  const [userState, dispatch] = useReducer(
    userReducer,
    JSON.parse(localStorage.getItem("user"))
  );

  function setUserState(user) {
    console.log("reached st us stte");
    dispatch({
      type: "setUserState",
      payload: user,
    });
  }

  const value = { userState, setUserState };
  console.log(userState);
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
