import Image from "next/image";
import Header from "./components/header";
import About from "./components/about";
import Menu from "./components/menu";
import Video from "./components/video";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Menu/>
      <Video/>
    </>
  );
}
