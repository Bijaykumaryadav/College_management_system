import { useState } from "react";
import {
  AdminSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/AdminSignInStyles";
import axios from "axios";
import { Link } from "react-router-dom";
import { AdminRegisterLink } from "../styles/styles";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const AdminSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/register/signin",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      window.location.href = "/admin/dashboard";
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    const { credential } = credentialResponse;
    try {
      const res = await axios.post("http://localhost:4000/api/v1/users/auth/google", {
        tokenId: credential,
      });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/admin/dashboard";
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Google Sign-In failed:", error);
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
        <SubmitButton onClick={handleSignIn}>Sign In</SubmitButton>
        <AdminRegisterLink to="/admin/register">
          Admin Register
        </AdminRegisterLink>
        <Link style={{ padding: "10px", fontSize: "16px" }}>
          Forgotten Password
        </Link>
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
          />
        </GoogleOAuthProvider>
      </FormContainer>
    </AdminSignInContainer>
  );
};

export default AdminSignIn;
