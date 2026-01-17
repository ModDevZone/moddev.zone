import navbar from './navbar.mjs';

export default {
    lang: 'en-GB',
    title: 'Mod Dev Zone',
    icon: 'logos/mdz-logo.png',
    description: 'The home of the Mod Dev Zone community, modding together in the zone!',
    cleanUrls: true,
    srcDir: './src',

    themeConfig: {
        // Set up social links in the navbar next to the theme toggle.
        socialLinks: [
            {icon: 'github', link: 'https://github.com/moddevzone'},
            {icon: 'discord', link: 'https://discord.moddev.zone'},
        ],

        // Allow searching local site contents.
        search: {
            provider: 'local',
        },

        // Set the last updated time on posts/docs.
        lastUpdated: {
            text: 'Last updated',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium',
            },
        },

        // Disable "previous" and "next" doc footer buttons.
        docFooter: {
            prev: false,
            next: false,
        },

        // Provide an "Edit this page" link on posts/docs.
        editLink: {
            pattern: 'https://github.com/moddevzone/moddev.zone/edit/dev/src/:path',
            text: 'Contribute to this page on GitHub'
        },

        // The footer notice for the entire site.
        footer: {
            message: 'Modding together in the zone!',
            copyright: 'Copyright © 2016 - 2026 Mod Dev Zone, All Rights Reserved.',
        },

        // The navbar for the entire site.
        nav: navbar,

        // The sidebar holds quick jump-to links to different parts of the same page.
        sidebar: {
            '/docs/guides/moddevzone': [
                {
                    text: 'Mod Dev Zone Documents',
                    items: [
                        {text: 'Getting Started', link: '/docs/moddevzone'}
                    ]
                }
            ],

            '/docs/moddevzone/': [
                {
                    text: 'Mod Dev Zone',
                    items: [
                        {text: 'About Us', link: '/docs/moddevzone'},
                        {text: 'Code of Conduct', link: '/docs/moddevzone/coc'},
                        {text: 'Discord Tips', link: '/docs/moddevzone/discord-tips'}
                    ]
                }
            ],

            '/docs/guides/hytale': [
                {
                    text: 'Hytale Modding Guides',
                    items: [
                        {text: 'Getting Started', link: '/docs/guides/hytale/'},
                        {text: 'Useful Resources', link: '/docs/guides/hytale/resources'},
                        {text: 'Build System', link: '/docs/guides/hytale/build-system'}
                    ]
                }
            ],

            '/docs/guides/minecraft': [
                {
                    text: 'Minecraft Modding Guides',
                    items: [
                        {text: 'Getting Started', link: '/docs/guides/minecraft/'},
                        {text: 'Useful Resources', link: '/docs/guides/minecraft/resources'},
                        {text: 'Build System', link: '/docs/guides/minecraft/build-system'}
                    ]
                }
            ]
        }
    }
};
