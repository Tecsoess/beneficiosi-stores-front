import { ReactNode } from "react";
import { Redirect, Route } from "react-router";
import { useAuth } from "../contexts/AuthContext";



const PrivateRoute = (props) => {

  let auth = useAuth();

  const { children, ...rest } = props;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;