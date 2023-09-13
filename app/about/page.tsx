import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Welcome to Startup, where innovation meets efficiency. Our cutting-edge SaaS solution is designed to revolutionize the way you do business. Say goodbye to outdated, time-consuming processes and hello to streamlined workflows, increased productivity, and unparalleled results. With Startup, you're not just a customer; you're a partner in progress. Join us on the journey towards a brighter, more efficient future for your business."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
