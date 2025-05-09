import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouteGuardProps } from "../interfaces/interfaces";

export const AuthGuard = ({ children, roles }: RouteGuardProps) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
      return;
    }
  }, [navigate, roles, token]);

  return <>{children}</>;
};
