const { test, expect, chromium, page } = require("@playwright/test");
const BasicConfig = require("../../BaseConfig"); 
const MCNZCOMP = require("../../Sources/Salesforce/MCNZCOMP");
const MCNZTPFT = require("../../Sources/Salesforce/MCNZTPFT");

test.beforeEach(async ({ page }) => {
    // Navigate to the Salesforce login page
    const basicConfig1 = new BasicConfig(page);
    
    // Call the login method from BasicConfig
    await basicConfig1.login("ppokhriyal@yamaha-motor-india.com.dev2", "Ymsli@022025");
    
    // Verify that the user is logged in and navigated to the correct page
    await expect(page).toHaveURL(/lightning/);

});
/*
    test("YMIMCNZ-COMP", async function({ page }) {
        // Navigate to the homepage (after login)
        const mcnzcomp = new MCNZCOMP(page)

        // Calling createquote method
        await mcnzcomp.YMIMCNZCOMPPolicy();
        
        // Add a pause if needed, but ideally this should be replaced with assertions
        await page.pause();

    });
    */

    test("YMIMCNZ-TPFT", async function({ page }) {
        // Navigate to the homepage (after login)
        const mcnztpft = new MCNZTPFT(page)

        // Calling createquote method
        await mcnztpft.YMIMCNZTPFTPolicy();
        
        // Add a pause if needed, but ideally this should be replaced with assertions
        await page.pause();

    });