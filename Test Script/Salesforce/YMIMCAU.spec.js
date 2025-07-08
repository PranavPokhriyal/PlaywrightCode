const { test, expect, chromium, page } = require("@playwright/test");
const BasicConfig = require("../../BaseConfig"); 
const MCCOMP = require("../../Sources/Salesforce/MCAUCOMP");
const MCTPFT = require("../../Sources/Salesforce/MCAUTPFT");
const MCTPO = require("../../Sources/Salesforce/MCAUTPO");
const MCOFFROAD = require("../../Sources/Salesforce/MCAUOFFROAD");

test.beforeEach(async ({ page }) => {
    // Instantiate the BasicConfig class
    const basicConfig = new BasicConfig(page);
    
    // Call the login method from BasicConfig
    await basicConfig.login("ppokhriyal@yamaha-motor-india.com.dev2", "Ymsli@012025");
    
    // Verify that the user is logged in and navigated to the correct page
    await expect(page).toHaveURL(/lightning/);

});
/*
    test("YMIMCAU-COMP", async function({ page }) {
        // Navigate to the homepage (after login)
        const mccomp = new MCCOMP(page)

        // Calling createquote method
        await mccomp.YMIMCAUCOMPPolicy();
        
        // Add a pause if needed, but ideally this should be replaced with assertions
        await page.pause();

    });
*/

/*
    test("YMIMCAU-TPFT", async function({ page }) {
        // Navigate to the homepage (after login)
        const mctpft = new MCTPFT(page)

        // Calling createquote method
        await mctpft.YMIMCAUTPFTPolicy();
        
        // Add a pause if needed, but ideally this should be replaced with assertions
        await page.pause();

    });

*/

/*
    test("YMIMCAU-TPO", async function({ page }) {
        // Navigate to the homepage (after login)
        const mctpo = new MCTPO(page)
      

        // Calling Policy method
        await mctpo.YMIMCAUTPOPolicy();
        await page.pause();
        
        // Add a pause if needed, but ideally this should be replaced with assertions
        

    });
*/

    test("YMIMCAU-OFFROAD", async function({ page }) {
        // Navigate to the homepage (after login)
        const mcoffroad = new MCOFFROAD(page)
      

        // Calling Policy method
        await mcoffroad.YMIMCAUOFFROADPolicy();
        await page.pause();
        
        // Add a pause if needed, but ideally this should be replaced with assertions
        

    });











