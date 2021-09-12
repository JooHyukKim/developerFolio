/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
	animated: true // set to false to use static SVG
};

const greeting = {
	username: "Kim, Joo Hyuk",
	title: "매일 한걸음씩",
	subTitle: emoji(
		"A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
	),
	resumeLink:
		"https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
	displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
	github: "https://github.com/saadpasta",
	// linkedin: "https://www.linkedin.com/in/saadpasta/",
	gmail: "beanskobe@gmail.com",
	// gitlab: "https://gitlab.com/saadpasta",
	// facebook: "https://www.facebook.com/saad.pasta7",
	// medium: "https://medium.com/@saadpasta",
	// stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
	// Instagram and Twitter are also supported in the links!
	display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
	title: "What I do",
	subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		)
	],

	/* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "fab fa-html5"
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "fab fa-css3-alt"
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "fab fa-sass"
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "fab fa-js"
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "fab fa-react"
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "fab fa-node"
		},
		{
			skillName: "swift",
			fontAwesomeClassname: "fab fa-swift"
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "fab fa-npm"
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "fas fa-database"
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "fab fa-aws"
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "fas fa-fire"
		},
		{
			skillName: "python",
			fontAwesomeClassname: "fab fa-python"
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "fab fa-docker"
		}
	],
	display: true // Set false to hide this section, defaults to true
};


// Your top 3 proficient stacks/tech experience

const techStack = {
	viewSkillBars: true, //Set it to true to show Proficiency Section
	experience: [
		{
			Stack: "Frontend/Design", //Insert stack or technology you have experience in
			progressPercentage: "90%" //Insert relative proficiency in percentage
		},
		{
			Stack: "Backend",
			progressPercentage: "70%"
		},
		{
			Stack: "Programming",
			progressPercentage: "60%"
		}
	],
	displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


const professionalProjectInfo = {
	display: true,
	title: "Company Project Experience",
	subTitle: "기업 프로젝트 경험",
	schools: [
		{
			schoolName: "나이파이 활용 데이터 생명주기 관리 데이터플로우 프로토타입",
			logo: require("./assets/images/planit-healthcare-Logo.png"),
			subHeader: "#Python #ApacheNifi #Libvips",
			duration: "2021/06 - 2021/07",
			descBullets: [
				"Storage 관리 및 FIle Validation 체크하는 아파치 나이파이 프로세스 프로토타입 개발",
				"비정형 병원 데이터를 정규화하는 아파치 나이파이 프로세스 디자인"
			]
		},
		{
			schoolName: "환자 모니터링 어플리케이션 고도화",
			logo: require("./assets/images/planit-healthcare-Logo.png"),
			subHeader: "#Java #Netty #SpringBoot #SpringMessage #Thymeleaf #PostgreSQL #WebSocket",
			duration: "2021/03 - 2021/05",
			descBullets: [
				"Spring Boot 백엔드 API 추가 및, 수정",
				"Netty 서버의 DataHandler 업데이트",
				"PostgreSQL 쿼리 최적화",
				"WebSocket 기반 실시간 차트 렌더링 구현",
				"환자 정보 카테고리 변화에 따른 도메인 수정",
				"디버깅 (PostgreSQL 서버 다운현상, Javascript 신택스 에러, 엑셀 다운로드 정렬 기능)"
			]
		},
		{
			schoolName: "다중 Jupyter 사용자 서버 고도화",
			logo: require("./assets/images/planit-healthcare-Logo.png"),
			subHeader: "#Python #Tornado #Java #Typescript #Docker #Jenkins #Linux",
			duration: "2020/12 - 2021/02",
			descBullets: [
				"Python Flask API 설계 및 개발 (데이터 전송과 인증)",
				"코드 작성 자동화를 위한 Typescript 기반 주피터 노트북의 익스텐션을 개발.",
				"자바 기반 암호화 모듈의 Python 연동",
				"Docker 컨테이너 이미지 빌드",
				"Jenkins활용 개발, 테스트 환경의 CI/CD 구축"
			]
		},
		{
			schoolName: "병원데이터 사용 관리 서비스 개발",
			logo: require("./assets/images/planit-healthcare-Logo.png"),
			subHeader: "#Java #SpringBoot #Angular #Lombok #MyBatis #MSSQL",
			duration: "2020/10 - 2020/12",
			descBullets: [
				"연구신청 프로세스 도메인 설계",
				"스프링부트 백엔드 API 설계 및 개발 (유저-CRUD, 사용신청서-CRUD, 어드민-CRUD)",
				"Angular 프론트엔드 (HTML, CSS 퍼블리싱 미포함)"
			]
		}
	]
}

const personalProjectInfo = {
	display: true,
	title: "Personal Project Experience",
	subTitle: "개인 프로젝트 경험",
	schools: [
		{
			schoolName: "나이파이 활용 데이터 생명주기 관리 데이터플로우 프로토타입",
			logo: require("./assets/images/self-project.png"),
			subHeader: "#Python #ApacheNifi #Libvips",
			duration: "2021/06 - 2021/07",
			descBullets: [
				"Storage 관리 및 FIle Validation 체크하는 아파치 나이파이 프로세스 프로토타입 개발",
				"비정형 병원 데이터를 정규화하는 아파치 나이파이 프로세스 디자인"
			]
		}
	]
}

const educationInfo = {
	display: true,
	title: "Educational Background",
	subTitle: "교육",
	schools: [
		{
			schoolName: "De La Salle Medical and Health Sciences Institute",
			logo: require("./assets/images/dlshsiLogo.png"),
			subHeader: "의과대학교 재활전공",
			duration: "2010/06 - 2013/0",
			descBullets: [
				"Physics, Mathematics, Psychology, Anatomy, Biology, Anatomy, Health Care Management, etc...",
				"물리학, 수학, 심리학, 해부학, 생물학, 해부학, 헬스 케어 매니지먼트, etc...."
			]
		},{
			schoolName: "De La Salle Santiago Zobel School",
			logo: require("./assets/images/dlszLogo.png"),
			subHeader: "고등학교",
			duration: "2007/04 - 2010/04",
			descBullets: [
				"학력 우수 장학금 : 2008/04 - 2010/04",
				"오케스트라 색소폰 파트 리더"
			]
		}
	]
}

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
	showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
	display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
	title: "Big Projects",
	subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
	projects: [
		{
			image: require("./assets/images/saayaHealthLogo.webp"),
			projectName: "Saayahealth",
			projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			footerLink: [
				{
					name: "Visit Website",
					url: "http://saayahealth.com/"
				}
				//  you can add extra buttons here.
			]
		},
		{
			image: require("./assets/images/nextuLogo.webp"),
			projectName: "Nextu",
			projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			footerLink: [
				{
					name: "Visit Website",
					url: "http://nextu.se/"
				}
			]
		}
	],
	display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc



// Blogs Section

const blogSection = {
	title: "Blogs",
	subtitle:
		"With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

	blogs: [
		{
			url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
			title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
			description:
				"Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
		},
		{
			url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
			title: "Why REACT is The Best?",
			description:
				"React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
		}
	],
	display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
	title: "TALKS",
	subtitle: emoji(
		"I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
	),

	talks: [
		{
			title: "Build Actions For Google Assistant",
			subtitle: "Codelab at GDG DevFest Karachi 2019",
			slides_url: "https://bit.ly/saadpasta-slides",
			event_url: "https://www.facebook.com/events/2339906106275053/"
		}
	],
	display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
	title: emoji("Podcast 🎙️"),
	subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

	// Please Provide with Your Podcast embeded Link
	podcast: [
		"https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
	],
	display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
	title: emoji("Kim, Joo Hyuk"),
	subtitle:
		"저에 대해서 더 궁금하시다면 언제든지 알려주세요!",
	phone_number: "+82-010-3158-3977",
	residency: "Seoul, Korea",
	email_address: "beanskobe@gmail.com"
};

// Twitter Section

const twitterDetails = {
	userName: "twitter", //Replace "twitter" with your twitter username without @
	display: true // Set true to display this section, defaults to false
};

const achievementSection = {
	title: emoji("Achievements and Certifications 🏆 "),
	subtitle:
		"자격증 & 수료증",

	achievementsCards: [
		{
			title: "AWS Certified Developer – Associate",
			subtitle: "AWS 공인 개발자-어소시에이트 자격증",
			image: require("./assets/images/aws-developer-associate.png"),
			footerLink: [
				{
					name: "자격증 보기",
					url: "https://drive.google.com/file/d/1ahWvcQd6XO48ucUwXoEvf2BKMlKfruxr/view?usp=sharing"
				},
				{name : "인증하기 w/ Credly.com", url:"https://www.credly.com/badges/fced76ab-5c42-41c5-8853-6af613c649af/public_url"},
				{
					name: "Description 보기",
					url: "https://aws.amazon.com/certification/certified-developer-associate/"
				}
			]
		},
		{
			title: "IBM",
			subtitle: "IBM 주관 Coursera 교육 과정 : Data Visualization with Python ( Python Programming / Data Virtualization / Data Visualization / Matplotlib )",
			
			image: require("./assets/images/coursera-ibm.png"),
			footerLink: [
				{
					name: "수료증 보기",
					url: "https://drive.google.com/file/d/1FxHOFeugkBR_Z8sZHZ7iQXVJghd634sJ/view?usp=sharing"
				},
				{ name: "Description 보기", url: "https://www.coursera.org/learn/python-for-data-visualization" }
			]
		},
		{
			title: "IBM",
			subtitle: "What is Data Science?",
			image: require("./assets/images/coursera-ibm.png"),
			footerLink: [
				{
					name: "수료증",
					url: "https://drive.google.com/file/d/11WkM5TNLktrk4cj3fqOuUyBub_p0yPbt/view?usp=sharing"
				}, {
					name: "Description 보기"
					, url: "https://www.coursera.org/learn/what-is-datascience"
				},
			]
		}
	],
	display: true // Set false to hide this section, defaults to true
};

const workExperiences = {
	display: true, //Set it to true to show workExperiences Section
	title : "Career",
	subTitle:"경력사항",
	experience: [
		{
			company: "플랜잇 헬스케어",
			companylogo: require("./assets/images/planit-healthcare-Logo.png"),
			role: "백엔드 개발자",
			date: "10/2020 - Present",
			desc: "\"Making Healthcare Data Work\"",
			descBullets: [
				"백엔드 : Java, Spring, JPA, MyBatis, SpringSecurity, Gradle, Maven",
				"프론트엔드 : Angular, Thymeleaf",
				"CI/CD : Jenkins, Github",
				"Others : Jhipster"
			]
		}, {
			role: "빅데이터 플랫폼 엔지니어",
			companylogo: require("./assets/images/playdata-encore.png"),
			company: "엔코어 아카데미",
			date: "04/2020 - 09/2020",
			desc: "6개월 교육과정 수료. (웹개발 + 데이터 사이언스)",
			descBullets: [
				"백엔드 : Java, SpringBoot, SpringMVC, OOP, 디자인패턴 ",
				"프론트엔드 : HTML, CSS, Javascript, Vue.js, JSP, Thymeleaf",
				"데이터 사이언스 : Python, Tensorflow, PyTorch"
			]
		}, {
			role: "애자일 개발 방법론 개념과 활용",
			companylogo: require("./assets/images/inflearnLogo.jpeg"),
			company: "인프런",
			date: "06/2020",
			desc: "인프런 주관 오프라인 워크샵",
			descBullets: [
				"애자일 방법론 개념",
				"애자일 개발 방법 활용",
				"애자일 개발 실습",
				"스크럼 프레임워크",
			]
		}
	]
};


export {
	illustration,
	greeting,
	socialMediaLinks,
	skillsSection,
	educationInfo, professionalProjectInfo, personalProjectInfo,
	techStack,
	workExperiences,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo,
	twitterDetails
};
