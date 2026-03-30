import { test, expect } from "@playwright/test";
import { testPage } from "../pages/testPage";

test("test", async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const testsPage = new testPage(page);
    await testsPage.clickTextbox();
    await expect (page.getByRole('heading', { name: 'Installation' })).toBeVisible();
})