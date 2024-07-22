import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  StudentSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/StudentSignInStyles";
import { AdminRegisterLink } from "../styles/styles";

const StudentSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://bticlz.onrender.com/api/v1/users/student/signin",
        { email, password }
      );
      console.log("Student Sign In:", { email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/student/dashboard");
    } catch (error) {
      console.error("Student Sign In failed:", error);
    }
  };

  const handleGoogleSignIn = () => {
    window.location.href =
      "https://bticlz.onrender.com/api/v1/users/auth/google-student";
  };

  return (
    <StudentSignInContainer>
      <h2>Student Sign In</h2>
      <FormContainer onSubmit={handleSignIn}>
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
        <AdminRegisterLink
          to="/students/register"
          style={{ paddingBottom: "10px", fontSize: "16px" }}
        >
          Create Account
        </AdminRegisterLink>
        {/* <Link style={{ paddingBottom: "10px", fontSize: "16px" }}>
          Forgotten Password
        </Link> */}
        <button type="button" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
      </FormContainer>
    </StudentSignInContainer>
  );
};

export default StudentSignIn;
