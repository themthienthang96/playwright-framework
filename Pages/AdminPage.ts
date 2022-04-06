import {Page} from "playwright"
import HomePage from "./HomePage";
export default class AdminPage{

    private page:Page;

    constructor(page:Page){
        this.page = page;
    }

    public async idField(id:string){
        const idField = await this.page.$('xpath=/html/body/div/div/div/div[2]/div/form/div[1]/input')
        if(idField != null){
            await idField.fill(id);
        }else throw new Error("No Element")
    }

    public async passwordField(password:string){
        const passwordField = await this.page.$('xpath=/html/body/div/div/div/div[2]/div/form/div[2]/input')
        if(passwordField != null){
            await passwordField.fill(password);
        }else throw new Error("No Element")
    }
    public get loginBtn(){
        const loginBtn = this.page.$('xpath=/html/body/div/div/div/div[2]/div/form/div[4]/div/button')
        if(loginBtn != null){
            return loginBtn;
        }else throw new Error("No Element")
    }
    public async clickAction(){
        const loginBtn = await this.loginBtn
        await loginBtn?.click
    }
}