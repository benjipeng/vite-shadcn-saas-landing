import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SocialNetworksProps[];
}

interface SocialNetworksProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Dr. Sarah Chen",
    position: "Chief AI Scientist",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Github",
        url: "https://github.com/",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "Alex Rodriguez",
    position: "ML Engineering Lead",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Github",
        url: "https://github.com/",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=36",
    name: "Emily Patel",
    position: "AI-Driven Design Specialist",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Michael Zhang",
    position: "ML Marketing Strategist",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
      case "Github":
        return <Github size="20" />;
      case "Twitter":
        return <Twitter size="20" />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Expert{" "}
        </span>
        ML Team
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Meet the brilliant minds behind AppCubic's cutting-edge ML solutions in
        research, design, and marketing.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>
                  Pioneering ML solutions to transform industries and drive
                  innovation.
                </p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SocialNetworksProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
