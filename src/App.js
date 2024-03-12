import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./LayOut/Main";
import Home from "./component/Home/Home";
import AirTickets from "./component/AirTickets/AirTickets";
import Hotels from "./component/Hotels/Hotels";
import TourPackages from "./component/TourPackages/TourPackages";
import CarRental from "./component/CarRental/CarRental";
import HajjUmrah from "./component/HajjUmrah/HajjUmrah";
import Contact from "./component/Contact/Contact";
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/airTickets",
          element: <AirTickets></AirTickets>,
        },
        {
          path: "/hotels",
          element: <Hotels></Hotels>,
        },
        {
          path: "/tourPackages",
          element: <TourPackages></TourPackages>,
        },
        {
          path: "/visaService",
          element: <CarRental></CarRental>,
        },
        {
          path: "/hajjUmrah",
          element: <HajjUmrah></HajjUmrah>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
