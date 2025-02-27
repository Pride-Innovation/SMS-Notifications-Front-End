import { Navigate, Outlet } from "react-router";
import AuthenticationUtills from "../../Pages/Authentication/utils";

export const PrivateRoute = () => {

    const { isAuthenticated } = AuthenticationUtills();

    return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
}