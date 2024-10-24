import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div id="developers" className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Team 
      </h2>
      <div className="flex flex-col items-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full px-4 py-2 text-center">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <div className="mt-4">
                {/* Increase font size for name */}
                <h6 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                  {testimonial.user}
                </h6>
                {/* Increase font size for role */}
                <span className="text-md sm:text-lg italic text-neutral-400">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
