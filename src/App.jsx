import "./App.css";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/common/NavBar.js"
import OpenRoute from "./components/core/Auth/OpenRoute"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import UpdatePassword from "./pages/UpdatePassword"
import VerifyEmail from "./pages/VerifyEmail"
import ForgotPassword from "./pages/ForgotPassword"
import About from "./pages/About.jsx";
import Contact from "./pages/Contact"
import Catalog from "./pages/Catalog.jsx"
import MyProfile from "./components/core/Dashboard/MyProfile.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PrivateRoute from "./components/core/Auth/PrivateRoute.jsx";
import Error from "./pages/Error.jsx";
import Settings from "./components/core/Dashboard/Settings";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses.jsx";
import Cart from "./components/core/Dashboard/Cart";
import { ACCOUNT_TYPE } from "./utils/constant";

import MyCourses from "./components/core/Dashboard/MyCourses";

import { useSelector } from "react-redux";
import Instructor from "./components/core/Dashboard/InstructorDashboard/Instructor.jsx";
import AddCourse from "./components/core/Dashboard/AddCourse/index.js";
import EditCourse from "./components/core/Dashboard/EditCourse/index.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import ViewCourse from "./pages/ViewCourse.jsx";
import VideoDetails from "./components/core/ViewCourses/VideoDetails.jsx";

function App() {
  const { user } = useSelector((state) => state.profile)
  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
     <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/contact" element={<Contact/>}/>
        <Route path="catalog/:catalogName" element={<Catalog />} />
        <Route path="course/:courseId" element={<CourseDetail/>} />

       <Route 
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    >
      <Route path="dashboard/my-profile" element={<MyProfile />} />
      
      <Route path="dashboard/Settings" element={<Settings />} />
      

      {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route path="dashboard/cart" element={<Cart />} />
          <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
          </>
        )
      }

      {
        user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
          <Route path="dashboard/instructor" element={<Instructor />} />
          <Route path="dashboard/add-course" element={<AddCourse />} />
          <Route path="dashboard/my-courses" element={<MyCourses />} />
          <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
        )
      }


    </Route>

    <Route element={
        <PrivateRoute>
          <ViewCourse />
        </PrivateRoute>
      }>

      {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route 
            path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
            element={<VideoDetails />}
          />
          </>
        )
      }

      </Route>

        <Route path="*" element={<Error/>}/>
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
