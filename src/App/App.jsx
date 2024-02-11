import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Landing from "../pages/Landing";
import AuthLayout from "../layouts/AuthLayout";
import Auth from "../pages/Auth";
import Explore from "../pages/Explore";
import { UserProvider } from "../Context";

const routing = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={`Error 404 - Not found`}>
      <Route path="/" Component={RootLayout}>
        <Route index Component={Landing} />
        <Route path="/explore" Component={Explore} />
      </Route>
      <Route path="/auth" Component={AuthLayout}>
        <Route path="/auth/log-in" Component={Auth} />
        <Route path="/auth/register" Component={Auth} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={routing} />
    </UserProvider>
  );
}

export default App;
