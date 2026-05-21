const locLogin = require("../locators/locLogin")

class Login {

    constructor(page){
        this.page= page
    }

    async navigateToApplication(BASE_URL){
        await this.page.goto(BASE_URL)
    }
    async loginToApplication(username,password){
        await this.page.fill(locLogin.username,username)
        await this.page.fill(locLogin.password,password)
        await this.page.click(locLogin.LoginButton)
    }

}
module.exports=Login