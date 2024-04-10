import HeadingTxt from "./HeadingTxt";

export default function Capabilities() {

  const services = ['frontend development', 'backend development', 'UIUX design', 'SEO optimization', 
  'social media marketing', 'e-commerce solutions']
  return (
    <div className="">
      <div className="grid lg:grid-cols-2 gap-y-10 py-40 pb-20">
        <div className="lg:px-20 px-5 ">
          <HeadingTxt text="CAPABILITIES" />
        </div>
        <div>
          <ul className="px-5">
            <li className="mb-14">
              <h2 className="text-2xl font-extrabold mb-5" data-aos="flip-up">
                Website / App Design
              </h2>
              <p data-aos="fade-right">
                Elevate your online presence with captivating designs that
                seamlessly blend aesthetics with functionality. Our team crafts
                visually stunning websites and user-friendly apps tailored to
                your brand&rsquo;s unique identity and goal
              </p>
            </li>

            <li className="mb-14">
              <h2 className="text-2xl font-extrabold mb-5" data-aos="flip-up">SEO Optimazation</h2>
              <p data-aos="fade-up">
                Drive traffic and boost visibility with strategic SEO solutions.
                We optimize your digital content and enhance your online
                presence to rank higher on search engine results pages (SERPs),
                ensuring your business stands out and reaches its target
                audience effectively.
              </p>
            </li>

            <li className="mb-5">
              <h2 className="text-2xl font-extrabold mb-5" data-aos="flip-up">UI/UX Design</h2>
              <p data-aos="fade-up">
                We prioritize user satisfaction through intuitive interfaces and
                smooth interactions. From wireframes to prototypes, our UI/UX
                designs enhance usability, engagement, and overall customer
                satisfaction, ensuring memorable digital experiences.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* how we can help u */}
      <div>
        <div className="mb-14">
          <h1 className="text-center text-sm font-extrabold">our service</h1>
          <span className="text-center px-0.5 w-fit min-h-24 h-full block bg-orange-500 mx-auto my-10"></span>
          <h2 className="text-4xl font-bold text-center">This Is How We Can Help You.</h2>
        </div>
        <div>
            <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 lg:w-[85%] mx-auto pb-20 md:px-1 px-7">
              {
                services.map(service => (
                  <li key={service} className="flex gap-4 items-center capitalize" data-aos="flip-up">
                    <i className="fa fa-angle-right"></i>
                    <span>{service}</span>
                  </li>
                ))
              }
            </ul>
        </div>
      </div>
    </div>
  );
}
