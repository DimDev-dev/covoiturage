import { Toaster } from "sonner";
import Footer from "./composant/footer";
import Header from "./composant/header";
import Home from "./composant/home";

function App() {
  return (
    <div className=" flex flex-col h-screen">
      <Header />
      <Home />
      <Footer />
      <Toaster richColors />
    </div>
  );
}

export default App;
