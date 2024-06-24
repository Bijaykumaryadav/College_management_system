import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  grid-column: span 2;
  padding: 8px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const AdmissionForm = () => {
  const initialFormData = {
    studentName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    address: "",
    zipCode: "",
    course: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
    // Reset form data
    setFormData(initialFormData);
  };

  return (
    <FormContainer>
      <h3>
        <strong>Admission Form</strong>
      </h3>
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <Label>Student Name *</Label>
          <Input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <Label>Date of Birth *</Label>
          <Input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <Label>Gender *</Label>
          <Select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Gender --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Select>
        </FormControl>
        <FormControl>
          <Label>Email *</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <Label>Mobile Number *</Label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <Label>Country *</Label>
          <Input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <Label>State *</Label>
          <Input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <Label>City *</Label>
          <Input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <Label>Address *</Label>
          <Textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="2"
            required
          />
        </FormControl>
        <FormControl>
          <Label>Zip Code *</Label>
          <Input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl style={{ gridColumn: "span 2" }}>
          <Label>Course *</Label>
          <Select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Course --</option>
            <option value="Computer Science & Engineering">
              Computer Science & Engineering
            </option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Artificial Intelligence & Machine Learning">
              Artificial Intelligence & Machine Learning
            </option>
            <option value="Electronics & Communication Engineering">
              Electronics & Communication Engineering
            </option>
            <option value="Robotics & Artificial Intelligence">
              Robotics & Artificial Intelligence
            </option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Civil Engineering">Civil Engineering</option>
          </Select>
        </FormControl>
        <FormControl style={{ gridColumn: "span 2" }}>
          <Label>Your Message</Label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
        </FormControl>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default AdmissionForm;
