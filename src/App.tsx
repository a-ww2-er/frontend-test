import "./App.scss";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import DashBoard from "./pages/dashboardPage/DashBoard";
import axios from "axios";
import { useEffect, useState } from "react";
import Error404 from "./pages/error404/Error404";
import NavBar from "./components/NavBar/molecules/NavBar";
import SidePanel from "./components/SidePanel/molecules/SidePanel";
import UserDetailsPage from "./pages/userDetailsPage/UserDetailsPage";
const App = () => {
  // const [details, setDetails] = useState<any>([]);
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   const getUserDetailsFromApi = async () => {
  //     setIsLoading(true)
  //     const result = await axios.get(
  //       "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/7"
  //     );
  //     setDetails([...result.data]);
  //     setIsLoading(false)
  //   };
  //   getUserDetailsFromApi();
  // }, [details]);
  const DashboardLayout = (): JSX.Element => {
    return (
      <div className="App">
        <NavBar />
        <div className="App_content">
          <SidePanel />
          {/* <UserContext.Provider value={details}> */}
            <Outlet />
          {/* </UserContext.Provider> */}
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <DashBoard />,
        },
        {
          path: "/dashboard/details/:id",
          element: <UserDetailsPage />,
        },
      ],
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
