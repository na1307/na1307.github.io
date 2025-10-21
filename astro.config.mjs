// @ts-check
import {defineConfig} from 'astro/config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: 'https://bluehill.dev',
    build: {
        format: "preserve"
    },
    i18n: {
        locales: ["en", "ko"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: false,
            fallbackType: "rewrite"
        }
    },
    integrations: [sitemap({
        i18n: {
            defaultLocale: 'en',
            locales: {
                en: 'en',
                ko: 'ko'
            }
        }
    })]
});
