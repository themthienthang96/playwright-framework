import { Browser, BrowserContext, chromium, Page } from "playwright";
import Enviroment from "../../Utility/enviroments";
import AdminPage from "../../Pages/AdminPage";
import Reports from "../../Utility/reports";
import HomePage from "../../Pages/HomePage";
import Helpers from "../../Utility/helpers";

declare const page: Page;
declare const reporter:any;
describe("TC001",() => {
    let loginPage:AdminPage;
    let homePage:HomePage;
    beforeAll(async () => {
        await page.goto(Enviroment.testEnviroment) 
        loginPage = new AdminPage(page);
        homePage = new HomePage(page);
    });    
    test('Login Success',async () => {
        reporter
                .description("Feature should work cool")
                .story("TC_001");
        reporter.startStep("Input ID");
        await loginPage.idField("admin@admin.com");
        await Reports.screenShot("ID Input")
        reporter.endStep();

        reporter.startStep("Input Password");
        await loginPage.passwordField("123");
        reporter.endStep();

        reporter.startStep("Click Action");
        await loginPage.clickAction();   
        await Helpers.waitForSecond(9000);
        reporter.endStep();
        
        
        reporter.startStep("Click Action");
        await homePage.clickToProperty();  
        reporter.endStep();
    })
    
    afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();
    })
    
})

