import { Navigate } from "react-router-dom";

import { PATH_LOGIN } from "../routes/paths";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return <Navigate to={PATH_LOGIN} />
    }

  return <>{children}</>;
};

export default AuthGuard;
