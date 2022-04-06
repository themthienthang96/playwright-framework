const { expect } = require('@playwright/test')

export default class Helpers{
    public static async waitForSecond(ms:number){
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
    public static async waitForElement(locator:any){
        await page.locator(locator).waitFor();
    }
    public static async softAssert(locator:any,message:string){
        await expect.soft(page.locator(locator)).toHaveText(message);
    }
    public static async handleDialog(){
        page.on('dialog', dialog => dialog.accept());
        await page.click('button');
    }
    public static async fillInput(locator:any,data:string){
        await page.fill(locator, data);
    }

    public static async checkToCheckbox(locator:any){
        await page.check(locator);
    }
    public static async uncheckToCheckBox(locator:any){
        await page.uncheck(locator);
    }
    public static async selectSingleSelection(locator:any,label:string){
        await page.selectOption(locator, label);
    }
    public static async selectMultipleSelection(locator:any,optionone:string,optiontwo:string){
        await page.selectOption(locator, [locator, optionone, optiontwo]);
    }
    public static async clickAction(locator:any){
        await page.click(locator);
    }
    public static async doubleClickAction(locator:any){
        await page.dblclick(locator);
    }
    public static async rightClick(locator:any){
        await page.click(locator, { button: 'right' });
    }
    public static async hoverOnElement(locator:any){
        await page.hover(locator);
    }
    public static async clickOnCorner(locator:any,x:number,y:number){
        await page.click('#item', { position: { x: x, y: y} });
    }
    public static async typeCharacter(locator:any,character:any){
        await page.type(locator, character);
    }
    public static async hitEnter(locator:any){
        await page.press(locator, 'Enter');
    }
    public static async hitKeyboard(locator:any,key:string){
        await page.press(locator, key);
    }
    //Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,
    //ArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,
    //ArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.

    public static async uploadOneFile(locator:any,file:string){
        await page.setInputFiles(locator, file);
    }
    public static async uploadMultiFile(locator:any,fileOne:string,fileTwo:string){
        await page.setInputFiles(locator, [fileOne, fileTwo]);
    }
    public static async focusElement(locator:any){
        await page.focus(locator);

    }
}