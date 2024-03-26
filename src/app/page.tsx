import About from "./pages/About";
import Access from "./pages/Access";
import Available from "./pages/Available";
import Footer from "./pages/Footer";
import Menu from "./pages/Menu";
import Top from "./pages/Top";
import AppAppBar from "./ui/AppAppBar";

export default function Home() {
  return (
    <main>
      <Top />
      <AppAppBar />
      <About />
      <Menu />
      <Available />
      <Access />
      <Footer />
    </main>
  );
}
