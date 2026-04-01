import { Locator, Page } from "@playwright/test";

export class testPage {
    private textbox: Locator;

    constructor(page: Page) {
        this.textbox = page.getByRole('link', { name: 'Get started' })
    }
    async clickTextbox() {
        await this.textbox.click();
    }
}