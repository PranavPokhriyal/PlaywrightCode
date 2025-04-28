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
            await this.page.pause();
            await this.safeClick(this.selectors.ClickcreateQuote, 30000, 'Create Quote Button');

            




            /*
            //Saving the policy number in the local storage
            const policyNumber = await this.getTextContent(this.selectors.PolicyNo, 30000, 'Policy Number');
            const policyKey = 'Dealer-YMIMCAU-COMP'; // make dynamic based on flow if needed
            savePolicyNumber(policyKey, policyNumber);
            */
    }
}

module.exports = DealerMCCOMP;  