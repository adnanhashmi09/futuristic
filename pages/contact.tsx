import Meta from "@/components/utils/Meta";
import Navbar from "@/components/Navbar";
import Form from "@/components/Form";

const meta = {
  title: "TheBloxStudio - contact",
  description: "Contact form for the blox studio.",
};
export default function Contact() {
  return (
    <>
      <Meta {...meta} />
      <Navbar />
      <Form />
    </>
  );
}
