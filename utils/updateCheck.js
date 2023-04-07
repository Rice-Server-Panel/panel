const request = require('request');
const currentversion = require("../package.json").version


function checkUpdate() {
    request.get("https://raw.githubusercontent.com/Rice-Server-Panel/Rice-Server-Panel.github.io/main/panel/version.txt", function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const stableVersion = body
            if(currentversion == stableVersion) {
                console.log("[WARNING] Your version is outdated please update your version!")
            } else {
                console.log("[LOG] You are using latest version!")
            }
        } else {
            console.log("[LOG] I can get version website")
        }

    })


}


module.exports.checkUpdate = checkUpdate