export interface IData {
  name: string;
  headline: string;
  detail: {
    birthdate: string;
    email: string;
    phone: string;
  };
  skills: {
    main: string[];
  };
  employment_history: {
    name: string;
    headline: string;
    logo_web: string;
    logo: string;
    start: string;
    end: string;
  }[];
  formation: {
    institution: string;
    course: string;
    start: string;
    end: string;
  }[];
  social: {
    web: {
      url: string;
      icon: string;
    }[];
    mobile: {
      url: string;
      icon: string;
    }[];
  };
  personal_projects: {
    name: string;
    icon: string;
    description: string;
  }[];
}
