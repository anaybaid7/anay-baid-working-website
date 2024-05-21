type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Anay Baid's Portfolio - University of Waterloo - 2B Computer Science",
    fullName: "Anay Baid",
    email: "anay.baid@uwaterloo.ca",
  },
  hero: {
    name: "Anay Baid",
    p: ["I am deeply passionate about software development and continuously strive to stay up-to-date with the latest advancements in technology."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Hi there,
      I'm Anay Baid, currently pursuing my degree in Computer Science at the UWaterloo. Throughout my academic journey, I've been deeply immersed in the realms of data engineering and software development, continually expanding my skill set and knowledge base.
      During my internships, I've had the privilege of engaging in hands-on projects that have allowed me to sharpen my abilities in crucial areas such as data analysis and system optimization. 
      I'm genuinely eager to leverage my experiences and capabilities to make meaningful contributions to your projects. Let's connect and discuss how I can be an asset to your team!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects showcase my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
