const DEALERYMIMCAU = require("../../Pages/DealerPortal/DealerYMIMCAU")
const BasePageActions = require("../../Pages/BasePageActions")
const testData = require('../../Test Data/Test Data');  
const { savePolicyNumber } = require('../../Policyno Data/PolicyStorage');

class DealerMCTPO extends BasePageActions {
    constructor(page) {
        super(page);
        this.selectors = new DEALERYMIMCAU(page);  // This should instantiate the DEALERYMIMCAU class
    }

    async DealerYMIMCAUTPOPolicy() {
    
        // Now use this.selectors to access locators
            await this.safeClick(this.selectors.SelectInsurance, 30000, 'Insurance Tab');
            
            await this.safeClick(this.selectors.ClickcreateQuote, 30000, 'Click Quote Button');
            await this.page.pause();
            await this.safeClick(this.selectors.clickquickquote, 80000, 'Click GET QUICK QUOTE');
            await this.safeEvaluate(this.selectors.scrollaction, 'Scroll to Quick Quote Section');
           
            await this.safeClick(this.selectors.Getquickquote, 80000, 'Click on Quick Quote Image');
            await this.safeClick(this.selectors.ClickNextbutton, 80000, 'Click NEXT Button');
            await this.safeClick(this.selectors.MCroadregisterYES, 30000, 'Select YES for Road Registered');
            await this.safeClick(this.selectors.MC_COVERAGE_TPO, 30000, 'Select Third Party Only Coverage');
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
            
            
            await this.safeClick(this.selectors.MC_DOB, 30000, 'Enter Date of Birth');
            await this.safeSelectOption('#select-01-302', '1993', 30000, 'Select year 1993 in DOB picker');
            await this.safeClick(this.selectors.SelectDOBmonthdate, 30000, 'Select DOB Month & Date');
            

            await this.safeClick(this.selectors.MC_LICENSE_YES, 30000, 'Select YES for Driving Licence');
            // or
            // await this.safeClick(this.selectors.MC_LICENSE_NO, 30000, 'Select NO for Driving Licence');
            
            await this.safeClick(this.selectors.MC_LICENSE_HISTORY, 30000, 'Click Licence History Dropdown');
            await this.safeClick(this.selectors.Licensefieldvalue, 30000, 'Select Licence field value');
            
           // await this.safeClick(this.selectors.MC_CLAIM_FAULT_YES, 30000, 'Select YES for Claim in Last 3 Years');
            // or
            await this.safeClick(this.selectors.MC_CLAIM_FAULT_NO, 30000, 'Select NO for Claim in Last 3 Years');
            
            await this.safeFill(this.selectors.MC_PROMO_CODE, 'MAASSOCIATION', 30000, 'Enter Promo Code');
            await this.safeClick(this.selectors.MC_APPLY, 30000, 'Click Apply Promo Code');
            await this.safeClick(this.selectors.MC_GET_QUICK_QOUTE, 30000, 'Click Get Quick Quote Button');
            await this.page.waitForTimeout(8000);
            await this.safeEvaluate(this.selectors.scrollaction, 'Scroll to Quick Quote Section');
            await this.verifyText(this.selectors.BasicExcess, "$500", 30000, 'Basic Excess Value check');
            await this.verifyText(this.selectors.CoverageDetails, "COMPREHENSIVE", 30000, 'Coverage Details');
           // await this.page.pause();
            await this.verifyPdfAction(this.selectors.PRODUCT_DISCLOSURE_STATEMENT, 30000, 'View Product PDF');
            await this.verifyPdfAction(this.selectors.FINANCIAL_SERVICES_GUIDE, 30000, 'View Financial Guide' );
            await this.verifyPdfAction(this.selectors.TARGET_MARKET_DETERMINATION, 30000, 'Target Market determenation' );
            
            //await this.safeClick(this.selectors.SAVEEMAIL_QUOTE, 30000, 'Click on Save Email quote');
            await this.page.waitForTimeout(5000);
            await this.safeClick(this.selectors.CONTINUE1, 30000, 'Click on Continue Button');

            await this.safeClick(this.selectors.TITLE, 30000, 'Select Title');
            await this.safeClick(this.selectors.SelectTitle, 30000, 'Select MR Title');
            await this.safeFill(this.selectors.FIRST_NAME, 'Test', 30000, 'Enter First Name');
            await this.safeFill(this.selectors.LAST_NAME, 'User', 30000, 'Enter Last Name');
            await this.safeFill(this.selectors.MOBILE, '9897949596' , 30000, 'Enter Mobile Number'); 
            await this.safeFill(this.selectors.LANDLINE, '9897949596', 30000, 'Enter Landline Number');
            await this.safeFill(this.selectors.EMAIL, 'rone5221@gmail.com', 30000, 'Enter Email Address');
            await this.page.pause();
            //await this.safeClick(this.selectors.TICK_CHECKBOX, 30000, 'Tick the checkbox for Terms and Conditions');
            await this.safeClick(this.selectors.CONTINUE2, 30000, 'Click on Continue Button');
            await this.safeClick(this.selectors.FIRST_REGISTERED_OWNER_YES, 30000, 'First Registered Owner YES');
            await this.safeClick(this.selectors.DATE_OF_PURCHASE, 30000, 'Click DOP filed');
            await this.safeClick(this.selectors.SelectPurchaseYear, 30000, 'Select Purchase Year');
            await this.safeClick(this.selectors.SelectPurchaseDate, 30000, 'Select Purchase Date');
            await this.safeFill(this.selectors.PURCHASE_PRICE, '5000' , 30000, 'Enter Purchase Price');
            await this.safeClick(this.selectors.PRE_EXISTING_DAMAGE_NO , 30000, 'Pre-existing Damage NO');
            await this.safeClick(this.selectors.RIDING_RANGE, 30000, 'Select Riding Range Dropdown');
            await this.safeClick(this.selectors.SelectKmRange, 30000, 'Select KM Range');
            await this.safeClick(this.selectors.MC_FINANCED_NO, 30000, 'MC Financed NO');
            await this.safeClick(this.selectors.MC_MOD_NO, 30000, 'MC Modified NO');
            await this.safeClick(this.selectors.ACCESSORIES_NO, 30000, 'MC Accessories NO');
            await this.safeClick(this.selectors.NEXT, 30000, 'Click on NEXT Button');
            await this.safeClick(this.selectors.ENTER_ADDRESS_MANUALLY, 30000, 'Click on Enter Address Manually');
            await this.safeFill(this.selectors.StreetNumber, 'D-145, Desong Street', 30000, 'Enter Street');
            await this.safeFill(this.selectors.Apartment, 'New Ansal Heights', 30000, 'Enter Apartment');
            await this.safeFill(this.selectors.City, 'COOTAMUNDRA', 30000, 'Enter City');
            await this.safeClick(this.selectors.Statefieldclick, 3000, 'Click Statefield');
            console.log("State field is clicked");
            await this.safeClick(this.selectors.Statefieldclick, 3000, 'Click Statefield');
            await this.safeClick(this.selectors.Selectstate, 3000, 'Select state');
            await this.safeFill(this.selectors.Enterpostcode, '2590', 30000, 'Enter Postcode');
            await this.safeClick(this.selectors.Samestorageaddress, 30000, 'Same Storage address');
            await this.safeClick(this.selectors.RIDING_COURSE_NO, 30000, 'Riding Course NO');
            await this.safeClick(this.selectors.DRIVING_HISTORY_NO, 30000, 'DRIVING_HISTORY_NO');
            await this.safeClick(this.selectors.CRIMINAL_CONVICTION_NO, 30000, 'CRIMINAL_CONVICTION_NO');
            await this.safeClick(this.selectors.INSURANCE_HISTORY_NO, 30000, 'INSURANCE_HISTORY_NO');
            await this.safeClick(this.selectors.ClickAdditionalRider, 30000, 'Click on NEXT Button');
            await this.safeFill(this.selectors.RIDER_NAME,'Mukul', 30000, 'Click on NEXT Button');
            await this.safeFill(this.selectors.RIDER_AGE, '25', 30000, 'Select Rider Age');
            await this.safeFill(this.selectors.RIDER_LICENSE, '10' , 30000, 'Select Rider License');
            await this.safeClick(this.selectors.NEXT, 30000, 'Next Button');
            await this.page.waitForTimeout(3000);
            await this.safeClick(this.selectors.PROCEED_TO_PREMIUM, 30000, 'Proceed to Premium');
            await this.page.waitForTimeout(5000);
            await this.safeClick(this.selectors.SAVE_AND_EMAIL_QUOTE, 50000, 'Save and Email Quote');
            await this.safeEvaluate(this.selectors.scrollaction, 'Scroll to Quick Quote Section');
            await this.page.waitForTimeout(10000);
            await this.safeEvaluate(this.selectors.scrollaction, 'Scroll to Quick Quote Section');
            await this.safeClick(this.selectors.ClickonSendEmail, 30000, 'Click on Send Email');
            await this.page.waitForTimeout(8000);
            await this.safeClick(this.selectors.PROCEED_TO_PAYMENT, 30000, 'Proceed to Payment');
            await this.page.waitForTimeout(8000);
            await this.page.pause();
            await this.safeEvaluate(this.selectors.scrollaction, 'Scroll to Quick Quote Section');
             
            await this.safeClick(this.selectors.CARD_PAYMENT, 30000, 'Select Card Payment Option');
            await this.page.waitForTimeout(6000);

            await this.safeFrameClick(this.selectors.paymentIframe, this.selectors.Visaiframe, 'Click on Visa card');
            await this.safeFrameClick(this.selectors.paymentIframe,this.selectors.cardNumberIframe, this.selectors.cardNumberInput, 'Click on Card no. field' );
            console.log("Card no. field Clicked");
            await this.safeFrameFill(this.selectors.paymentIframe, this.selectors.cardNumberIframe, this.selectors.cardNumberInput, testData.cardDetails.cardNumber, 10000, 'Card Number');
            
            // Expiry
            await this.safeFrameClick(this.selectors.paymentIframe, this.selectors.cardExpiry, 30000, "Card Expiry");
            await this.safeFrameFill(this.selectors.paymentIframe, this.selectors.cardExpiry, testData.cardDetails.expiry, 30000, "Card Expiry");
            
            // Given Name
            await this.safeFrameFill(this.selectors.paymentIframe, this.selectors.givenName, testData.cardDetails.givenName, 30000, "Given Name");
            
             // Surname
            await this.safeFrameFill(this.selectors.paymentIframe, this.selectors.surname, testData.cardDetails.surname, 30000, "Surname");
            
            // CVV
            await this.safeFrameFill(this.selectors.paymentIframe, this.selectors.cvvIframe, this.selectors.cvvInput, testData.cardDetails.cvv, 30000, "CVV");
            
            //Click on Paynow button
            await this.safeFrameClick(this.selectors.paymentIframe, this.selectors.payNowButton, 30000, "Pay now");
            
            
            // Click Submit on final screen
            await this.safeClick(this.selectors.submitButton, 30000, "Submit");
            await this.page.pause();
            
                       
                         
            const policyNumber = await this.getTextContent(this.selectors.PolicyNo, 30000, 'Policy Number');
            const policyKey = 'YMIMCAU-COMP'; // make dynamic based on flow if needed
            savePolicyNumber(policyKey, policyNumber);
                        
            await this.takeScreenshot(this.selectors.PolicyNo, 30000, 'Policy Number');
            await this.page.waitForTimeout(60000);
            await this.safeClick(this.selectors.ContinuePolicy, 30000, 'Continue to Policy');
                        
            




            









                        





            /*
            //Saving the policy number in the local storage
            const policyNumber = await this.getTextContent(this.selectors.PolicyNo, 30000, 'Policy Number');
            const policyKey = 'Dealer-YMIMCAU-COMP'; // make dynamic based on flow if needed
            savePolicyNumber(policyKey, policyNumber);
            */
    }
}

module.exports = DealerMCTPO;  