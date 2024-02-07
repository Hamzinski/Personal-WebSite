import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Skills from "./sections/Skills";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <>
        <div>
          <Navbar />
          <Hero />
          <Skills />
          <Profile />
          <Projects />
        </div>
      </>
    </I18nextProvider>
  );
}

export default App;
