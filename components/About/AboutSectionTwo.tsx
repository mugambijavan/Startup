import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Continuous Innovation
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                SaaS providers are committed to staying competitive by continuously improving their software. This means you benefit from regular feature updates, performance enhancements, and access to the latest technologies without additional costs. Your business can stay at the forefront of industry trends and remain competitive in the market.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Reduced IT Complexity
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                SaaS simplifies your IT infrastructure. Since the software is hosted in the cloud, you don't need to worry about server maintenance, hardware upgrades, or complex installations. This reduction in IT complexity allows your IT team to focus on strategic tasks rather than routine maintenance, ultimately improving efficiency.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Global Accessibility and Collaboration
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                SaaS solutions are accessible globally, enabling teams and partners from different locations to collaborate seamlessly. Users can work on projects, share information, and collaborate in real time, breaking down geographical barriers. This fosters innovation and allows your business to tap into a wider talent pool and customer base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
