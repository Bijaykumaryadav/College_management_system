// TeacherSignIn.js
import { useState } from "react";
import {
  TeacherSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/TeacherSignInStyles";
import { Link } from "react-router-dom";

const TeacherSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // For demonstration purposes, we'll directly navigate to the teacher dashboard route
    // Replace this with your actual sign-in logic
    console.log("Teacher Sign In:", { email, password });
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
        {/* Use Link component to navigate to teacher dashboard */}
        <SubmitButton to="/teacher/dashboard" onClick={handleSignIn}>
          Sign In
        </SubmitButton>
        <Link style={{ padding: "25px", fontSize: "16px" }}>
          Forgotten Password
        </Link>
      </FormContainer>
    </TeacherSignInContainer>
  );
};

export default TeacherSignIn;
