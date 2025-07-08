const { test, expect, chromium, page } = require("@playwright/test");
const BasicConfig = require("../../BaseConfig"); 
const MRNAUCOMP = require("../../Sources/Salesforce/MRNAUCOMPPWC");
const MRNCOMPRUNBT = require("../../Sources/Salesforce/MRNAUCOMPRUNBT");
const MRNAUCOMPPWC = require("../../Sources/Salesforce/MRNAUCOMPPWC");
const MRNAUCOMPRUNBT = require("../../Sources/Salesforce/MRNAUCOMPRUNBT");
const MRNAUMOTORONLY = require("../../Sources/Salesforce/MRNAUMOTORONLY");

test.beforeEach(async ({ page }) => {
    // Instantiate the BasicConfig class
    const basicConfig = new BasicConfig(page);
    
    // Call the login method from BasicConfig
    await basicConfig.login("ppokhriyal@yamaha-motor-india.com.dev2", "Ymsli@012025");
    
    // Verify that the user is logged in and navigated to the correct page
    await expect(page).toHaveURL(/lightning/);

});

/*     test("YMIMRNAU-COMP-PWC", async function({ page }) {
        // Navigate to the homepage (after login)
        const mrnaucomppwc = new MRNAUCOMPPWC(page)

        // Calling createquote method
        await mrnaucomppwc.YMIMRNAUCOMPPWCPolicy();
        
        // Add a pause if needed, but ideally this should be replaced with assertions
        await page.pause();

    });

 test("YMIMRNAU-COMP-Runabout", async function({ page }) {
        // Navigate to the homepage (after login)
        const mrnaucomprunbt = new MRNAUCOMPRUNBT(page)

        // Calling createquote method
        await mrnaucomprunbt.YMIMRNAUCOMPRUNBTPolicy();
        
        // Add a pause if needed, but ideally this should be replaced with assertions
        await page.pause();

    }); */

     test("YMIMRNAU-Motoronly", async function({ page }) {
        // Navigate to the homepage (after login)
        const mrnaumotoronly = new MRNAUMOTORONLY(page)

        // Calling createquote method
        await mrnaumotoronly.YMIMRNAUMOTORONLYPolicy();
        
        // Add a pause if needed, but ideally this should be replaced with assertions
        await page.pause();

    });



