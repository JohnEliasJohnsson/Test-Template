import { Locator, Page } from "@playwright/test";

export class testPage {
    private textbox: Locator;

    constructor(page: Page) {
        this.textbox = page.getByRole("textbox").nth(2);
    }
    async clickTextbox() {
        await this.textbox.click();
    }
}