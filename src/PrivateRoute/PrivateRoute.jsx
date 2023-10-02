import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <h1 className='text-5xl text-center'>Loading...</h1>;
  }

  if (!user?.email) {
    return <Navigate to='/login' />;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};
export default PrivateRoute;
