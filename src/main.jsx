import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import UserAuthProvider from "./Context/UserLoginProvider.jsx"
import { Provider } from "react-redux"
import { Store } from "./Store/Store.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignUp from "./Components/Auth/SignUp.jsx"
import Login from "./Components/Auth/Login.jsx"
import ProctectComponent from "./Components/Auth/ProctectComponent.jsx"
import AdminDashboard from "./Components/Dashboard/AdminDashboard.jsx"
import EmployeeDashBoard from "./Components/Dashboard/EmployeeDashBoard.jsx"
import StudentAssignmentPage from "./Pages/StudentAssignmentPage.jsx"

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={Store}>
        <UserAuthProvider>
          <App />
        </UserAuthProvider>
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/admin",
        element: (
          <ProctectComponent>
            <AdminDashboard />
          </ProctectComponent>
        ),
      },
      {
        path: "/student",
        element: (
          <ProctectComponent>
            <EmployeeDashBoard />
          </ProctectComponent>
        ),
      },
      ,
      {
        path: "/:student/assignments",
        element: <StudentAssignmentPage />,
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}></RouterProvider>
)
