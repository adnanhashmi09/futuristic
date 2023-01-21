import Meta from "@/components/utils/Meta";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/resusable/SectionHeader";
import Process from "@/components/Process";

const meta = {
  title: "Futuristic",
  description: "The home page of futuristic design agency.",
};
export default function Home() {
  return (
    <>
      <Meta {...meta} />
      <Navbar />
      <Header />
      <About />
      <SectionHeader title="Our Process" subList={["Web3","Sports","Finance"]} />
      <Process />
      {/* <SectionHeader title="Selected Projects" subList={["Web3","Sports","Finance"]} /> */}

      <CallToAction />
      <Footer />
    </>
  );
}
