import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="No spam guaranteed, So please do not send any spam mail."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
