import {Outlet, Navigate} from "react-router-dom";

function PrivateRoute() {
    const loggedIn = true;
    if(loggedIn){
        return <Outlet />
    }else{
        return <Navigate to={"/Login"}/>
    }
}

export default PrivateRoute;
