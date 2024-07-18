import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Apps from "./routes/Apps.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Notes from "./routes/Notes.jsx";
import Chatroom from "./routes/Chatroom.jsx";
import ChooseUser from "../src/components/ChooseUser";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedStudentRoute from "./components/ProtectedStudentRoute";
import ProtectedTeacherRoute from "./components/ProtectedTeacherRoute";
import AdminSignIn from "../src/components/AdminSignIn";
import StudentSignIn from "../src/components/StudentSignIn";
import TeacherSignIn from "../src/components/TeacherSignIn";
import AdminDashboard from "../src/pages/Admin/Dashboard";
import StudentDashboard from "../src/pages/Students/Dashboard";
import TeacherDashboard from "../src/pages/Teachers/Dashboard";
import Classes from "../src/pages/Admin/Classes";
import AddMarks from "./components/AddMarks";
import Borrowbooks from "./components/Borrowbooks.jsx";
import ReturnBooks from "./components/Returnbooks.jsx";
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
import Class from "../src/pages/Students/Classes";
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
import TeacherRegister from "../src/components/TeacherRegister";

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
        {/* sign-in routes */}
        <Route path="admin-signIn" element={<AdminSignIn />} />
        <Route path="student-signIn" element={<StudentSignIn />} />
        <Route path="teacher-signIn" element={<TeacherSignIn />} />
        {/* user registration routes */}
        <Route path="admin/register" element={<AdminRegister />} />
        {/* Students sections */}
        <Route path="students/register" element={<StudentRegister />} />
        {/* teacher sections */}
        <Route path="teachers/register" element={<TeacherRegister />} />
        {/* Protected Routes */}
        {/* Admin section */}
        <Route
          path="admin/dashboard"
          element={<ProtectedRoute element={AdminDashboard} />}
        />
        <Route
          path="admin/classes"
          element={<ProtectedRoute element={Classes} />}
        />
        <Route path="admin/exams" element={<ProtectedRoute element={Exam} />} />
        <Route path="/add-marks/:studentId" element={<AddMarks />} />
        <Route path="/borrow" element={<Borrowbooks />} />
        <Route path="/return" element={<ReturnBooks />} />

        <Route
          path="admin/attendance"
          element={<ProtectedRoute element={Attendance} />}
        />
        <Route
          path="admin/performance"
          element={<ProtectedRoute element={Performance} />}
        />
        <Route
          path="admin/teachers"
          element={<ProtectedRoute element={Teachers} />}
        />
        <Route
          path="admin/students"
          element={<ProtectedRoute element={Students} />}
        />
        <Route
          path="admin/assignments"
          element={<ProtectedRoute element={Assignments} />}
        />
        <Route
          path="admin/library"
          element={<ProtectedRoute element={Library} />}
        />
        <Route
          path="admin/communication"
          element={<ProtectedRoute element={Announcement} />}
        />
        <Route
          path="admin/events"
          element={<ProtectedRoute element={EventCalender} />}
        />
        <Route
          path="admin/settings"
          element={<ProtectedRoute element={SettingsProfile} />}
        />
        {/* Student section */}
        <Route
          path="student/dashboard"
          element={<ProtectedStudentRoute element={StudentDashboard} />}
        />
        <Route
          path="student/classes"
          element={<ProtectedStudentRoute element={Class} />}
        />
        <Route
          path="student/assignments"
          element={<ProtectedStudentRoute element={StudentAssignments} />}
        />
        <Route
          path="student/exams"
          element={<ProtectedStudentRoute element={ExamSection} />}
        />
        <Route
          path="student/performance"
          element={<ProtectedStudentRoute element={PerformanceSection} />}
        />
        <Route
          path="student/attendance"
          element={<ProtectedStudentRoute element={AttendanceSection} />}
        />
        <Route
          path="student/library"
          element={<ProtectedStudentRoute element={LibrarySection} />}
        />
        <Route
          path="student/communication"
          element={<ProtectedStudentRoute element={AnnouncementSection} />}
        />
        <Route
          path="student/settings"
          element={<ProtectedStudentRoute element={ProfileSection} />}
        />
        {/* Teachers sections */}
        <Route
          path="teacher/dashboard"
          element={<ProtectedTeacherRoute element={TeacherDashboard} />}
        />
        <Route
          path="teacher/classes"
          element={<ProtectedTeacherRoute element={ClassSection} />}
        />
        <Route
          path="teacher/students"
          element={<ProtectedTeacherRoute element={StudentSection} />}
        />
        <Route
          path="teacher/teachers"
          element={<ProtectedTeacherRoute element={TeacherSection} />}
        />
        <Route
          path="teacher/assignments"
          element={<ProtectedTeacherRoute element={AssignmentSection} />}
        />
        <Route
          path="teacher/exams"
          element={<ProtectedTeacherRoute element={CheckExamSection} />}
        />
        <Route
          path="teacher/performance"
          element={<ProtectedTeacherRoute element={CheckPerformanceSection} />}
        />
        <Route
          path="teacher/attendance"
          element={<ProtectedTeacherRoute element={CheckAttendanceSection} />}
        />
        <Route
          path="teacher/communication"
          element={<ProtectedTeacherRoute element={CheckAnnouncementSection} />}
        />
        <Route
          path="teacher/events"
          element={<ProtectedTeacherRoute element={EventSection} />}
        />
        <Route
          path="teacher/settings"
          element={<ProtectedTeacherRoute element={TeacherProfileSection} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
