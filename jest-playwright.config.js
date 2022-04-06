module.exports = {
    // Change to Firefox if you want run TC via Firefox
    browser: ["chromium"],
    launchType:"LAUNCH",    
    contextOptions:{
        viewport: null,
        acceptDownloads: true,
        recordVideo: {dir: "./videos" }
    },
    exitOnPageError:true,
    launchOptions:{
        baseURL:"http://terrace.asto-system.biz",
        headless: false
    }
}