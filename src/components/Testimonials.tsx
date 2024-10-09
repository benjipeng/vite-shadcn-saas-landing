import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  position: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=1",
    name: "Dr. Emily Chen",
    position: "Research Director, TechInnovate",
    comment:
      "AppCubic's ML solutions have revolutionized our research processes. We've seen a 40% increase in efficiency!",
  },
  {
    image: "https://i.pravatar.cc/150?img=2",
    name: "Mark Johnson",
    position: "Chief Marketing Officer, GlobalBrand",
    comment:
      "The AI-driven marketing strategies developed by AppCubic have significantly improved our campaign ROI. Truly game-changing!",
  },
  {
    image: "https://i.pravatar.cc/150?img=3",
    name: "Sarah Thompson",
    position: "Lead Designer, CreativeSolutions",
    comment:
      "AppCubic's ML-powered design tools have transformed our creative process. We're now able to deliver more personalized and effective designs to our clients.",
  },
  {
    image: "https://i.pravatar.cc/150?img=4",
    name: "Dr. Alex Rodriguez",
    position: "AI Research Scientist, InnovateTech",
    comment:
      "As a fellow AI researcher, I'm impressed by the innovative approaches AppCubic takes in applying ML to real-world problems. Their work is pushing the boundaries of what's possible.",
  },
  {
    image: "https://i.pravatar.cc/150?img=5",
    name: "Lisa Wong",
    position: "Product Manager, FutureTech",
    comment:
      "AppCubic's ML solutions have helped us optimize our product development cycle. We've reduced time-to-market by 30% while improving product quality.",
  },
  {
    image: "https://i.pravatar.cc/150?img=6",
    name: "David Patel",
    position: "CEO, StartupX",
    comment:
      "Working with AppCubic has been a game-changer for our startup. Their ML expertise has given us a competitive edge in a crowded market.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Clients Trust{" "}
        </span>
        AppCubic
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Our ML-driven solutions have transformed businesses across research,
        design, and marketing sectors. Here's what our clients have to say:
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, position, comment }: TestimonialProps) => (
            <Card
              key={name}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{position}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
