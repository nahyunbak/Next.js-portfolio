export type NameType = {
  name?: string; ///Passing Optional Props
};

export type EmptyType = {
  ifEmpty?: boolean; ///Passing Optional Props
};

export type ClickedType = {
  value?: boolean;
};

export type NumType = {
  pageNum?: number;
};

export type LanType = {
  mainTitle: string;
  lanButton: string;
  greet: {
    title1: string;
    title2: string;
    title3: string;
    text1: string;
    text2: string;
    text3: string;
    cardTitle: string;
    cardName: string;
    cardText1: string;
    cardText2: string;
    cardText3: string;
    cardText4: string;
  };
  about: {
    name: string;
    birth: string;
    address: string;
    phone: string;
    email: string;
    univ: string;
  };
  skills: {
    frontend: string;
    backend: string;
    version: string;
    deployment: string;
  };
  projects: {
    first: {
      project1Title: string;
      projectText1: string;
      projectText2: string;
      projectText3: string;
      skillStack: string;
      deployStack: string;
    };
    second: {
      project1Title: string;
      projectText1: string;
      projectText2: string;
      projectText4: string;
      skillStack: string;
      deployStack: string;
    };
    third: {
      project1Title: string;
      projectText1: string;
      projectText2: string;
      projectText3: string;
      skillStack: string;
      deployStack: string;
    };
  };
};
