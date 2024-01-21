import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//PAGES

import Homepage from "./layouts/Homepage";
import RegisterPage from "./pages/RegisterPage";

import HomeBody from "./pages/HomeComponents/HomeBody";
import ProfilePage from "./pages/ProfilePage";
import SellerProfile from "./pages/SellerProfile";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Homepage />}>
      <Route path="home" element={<HomeBody />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="profile/:id" element={<SellerProfile />} />
      <Route path="search/:gigType" element={<SearchPage />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
