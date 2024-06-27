import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Apps from "./routes/Apps.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Notes from "./routes/Notes.jsx";
import Chatroom from "./routes/Chatroom.jsx";
import ChooseUser from "../src/components/ChooseUser";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedStudentRoute from "./components/ProtectedStudentRoute";
import AdminSignIn from "../src/components/AdminSignIn";
import StudentSignIn from "../src/components/StudentSignIn";
import TeacherSignIn from "../src/components/TeacherSignIn";
import AdminDashboard from "../src/pages/Admin/Dashboard";
import StudentDashboard from "../src/pages/Students/Dashboard";
import TeacherDashboard from "../src/pages/Teachers/Dashboard";
import Classes from "../src/pages/Admin/Classes";
import Exam from "../src/pages/Admin/Exam";
import Attendance from "../src/pages/Admin/Attendance";
import Performance from "../src/pages/Admin/Performance";
import Teachers from "../src/pages/Admin/Teachers";
import Students from "../src/pages/Admin/Students";
import Assignments from "../src/pages/Admin/Assignments";
import Library from "../src/pages/Admin/Library";
import EventCalender from "../src/pages/Admin/EventCalender";
import SettingsProfile from "../src/pages/Admin/SettingsProfile";
import Announcement from "../src/pages/Admin/Announcement";
import StudentAssignments from "../src/pages/Students/Assignments";
import ExamSection from "../src/pages/Students/Exams";
import PerformanceSection from "../src/pages/Students/Performance";
import AttendanceSection from "../src/pages/Students/Attendance";
import LibrarySection from "../src/pages/Students/Library";
import AnnouncementSection from "../src/pages/Students/Announcement";
import ProfileSection from "../src/pages/Students/Profile";
import ClassSection from "../src/pages/Teachers/Classes";
import StudentSection from "../src/pages/Teachers/Students";
import TeacherSection from "../src/pages/Teachers/Teachers";
import CheckPerformanceSection from "../src/pages/Teachers/Performance";
import EventSection from "../src/pages/Teachers/Events";
import TeacherProfileSection from "../src/pages/Teachers/Profile";
import CheckAnnouncementSection from "../src/pages/Teachers/Announcement";
import AssignmentSection from "../src/pages/Teachers/Assignments";
import CheckAttendanceSection from "../src/pages/Teachers/Attendance";
import CheckExamSection from "../src/pages/Teachers/Exams";
import AdminRegister from "../src/components/AdminRegister";
import StudentRegister from "../src/components/StudentRegister";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Apps />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="notes" element={<Notes />} />
          <Route path="chatroom" element={<Chatroom />} />
        </Route>
        <Route path="choose-user" element={<ChooseUser />} />
        <Route path="admin-signIn" element={<AdminSignIn />} />
        <Route path="student-signIn" element={<StudentSignIn />} />
        <Route path="teacher-signIn" element={<TeacherSignIn />} />

        {/* Protected Routes */}
        <Route
          path="admin/dashboard"
          element={<ProtectedRoute element={AdminDashboard} />}
        />
        <Route
          path="teacher/dashboard"
          element={<ProtectedRoute element={TeacherDashboard} />}
        />
        <Route
          path="student/dashboard"
          element={<ProtectedStudentRoute element={StudentDashboard} />}
        />
        {/* <Route path = "student/dashboard" element = {<StudentDashboard/>}/> */}

        {/* Admin section */}
        <Route path="admin/classes" element={<Classes />} />
        <Route path="admin/exams" element={<Exam />} />
        <Route path="admin/attendance" element={<Attendance />} />
        <Route path="admin/performance" element={<Performance />} />
        <Route path="admin/teachers" element={<Teachers />} />
        <Route path="admin/students" element={<Students />} />
        <Route path="admin/assignments" element={<Assignments />} />
        <Route path="admin/library" element={<Library />} />
        <Route path="admin/communication" element={<Announcement />} />
        <Route path="admin/events" element={<EventCalender />} />
        <Route path="admin/settings" element={<SettingsProfile />} />
        <Route path="admin/register" element={<AdminRegister />} />

        {/* Students sections */}
        <Route path="students/register" element={<StudentRegister />} />
        <Route path="student/assignments" element={<StudentAssignments />} />
        <Route path="student/exams" element={<ExamSection />} />
        <Route path="student/performance" element={<PerformanceSection />} />
        <Route path="student/attendance" element={<AttendanceSection />} />
        <Route path="student/library" element={<LibrarySection />} />
        <Route path="student/communication" element={<AnnouncementSection />} />
        <Route path="student/settings" element={<ProfileSection />} />

        {/* Teachers sections */}
        <Route path="teacher/classes" element={<ClassSection />} />
        <Route path="teacher/students" element={<StudentSection />} />
        <Route path="teacher/teachers" element={<TeacherSection />} />
        <Route path="teacher/assignments" element={<AssignmentSection />} />
        <Route path="teacher/exams" element={<CheckExamSection />} />
        <Route
          path="teacher/performance"
          element={<CheckPerformanceSection />}
        />
        <Route path="teacher/attendance" element={<CheckAttendanceSection />} />
        <Route
          path="teacher/communication"
          element={<CheckAnnouncementSection />}
        />
        <Route path="teacher/events" element={<EventSection />} />
        <Route path="teacher/settings" element={<TeacherProfileSection />} />
      </Routes>
    </Router>
  );
};

export default App;
