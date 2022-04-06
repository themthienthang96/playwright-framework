import {Page} from "playwright"
export default class HomePage{

    private page:Page;

    constructor(page:Page){
        this.page = page;
    }

    public async clickToProperty(){
        const properties = await this.page.$('xpath=/html/body/div/aside/div/nav/ul/li[1]')
        if(properties != null){
            await properties.click();
        }else throw new Error("No Element")
    }
}