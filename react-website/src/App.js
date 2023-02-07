import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import InitialForm from "./components/InitialForm";
import { ButtonTest } from "./components/ButtonTest";

export default function App() {
  return (
    <main>
      <Header />
      <InitialForm/>
      {/* <ButtonTest /> */}
      <Home />
      <Footer />
    </main>
  );
}