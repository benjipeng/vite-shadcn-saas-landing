import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is AppCubic's approach to Machine Learning?",
    answer:
      "AppCubic leverages cutting-edge Machine Learning algorithms to provide innovative solutions in research engineering, design, and marketing. Our approach combines advanced AI techniques with domain expertise to deliver tailored, high-impact results for our clients.",
    value: "item-1",
  },
  {
    question: "How can ML improve my company's research processes?",
    answer:
      "ML can significantly enhance research processes by automating data analysis, identifying patterns, and generating insights that might be missed by traditional methods. This can lead to faster discoveries, more accurate predictions, and optimized resource allocation in your research projects.",
    value: "item-2",
  },
  {
    question: "What benefits does AI-driven design offer?",
    answer:
      "AI-driven design can revolutionize your creative process by generating unique design concepts, optimizing user experiences based on data-driven insights, and automating repetitive tasks. This allows your design team to focus on high-level creative decisions while improving overall efficiency and effectiveness.",
    value: "item-3",
  },
  {
    question: "How does AppCubic apply ML to marketing strategies?",
    answer:
      "We use ML to analyze vast amounts of customer data, predict consumer behavior, and personalize marketing campaigns at scale. This results in more targeted messaging, improved customer engagement, and higher ROI on marketing investments.",
    value: "item-4",
  },
  {
    question: "Is my data safe with AppCubic's ML solutions?",
    answer:
      "Absolutely. Data security and privacy are our top priorities. We employ state-of-the-art encryption and security protocols to protect your data. Additionally, we adhere to all relevant data protection regulations and can provide custom data handling solutions to meet your specific requirements.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Have more questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact our ML experts
        </a>
      </h3>
    </section>
  );
};
