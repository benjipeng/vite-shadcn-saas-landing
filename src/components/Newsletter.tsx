import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed to ML insights!");
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Stay Ahead with Our{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            ML Insights
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Subscribe to receive the latest updates on ML advancements and
          industry applications.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            placeholder="your.email@example.com"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="Email for ML insights newsletter"
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
