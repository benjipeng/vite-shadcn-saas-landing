import { Statistics } from "./Statistics";
import flower from "../assets/flower.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={flower}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                AppCubic
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                AppCubic is a cutting-edge agency that harnesses the power of
                Machine Learning to revolutionize research engineering, design,
                and marketing. Our innovative approach combines advanced ML
                algorithms with industry expertise to deliver unparalleled
                solutions for our clients. From optimizing research processes to
                creating data-driven designs and implementing targeted marketing
                strategies, AppCubic is at the forefront of AI-powered business
                transformation.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
