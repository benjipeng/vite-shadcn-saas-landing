import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Brain, Cpu, LineChart, Zap } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Brain size={24} />,
    title: "AI-Powered Research",
    description:
      "Leverage advanced ML algorithms to accelerate your research processes, uncover hidden patterns, and generate actionable insights.",
  },
  {
    icon: <Cpu size={24} />,
    title: "Intelligent Design",
    description:
      "Utilize AI-driven design tools to create innovative, data-informed designs that resonate with your target audience and improve user experiences.",
  },
  {
    icon: <LineChart size={24} />,
    title: "Predictive Marketing",
    description:
      "Harness the power of ML to predict consumer behavior, personalize marketing campaigns, and optimize your marketing ROI at scale.",
  },
  {
    icon: <Zap size={24} />,
    title: "Continuous Learning",
    description:
      "Our ML models continuously adapt and improve, ensuring your solutions stay cutting-edge in the fast-paced world of AI and data science.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How AppCubic{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Transforms{" "}
        </span>
        Your Business
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Discover how our ML-powered solutions revolutionize research, design,
        and marketing to give your business a competitive edge.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                <div className="bg-primary/20 p-3 rounded-2xl">{icon}</div>
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
