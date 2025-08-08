import Image from "next/image";
import Header from "./components/header";
import About from "./components/about";
import Menu from "./components/menu";
import Video from "./components/video";
import App from "./components/app";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Menu/>
      <Video/>
      <App/>
      <Footer/>
    </>
  );
}
