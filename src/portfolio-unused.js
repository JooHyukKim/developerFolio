// Social Media Links
import emoji from "react-easy-emoji";

const socialMediaLinks = {
	github: "https://github.com/JooHyukKim",
	linkedin: "https://www.linkedin.com/in/joo-hyuk-kim-148351218",
	gmail: "beanskobe@gmail.com",
	tistory: {
		href: "https://vince-kim.tistory.com/",
		image: {
			src: require("./assets/images/tistoryLogo.png")
		}
	},
	display: false // Set true to display this section, defaults to false
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
			skillName: "docker",
			fontAwesomeClassname: "fab fa-docker"
		}
	],
	display: false // Set false to hide this section, defaults to true
};


// Your top 3 proficient stacks/tech experience

const techStack = {
	viewSkillBars: false, //Set it to true to show Proficiency Section
	experience: [
		{
			Stack: "Frontend/Design", //Insert stack or technology you have experience in
			progressPercentage: "90%" //Insert relative proficiency in percentage
		}
	],
	displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
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
		}
	],
	display: false // Set false to hide this section, defaults to true
};

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
	display: false 
};
const podcastSection = {
	title: emoji("Podcast 🎙️"),
	subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
	podcast: [
		"https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
	],
	display: false 
};


export {
    socialMediaLinks,
    podcastSection,
    skillsSection,
    talkSection,
    techStack,
    bigProjects,
}