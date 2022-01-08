// .vuepress/config.js

const { path } = require("@vuepress/utils");

module.exports = {
    plugins: [
        ['@vuepress/plugin-shiki', { 'langs': ['asm'] }],
    ],
    title: 'gbdev',
    description: 'game boy development scene',
    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png" }],
    ],
    //base: "/list",
    themeConfig: {
        lastUpdated: false,
        contributors: false,
        navbar: [{
                text: 'Community',
                link: '/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    { link: '/chat', text: 'Chat' },
                    { link: '/contribute', text: 'Contribute' },
                    {
                        link: '/gbcompo21',
                        text: 'GB Competition 2021',
                    }
                ]
            },
            { link: '/list', text: 'Resources' },
            {
                text: 'Guides',
                children: [
                    { link: '/guides/tools', text: 'Choosing development tools' },
                    { link: '/guides/asmstyle', text: 'ASM Style recomendations' },
                    { link: '/guides/lyc_timing', text: 'The Timing of LYC STAT Handlers' },
                    { link: '/guides/deadcscroll', text: 'Dead C Scroll' },
                    { link: '/guides/dma_hijacking', text: 'DMA Hijacking' },
                    { link: 'https://eldred.fr/gb-asm-tutorial', text: 'GB ASM Programming Guide' }
                ]
            }
        ]
    }
}