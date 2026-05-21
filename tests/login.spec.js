const{test,expect}=require('@playwright/test')
const env = require('../utils/envConfig')
const Login = require('../POM/pomLogin')

test.describe("Login test",()=>{
let login;
test.beforeEach("test action before each ",async({page})=>{
 login = new Login(page)

})
test("login",async ({page})=>{
 
   await login.navigateToApplication(env.BASE_URL)
await page.waitForTimeout(5000)

await login.loginToApplication(env.username,env.password)
await expect(page).toHaveURL(/inventory/)
await page.waitForTimeout(5000)


})
})