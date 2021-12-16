/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import {
	podcastSection,
	skillsSection,
	talkSection,
	techStack,
	bigProjects
} from "./portfolio-unused";

const illustration = {
	animated: true
};

const twitterDetails = {
	userName: "twitter",
	display: false
};

const openSource = {
	showGithubProfile: "true",
	display: true
};

const greeting = {
	username: "Kim, Joo Hyuk",
	title: "매일 한걸음씩",
	subTitle: emoji(
		"A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
	),
	resumeLink:
		"https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
	displayGreeting: false
};

const blogSection = {
	title: "Project Experience",
	subtitle:
		"꾸준히 프로젝트 및 개발 경험을 쌓아가고 있습니다.",
	blogs: [
		{
			url: "https://github.com/f-lab-edu/in-bob-we-trust",
			title: "In Bob We Trust (우리는 밥을 믿습니다.)",
			description: "우아한 중계서비스",
			descBullets: [
				"배달의민족 중계서비스 개발 프로젝트",
				"서버 배포 & 프로세스 자동화",
				"성능 테스트 & 튜닝",
				"모니터링 & 트러블 슈팅"
			]
		}
	],
	display: true
};

const socialMediaLinks = {
	github: "https://github.com/JooHyukKim",
	linkedin: "https://www.linkedin.com/in/joo-hyuk-kim/",
	gmail: "beanskobe@gmail.com",
	tistory: {
		href: "https://vince-kim.tistory.com/",
		image: {
			src: require("./assets/images/tistoryLogo.png")
		}
	},
	medium:"https://medium.com/@beanskobe",
	display: true // Set true to display this section, defaults to false
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
			duration: "2021/06 - 2021/10",
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
			// logo: require("./assets/images/self-project.png"),
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
		}, {
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


const contactInfo = {
	title: emoji("Kim, Joo Hyuk"),
	subtitle:
		"소프트웨어 장인을 목표하는 개발자 김주혁입니다.",
	phone_number: "",
	residency: "Seoul, Korea",
	email_address: "beanskobe@gmail.com"
};

const achievementSection = {
	title: emoji("Achievements and Certifications 🏆 "),
	subtitle:
		"자격증 & 수료증",
	achievementsCards: [
{
			title: "Java & SpringBoot로 시작하는 웹 프로그래밍",
			subtitle: "KDC와 FastCampus 의 백엔드개발자 실무교육과정",
			image: require("./assets/images/fastcampus.png"),
			footerLink: [
				{
					name: "수료증",
					url: "https://drive.google.com/file/d/1J8jCv1dfnoK5l512aPBu1R8lULcrWwuX/view?usp=sharing"
				},{
					name: "커리큘럼",
					url: "https://drive.google.com/file/d/1rv9tneUnK7jKphhnWqzcdpo-tYHSZSrA/view?usp=sharing"
				}
			]
		},
		{
			title: "AWS Certified Solutions Architect - Associate",
			subtitle: "AWS 솔루션 아키텍트 - 어소시에이트 자격증",
			image: require("./assets/images/aws-saa.png"),
			footerLink: [
				{
					name: "자격증",
					url: "https://drive.google.com/file/d/1OEOCNGgmF7UudvJaJ2zq7Yoxj-i0eC1L/view?usp=sharing"
				},
				{ name: "인증 w/ Credly.com", url: "https://www.credly.com/earner/earned/badge/16dde73b-636f-425d-a129-095e4db96ca6" },
				{
					name: "설명",
					url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
				}
			]
		},
		{
			title: "AWS Certified Developer – Associate",
			subtitle: "AWS 공인 개발자 - 어소시에이트 자격증",
			image: require("./assets/images/aws-developer-associate.png"),
			footerLink: [
				{
					name: "자격증",
					url: "https://drive.google.com/file/d/1ahWvcQd6XO48ucUwXoEvf2BKMlKfruxr/view?usp=sharing"
				},
				{ name: "인증 w/ Credly.com", url: "https://www.credly.com/badges/fced76ab-5c42-41c5-8853-6af613c649af/public_url" },
				{
					name: "설명",
					url: "https://aws.amazon.com/certification/certified-developer-associate/"
				}
			]
		},
		{
			title: "IBM & Coursera Training : Data Visualization with Python",
			subtitle: "파이썬 문법 / 데이터 전처리 / 데이터 시각화",

			image: require("./assets/images/coursera-ibm.png"),
			footerLink: [
				{
					name: "수료증",
					url: "https://drive.google.com/file/d/1FxHOFeugkBR_Z8sZHZ7iQXVJghd634sJ/view?usp=sharing"
				},
				{ name: "설명", url: "https://www.coursera.org/learn/python-for-data-visualization" }
			]
		},
		{
			title: "IBM & Coursera Training : What is Data Science?",
			subtitle: "데이터 사이언스 기초",
			image: require("./assets/images/coursera-ibm.png"),
			footerLink: [
				{
					name: "수료증",
					url: "https://drive.google.com/file/d/11WkM5TNLktrk4cj3fqOuUyBub_p0yPbt/view?usp=sharing"
				}, {
					name: "설명"
					, url: "https://www.coursera.org/learn/what-is-datascience"
				},
			]
		}
	],
	display: true // Set false to hide this section, defaults to true
};

const workExperiences = {
	display: true, //Set it to true to show workExperiences Section
	title: "Career",
	subTitle: "경력사항",
	experience: [
	        {
    			company: "Train @F-Lab",
    			companylogo: require("./assets/images/flab-logo.png"),
    			role: "Java Backend ",
    			date: "11/2020 - Present",
    			desc: "Java Backend 멘토링 프로그램",
    			descBullets: [
    				"\"실력과 타이틀, 경험을 모두 갖춘 업계 최고 수준의 개발자분들의 멘토링\"",
    				"백엔드 개발 이론학습",
    				"서버 배포 & 프로세스 자동화",
    				"성능 테스트 & 성능 튜닝",
    				"모니터링 & 트러블 슈팅",
    				"가상화 등 기술 적용"
    				]
    		},{
			company: "Work @플랜잇헬스케어",
			companylogo: require("./assets/images/planit-healthcare-Logo.png"),
			role: "백엔드 엔지니어",
			date: "10/2020 - 11/2021",
			desc: "\"Making Healthcare Data Work\"",
			descBullets: [
				"연구검색엔진 솔루션 개발 및 고도화 작업",
				"BI/CI 지표 및 통합경영대시보드 소프트웨어 운영 개발",
				"국책과제 관련 소프트웨어 개발"]
		}, {
			company: "Train @엔코어아카데미",
			role: "빅데이터 플랫폼 엔지니어",
			companylogo: require("./assets/images/playdata-encore.png"),
			date: "04/2020 - 09/2020",
			desc: "6개월 교육과정 수료. (웹개발 + 데이터 사이언스)",
			descBullets: [
				"백엔드 (자바, 스프링)",
				"프론트엔드 기초",
				"데이터 사이언스 기초"
			]
		}, {
			company: "Train @인프런",
			role: "애자일 개발 방법론 개념과 활용",
			companylogo: require("./assets/images/inflearnLogo.png"),
			date: "06/2020",
			desc: "인프런 워크샵",
			descBullets: [
				"애자일 방법론 개념",
				"애자일 개발 방법 활용",
				"애자일 개발 실습",
				"스크럼 프레임워크",
			]
		}
	]
};

const extraWorkExperience = {
	display: true, //Set it to true to show workExperiences Section
	title: "Extra Work Experience",
	subTitle: "기타경력사항",
	experience: [
		{
			title: "Woodworks Joinery (우드웍스 조이너리)",
			image: require("./assets/images/woodworx.png"),
			role: "Senior Cabinet Maker",
			date: "06/2018 - 04/2019",
			desc: "시드니, 호주",
			descBullets: [
				"제품 품질 관리",
				"프로젝트 디자인 및 설계 관리",
				"가구 제작"
			]
		}, {
			title: "부엌가구",
			role: "인테리어 시공팀장",
			image: require("./assets/images/hanssem.png"),
			date: "01/2016 - 05/2018",
			desc: "제주도, 한국",
			descBullets: [
				"부엌 & 가구 시공",
				"A/S 관리",
				"프로젝트 관리"
			]
		}
	]
};


export {
	illustration,
	greeting,extraWorkExperience,
	educationInfo, professionalProjectInfo, personalProjectInfo,
	workExperiences,
	openSource,
	achievementSection,
	blogSection,
	contactInfo,
	twitterDetails,
	podcastSection,
	skillsSection,
	talkSection,
	techStack,
	socialMediaLinks,
	bigProjects
};
