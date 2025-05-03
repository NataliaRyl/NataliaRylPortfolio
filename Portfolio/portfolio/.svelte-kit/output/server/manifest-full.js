export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "NataliaRylPortfolio/_app",
	assets: new Set([".nojekyll","animation/runcycle.gif","animation/walkcycle.gif","art/bolgin-forest.png","art/bolgin-front.png","art/bolgin-petting.png","art/bolgin-pickaxe.png","art/bolgin-sad.png","art/bolgin-short.png","art/bolgin-side.png","art/bolgin-sleeping.png","art/bolgin-sword.png","art/bolgin.png","art/bow-arrow.png","art/CTA.png","art/design.png","art/med-kit.png","art/shield.png","art/sketch.jpg","art/totto-flowers.png","art/totto-front.png","art/totto-happy.png","art/totto-licking.png","art/totto-scared.png","art/totto-side.png","art/totto-sleeping.png","art/totto.png","CV1.png","CV2.png","game/armyEscape.mp4","game/bg.png","game/gameEnd.png","game/instructions.png","game/mainMenu.png","game/members1.png","game/members2.png","game/playerSpritesheet.png","logo/aguzo.png","logo/aguzoBW.png","logo/aguzoC.png","logo/coc.png","logo/cocBW.png","logo/dbnBW.png","logo/dbnC.png","logo.png","Natalia_Ryl_CV.pdf","profile.jpg","socials/codeberg.png","socials/etsy.png","socials/github.png","socials/gmail.png","socials/linkedin.png","styles/global.css","web/sage-academy/addTopic.png","web/sage-academy/homePage.png","web/sage-academy/mobileAddModule.jpg","web/sage-academy/mobileHome.jpg","web/sage-academy/mobileLR.jpg","web/sage-academy/mobileNav.jpg","web/sage-academy/mobileSignIn.jpg","web/sage-academy/mobileStaffHome.jpg","web/sage-academy/quizPage.png","web/sage-academy/sageAcademy.mp4","web/sage-academy/searchBar.png","web/sage-academy/signIn.png","web/sage-academy/staffHome.png","web/to-do/desktop1.png","web/to-do/desktop2.png","web/to-do/desktop3.png","web/to-do/desktop4.png","web/to-do/desktop5.png","web/to-do/desktop6.png","web/to-do/mobile1.png","web/to-do/mobile2.png","web/to-do/mobile3.png","web/to-do/mobile4.png","web/to-do/mobile5.png","web/to-do/mobile6.png","web/to-do/to-do-desktop.zip","web/to-do/to-do-mobile.zip"]),
	mimeTypes: {".gif":"image/gif",".png":"image/png",".jpg":"image/jpeg",".mp4":"video/mp4",".pdf":"application/pdf",".css":"text/css",".zip":"application/zip"},
	_: {
		client: {start:"_app/immutable/entry/start.DcuwV7kJ.js",app:"_app/immutable/entry/app.BAoU5ouO.js",imports:["_app/immutable/entry/start.DcuwV7kJ.js","_app/immutable/chunks/CBBTUA3E.js","_app/immutable/chunks/Cfg5BBly.js","_app/immutable/chunks/xd9qCxPa.js","_app/immutable/chunks/73IHKmBR.js","_app/immutable/entry/app.BAoU5ouO.js","_app/immutable/chunks/Cfg5BBly.js","_app/immutable/chunks/DvbS9xDQ.js","_app/immutable/chunks/Dkgh9aVg.js","_app/immutable/chunks/DybVm_Xj.js","_app/immutable/chunks/yKtLe-8B.js","_app/immutable/chunks/Bgdrc0Uj.js","_app/immutable/chunks/xd9qCxPa.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/animation",
				pattern: /^\/animation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/art",
				pattern: /^\/art\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/cv",
				pattern: /^\/cv\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/games",
				pattern: /^\/games\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/other-projects",
				pattern: /^\/other-projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
