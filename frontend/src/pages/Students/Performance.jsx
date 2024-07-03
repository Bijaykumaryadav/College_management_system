import { useRef } from "react";
import Sidebar from "./Sidebar";
import {
  PerformanceContainer,
  SidebarContainer,
  Content,
  PerformanceHeader,
  PerformanceInfo,
  PerformanceGraphContainer,
  TotalMarks,
} from "../../styles/PerformanceStyles";
import { Line } from "react-chartjs-2";
import { SidebarProvider } from "./SidebarContext";

// Import and register necessary Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceSection = () => {
  const chartRef = useRef(null);

  // Sample performance data
  const performanceData = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    marks: [80, 85, 90, 88, 92, 85], // Sample marks for each month
    totalMarks: 520, // Sample total marks for the year
  };

  // Line chart data
  const lineChartData = {
    labels: performanceData.months,
    datasets: [
      {
        label: "Performance Trends",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: performanceData.marks,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <SidebarProvider>
      <PerformanceContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>
          <PerformanceHeader>Performance</PerformanceHeader>
          <PerformanceInfo>
            <PerformanceGraphContainer>
              <Line
                ref={chartRef}
                data={lineChartData}
                options={chartOptions}
              />
            </PerformanceGraphContainer>
            <TotalMarks>Total Marks: {performanceData.totalMarks}</TotalMarks>
          </PerformanceInfo>
        </Content>
      </PerformanceContainer>
    </SidebarProvider>
  );
};

export default PerformanceSection;
