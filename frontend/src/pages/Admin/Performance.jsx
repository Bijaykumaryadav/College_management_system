import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { SidebarProvider } from "./SidebarContext";
import axios from "axios"; // Import axios for making API calls
import {
  PerformanceContainer,
  Content,
  PerformanceContent,
  PerformanceHeader,
  SchoolPerformance,
  IndividualPerformance,
} from "../../styles/PerformanceStyles";

const Performance = ({ isDashboard }) => {
  const [individualPerformanceData, setIndividualPerformanceData] = useState(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  // Sample data for school performance
  const schoolPerformanceData = {
    averageScore: 85,
    totalStudents: 100,
  };

  useEffect(() => {
    const fetchIndividualPerformance = async () => {
      try {
        // Fetch all students
        const studentsResponse = await axios.get(
          "http://localhost:4000/api/v1/students/getall"
        );
        console.log("Students Response:", studentsResponse.data); // Log the response

        // Assuming the API response structure is { students: [...] }
        const students = studentsResponse.data.students;

        if (!Array.isArray(students)) {
          throw new Error("Expected an array of students");
        }

        // Fetch individual performance data for each student
        const performanceData = await Promise.all(
          students.map(async (student) => {
            const percentageResponse = await axios.get(
              `http://localhost:4000/api/v1/marks/percentage/${student._id}`
            );
            console.log("Percentage Response:", percentageResponse.data);
            return {
              id: student._id,
              name: student.name,
              score: percentageResponse.data.externalPercentage,
            };
          })
        );

        setIndividualPerformanceData(performanceData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching individual performance data:", error);
        setIsLoading(false);
      }
    };

    fetchIndividualPerformance();
  }, []);

  return (
    <SidebarProvider>
      <PerformanceContainer isDashboard={isDashboard}>
        <Sidebar /> {/* Include the Sidebar component */}
        <Content>
          <PerformanceContent>
            <PerformanceHeader>School Performance</PerformanceHeader>
            <SchoolPerformance>
              <p>Average Score: {schoolPerformanceData.averageScore}</p>
              <p>Total Students: {schoolPerformanceData.totalStudents}</p>
            </SchoolPerformance>
            <PerformanceHeader>Individual Performance</PerformanceHeader>
            <IndividualPerformance>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                individualPerformanceData.map((student) => (
                  <p key={student.id}>
                    {student.name}: {student.score}
                    {"%"}
                  </p>
                ))
              )}
            </IndividualPerformance>
          </PerformanceContent>
        </Content>
      </PerformanceContainer>
    </SidebarProvider>
  );
};

export default Performance;
