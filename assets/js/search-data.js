// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-permanent-withdrawal-from-sogang-university-major-computer-science-and-engineering",
          title: 'Permanent withdrawal from Sogang University (major: Computer Science and Engineering)',
          description: "",
          section: "News",},{id: "news-matriculated-into-korea-university-major-computer-science-and-engineering",
          title: 'Matriculated into Korea University (major: Computer Science and Engineering)',
          description: "",
          section: "News",},{id: "news-served-as-computer-operations-in-republic-of-korea-air-force-worked-in-korean-air-and-space-operations-center-kaoc",
          title: 'Served as Computer Operations in Republic of Korea Air Force. Worked in Korean...',
          description: "",
          section: "News",},{id: "news-started-my-position-as-associate-researcher-in-medicalai",
          title: 'Started my position as Associate Researcher in MedicalAI',
          description: "",
          section: "News",},{id: "news-started-as-club-president-in-akussa-associations-of-korea-university-students-studying-abroad",
          title: 'Started as club president in AKUSSA (Associations of Korea University Students Studying Abroad)...',
          description: "",
          section: "News",},{id: "projects-ai-coloring-design-for-child-counseling",
          title: 'AI Coloring Design For Child Counseling',
          description: "Data Youth Campus @Korea University",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-aitia-series-monitoring-system",
          title: 'Aitia-Series Monitoring System',
          description: "internship project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-nq-dpr-hard-benchmark",
          title: 'NQ-DPR-hard Benchmark',
          description: "Natural Language Processing(COSE461) @Korea University",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-ci-cd-automated-pipeline",
          title: 'CI/CD Automated Pipeline',
          description: "pipeline for semantic-release versioning in Gitlab",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
