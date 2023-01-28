import { Layout, FooterLink } from 'fire-ng/lib/interfaces/layout';

export const site = {
    logo: "https://blazed.sirv.com/logo/Beaker-Blue.png",
    nav: [
        {
            text: "Home",
            link: "/home"
        },
        {
            text: "About",
            link: "/about"
        },
        {
            text: "Support",
            link: "/support"
        },
        {
            text: "Contact",
            link: "/contact"
        }
    ],
    burgerVisible: false,
    footerLinks: [
        {
            header: "Company",
            body: [
                {
                    text: "Home",
                    link: "/home"
                },
                {
                    text: "About",
                    link: "/about"
                },
                {
                    text: "Support",
                    link: "/support"
                },
                {
                    text: "Contact",
                    link: "/contact"
                }
            ]
        },
        {
            header: "Platforms",
            body: [
                {
                    text: "Gaming",
                    link: "https://blazed.games/"
                },
                {
                    text: "Social",
                    link: "https://blz.one/"
                },
                {
                    text: "World",
                    link: "https://blazed.world/"
                },
                {
                    text: "Software",
                    link: "https://blazed.software/"
                }
            ]
        },
        {
            header: "Services",
            body: [
                {
                    text: "Governance",
                    link: "https://vexio.quest/"
                },
                {
                    text: "Sales",
                    link: "https://ixis.space/"
                },
                {
                    text: "Publishing",
                    link: "https://blazed.xyz/"
                },
                {
                    text: "Telecom",
                    link: "https://blazed.tel/"
                }
            ]
        }
    ]
} as Layout;
