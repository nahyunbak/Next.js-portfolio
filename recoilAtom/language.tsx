import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const koreanState = {
  mainTitle: "박나현의 포트폴리오",
  lanButton: "View in English",
  greet: {
    title1: "안녕하세요",
    title2: "JS 개발자",
    title3: "박나현입니다",
    text1:
      "빠른 손, 유창한 영어 구사력, 개발을 향한 무한한 애정이 제 장점입니다",
    text2: "항상 어제보다 나은 개발자가 되고자 노력합니다.",
    text3: "오늘의 나는 요행이 아닌 노력으로 일궈졌음을 알기 때문입니다.",
    cardTitle: "박나현",
    cardName: "JS 개발자",
    cardText1: "✔ 성실함",
    cardText2: "✔ 책임감을 타고남",
    cardText3: "✔ 열정적인 사람",
    cardText4: "✔ 높은 영어구사력",
  },
  about: {
    name: "박나현",
    birth: "1995.03.04",
    address: "경기도 안양시 동안구",
    phone: "01091675977",
    email: "nahyunbak@naver.com",
    univ: "경인교대 초등교육학과",
  },
  skills: {
    frontend: "프론트엔드",
    backend: "백엔드",
    version: "버젼관리",
    deployment: "배포",
  },
  projects: {
    first: {
      projectTitle: "개인 포트폴리오",
      projectText1:
        "개인 포트폴리오입니다. Next.js와 Recoil 등 최신 기술과 타입스크립트로 제작했습니다.",
      projectText2:
        "자기소개· 보유 기술· 프로젝트 등의 정보를 효과적으로 유저에게 전달하고자 디자인과 스타일언어, 기술 측면에서 많은 노력을 기울였습니다.",
      projectText3:
        "꼭 써보고 싶었던 Next.js와 ts에 익숙해진 것은 물론이고, 다양한 로직을 짜보면서 새삼스럽게 프로그래밍의 재미를 느꼈던 소중한 프로젝트입니다.",
      skillStack: "✔ 사용 기술: TS, Next.js, React.js",
      deployStack: "✔ 배포: Vercel",
    },
    second: {
      projectTitle: "개인 포트폴리오(구)",
      projectText1:
        "발레를 테마로 제작한 개인 포트폴리오입니다. React.js와 Redux로 제작했습니다.",
      projectText2:
        "리액트와 리덕스 툴킷을 사용하여 만든 첫 포트폴리오라는 점에서 의미가 깊습니다.",
      projectText3:
        "다만 단순한 디자인, 정적인 interaction, 렌더링 속도를 고려하지 않은 코드 등 부족한 부분이 점점 크게 느껴졌습니다. 동시에 직관적인 SEO와 상태관리를 향한 열망도 커졌습니다.",
      projectText4: "하여 현재의 포트폴리오 사이트를 새로 제작하게 되었습니다.",
      skillStack: "✔ 사용 기술: JS, React.js, Redux.js",
      deployStack: "✔ 배포: Netlify",
    },
    third: {
      projectTitle: "글쓰기 앱(백엔드)",
      projectText1:
        " 글쓰기 앱의 백엔드를 구현한 프로젝트입니다. Nest.js와 MongoDB를 사용하여 제작했습니다.",
      projectText2:
        "Nest.js와 TS, 공식문서에 익숙해진 계기가 된 프로젝트였습니다.",
      projectText3:
        "다만 관계가 중시되는 데이터를 처리하는 데 MongoDB를 사용했다는 점, guard 등 기능 이해가 미흡하다는 점에서 아쉬움이 남습니다.",
      projectText4:
        "조만간 RDBMS와 다양한 인증 전략을 사용하여 TDD방식으로 다시 개발하고자 합니다.",
      skillStack: "✔ 사용 기술: Nest.js, MongoDB",
      deployStack: "✔ 배포: AWS EC2, Linux, NGINX",
    },
  },
};

export const englishState = {
  mainTitle: "Kirina's Portfolio",
  lanButton: "한국어로 보기",
  greet: {
    title1: "Hello",
    title2: "I am a",
    title3: "JS developer",
    text1:
      "Passion to my work, strong functionality, and a strict sense of responsibility are my specialties",
    text2:
      "I always try to be a better person than I was yesterday, Since I aware that today's work was done with effort, not by luck.",
    text3: "",
    cardTitle: "Kirina",
    cardName: "JS developer",
    cardText1: "✔ Diligence",
    cardText2: "✔ Strong motivation",
    cardText3: "✔ Passionate worker",
    cardText4: "✔ English proficiency",
  },
  about: {
    name: "Kirina",
    birth: "1995.03.04",
    address: "Gyeonggi-do, Korea",
    phone: "01091675977",
    email: "nahyunbak@naver.com",
    univ: "GNUE",
  },
  skills: {
    frontend: "Frontend",
    backend: "Backend",
    version: "VCS",
    deployment: "Deployment",
  },
  projects: {
    first: {
      projectTitle: "Personal Portfolio",
      projectText1:
        "It's my personal portfolio, made using the latest technologies - Typescript, Next.js and Recoil.",
      projectText2:
        "I put a lot of effort into design, CSS, and technology to effectively deliver information such as self-introduction, technology, and project to users sections",
      projectText3:
        "During this project, not only did I become more familiar with Next.js and TypeScript, but I also felt genuinely pleasant while programming the logic.",
      skillStack: "✔ Skills: TS, Next.js, React.js",
      deployStack: "✔ Deployment: Vercel",
    },
    second: {
      projectTitle: "Personal Portfolio(old)",
      projectText1:
        "It's a ballet-themed personal portfolio, made with React.js and Redux.",
      projectText2:
        "I utilized React and Redux for the first time while making this portfolio",
      projectText3:
        "I felt the lack of design skills, dynamic interactions, and clean code because I didn't care much about rendering speed from the start. At the same time, my desire for intuitive SEO and state management has grown.",
      projectText4: "That's why I created a new portfolio site.",
      skillStack: "✔  Skills: JS, React.js, Redux.js",
      deployStack: "✔ Deployment: Netlify",
    },
    third: {
      projectTitle: "Writing app (backend)",
      projectText1:
        "It is a project that implements the backend of a writing app. I made it using Nest.js and MongoDB.",
      projectText2:
        "It was great chance to get used to reading official documentation, and using TS",
      projectText3: "However, I felt this is not enough",
      projectText4:
        "So in the near future I am going to revise it in a TDD way using RDBMS and various advanced authentication strategies.",
      skillStack: "✔ Skills: Nest.js, MongoDB",
      deployStack: "✔ Deployment: AWS EC2, NGINX",
    },
  },
};

export const lanState = atom({
  key: "lanState",
  default: koreanState,
});
