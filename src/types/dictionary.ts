export interface Dictionary {
  navigation: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    description: string;
    drivenBy: string;
    words: string[];
    cta: {
      portfolio: string;
      resume: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    button: string;
  };
  projects: {
    sectionTitle: string;
    viewAll: string;
    site: string;
    repository: string;
    list: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
  };
  contact: {
    title: string;
    description: string;
    availability: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      success: string;
      error: string;
      placeholders: {
        name: string;
        email: string;
        message: string;
      };
      validation: {
        required: string;
        email: string;
        minLength: string;
        maxLength: string;
      };
    };
    social: {
      ariaLabel: string;
    };
  };
  footer: {
    copyright: string;
    social: {
      ariaLabel: string;
    };
  };
  notFound: {
    title: string;
    description: string;
    button: string;
  };
}
