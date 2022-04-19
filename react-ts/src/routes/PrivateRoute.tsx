import {Navigate, Route, RouteProps} from "react-router-dom";

interface Props extends RouteProps{}

export const PrivateRoute = ({children, ...props}:Props)=>{
    return( <Route
        {...props}
        element={true?children:<Navigate to="/" state={{ from: location }} replace />}
    />)
}
