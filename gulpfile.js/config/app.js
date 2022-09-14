const isProd = process.argv.includes("--prod");
const isDev = !isProd;
module.exports = {
    isProd: isProd,
    isDev: isDev,
    htmlmin: {
        collapseWhitespace: isProd
    },
    pug: {
        pretty: isDev,
        data: {
            news: require("../../data/news.json"),
            footerLinks: require("../../data/footer-links.json")
        }
    },
    webpack: {
        mode: isProd ? "production" : "development" 
    },
    imagemin: {
        verbose: true
    },
    fonter: {
        formats: ["ttf", "woff", "svg"]
    }
};