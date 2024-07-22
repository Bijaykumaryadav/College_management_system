import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { SidebarProvider } from "./SidebarContext";
import axios from "axios";
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
          "https://bticlz.onrender.com/api/v1/students/getall"
        );
        console.log("Students Response:", studentsResponse.data);

        const students = studentsResponse.data.students;

        if (!Array.isArray(students)) {
          throw new Error("Expected an array of students");
        }

        // Fetch individual performance data for each student
        const performanceData = await Promise.all(
          students.map(async (student) => {
            try {
              const percentageResponse = await axios.get(
                `https://bticlz.onrender.com/api/v1/marks/percentage/${student._id}`
              );
              console.log("Percentage Response:", percentageResponse.data);
              return {
                id: student._id,
                name: student.name,
                score: percentageResponse.data.externalPercentage,
              };
            } catch (error) {
              // If percentage data is not found, handle gracefully
              console.error(
                `Error fetching percentage for student ${student._id}:`,
                error
              );
              return {
                id: student._id,
                name: student.name,
                score: null, // or any default value indicating data not found
              };
            }
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
        <Sidebar />
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
                    {student.name}:{" "}
                    {student.score !== null ? `${student.score}%` : "Not found"}
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
