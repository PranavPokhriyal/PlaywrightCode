const YMIMCAU = require("../../Pages/Salesforce/SalesforceYMIMCAU")
const BasePageActions = require("../../Pages/BasePageActions")
const testData = require('../../Test Data/Test Data'); 
const { savePolicyNumber } = require('../../Policyno Data/PolicyStorage');

class MCCOMP extends BasePageActions {
    constructor(page) {
        super(page);
        this.selectors = new YMIMCAU(page);  // This should instantiate the YMIMCAU class
    }

    async YMIMCAUCOMPPolicy() {
    
        // Now use this.selectors to access locators
            await this.safeClick(this.selectors.NavigationMenu, 30000, 'Navigation Menu');
            await this.safeClick(this.selectors.Homemenu, 30000, 'Home Menu');
            await this.safeClick(this.selectors.YMIAustrliaQuote, 30000, 'YMI Australia Quote');
            await this.safeClick(this.selectors.clickquickquote, 30000, 'Quick Quote Button');
            await this.safeEvaluate(this.selectors.scrollaction, 'Scroll to Quick Quote Section');
            await this.safeClick(this.selectors.Getquickquote, 30000, 'Get Quick Quote');
            //await this.page.pause();

            await this.verifyLinkOpensCorrectUrl(this.selectors.ProductDisclouredocument, 80000, 'Product Disclosure Document');
            await this.verifyLinkOpensCorrectUrl(this.selectors.PrivacyPolicydocument, 80000,'Privacy Policy Document' )
            
            await this.safeClick(this.selectors.ClickNextbutton, 30000, 'Next Button');
            await this.page.waitForTimeout(5000);
            await this.safeClick(this.selectors.RoadRegisterYes, 80000, 'Road Registered - Yes');
            await this.safeClick(this.selectors.comprehensive, 60000, 'Comprehensive Option');
            await this.safeFill(this.selectors.RegNo, "NPU84", 30000, 'Registration Number');
            await this.safeEvaluate(this.selectors.scrollaction, 'Scroll Down');
            await this.safeClick(this.selectors.ClickStatedropdown, 30000, 'State Dropdown');
            await this.safeClick(this.selectors.ClickonNSW, 30000, 'Select NSW');
            await this.safeClick(this.selectors.Clickonsearch, 30000, 'Search Button');
            await this.safeClick(this.selectors.shortterm, 30000, 'Short Term - No');
            await this.safeClick(this.selectors.MCuseage, 30000, 'MC Usage Dropdown');
            await this.safeClick(this.selectors.SelectPrivate, 30000, 'Select Private Usage');
            await this.safeClick(this.selectors.MCstore, 30000, 'MC Storage Dropdown');
            await this.safeClick(this.selectors.SelectHome, 30000, 'Select Garaged (Home)');
            await this.safeFill(this.selectors.Postcodevalue, "2590", 30000, 'Postcode');
            await this.safeClick(this.selectors.Suburb, 30000, 'Suburb Input');
            await this.safeClick(this.selectors.Suboption, 30000, 'Select BETHUNGRA');
            await this.safeClick(this.selectors.PrimaryRider, 30000, 'Primary Rider - Yes');
            await this.safeClick(this.selectors.Ridingyroption, 30000, 'Riding Year Dropdown');
            await this.safeClick(this.selectors.Selectridingyr, 30000, 'Select Riding Year');
            await this.safeClick(this.selectors.ClickDOBfield, 30000, 'DOB Field');
            await this.page.selectOption(this.selectors.SelectDOByr, { label: '1993' });
            await this.safeClick(this.selectors.SelectDOBmonthdate, 30000, 'Select DOB Date');
            await this.safeClick(this.selectors.ValidLicense, 30000, 'Valid License - Yes');
            await this.safeClick(this.selectors.Licensefield, 30000, 'License Field Dropdown');
            await this.safeClick(this.selectors.Licensefieldvalue, 30000, 'Select License History');
            await this.safeClick(this.selectors.AtFaultClaim, 30000, 'At Fault Claim - No');
            await this.safeClick(this.selectors.GetQuickQuote, 30000, 'Get Quick Quote Button');

            await this.verifyText(this.selectors.BasicExcess, "$500", 30000, 'Basic Excess Value check');
            await this.verifyText(this.selectors.CoverageDetails, "COMPREHENSIVE", 30000, 'Coverage Details');
           // await this.page.pause();
            await this.verifyPdfAction(this.selectors.ProductDisclosurestatement, 30000, 'View Product PDF');
            await this.verifyPdfAction(this.selectors.FinancialServiceguide, 30000, 'View Financial Guide' );
            await this.verifyPdfAction(this.selectors.TargetMarketdetermenation, 30000, 'Target Market determenation' );
            
            await this.safeClick(this.selectors.SaveEmailQuote, 30000, 'Click on Save Email quote');
            await this.page.waitForTimeout(5000);

            //User Details
            await this.safeClick(this.selectors.ClickTitle, 30000, 'Click on Title');
            await this.safeClick(this.selectors.TitleMs, 30000, 'Select Title');
            await this.safeFill(this.selectors.Fname, testData.userDetails.firstName, 30000, 'First Name');
            await this.safeFill(this.selectors.Lname, testData.userDetails.lastName, 30000, 'Last Name');
            await this.safeFill(this.selectors.Email, testData.userDetails.email, 30000, 'Email Address');
            
            await this.safeClick(this.selectors.Getquickquote, 30000, 'Get Quick Quote');
            
            await this.safeClick(this.selectors.ViewQuotePDF, 30000, 'View Quote PDF');
            await this.page.waitForTimeout(6000);
            
            await this.verifyPdfAction(this.selectors.DownloadPDF, 30000 , 'Download PDF');
            await this.safeEvaluate(this.selectors.scrollaction, 3000, 'Scroll action');
            await this.safeClick(this.selectors.SendEmailbutton, 30000, 'Send Email');
            //await this.verifyText(this.selectors, )
        

            await this.safeClick(this.selectors.ClickQuickcontinue, 30000, 'Continue After Quote');
            await this.page.waitForTimeout(6000);
            
            //Filling more details of user
            await this.safeEvaluate(this.selectors.scrollaction, 30000, 'scroll');
            await this.safeFill(this.selectors.MobileAU, testData.userDetails.mobileNumber, 30000, 'Mobile Number');
            await this.safeFill(this.selectors.Landline, testData.userDetails.landlineNumber, 30000, 'Landline Number');
            await this.safeClick(this.selectors.Getquickquote, 30000, 'Get Quick Quote');

            await this.safeClick(this.selectors.ClickQuickcontinue, 30000, 'Final Continue');
            await this.page.waitForTimeout(8000);
            //await this.page.pause();

            //Now Fullquote Xpaths method
            await this.takeScreenshot(this.selectors.Quickquoteno, 3000, 'Quote Number');
            await this.safeClick(this.selectors.FirstRegisterowner, 30000, 'FirstRegisterowner' );
            await this.safeClick(this.selectors.Clickoncalender, 30000, 'Click on Calendar');
            await this.safeClick(this.selectors.Selectpurchaseyear, 30000, 'Select Purchase Year');
            await this.safeClick(this.selectors.Selectpurchasedate, 30000, 'Select Purchase Date');
            await this.safeFill(this.selectors.Purchaseprice, "5445", 30000, 'Click Purchase Price Label');
            await this.safeClick(this.selectors.Preexistdamage, 30000, 'Pre-existing Damage - NO');
            await this.safeClick(this.selectors.Kmrange, 3000, 'KM Range Dropdown');
            await this.safeClick(this.selectors.selectKmrange, 3000, 'Select KM Range 4001-8000');
            await this.safeClick(this.selectors.Motorcyclefinanced, 30000, 'Motorcycle Financed - NO');
            await this.safeClick(this.selectors.Nonstandardmodification, 30000, 'Non-standard Modification - NO');
            await this.safeClick(this.selectors.Motorcycleaccessories, 30000, 'Motorcycle Accessories - NO');
            await this.safeClick(this.selectors.Next, 30000, 'Click Next');
            await this.safeEvaluate(this.selectors.scrollaction, 'Scroll to Quick Quote Section');
            await this.page.waitForTimeout(5000);
            //await this.page.pause();
            await this.safeClick(this.selectors.Enteraddressmanually, 30000, 'Click on Enter Address');
            await this.safeFill(this.selectors.StreetNumber, testData.addressDetails.street, 30000, 'Enter Street');
            await this.safeFill(this.selectors.Apartment, testData.addressDetails.apartment, 30000, 'Enter Apartment');
            await this.safeFill(this.selectors.City, testData.addressDetails.city, 30000, 'Enter City');

            await this.safeClick(this.selectors.Statefieldclick, 3000, 'Click Statefield');
            console.log("State field is clicked");
            await this.safeClick(this.selectors.Statefieldclick, 3000, 'Click Statefield');
            await this.safeClick(this.selectors.Selectstate, 3000, 'Select state');
            await this.safeFill(this.selectors.Enterpostcode, testData.addressDetails.postcode, 30000, 'Enter Postcode');

            await this.safeClick(this.selectors.Samestorageaddress, 30000, 'Same Storage address');
            await this.safeClick(this.selectors.Ridingcourse, 3000, 'Ridingcourse-NO');
            await this.safeClick(this.selectors.Drivinghistory,3000, 'Drivinghistory-NO');
            await this.safeClick(this.selectors.Criminalconviction, 3000, 'Criminalconviction-NO');
            await this.safeClick(this.selectors.Insurancehistory, 3000, 'Insurancehistory-NO');
            await this.safeClick(this.selectors.Nextb, 3000, 'Next-button-click');
            
            await this.page.waitForTimeout(6000);
            /*
            //Verify data in review screen
            // Full name
            await this.verifyText(this.selectors.reviewFullName, `${testData.userDetails.firstName} ${testData.userDetails.lastName}`, 5000, "Full Name");

            // Email
            await this.verifyText(this.selectors.reviewEmail, testData.userDetails.email, 5000, "Email");

            // Mobile Number
            await this.verifyText(this.selectors.reviewMobile, testData.userDetails.mobileNumber, 5000, "Mobile Number");

            // Address
            await this.verifyText(this.selectors.reviewAddress,`${testData.address.street}, ${testData.address.apartment}, ${testData.address.city}, ${testData.address.postcode}`,5000,"Address");

               */

            await this.safeEvaluate(this.selectors.scrollaction, 'Scroll to Quick Quote Section');
            await this.safeClick(this.selectors.Proceedtopremium, 30000, 'Proceed to premium-Click');
            await this.page.waitForTimeout(6000);
            await this.page.pause();
            
            //Enter Promo code
            await this.safeEvaluate(this.selectors.scrollaction, 'Scroll to Quick Quote Section');
            //await this.safeClick(this.selectors.PromoCode, 30000, 'Click on Promo code');
            await this.safeFill(this.selectors.PromoCode, testData.Promocode.promocode, 30000, 'Enter Promo code');
            await this.safeClick(this.selectors.ApplyPromocode, 30000, 'Apply Promo code');
            await this.safeClick(this.selectors.SaveEmailQuote, 30000, 'Save Email Quote');
            await this.page.waitForTimeout(8000);
            await this.safeEvaluate(this.selectors.scrollaction, 'Scroll to Quick Quote Section');
            await this.safeClick(this.selectors.ClickonSendEmail, 30000, 'Click on Send Email');
            await this.page.waitForTimeout(6000);

           

            //Payement Part
            await this.safeEvaluate(this.selectors.scrollaction, 'Scroll to Quick Quote Section');
            await this.safeClick(this.selectors.Proceedtopayment, 30000, 'Proceed to payment-click');
            await this.page.waitForTimeout(6000);
            await this.safeEvaluate(this.selectors.scrollaction, 'Scroll to Quick Quote Section');
            await this.safeClick(this.selectors.Clickcard, 30000, 'Click-card');
            await this.page.waitForTimeout(6000);
            await this.safeFrameClick(this.selectors.paymentIframe, this.selectors.Visaiframe, 'Click on Visa card');
            await this.safeFrameClick(this.selectors.paymentIframe,this.selectors.cardNumberIframe, this.selectors.cardNumberInput, 'Click on Card no. field' );
            console.log("Page Clicked");
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
            

            await this.page.pause();
        
    }
}

module.exports = MCCOMP;