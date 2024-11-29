export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["CV_Enzo_DG.pdf","favicon/apple-touch-icon.png","favicon/favicon-48x48.png","favicon/favicon.ico","favicon/favicon.svg","favicon/web-app-manifest-192x192.png","favicon/web-app-manifest-512x512.png","images/JavaScript.webp","images/Sass.webp","images/Title.svg","images/Wave.webp","images/Wordpress.webp","images/arcadegame.webp","images/cool.webp","images/dark-logo.ico","images/dark-logo.webp","images/dataCloud.webp","images/figma.webp","images/firstPortfolio.webp","images/github.svg","images/light-logo.ico","images/light-logo.webp","images/logo_edg.svg","images/logo_edg.webp","images/mds.webp","images/php.webp","images/pokedex.webp","images/profilpic.webp","images/python.webp","images/sql.webp","images/square1.png","images/square2.webp","images/test.webp","images/vague.svg","site.webmanifest"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.wwCPBQhS.js","app":"_app/immutable/entry/app.w73GWYB1.js","imports":["_app/immutable/entry/start.wwCPBQhS.js","_app/immutable/chunks/entry.BBnmJjZ5.js","_app/immutable/chunks/index-client.D64eSVxZ.js","_app/immutable/chunks/runtime.BTKzIfWJ.js","_app/immutable/entry/app.w73GWYB1.js","_app/immutable/chunks/runtime.BTKzIfWJ.js","_app/immutable/chunks/render.BDtaNQUw.js","_app/immutable/chunks/disclose-version.BAkT7b9N.js","_app/immutable/chunks/if.C3rJUaKc.js","_app/immutable/chunks/proxy.pV5-LRDJ.js","_app/immutable/chunks/this.DzBTFRoi.js","_app/immutable/chunks/props.B6lFUtoj.js","_app/immutable/chunks/store.DVVLG3vt.js","_app/immutable/chunks/index-client.D64eSVxZ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
