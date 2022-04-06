declare const reporter:any;
export default class Reports{
    public static async screenShot(description?:string){
        const screenshotBuffer = await page.screenshot();
        description = description != undefined ? description : "screenshot";
        reporter.addAttachment(description, screenshotBuffer, "image/png"); 
    }
}