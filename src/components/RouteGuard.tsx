import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouteGuardProps } from "../interfaces/interfaces";

export const RouteGuard = ({ children, roles }: RouteGuardProps) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    if (roles && !roles.includes(user.role.role)) {
      navigate("/unauthorized");
      return;
    }
  }, [navigate, roles, token, user.role]);

  return <>{children}</>;
};
