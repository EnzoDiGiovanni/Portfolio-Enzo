export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["CV_Enzo_DG.pdf","favicon/apple-touch-icon.png","favicon/favicon-48x48.png","favicon/favicon.ico","favicon/favicon.svg","favicon/web-app-manifest-192x192.png","favicon/web-app-manifest-512x512.png","images/JavaScript.webp","images/Sass.webp","images/Title.svg","images/Wave.webp","images/Wordpress.webp","images/arcadegame.webp","images/booklist.png","images/cool.webp","images/dark-logo.ico","images/dark-logo.webp","images/dataCloud.webp","images/figma.webp","images/firstPortfolio.webp","images/github.svg","images/light-logo.ico","images/light-logo.webp","images/logo_edg.svg","images/logo_edg.webp","images/mds.webp","images/php.webp","images/pokedex.webp","images/profilpic.webp","images/python.webp","images/restapi.png","images/sql.webp","images/square1.png","images/square2.webp","images/test.webp","images/vague.svg","site.webmanifest"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.CqdQTZgb.js","app":"_app/immutable/entry/app.vqxV6To_.js","imports":["_app/immutable/entry/start.CqdQTZgb.js","_app/immutable/chunks/entry.COEQylk5.js","_app/immutable/chunks/index-client.BI897J1K.js","_app/immutable/chunks/runtime.Cyz8FRI6.js","_app/immutable/entry/app.vqxV6To_.js","_app/immutable/chunks/runtime.Cyz8FRI6.js","_app/immutable/chunks/render.cyL3SmsA.js","_app/immutable/chunks/disclose-version.BxytZ1Ma.js","_app/immutable/chunks/if.CSrkskB7.js","_app/immutable/chunks/proxy.W9PzAEZZ.js","_app/immutable/chunks/props.BIGaE-L6.js","_app/immutable/chunks/store.Dbg3CWJg.js","_app/immutable/chunks/index-client.BI897J1K.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
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
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
