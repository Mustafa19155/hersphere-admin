import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function RequireAuth({ children, redirectTo }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  if (isLoggedIn == null) {
    return null;
  } else if (!isLoggedIn) {
    return <Navigate to={redirectTo} />;
  } else {
    return children;
  }
}

export default RequireAuth;
