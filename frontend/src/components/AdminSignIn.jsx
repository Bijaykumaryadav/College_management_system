import { useState } from "react";
import {
  AdminSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/AdminSignInStyles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AdminRegisterLink } from "../styles/styles";

const AdminSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const location = useLocation();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://bticlz.onrender.com/api/v1/users/admin/signin",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleGoogleSignIn = () => {
    // Redirect to Google sign-in endpoint
    window.location.href =
      "https://bticlz.onrender.com/api/v1/users/auth/google";
  };

  return (
    <AdminSignInContainer>
      <h2>Admin Sign In</h2>
      <FormContainer>
        <h3>Welcome to BTI</h3>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton type="submit" onClick={handleSignIn}>
          Sign In
        </SubmitButton>
        <AdminRegisterLink to="/admin/register" style={{ padding: "15px" }}>
          Admin Register
        </AdminRegisterLink>
        {/* <Link
          to="/forgot-password"
          style={{ padding: "10px", fontSize: "16px" }}
        >
          Forgotten Password
        </Link> */}
        <button type="button" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
      </FormContainer>
    </AdminSignInContainer>
  );
};

export default AdminSignIn;
