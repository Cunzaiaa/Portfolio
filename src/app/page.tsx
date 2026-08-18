import { Meta } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import AboutPage from "./about/page";

export async function generateMetadata() {
  const meta = Meta.generate({
    title: about.title,
    description: about.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: "/",
    author: {
      name: person.name,
      url: baseURL,
    },
  });

  return {
    ...meta,
    keywords: [
      person.name,
      person.role,
      "Java Developer",
      "Spring Boot",
      "Backend Developer",
      "Microservices",
      "Portfolio",
    ],
  };
}

export default AboutPage;
