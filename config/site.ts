export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "首页",
			href: "/",
		},
		{
			label: "服务",
			href: "/services",
		},
		{
			label: "关于我们",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "首页",
			href: "/",
		},
		{
			label: "服务",
			href: "/services",
		},
		{
			label: "关于我们",
			href: "/about",
		}
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
