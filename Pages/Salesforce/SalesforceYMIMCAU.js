class YMIMCAU{
    constructor(page)
    {
        //Quickquote  page Xpaths
        this.page=page
        this.NavigationMenu="//button[@title='Show Navigation Menu']"
        this.Homemenu= "//span[@class='slds-media__body'][normalize-space()='Home']"
        this.YMIAustrliaQuote= "//span[text()='YMI AUSTRALIA QUOTE']"
        this.clickquickquote= "(//span[text()='GET QUICK QUOTE'])[1]"
        this.scrollaction= "window.scrollBy(0, 600)"
        this.Getquickquote= "//img[@src='https://yamahamotorsaustralia--ymidev2.sandbox.lightning.force.com/resource/YMI_Uncheck']"
        this.ProductDisclouredocument="//a[normalize-space()='yamaha-motor.com.au']"
        this.PrivacyPolicydocument= "//a[normalize-space()='yamaha-motor.com.au/privacy']"
        this.ClickNextbutton= "//span[text()='NEXT']"
        this.RoadRegisterYes= "//vlocity_ins-omniscript-radio[@data-omni-key='biIsRoadRegistered']//span[text()='YES']"
        this.RoadRegisterNo="//vlocity_ins-omniscript-radio[@data-omni-key='biIsRoadRegistered']//span[text()='NO']"
        this.comprehensive= "//div[@class='nds-img-item_select-container nds-img_option-width-height']//span[text()='COMPREHENSIVE']"
        this.TPFT="//vlocity_ins-omniscript-radio[@data-omni-key='reqCoverageOnRoad']//span[text()='THIRD PARTY FIRE & THEFT']"
        this.TPO="//vlocity_ins-omniscript-radio[@data-omni-key='reqCoverageOnRoad']//span[text()='THIRD PARTY ONLY']"

        this.RegNo="//vlocity_ins-omniscript-text[@data-omni-key='RegoNumber']//input[@class='vlocity-input nds-input nds-input_mask']"
        this.ClickStatedropdown="//vlocity_ins-omniscript-select[@data-omni-key='State']//input[@class='nds-input nds-listbox__option-text_entity']"
        this.ClickonNSW="//ul[@class='nds-dropdown-container listbox nds-listbox nds-listbox_vertical']//li//span[text()='NSW']"
        this.Clickonsearch="//span[text()='Search']"
        this.shortterm="//vlocity_ins-omniscript-radio[@data-omni-key='poShortTermCheck']//span[text()='NO']"
        this.MCuseage="//vlocity_ins-omniscript-select[@data-omni-key='biUsage']//input[@class='nds-input nds-listbox__option-text_entity']"
        this.SelectPrivate= "//ul[@class='nds-dropdown-container listbox nds-listbox nds-listbox_vertical']//li//span[text()='Private']"
        this.MCstore= "//vlocity_ins-omniscript-select[@data-omni-key='biStorage']//input[@class='nds-input nds-listbox__option-text_entity']"
        this.SelectHome= "//div[@class='nds-dropdown nds-dropdown_fluid nds-p-bottom_none']//li//span[text()='Garaged (Home)']"
        this.Postcodevalue = "//vlocity_ins-omniscript-text[@data-omni-key='mcPostcode']//input[@class='vlocity-input nds-input nds-input_mask']"
        this.Suburb= "//vlocity_ins-omniscript-lookup[@data-omni-key='qqSuburb']//input[@class='vlocity-input nds-input nds-input_mask']"
        this.Suboption= "//ul[@class='nds-listbox nds-listbox_vertical']//li//span[text()='BETHUNGRA']"
        this.PrimaryRider="//vlocity_ins-omniscript-radio[@data-omni-key='isPrimaryRider']//span[text()='YES']"
        this.Ridingyroption="//vlocity_ins-omniscript-select[@data-omni-key='primaryRiderExp']//input[@class='nds-input nds-listbox__option-text_entity']"
        this.Selectridingyr= "//vlocity_ins-omniscript-select[@data-omni-key='primaryRiderExp']//ul[@class='nds-dropdown-container listbox nds-listbox nds-listbox_vertical']//li[2]"
        this.ClickDOBfield= "//vlocity_ins-omniscript-date[@data-omni-key='DOB']//input[@class='nds-input nds-input_mask']"
        this.SelectDOByr="//select[@class='nds-select' and @data-id='select-01']";
        this.SelectDOBmonthdate= "//td[@data-id='dayId4']//span[@aria-label='Sun Apr 04 1993']"
        this.ValidLicense= "//vlocity_ins-omniscript-radio[@data-omni-key='HasDrivingLicence']//span[text()='YES']"
        this.Licensefield= "//vlocity_ins-omniscript-select[@data-omni-key='licenceHistory']//input[@class='nds-input nds-listbox__option-text_entity']"
        this.Licensefieldvalue="//vlocity_ins-omniscript-select[@data-omni-key='licenceHistory']//ul[@class='nds-dropdown-container listbox nds-listbox nds-listbox_vertical']//li[2]"
        this.AtFaultClaim= "//vlocity_ins-omniscript-radio[@data-omni-key='claimHisThreeYears']//span[text()='NO']"
        this.ProductDisclosurestatement= "//vlocity_ins-flex-action[@class='state1element1block_element2_child flexActionElement']//span[@title='(View PDF)']"
        this.FinancialServiceguide= "//vlocity_ins-flex-action[@class='state1element2block_element2_child flexActionElement']//span[@title='(View PDF)']"
        this.TargetMarketdetermenation= "//vlocity_ins-flex-action[@class='state1element3block_element2_child flexActionElement']//span[@title='(View PDF)']"
        this.BasicExcess= "//vlocity_ins-omniscript-text-block[@data-omni-key='TextBlock2']//li[text()='$500']"
        this.BasicExcess1="//vlocity_ins-omniscript-text-block[@data-omni-key='TextBlock2']//li[text()='$250']"
        this.SaveEmailQuote= "//span[@title='SAVE & EMAIL QUOTE']"

        this.ViewQuotePDF="//vlocity_ins-button[@class='omniscript-btn-next nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='VIEW QUOTE PDF']"
        this.DownloadPDF= "//vlocity_ins-clm-os-docx-generate-document[@data-omni-key='GenerateDocumentPDF']//button[text()='Download PDF']"
        this.SendEmailbutton="//vlocity_ins-omniscript-ip-action[@data-omni-key='SENDEMAIL']//span[text()='SEND EMAIL']"



        this.CoverageDetails= "//vlocity_ins-omniscript-text-block[@data-omni-key='TextBlock1']//li[text()='COMPREHENSIVE']"
        this.CoverageDetails1="//vlocity_ins-omniscript-text-block[@data-omni-key='TextBlock1']//li[text()='THIRD PARTY FIRE & THEFT']"
        this.CoverageDetails2="//vlocity_ins-omniscript-text-block[@data-omni-key='TextBlock1']//li[text()='THIRD PARTY ONLY']"
        this.CoverageDetails3="//vlocity_ins-omniscript-text-block[@data-omni-key='TextBlock1']//li[text()='OFF ROAD RIDER']"

        this.GetQuickQuote="//span[text()='GET QUICK QUOTE']"
        this.ClickQuickcontinue= "//span[text()='CONTINUE']"
        this.ClickTitle= "//vlocity_ins-omniscript-select[@data-omni-key='ProspectTitle']//input[@class='nds-input nds-listbox__option-text_entity']"
        this.TitleMs="//vlocity_ins-omniscript-select[@data-omni-key='ProspectTitle']//span[text()='Ms.']"
        this.Fname= "//vlocity_ins-omniscript-text[@data-omni-key='fName']//input[@class='vlocity-input nds-input nds-input_mask']"
        this.Lname="//vlocity_ins-omniscript-text[@data-omni-key='lName']//input[@class='vlocity-input nds-input nds-input_mask']"
        this.MobileAU="//vlocity_ins-omniscript-text[@data-omni-key='Mobile_AU']//input[@class='vlocity-input nds-input nds-input_mask']"
        this.Landline="//vlocity_ins-omniscript-text[@data-omni-key='Landline']//input[@class='vlocity-input nds-input nds-input_mask']"
        this.Email="//vlocity_ins-omniscript-email[@data-omni-key='email']//input[@class='vlocity-input nds-input nds-input_mask']"
        this.CheckQuoteno= "//strong[normalize-space()='QUOTE NUMBER']"
        //FullQuote Page Xpaths
        this.Quickquoteno="//strong[text()='QUOTE NUMBER']"
        this.FirstRegisterowner="//vlocity_ins-omniscript-block[@Class='nds-size_12-of-12 nds-medium-size_7-of-12']//vlocity_ins-omniscript-radio[@data-omni-key='biIsNewBike']//span[text()='YES']"
        this.Clickoncalender="//vlocity_ins-omniscript-date[@data-omni-key='biDOP']//input[@class='nds-input nds-input_mask']"
        this.Selectpurchaseyear="//vlocity_ins-omniscript-date[@data-omni-key='biDOP']//select[@data-id='select-01']"
        this.Selectpurchasedate="//vlocity_ins-omniscript-date[@data-omni-key='biDOP']//td[@data-id='dayId1']//span[text()='1']"
        this.Purchaseprice="//vlocity_ins-omniscript-currency[@data-omni-key='biPurchasePrice']//span[text()='Purchase Price']"
        this.Preexistdamage="//vlocity_ins-omniscript-radio[@data-omni-key='biPreExistingDamage']//span[text()='NO']"
        this.Kmrange="//vlocity_ins-omniscript-select[@data-omni-key='biKMRange']//input[@class='nds-input nds-listbox__option-text_entity']"
        this.selectKmrange="//ul[@class='nds-dropdown-container listbox nds-listbox nds-listbox_vertical']//li//span[text()='4001-8000']"
        this.Motorcyclefinanced="//vlocity_ins-omniscript-radio[@data-omni-key='biIsFinanced']//span[text()='NO']"
        this.Nonstandardmodification="//vlocity_ins-omniscript-radio[@data-omni-key='biHasMod']//span[text()='NO']"
        this.Motorcycleaccessories="//vlocity_ins-omniscript-radio[@data-omni-key='biAccessories']//span[text()='NO']"
        this.Next="//vlocity_ins-button[@class='omniscript-btn-next nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='NEXT']"

        this.Enteraddressmanually="//vlocity_ins-omniscript-set-values[@data-omni-key='svAddress']//span[text()='Enter address manually']"
        this.StreetNumber="//vlocity_ins-omniscript-text[@data-omni-key='homeAddStreet']//label[text()='Street Number and Name']"
        this.Apartment="//vlocity_ins-omniscript-text[@data-omni-key='homeAddApartment']//label[text()='Apartment, Suite, etc (OPTIONAL)']"
        this.City="//vlocity_ins-omniscript-text[@data-omni-key='homeAddCity']//label[text()='City']"
        this.Statefieldclick="//vlocity_ins-omniscript-select[@data-omni-key='homeAddState']//input[@class='nds-input nds-listbox__option-text_entity nds-not-empty nds-is-dirty']"
        this.Selectstate="//ul[@class='nds-dropdown-container listbox nds-listbox nds-listbox_vertical']//span[text()='NSW']"
        this.Enterpostcode="//vlocity_ins-omniscript-text[@data-omni-key='homeAddPostcode']//input[@class='vlocity-input nds-input nds-input_mask']"
        
        this.Samestorageaddress="//vlocity_ins-omniscript-checkbox[@data-omni-key='isStorageAddSame']//span[@class='nds-checkbox_faux']"
        this.Ridingcourse="//vlocity_ins-omniscript-radio[@data-omni-key='rdRidingCourse']//span[text()='NO']"
        this.Drivinghistory="//vlocity_ins-omniscript-radio[@data-omni-key='rdDrivingHistory']//span[text()='NO']"
        this.Criminalconviction="//vlocity_ins-omniscript-radio[@data-omni-key='rdCriminalConviction']//span[text()='NO']"  
        this.Insurancehistory="//vlocity_ins-omniscript-radio[@data-omni-key='rdInsuranceHistory']//span[text()='NO']"
        this.Nextb="//vlocity_ins-button[@class='omniscript-btn-next nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='NEXT']"
        this.Proceedtopremium="//vlocity_ins-button[@class='omniscript-btn-next nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='PROCEED TO PREMIUM']"

        //Entering the Promocode
        this.PromoCode="//vlocity_ins-omniscript-text[@data-omni-key='promocode']//label[text()='PROMO CODE']"
        this.ApplyPromocode="//vlocity_ins-omniscript-ip-action[@data-omni-key='ipRecalculateRating']//span[text()='APPLY']"
        this.ClickonSendEmail="//vlocity_ins-omniscript-ip-action[@data-omni-key='ipCQSendEmailDealer']//span[text()='SEND']"
        this.Proceedtopayment="//vlocity_ins-button[@class='omniscript-btn-next nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_4-of-12']//span[text()='PROCEED TO PAYMENT']"
        this.Clickpayment="//vlocity_ins-radio-image-group[@class='slds-p-top_small']//span[text()='CARD PAYMENT']"
        this.Clickcard="//vlocity_ins-radio-image-group//span[text()='CARD PAYMENT']"
        // Outer iframe (sandbox)
        this.paymentIframe = "//iframe[@name='sandbox']";
        this.Visaiframe= "//div[@data-id='VISA']";

        // Inside iframe: card number
        this.cardNumberIframe = "//iframe[@name='card.number']";
        this.cardNumberInput = "//input[@name='card.number']";

        // Card expiry, name, surname
        this.cardExpiry = "//input[@placeholder='MM / YY']";
        this.givenName = "//input[@placeholder='Given Name']";
        this.surname = "//input[@placeholder='Surname']";

        // CVV iframe
        this.cvvIframe = "//iframe[@name='card.cvv']";
        this.cvvInput = "//input[@placeholder='CVV']";

        // Payment buttons
        this.payNowButton = "//button[text()='Pay now']";
        this.submitButton = "//button[text()='Submit']";
        

        //Saving Policy no.
        this.PolicyNo= "//span[contains(text(), 'Policy Number:')]/strong/span";

        //Continue to Policy
        this.ContinuePolicy="//span[text()='Continue to policy']";
        


    }   

}

module.exports=YMIMCAU;

