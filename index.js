const data_wrapper = document.getElementById("data_wrapper");
const allRenderedCards = document.getElementById("allRenderedCards");
const categoryBtns = document.querySelectorAll(".categoryBtn");

const cards = [
	{
		img: "./icons/twitter.svg",
		title: "AI X (Twitter) Bio Generator",
		description:
			"Get a standout X (Twitter) bio that's all you, all unique in seconds.",
		type: ["popular", "socialBio"],
		availableFor: "FREE",
		id: "1",
		url: "",
	},
	{
		img: "./icons/fb.svg",
		title: "AI Facebook Bio Generator",
		description:
			"Upgrade your Facebook bio with AI's creative touch for a standout profile!",
		type: ["socialBio"],
		availableFor: "FREE",
		id: "2",
		url: "",
	},
	{
		img: "./icons/insta.svg",
		title: "AI Instagram Bio Generator",
		description:
			"Upgrade your Instagram bio with AI's creative touch for a standout profile.",
		type: ["popular", "socialBio"],
		availableFor: "FREE",
		id: "3",
		url: "",
	},
	{
		img: "./icons/tiktok.svg",
		title: "AI TikTok Bio Generator",
		description:
			"AI-tailored TikTok bios for superior video engagement and growing followership!",
		type: ["socialBio"],
		availableFor: "FREE",
		id: "4",
		url: "",
	},
	{
		img: "./icons/threads.svg",
		title: "AI Threads Bio Generator",
		description:
			"Empower Your Instagram Threads: AI-powered Bios for a Standout Online Presence",
		type: ["socialBio"],
		availableFor: "FREE",
		id: "5",
		url: "",
	},
	{
		img: "./icons/in.svg",
		title: "AI LinkedIn Headline Generator",
		description: "Choose your tone, let AI personalise your LinkedIn Headline.",
		type: ["socialBio"],
		availableFor: "FREE",
		id: "6",
		url: "",
	},
	{
		img: "./icons/in.svg",
		title: "AI Linkedin Company Headline Generator",
		description:
			"Elevate your LinkedIn Company Headline with AI. Craft a concise brand story for maximum impact.",
		type: ["socialBio"],
		availableFor: "FREE",
		id: "7",
		url: "",
	},
	{
		img: "./icons/in.svg",
		title: "AI LinkedIn Summary Generator",
		description:
			"Make your content stand out. Craft LinkedIn summaries with our AI Summary Generator.",
		type: ["socialBio"],
		availableFor: "FREE",
		id: "8",
		url: "",
	},
	{
		img: "./icons/in.svg",
		title: "AI LinkedIn Company Summary Generator",
		description:
			"Get a standout LinkedIn company profile with our AI-crafted summaries.",
		type: ["socialViral"],
		availableFor: "FREE",
		id: "9",
		url: "",
	},
	{
		img: "./icons/fb.svg",
		title: "AI Facebook Page Description Generator",
		description:
			"Drive more traffic with our AI Facebook page description generator, tailored for your business",
		type: ["socialViral", "socialBio"],
		availableFor: "FREE",
		id: "10",
		url: "",
	},
	{
		img: "./icons/insta.svg",
		title: "AI Instagram Caption Generator",
		description:
			"Craft captivating captions for your posts with our Instagram Caption Generator",
		type: ["socialViral", "socialBio"],
		availableFor: "FREE",
		id: "11",
		url: "",
	},
	{
		img: "./icons/twitter.svg",
		title: "AI X (Twitter) Viral Post Generator",
		description:
			"Maximise Twitter presence with X Viral Post Generator. Easy Consistent viral Tweets.",
		type: ["popular", "socialViral"],
		availableFor: "FREE",
		id: "12",
		url: "",
	},
	{
		img: "./icons/twitter.svg",
		title: "AI X (Twitter) Thread Generator",
		description:
			"Eliminate writer's block for X Threads with our Twitter presence-maximising tool.",
		type: ["popular", "socialViral"],
		availableFor: "FREE",
		id: "13",
		url: "",
	},
	{
		img: "./icons/twitter.svg",
		title: "AI X (Twitter) Long Post Generator",
		description:
			"X Long Post Generator: Elevate your Twitter presence with in-depth, engaging posts",
		type: ["socialViral"],
		availableFor: "FREE",
		id: "14",
		url: "",
	},
	{
		img: "./icons/in.svg",
		title: "AI LinkedIn Viral Post Generator",
		description:
			"No more character limits on LinkedIn! Try Long Post Generator for captivating, extended posts.",
		type: ["popular"],
		availableFor: "FREE",
		id: "15",
		url: "",
	},
	{
		img: "./icons/fb.svg",
		title: "AI Facebook Ad Headline Generator",
		description:
			"Make FB ads headline compelling with our FB Ad Headline Generator, effortlessly!",
		type: ["ads"],
		availableFor: "FREE",
		id: "16",
		url: "",
	},
	{
		img: "./icons/fb.svg",
		title: "AI Facebook Ad Primary Text Generator",
		description:
			"Enhance your FB ads with our Primary Text Generator. Craft Them effortlessly.",
		type: ["ads"],
		availableFor: "FREE",
		id: "17",
		url: "",
	},
	{
		img: "./icons/google.svg",
		title: "AI Google Ads Headline Generator",
		description:
			"Boost your ads with Ad Headlines Generator- attention-grabbing headlines effortlessly.",
		type: ["ads"],
		availableFor: "FREE",
		id: "18",
		url: "",
	},
	{
		img: "./icons/google.svg",
		title: "AI Google Ads Description Generator",
		description:
			"Boost your Google Ads with compelling descriptions. Craft standout ads effortlessly.",
		type: ["ads"],
		availableFor: "FREE",
		id: "19",
		url: "",
	},
	{
		img: "./icons/blog.svg",
		title: "AI Blog Title Generator",
		description:
			"Turn every scroll into a stop—enhance blog visibility with titles that truly engage and resonate with readers.",
		type: ["blog"],
		availableFor: "FREE",
		id: "20",
		url: "",
	},
	{
		img: "./icons/blog.svg",
		title: "AI Blog Ideas Generator",
		description: "Discover unique and captivating blog ideas—quickly with AI.",
		type: ["popular", "blog"],
		availableFor: "FREE",
		id: "21",
		url: "",
	},
	{
		img: "./icons/blog.svg",
		title: "AI Blog Intro Generator",
		description:
			"Capture readers' attention instantly with a tailor-made blog intro—powered by AI.",
		type: ["blog", "popular"],
		availableFor: "FREE",
		id: "22",
		url: "",
	},
	{
		img: "./icons/blog.svg",
		title: "AI Blog Outline Generator",
		description:
			"Create a comprehensive blog blueprint. AI refines titles, sections, and discussion points.",
		type: ["blog"],
		availableFor: "FREE",
		id: "23",
		url: "",
	},
	{
		img: "./icons/blog.svg",
		title: "AI Blog Post Generator",
		description:
			"The future of blogging is here. Engaging, relevant, and AI-crafted to perfection, every single time.",
		type: ["socialBio", "blog", "seo"],
		availableFor: "FREE",
		id: "24",
		url: "",
	},
	{
		img: "./icons/meta.svg",
		title: "AI SEO - Meta Title & Description Generator",
		description:
			"Revamp your web presence with AI-driven SEO optimised titles in mere moments.",
		type: ["seo"],
		availableFor: "FREE",
		id: "25",
		url: "",
	},
	{
		img: "./icons/insta.svg",
		title: "Instagram Photo Resizer",
		description:
			"Effortlessly Resize for Instagram: Choose, Crop, and Post with Ease",
		type: ["image&video", "popular"],
		availableFor: "FREE",
		id: "26",
		url: "",
	},
	{
		img: "./icons/fb.svg",
		title: "Facebook Photo Resizer",
		description:
			"Resize Any Photo for Facebook Perfectly: Quick, Easy, and Hassle-Free",
		type: ["image&video"],
		availableFor: "FREE",
		id: "27",
		url: "",
	},
	{
		img: "./icons/twitter.svg",
		title: "Twitter Photo Resizer",
		description:
			"Resize for X (Twitter) effortlessly. Make every photo a perfect fit.",
		type: ["image&video"],
		availableFor: "FREE",
		id: "28",
		url: "",
	},
	{
		img: "./icons/in.svg",
		title: "LinkedIn Photo Resizer",
		description:
			"Transform Any Image for LinkedIn. Resize with Precision and Ease!",
		type: ["image&video"],
		availableFor: "FREE",
		id: "29",
		url: "",
	},
	{
		img: "./icons/pinterest.svg",
		title: "Pinterest Photo Resizer",
		description:
			"Get Pinterest pins to shine. Resize to perfection, effortlessly.",
		type: ["image&video"],
		availableFor: "FREE",
		id: "30",
		url: "",
	},
	{
		img: "./icons/insta.svg",
		title: "Instagram Video Downloader",
		description:
			"Enjoy Instagram videos offline – fast and simple with our IG Video Downloader.",
		type: ["popular", "image&video"],
		availableFor: "FREE",
		id: "31",
		url: "",
	},
	{
		img: "./icons/youtube.svg",
		title: "YouTube Video Downloader",
		description:
			"Bring YouTube closer. Download videos swiftly, without compromising clarity.",
		type: ["popular", "image&video"],
		availableFor: "FREE",
		id: "32",
		url: "",
	},
	{
		img: "./icons/twitter.svg",
		title: "X (Twitter) Video Downloader",
		description:
			"Enjoy hassle-free, offline video viewing with our Twitter Video Downloader",
		type: ["image&video"],
		availableFor: "FREE",
		id: "33",
		url: "",
	},
	{
		img: "./icons/in.svg",
		title: "Linkedin Video Downloader",
		description:
			"Effortlessly download LinkedIn videos for offline viewing with our LinkedIn Video Downloader",
		type: ["popular", "image&video"],
		availableFor: "FREE",
		id: "34",
		url: "",
	},
	{
		img: "./icons/job.svg",
		title: "AI Job Descriptions Generator",
		description:
			"Modernize Hiring: AI-Enhanced Job Description Generator for Effortless Hiring",
		type: ["popular"],
		availableFor: "FREE",
		id: "35",
		url: "",
	},
	{
		img: "./icons/email.svg",
		title: "AI Sales Email Generator",
		description:
			"Amplify sales pitches with unmatched precision. Ensure your message stands out, guided by AI",
		type: ["email"],
		availableFor: "FREE",
		id: "36",
		url: "",
	},
	{
		img: "./icons/email.svg",
		title: "AI Marketing Email Generator",
		description:
			"Generate impactful marketing emails with ease, capturing your product's essence.",
		type: ["email"],
		availableFor: "FREE",
		id: "37",
		url: "",
	},
	{
		img: "./icons/email.svg",
		title: "AI Product Email Generator",
		description:
			"Simplified product email creation that resonates with recipients.",
		type: ["email"],
		availableFor: "FREE",
		id: "38",
		url: "",
	},
	{
		img: "./icons/email.svg",
		title: "AI Support Email Generator",
		description:
			"Transform customer support with tailored AI responses, ensuring every concern is met with care.",
		type: ["popular", "email"],
		availableFor: "FREE",
		id: "39",
		url: "",
	},
	{
		img: "./icons/email.svg",
		title: "AI IT Email Generator",
		description:
			"Streamline IT-related emails effortlessly. Achieve clarity and quick correspondence.",
		type: ["popular", "email"],
		availableFor: "FREE",
		id: "40",
		url: "",
	},
	{
		img: "./icons/email.svg",
		title: "AI HR Email Generator",
		description: "Say goodbye to the grunt work: HR emails made easy with AI.",
		type: ["popular", "email"],
		availableFor: "FREE",
		id: "41",
		url: "",
	},
	{
		img: "./icons/email.svg",
		title: "AI General Email Generator",
		description:
			"Optimize general email tasks effortlessly with our AI email generator. Simple, yet effective",
		type: ["popular", "email"],
		availableFor: "FREE",
		id: "42",
		url: "",
	},
	{
		img: "./icons/email.svg",
		title: "AI Freestyle Email Generator",
		description:
			"No topic is off-limits. AI-assisted email perfection for every scenario.",
		type: ["popular", "email"],
		availableFor: "FREE",
		id: "43",
		url: "",
	},
	{
		img: "./icons/speaker.svg",
		title: "AI Marketing Campaign URL builder",
		description:
			"Tailor marketing URLs effortlessly with our AI tool for seamless tracking.",
		type: ["popular"],
		availableFor: "FREE",
		id: "44",
		url: "",
	},
	{
		img: "./icons/speaker.svg",
		title: "AI Product Elevator Pitch Generator",
		description:
			"Craft a concise product pitch in seconds, tailored to your unique offering.",
		type: ["popular"],
		availableFor: "FREE",
		id: "45",
		url: "",
	},
];

window.addEventListener("load", () => {
	DisplayAllTheAPI();
});

const DisplayAllTheAPI = (inititals = null) => {
	let data = null;
	if (inititals) {
		data = cards.filter((card) => card.type.includes(inititals));
	} else {
		data = cards;
	}
	renderData(data);
};

categoryBtns.forEach((button) => {
	button.addEventListener("click", () => {
		let value = button.getAttribute("data-value");
		removeBtnBg();
		button.classList.remove("bg-white");
		button.classList.remove("hover:text-lime-700");
		button.classList.add("bg-lime-600");
		button.classList.add("text-white");
		DisplayAllTheAPI(value);
		// text - gray - 700;
	});
});

function removeBtnBg() {
	categoryBtns.forEach((button) => {
		button.classList.remove("bg-lime-600");
		button.classList.remove("text-white");
		button.classList.add("bg-white");
		button.classList.add("hover:text-lime-700");
	});
}

function renderData(data) {
	let cardList = `
  <div class = "card-list grid grid-cols-1 gap-12 m-8 md:grid-cols-2 lg:grid-cols-3 lg:px-20">
    ${data
			.map((item) =>
				createCard(
					item.id,
					item.img,
					item.title,
					item.description,
					item.availableFor,
					item.url
				)
			)
			.join("")}</div>`;
	// console.log(empObj)
	data_wrapper.innerHTML = cardList;
}

function createCard(id, img, title, description, availableFor, url) {
	let temp = `
		<div class="card shadow-2xl p-4 rounded-2xl flex flex-col justify-between">
            <div class="flex justify-between my-4 items-center text-green-700 py-2">
                <img src="${img}" alt="">
                <h4 class="bg-lime-200 rounded-full px-3 text-sm ">${availableFor}</h4>
            </div>

            <h3 class="text-2xl font-semibold text-gray-700">${title}</h3>


            <h5 class="text-sm mb-5">${description}</h5>


            <button
                class="bg-lime-50 p-2 rounded-lg border border-lime-600 text-lime-600 font-semibold hover:bg-lime-700 hover:text-white transition-all duration-300" ><a
                    href="${url}"> Launch FREE App
                    ➔</a></button>

        </div>
    `;
	return temp;
}

{
	/* <div class="card shadow-2xl p-4 rounded-2xl flex flex-col">
            <div class="flex justify-between my-4 items-center text-green-700 py-2">
                <img src="./icons/insta.svg" alt="">
                <h4 class="bg-lime-200 rounded-full px-3 text-sm ">FREE</h4>
            </div>

            <h3 class="text-2xl font-semibold text-gray-700">AI Instagram Bio Generator</h3>


            <h5 class="text-sm mb-5">Upgrade your Instagram bio with AI's creative touch for a standout profile.</h5>


            <button
                class="bg-lime-50 p-2 rounded-lg border border-lime-600 text-lime-600 font-semibold hover:bg-lime-700 hover:text-white"><a
                    href="./biogenerator/instabiogenerator.html"> Launch FREE App
                    ➔</a></button>

        </div> */
}
