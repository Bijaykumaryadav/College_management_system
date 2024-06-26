//components/AdminSignIn.jsx
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
        <Link style={{ padding: "25px", fontSize: "16px" }}>
          Forgotten Password
        </Link>
      </FormContainer>
    </AdminSignInContainer>
  );
};

export default AdminSignIn;
