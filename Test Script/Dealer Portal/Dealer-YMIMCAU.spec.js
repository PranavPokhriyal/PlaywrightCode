const { test, expect, chromium, page } = require("@playwright/test");
const BasicConfig = require("../../BaseConfig");
const DealerMCCOMP = require("../../Sources/DealerPortal/DealerMCCOMP");

test.beforeEach(async ({ page }) => {
    // Instantiate the BasicConfig class and specify the system
    const basicConfig = new BasicConfig(page, 'dealerPortal'); // For Dealer Portal
    

    // Call the login method with the appropriate credentials
    await basicConfig.login("yamaha@dealer.com.au.qa2.ymidev2", "test1234");

    // Optionally verify that the user is logged in (depending on your system)
    await expect(page).toHaveURL(/s/);
});

test("YMIMCAU-COMP", async function({ page }) {

     // Navigate to the homepage (after login)
     const dealermccomp = new DealerMCCOMP(page)

     // Calling createquote method
     await dealermccomp.DealerYMIMCAUCOMPPolicy();
    
    // Add a pause if needed, but ideally this should be replaced with assertions
    await page.pause();

});
