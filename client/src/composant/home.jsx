import Connect from "@/pages/connexion/connect";
import CreateProfil from "@/pages/profil/createProfil";
import ProfilePage from "@/pages/profil/profilePage";
import { Route, Routes } from "react-router-dom";
import { AuthGuard } from "../guard/AuthGuard";
import Acceuil from "../pages/acceuil/acceuil";
import AddAnnonce from "../pages/annonce/addAnnonce";
import ModifyAnnonce from "../pages/annonce/modifyAnnonce";
import Contact from "../pages/contact/contact";
import Dashboard from "../pages/dashboard/dashboard";
import UserAnnonce from "../pages/profil/userAnnonce";
import Annonce from "./../pages/annonce/annonce";
import FeatureAnnouncement from "./feature";
import Logout from "./logout";
const Home = () => {
  return (
    <div
      className="bg-background bg-cover bg-center h-screen flex items-center justify-center bg-fixed flex-grow overflow-auto scrollbar-hide"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Routes>
        <Route path="/" element={<Connect />} />
        <Route path="/welcome" element={<AuthGuard Child={Acceuil} />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/feature" element={<FeatureAnnouncement />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profil" element={<ProfilePage />} />
        {/* <Route path="/edit-profile" element={<ModifyProfile />} /> */}
        <Route path="/create-profil" element={<CreateProfil />} />
        <Route path="/myannonce" element={<UserAnnonce />} />
        <Route path="/addannonce" element={<AuthGuard Child={AddAnnonce} />} />
        <Route path="/dashboard" element={<AuthGuard Child={Dashboard} />} />
        <Route
          path="/modifyAnnonce/:id"
          element={<AuthGuard Child={ModifyAnnonce} />}
        />
        <Route path="/annonce/:id" element={<AuthGuard Child={Annonce} />} />
      </Routes>
    </div>
  );
};

export default Home;
