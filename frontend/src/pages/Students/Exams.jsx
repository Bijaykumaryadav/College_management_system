import { useRef } from "react";
import Sidebar from "./Sidebar";
import { Bar } from "react-chartjs-2";
import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamResultsContainer,
  ExamSubject,
  ExamResult,
  ExamChartContainer,
} from "../../styles/ExamStyles";
import { SidebarProvider } from "./SidebarContext";

// Import and register necessary Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ExamSection = () => {
  const chartRef = useRef(null);

  // Sample exam results data
  const examResultsData = {
    subjects: ["21C61", "21CS52", "21CS63", "21CS64"],
    results: [80, 75, 90, 85], // Sample results out of 100
  };

  // Bar chart data
  const barChartData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        label: "Exam Results",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        borderWidth: 1,
        hoverBackgroundColor: "#0056b3",
        hoverBorderColor: "#0056b3",
        data: examResultsData.results,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <SidebarProvider>
      <ExamContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>
          <ExamHeader>Exam Results</ExamHeader>
          <ExamResultsContainer>
            {examResultsData.subjects.map((subject, index) => (
              <div key={index}>
                <ExamSubject>{subject}</ExamSubject>
                <ExamResult>
                  Score: {examResultsData.results[index]}%
                </ExamResult>
              </div>
            ))}
            <ExamChartContainer>
              <Bar ref={chartRef} data={barChartData} options={chartOptions} />
            </ExamChartContainer>
          </ExamResultsContainer>
        </Content>
      </ExamContainer>
    </SidebarProvider>
  );
};

export default ExamSection;
