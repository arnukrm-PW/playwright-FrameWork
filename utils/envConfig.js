// const BASE_URL ="https://www.saucedemo.com/" ;

const ENV_URL=
{
    dev:"https://www.saucedemo.com/",
    QA:"https://www.saucedemo.com/",
    Stage:"https://www.saucedemo.com/",
    Prod:"https://www.saucedemo.com/"
}
const ENV = process.env.ENV || "Prod"
const BASE_URL = (ENV_URL)[ENV]
const username = "standard_user";
const password = "secret_sauce";

module.exports={BASE_URL,username,password}