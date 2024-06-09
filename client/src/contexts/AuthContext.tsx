import LoadingSpinner from "@/components/common/LoadingSpinner/LoadingSpinner";
import { VerfiyUserApi } from "@/services/auth";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

type AuthContextType = {
  isAuth: boolean;
};

type AuthContextProviderType = {
  children: React.ReactNode;
};

const inititalState = {
  isAuth: false,
};

export const AuthContext = createContext<AuthContextType>(inititalState);

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const { isError, isLoading } = useQuery({
    queryKey: ["verify-user"],
    queryFn: VerfiyUserApi,
  });

  if(isLoading) {
    return <LoadingSpinner />
  }

  return <AuthContext.Provider value={{ isAuth: !isError }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context as AuthContextType;
};
