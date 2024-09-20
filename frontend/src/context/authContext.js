import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [getToken, setGetToken] = useState(localStorage.getItem("authToken"));
    const [authData,setAuthData] = useState([])
  const storeTokenLs = (token) => {
    localStorage.setItem("authToken", token);
  };

  const logoutUser = () => {
    localStorage.removeItem("authToken");
    setGetToken(null);
  };

  useEffect(() => {
    const userData = async () => {
      console.log("from get token", getToken);

     await axios
        .get("http://localhost:2024/api/auth/get-user", {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        })

        .then((response) => {
          if (response?.data) {
            console.log("get data ", response?.data?.userData);
            setAuthData(response?.data?.userData)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    userData();
  }, []);
  return (
    <AuthContext.Provider
      value={{ storeTokenLs, setGetToken, logoutUser, getToken ,authData}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    console.error("useauth is used of outside provider index");
  }

  return authContextValue;
};
