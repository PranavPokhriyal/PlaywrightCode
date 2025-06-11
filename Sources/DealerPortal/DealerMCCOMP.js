const DEALERYMIMCAU = require("../../Pages/DealerPortal/DealerYMIMCAU")
const BasePageActions = require("../../Pages/BasePageActions")
const testData = require('../../Test Data/Test Data'); 
const { savePolicyNumber } = require('../../Policyno Data/PolicyStorage');

class DealerMCCOMP extends BasePageActions {
    constructor(page) {
        super(page);
        this.selectors = new DEALERYMIMCAU(page);  // This should instantiate the DEALERYMIMCAU class
    }

    async DealerYMIMCAUCOMPPolicy() {
    
        // Now use this.selectors to access locators
            await this.safeClick(this.selectors.SelectInsurance, 30000, 'Insurance Tab');
            
            await this.safeClick(this.selectors.ClickcreateQuote, 30000, 'Click Quote Button');
            await this.page.pause();
            await this.safeClick(this.selectors.clickquickquote, 30000, 'Click GET QUICK QUOTE');
            await this.safeEvaluate(this.selectors.scrollaction, 'Scroll to Quick Quote Section');
           
            await this.safeClick(this.selectors.Getquickquote, 300000, 'Click on Quick Quote Image');
            await this.safeClick(this.selectors.ClickNextbutton, 30000, 'Click NEXT Button');
            await this.safeClick(this.selectors.MCroadregisterYES, 30000, 'Select YES for Road Registered');
            await this.safeClick(this.selectors.MC_COVERAGE_REQD, 30000, 'Select COMPREHENSIVE Coverage');
            await this.safeFill(this.selectors.MC_REGISTER_NUMBER, 'NPU84', 30000, 'Enter Register Number');
            await this.safeClick(this.selectors.MC_STATE, 30000, 'Select State');
            await this.safeClick(this.selectors.ClickonNSW, 30000, 'Click on NSW State');
            await this.safeClick(this.selectors.MC_SEARCH, 30000, 'Click Search Button');
            await this.safeClick(this.selectors.MCuseage, 30000, 'Click Usage Dropdown');
            await this.safeClick(this.selectors.SelectPrivate, 30000, 'Select Usage as Private');
            
            await this.safeClick(this.selectors.MCstore, 30000, 'Click Storage Dropdown');
            await this.safeClick(this.selectors.SelectHome, 30000, 'Select Storage as Garaged (Home)');
            
            await this.safeFill(this.selectors.Postcodevalue, '2590', 30000, 'Enter Postcode');
            await this.safeClick(this.selectors.Suburb, 30000, 'Enter Suburb');
            await this.safeClick(this.selectors.Suboption, 30000, 'Select Suburb Option');
            
            await this.safeClick(this.selectors.MC_PRIMARYRIDER_YES, 30000, 'Select YES for Primary Rider');
            // or
            // await this.safeClick(this.selectors.MC_PRIMARYRIDER_NO, 30000, 'Select NO for Primary Rider');
           
            await this.safeClick(this.selectors.MC_RIDING_YEARS, 30000, 'Click Riding Years Dropdown');
            await this.safeClick(this.selectors.Selectridingyr, 30000, 'Select Riding Experience Year');
            
            await this.page.pause();
            await this.safeClick(this.selectors.MC_DOB, 30000, 'Enter Date of Birth');
            await this.safeSelectOption('#select-01-302', '1993', 30000, 'Select year 1993 in DOB picker');
            await this.safeClick(this.selectors.SelectDOBmonthdate, 30000, 'Select DOB Month & Date');
            

            await this.safeClick(this.selectors.MC_LICENSE_YES, 30000, 'Select YES for Driving Licence');
            // or
            // await this.safeClick(this.selectors.MC_LICENSE_NO, 30000, 'Select NO for Driving Licence');
            
            await this.safeClick(this.selectors.MC_LICENSE_HISTORY, 30000, 'Click Licence History Dropdown');
            
           // await this.safeClick(this.selectors.MC_CLAIM_FAULT_YES, 30000, 'Select YES for Claim in Last 3 Years');
            // or
            await this.safeClick(this.selectors.MC_CLAIM_FAULT_NO, 30000, 'Select NO for Claim in Last 3 Years');
            
            await this.safeFill(this.selectors.MC_PROMO_CODE, 'MCASSOCIATION', 30000, 'Enter Promo Code');
            await this.safeClick(this.selectors.MC_APPLY, 30000, 'Click Apply Promo Code');
            await this.safeClick(this.selectors.MC_GET_QUICK_QOUTE, 30000, 'Click Get Quick Quote Button');

                        





            /*
            //Saving the policy number in the local storage
            const policyNumber = await this.getTextContent(this.selectors.PolicyNo, 30000, 'Policy Number');
            const policyKey = 'Dealer-YMIMCAU-COMP'; // make dynamic based on flow if needed
            savePolicyNumber(policyKey, policyNumber);
            */
    }
}

module.exports = DealerMCCOMP;  