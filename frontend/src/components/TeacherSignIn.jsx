import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TeacherSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/TeacherSignInStyles";
import axios from "axios";

const TeacherSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/teacher/signin",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/teacher/dashboard");
    } catch (error) {
      console.error("Teacher Sign In failed:", error);
    }
  };

  const handleGoogleSignIn = () => {
    // Redirect to Google sign-in endpoint
    window.location.href =
      "http://localhost:4000/api/v1/users/auth/google-teacher";
  };

  return (
    <TeacherSignInContainer>
      <h2>Teacher Sign In</h2>
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
        <Link
          to="/teachers/register"
          style={{ paddingBottom: "10px", fontSize: "16px" }}
        >
          Create Account
        </Link>
        <Link style={{ paddingBottom: "10px", fontSize: "16px" }}>
          Forgotten Password
        </Link>
        <button type="button" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
      </FormContainer>
    </TeacherSignInContainer>
  );
};

export default TeacherSignIn;
