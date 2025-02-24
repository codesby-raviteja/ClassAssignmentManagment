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
import ConditionalComponent from "./Components/others/ConditionalComponent.jsx"

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
        path: "/:role",
        element: (
          <ProctectComponent>
            <ConditionalComponent />
          </ProctectComponent>
        ),
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}></RouterProvider>
)
