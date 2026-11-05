import type { Translation } from "./en";

// Hungarian draft of en.ts. It translates the same facts and adds none.
export const hu: Translation = {
  brand: {
    lines: [
      [
        { text: "SZÁSZ", accent: true },
        { text: "ISTVÁN", accent: false },
      ],
      [{ text: "{ZOLTÁN}", accent: true }],
    ],
    display: "Szász István Zoltán",
    copyright: "Szász István Zoltán",
  },
  nav: {
    items: {
      home: "Főoldal",
      about: "Rólam",
      skills: "Készségek",
      experience: "Tapasztalat",
      projects: "Projektek",
      contact: "Kapcsolat",
    },
    toggleMenu: "Menü megnyitása vagy bezárása",
    lightMode: "Világos mód",
    hungarian: "Magyar nyelv",
  },
  hero: {
    ariaLabel:
      "Bemutatkozás – Szász István Zoltán, Junior Full-Stack fejlesztő",
    tag: "Személyes weboldal",
    roles: [
      "Mérnökinformatikus",
      "Junior Full-Stack fejlesztő",
      "Frontend specialista",
    ],
    bio: "Junior Full-Stack webfejlesztő Magyarországról, az Óbudai Egyetemen szerzett mérnökinformatikus alapdiplomával.",
    downloadResume: "Önéletrajz letöltése",
    resumeHref: "/document/Resume_HU.pdf",
    resumeFilename: "Szasz_Istvan_Zoltan_Resume_HU.pdf",
    stats: {
      certifications: "Tanúsítvány",
      projects: "Befejezett projekt",
      technologies: "Technológia",
    },
    scroll: "Görgetés",
  },
  about: {
    ariaLabel:
      "Szász István Zoltán bemutatása – háttér, tanulmányok és készségek",
    label: "Rólam",
    headingWhite: "RÓLAM",
    headingAccent: "",
    lead: "Junior Full-Stack fejlesztő vagyok, mérnökinformatikus BSc diplomámat az Óbudai Egyetemen szereztem. Modern webalkalmazások fejlesztésére specializálódtam React, Next.js és TypeScript használatával.",
    body: "Full-stack alkalmazásokat fejlesztettem egyetemi, tanúsítványhoz kapcsolódó és önálló projektekben, a teljes stacken dolgozva a felhasználói felülettől a hibakeresésig és a telepítésig.",
    softSkillsLabel: "Soft skillek",
    softSkills: {
      problemSolving: "Probléma\u00ADmegoldás",
      communication: "Kommunikáció",
      teamwork: "Csapatmunka",
    },
    hobbiesLabel: "Hobbik",
    hobbies:
      "Hobbi főzés , Hardverjavítás (laptopok, PC-k, telefonok és tabletek) , Az F1 és a WEC követése",
    statusLabel: "Státusz",
    status: "Nyitott vagyok új lehetőségekre",
  },
  skills: {
    ariaLabel: "Szász István Zoltán technikai készségei",
    label: "Technikai készségek",
    headingWhite: "TECHNIKAI",
    headingAccent: "KÉSZSÉGEK",
    paragraphs: [
      "Otthonosan mozgok a modern webes stackben – React, Next.js, TypeScript és Node.js –, és skálázható alkalmazásokat készítek reszponzív felülettel, optimalizált teljesítménnyel és éles üzemre kész telepítési folyamatokkal, Docker, Kubernetes és felhőplatformok használatával.",
      "A frontend keretrendszerekben, a backend architektúrában, a mobilfejlesztésben és az olyan feltörekvő technológiákban, mint a 3D grafika és a játékmotorok, szerzett szakértelmemmel átfogó digitális megoldásokat hozok létre, amelyek az esztétikus dizájnt megbízható működéssel ötvözik.",
      "A technikai tudáson túl szenvedélyem az összetett problémák megoldása tiszta, karbantartható kóddal és a gördülékeny felhasználói élmény megteremtése. Követem az iparági trendeket és a bevált gyakorlatokat, és folyamatosan új technológiákat fedezek fel, hogy bővítsem a tudásomat és innovatív megoldásokat nyújtsak.",
    ],
    cta: "Eszközök és technológiák megtekintése",
    cards: {
      1: {
        heading: "Frontend fejlesztés",
        body: [
          "Fejlesztés React, Next.js és TypeScript használatával",
          "Stílusok és animációk Tailwind CSS-sel és Motionnel",
          "Reszponzív webdizájn és mobile-first szemlélet",
          "Keresőoptimalizálás (SEO)",
        ],
      },
      2: {
        heading: "Backend fejlesztés",
        body: [
          "Next.js, Node.js és Express.js szerveroldali fejlesztéshez",
          "REST API-k tervezése és megvalósítása",
          "Hitelesítés, validáció és biztonságos szerveroldali logika",
        ],
      },
      3: {
        heading: "Mobilfejlesztés",
        body: [
          "Többplatformos alkalmazások React Native-vel",
          "Fejlesztés Android Studióval és Expo-val",
          "bevált Mobil UI/UX gyakorlatok",
        ],
      },
      4: {
        heading: "3D fejlesztés",
        body: [
          "3D modellezés Unreal Engine 5-tel és Twinmotion-el",
          "Játékfejlesztés Unreal Engine 5-el",
          "Pályatervezés és világépítés",
          "Blueprints vizuális szkriptelés és C++ programozás",
        ],
      },
      5: {
        heading: "UI/UX dizájn",
        body: [
          "UI tervezési és UX kutatási alapelvek",
          "Dizájnrendszerek és komponenskönyvtárak használata",
          "Reszponzív tervezés asztali gépre, táblagépre és mobilra",
          "Drótvázak és prototípusok készítése Figmában",
        ],
      },
      6: {
        heading: "DevOps",
        body: [
          "GitHub Actions-el automatizált CI/CD folyamatok",
          "Konténerizált alkalmazások Dockerrel",
          "Konténerek vezénylése és skálázása Kubernetesszel",
          "Felhőalapú telepítés és szerver nélküli hosztolás élesített projektekhez",
        ],
      },
      7: {
        heading: "Adatbázisok",
        body: [
          "Relációs adatmodellezés és lekérdezés PostgreSQL-lel és SQL-lel",
          "Dokumentumalapú adattárolás MongoDB-vel és NoSQL-lel",
          "Rugalmas, típusos API-adatlekérés GraphQL-lel",
        ],
      },
    },
  },
  tools: {
    ariaLabel: "Szász István Zoltán által használt eszközök és technológiák",
    label: "Eszközök és technológiák",
    headingWhite: "ESZKÖZÖK ÉS",
    headingAccent: "TECHNOLÓGIÁK",
    description:
      "Nyelvek, keretrendszerek és eszközök, amelyekkel gyors, skálázható és szép termékeket készítek.",
  },
  experience: {
    ariaLabel:
      "Szász István Zoltán munkatapasztalata, tanulmányai és tanúsítványai",
    label: "Tapasztalat",
    headingWhite: "SZAKMAI",
    headingAccent: "TAPASZTALAT",
    description:
      "Átfogó áttekintés szakmai tapasztalatomról, tanulmányaimról és iparági tanúsítványaimról.",
    workLabel: "Munkatapasztalat",
    educationLabel: "Tanulmányok",
    certificationsLabel: "Tanúsítványok",
    work: {
      1: {
        title: "Full-Stack webfejlesztő",
        department: "MolnarCodes",
        description:
          "Ügyfelek weboldalait és webes felületeit optimalizáltam és tettem teljesen reszponzívvá. UI/UX fejlesztéseket javasoltam, és közös egyeztetés után meg is valósítottam őket, valamint SEO-t és GEO-t (Generative Engine Optimization) vezettem be a keresőkben és az MI-alapú keresésben való láthatóság javítására. Önállóan építettem be a Next.js-t, a Tailwind CSS-t, a shadcn/ui-t és a GSAP-et éles projektekbe. Ügyfélkódbázisokat refaktoráltam és hibákat javítottam az olvashatóság, a karbantarthatóság és a teljesítmény javítása érdekében.",
        location: "Távoli",
        type: "2026. márc. – 2026. máj.",
        logoAlt: "MolnarCodes",
      },
    },
    education: {
      1: {
        title: "Mérnökinformatikus (BSc)",
        department: "Óbudai Egyetem – Alba Régia Műszaki Kar",
        description: "",
        location: "Székesfehérvár, Magyarország",
        type: "2019. szept. – 2025. febr.",
        logoAlt: "Óbudai Egyetem",
      },
      2: {
        title: "Érettségi, informatika szakirány",
        department: "Bálint Márton Szakközépiskola",
        description: "",
        location: "Törökbálint, Magyarország",
        type: "2014. szept. – 2019. máj.",
        logoAlt: "Bálint Márton",
      },
    },
    certifications: {
      1: {
        title: "Full-Stack Developer Professional Certificate",
        department: "Microsoft",
        description: "",
        location: "Coursera",
        type: "2025",
        logoAlt: "Microsoft",
      },
      2: {
        title: "Full-Stack JavaScript Developer Professional Certificate",
        department: "IBM",
        description: "",
        location: "Coursera",
        type: "2025",
        logoAlt: "IBM",
      },
      3: {
        title: "Full-Stack Developer Professional Certificate",
        department: "Meta",
        description: "",
        location: "Coursera",
        type: "2024–2025",
        logoAlt: "Meta",
      },
      4: {
        title: "React Native Specialization",
        department: "Meta",
        description: "",
        location: "Coursera",
        type: "2024",
        logoAlt: "Meta",
      },
    },
  },
  projects: {
    ariaLabel: "Szász István Zoltán kiemelt projektjei",
    label: "Projektek",
    headingWhite: "KIEMELT",
    headingAccent: "MUNKÁK",
    viewAll: "Összes megtekintése a GitHubon",
    more: "További projektek",
    onGitHub: (title: string) => `${title} a GitHubon`,
    liveSite: (title: string) => `${title} élő oldal`,
    techLabels: {
      "Responsive Design": "Reszponzív dizájn",
    },
    items: {
      1: {
        title: "A solidfinances.hu frontend fejlesztése",
        category: "Webfejlesztés",
        description:
          "A solidfinances.hu pénzügyi szolgáltatási weboldal frontend fejlesztése a MolnarCodes-nál. React és Tailwind CSS használatával készült, teljesítményre és minden képernyőméretre optimalizálva.",
      },
      2: {
        title: "A mindenegyseg.hu Full-Stack fejlesztése",
        category: "Webfejlesztés",
        description:
          "A mindenegyseg.hu Full-Stack fejlesztése a MolnarCodes-nál. Next.js és Tailwind CSS használatával készült, GSAP animációkkal és Shadcn.ui komponensekkel. Teljesen reszponzív és teljesítményre optimalizált.",
      },
      3: {
        title: "Az egyetemi kampusz szimulációja 3D környezetben",
        category: "3D fejlesztés",
        description:
          "3D oktatási szimuláció, amelyben a felhasználó bejárhatja az Óbudai Egyetem székesfehérvári kampuszát. A szimuláció az Unreal Engine 5 3D grafikus motorral készült, és nagy felbontású textúrái révén a környezet és az épületek valósághűbben hatnak.",
      },
    },
  },
  contact: {
    ariaLabel:
      "Kapcsolatfelvétel Szász István Zoltánnal szabadúszó, teljes munkaidős vagy együttműködési lehetőségek ügyében",
    label: "Kapcsolat",
    srHeading: "Építsünk valami nagyszerűt",
    headingWhite: "ÉPÍTSÜNK",
    headingAccent: "VALAMI NAGYSZERŰT",
    subtitle:
      "Nyitott vagyok szabadúszó projektekre, teljes munkaidős állásokra és izgalmas együttműködésekre.",
    intro:
      "Ha van egy projektötleted, vagy együttműködnél velem, a postaládám mindig nyitva áll. Amint tudok, válaszolok.",
    available: "Új projektekre elérhető",
    emailLabel: "E-mail",
    nameLabel: "Neved",
    namePlaceholder: "Neved",
    addressLabel: "E-mail-cím",
    addressPlaceholder: "E-mail-címed",
    messageLabel: "Üzenet",
    messagePlaceholder: "Mesélj a projektedről...",
    sending: "Küldés...",
    send: "Üzenet küldése",
    errors: {
      required: "Minden mező kitöltése kötelező.",
      send: "Nem sikerült elküldeni az üzenetet. Kérlek, próbáld újra.",
      generic: "Valami hiba történt.",
    },
    sentHeading: "ÜZENET ELKÜLDVE!",
    sentBody: "Köszönöm, hogy írtál! 24 órán belül válaszolok.",
  },
  footer: {
    tagline: "Junior Full-Stack fejlesztő · Érd, Magyarország",
    emailLabel: "E-mail",
    rights: "Minden jog fenntartva.",
    builtWith: "Készült: React · TailwindCSS · Motion",
  },
};
