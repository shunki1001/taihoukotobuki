
import About from "./pages/About";
import Access from "./pages/Access";
import Available from "./pages/Available";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Top from "./pages/Top";
import AppAppBar from "./ui/AppAppBar";

export default function Home() {
  return (
    <main>
        <AppAppBar />
        <Top />
        <About />
        <Menu />
        <Available />
        <Access />
        <Contact />
    </main>
  );
}
