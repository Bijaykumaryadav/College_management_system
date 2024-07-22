import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";

const ProtectedTeacherRoute = ({ element: Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get("token");

        // If token found in URL params, set it in localStorage
        if (token) {
          localStorage.setItem("token", token);
        }

        // Retrieve token from localStorage
        const storedToken = localStorage.getItem("token");
        console.log("Token:", storedToken);

        // If still no token, set isAuthenticated to false
        if (!storedToken) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        const response = await axios.get(
          "https://bticlz.onrender.com/api/v1/users/auth/teachers/check",
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );

        console.log("Authentication status:", response.data);
        setIsAuthenticated(response.data.success);
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [location.search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Component /> : <Navigate to="/teacher-signIn" />;
};

export default ProtectedTeacherRoute;
