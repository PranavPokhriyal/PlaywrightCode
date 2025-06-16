class DEALERYMIMCAU{
    constructor(page)
    {
        this.page=page;
        this.SelectInsurance="//span[text()='INSURANCE']";
        this.ClickcreateQuote="//vlocity_ins-flex-action[@data-style-id='state0element0block_element1_child']//span[text()='CREATE A QUOTE']";
        this.clickquickquote= "(//span[text()='GET QUICK QUOTE'])[1]";
        this.scrollaction= "window.scrollBy(0, 600)";
        this.Getquickquote= "//img[@src='/resource/YMI_Uncheck']";
         this.ClickNextbutton= "//span[text()='NEXT']";
        this.MCroadregisterYES="//vlocity_ins-omniscript-radio[@data-omni-key='biIsRoadRegistered']//span[text()='YES']";
        this.MC_ROAD_REGISTER_NO="//vlocity_ins-omniscript-radio[@data-omni-key='biIsRoadRegistered']//span[text()='NO']";
        this.MC_COVERAGE_COMP="//vlocity_ins-omniscript-radio//span[text()='COMPREHENSIVE']";
        this.MC_COVERAGE_TPFT = "//vlocity_ins-omniscript-radio//span[text()='THIRD PARTY FIRE & THEFT']";
        this.MC_COVERAGE_TPO = "//vlocity_ins-omniscript-radio//span[text()='THIRD PARTY ONLY']";
        this.MC_COVERAGE_OFFROAD = "//vlocity_ins-omniscript-radio//span[text()='OFF ROAD RIDER']";
        this.MC_REGISTER_NUMBER="//vlocity_ins-omniscript-text[@data-omni-key='RegoNumber']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.MC_STATE="//vlocity_ins-omniscript-select[@data-omni-key='State']//input[@class='nds-input nds-listbox__option-text_entity']";
        this.ClickonNSW="//ul[@class='nds-dropdown-container listbox nds-listbox nds-listbox_vertical']//li//span[text()='NSW']";
        this.MC_SEARCH="//vlocity_ins-omniscript-ip-action//span[text()='Search']";
        this.shortterm="//vlocity_ins-omniscript-radio[@data-omni-key='poShortTermCheck']//span[text()='NO']"
        this.MCuseage="//vlocity_ins-omniscript-select[@data-omni-key='biUsage']//input[@class='nds-input nds-listbox__option-text_entity']"
        this.SelectPrivate= "//ul[@class='nds-dropdown-container listbox nds-listbox nds-listbox_vertical']//li//span[text()='Private']"
        this.MCstore= "//vlocity_ins-omniscript-select[@data-omni-key='biStorage']//input[@class='nds-input nds-listbox__option-text_entity']"
        this.SelectHome= "//div[@class='nds-dropdown nds-dropdown_fluid nds-p-bottom_none']//li//span[text()='Garaged (Home)']"
        this.Postcodevalue = "//vlocity_ins-omniscript-text[@data-omni-key='mcPostcode']//input[@class='vlocity-input nds-input nds-input_mask']"
        this.Suburb= "//vlocity_ins-omniscript-lookup[@data-omni-key='qqSuburb']//input[@class='vlocity-input nds-input nds-input_mask']"
        this.Suboption= "//ul[@class='nds-listbox nds-listbox_vertical']//li//span[text()='BETHUNGRA']"
        this.MC_PRIMARYRIDER_YES="//vlocity_ins-omniscript-radio[@data-omni-key='isPrimaryRider']//span[text()='YES']";
        this.MC_PRIMARYRIDER_NO="//vlocity_ins-omniscript-radio[@data-omni-key='isPrimaryRider']//span[text()='NO']";
        this.MC_RIDING_YEARS="//vlocity_ins-omniscript-select//input[@class='nds-input nds-listbox__option-text_entity']";
        this.Selectridingyr= "//vlocity_ins-omniscript-select[@data-omni-key='primaryRiderExp']//ul[@class='nds-dropdown-container listbox nds-listbox nds-listbox_vertical']//li[2]"
        this.MC_DOB= "//vlocity_ins-omniscript-date[@data-omni-key='DOB']//input[@class='nds-input nds-input_mask']";
        this.SelectDOByr="//select[@class='nds-select' and @data-id='select-01']";
        this.SelectDOByrs="//select[@data-id='select-01']//span[normalize-space(.)='1993']";
        this.SelectDOBmonthdate= "//td[@data-id='dayId4']//span[@aria-label='Fri Jun 04 1993']";
        this.MC_LICENSE_YES= "//vlocity_ins-omniscript-radio[@data-omni-key='HasDrivingLicence']//span[text()='YES']";
        this.MC_LICENSE_NO= "//vlocity_ins-omniscript-radio[@data-omni-key='HasDrivingLicence']//span[text()='NO']";
        this.MC_LICENSE_HISTORY= "//vlocity_ins-omniscript-select[@data-omni-key='licenceHistory']//input[@class='nds-input nds-listbox__option-text_entity']";
        this.Licensefieldvalue="//vlocity_ins-omniscript-select[@data-omni-key='licenceHistory']//ul[@class='nds-dropdown-container listbox nds-listbox nds-listbox_vertical']//li[2]"
        this.MC_CLAIM_FAULT_YES= "//vlocity_ins-omniscript-radio[@data-omni-key='claimHisThreeYears']//span[text()='YES']";
        this.MC_CLAIM_FAULT_NO= "//vlocity_ins-omniscript-radio[@data-omni-key='claimHisThreeYears']//span[text()='NO']";
        this.MC_PROMO_CODE="//vlocity_ins-omniscript-text[@data-omni-key='txtPromocode']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.MC_APPLY="//vlocity_ins-omniscript-ip-action[@data-omni-key='promocodeValidation']//span[text()='APPLY']";
        this.MC_GET_QUICK_QOUTE="//vlocity_ins-button//span[text()='GET QUICK QUOTE']";
        this.BACK="//vlocity_ins-button//span[text()='BACK']";
        this.CANCEL="//vlocity_ins-button//span[text()='CANCEL']";

        this.BasicExcess="//vlocity_ins-omniscript-text-block[@data-omni-key='TextBlock2']//li[text()='$500']";
        this.CoverageDetails= "//vlocity_ins-omniscript-text-block[@data-omni-key='TextBlock1']//li[text()='COMPREHENSIVE']"
        this.CoverageDetails1="//vlocity_ins-omniscript-text-block[@data-omni-key='TextBlock1']//li[text()='THIRD PARTY FIRE & THEFT']"
        this.CoverageDetails2="//vlocity_ins-omniscript-text-block[@data-omni-key='TextBlock1']//li[text()='THIRD PARTY ONLY']"
        this.CoverageDetails3="//vlocity_ins-omniscript-text-block[@data-omni-key='TextBlock1']//li[text()='OFF ROAD RIDER']"
        this.PRODUCT_DISCLOSURE_STATEMENT="//vlocity_ins-flex-action[@class='state1element1block_element2_child flexActionElement']//span[text()='(View PDF)']";
        this.FINANCIAL_SERVICES_GUIDE= "//vlocity_ins-flex-action[@class='state1element2block_element2_child flexActionElement']//span[text()='(View PDF)']";
        this.TARGET_MARKET_DETERMINATION= "//vlocity_ins-flex-action[@class='state1element3block_element2_child flexActionElement']//span[text()='(View PDF)']";
        this.SAVEEMAIL_QUOTE="//vlocity_ins-flex-action//span[text()='SAVE & EMAIL QUOTE']";
        this.CONTINUE1="//vlocity_ins-button//span[text()='CONTINUE']";
        this.BACK= "//vlocity_ins-button//span[text()='BACK]";
        this.CANCEL = "//vlocity_ins-button//span[text()='CANCEL']";

        this.TITLE = "//vlocity_ins-omniscript-select[@data-omni-key='Title']//input[@class='nds-input nds-listbox__option-text_entity']";
        this.SelectTitle="//vlocity_ins-omniscript-select[@data-omni-key='Title']//span[text()='Mr.']";
        this.FIRST_NAME = "//vlocity_ins-omniscript-text[@data-omni-key='firstName']//label[text()='First Name']";
        this.LAST_NAME = "//vlocity_ins-omniscript-text[@data-omni-key='lastName']//label[text()='Last Name']";
        this.MOBILE = "//vlocity_ins-omniscript-text[@data-omni-key='Mobile_AU']//label[text()='Mobile']";
        this.LANDLINE = "//vlocity_ins-omniscript-text[@data-omni-key='Landline']//label[text()='Landline']";
        this.EMAIL = "//vlocity_ins-omniscript-email[@data-omni-key='Email']//label[text()='Email']";
        this.TICK_CHECKBOX = "//vlocity_ins-flex-card-state//img[@src='/resource/YMI_Check']";
        this.CONTINUE2 = "//span[text()='CONTINUE']";
        this.BACK = "//span[text()='BACK']";
        this.CANCEL = "//vlocity_ins-button[@class='omniscript-btn-save-for-later']//span[text()='CANCEL']";
        

        this.VERIFICATION_CODE = "//vlocity_ins-omniscript-text[@data-omni-key='verificationCode']//label[text()='Verification Code']";
        this.RESEND_VERIFICATION_CODE = "//vlocity_ins-omniscript-ip-action[@data-omni-key='ReInitRegn']//span[text()='Resend verification code']";
        this.CONTINUE = "//vlocity_ins-button[@class='omniscript-btn-next nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='CONTINUE']";
        this.BACK = "//vlocity_ins-button[@class='omniscript-btn-previous nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='BACK']";
        this.CANCEL = "//vlocity_ins-button[@class='omniscript-btn-save-for-later']//span[text()='CANCEL']";
        

        this.FIRST_REGISTERED_OWNER_YES = "//vlocity_ins-omniscript-radio[@data-omni-key='biIsNewBike']//span[text()='YES']";
        this.FIRST_REGISTERED_OWNER_NO = "//vlocity_ins-omniscript-radio[@data-omni-key='biIsNewBike']//span[text()='NO']";
        this.DATE_OF_PURCHASE = "//vlocity_ins-omniscript-date[@data-omni-key='biDOP']//input[@class='nds-input nds-input_mask']";
        this.SelectPurchaseYear = "//vlocity_ins-omniscript-date[@data-omni-key='biDOP']//select[@data-id='select-01']";
        this.SelectPurchaseDate = "//vlocity_ins-omniscript-date[@data-omni-key='biDOP']//td[@data-id='dayId1']//span[text()='1']";
        this.PURCHASE_PRICE = "//vlocity_ins-omniscript-currency[@data-omni-key='biPurchasePrice']//span[text()='Purchase Price']";
        this.PRE_EXISTING_DAMAGE_YES = "//vlocity_ins-omniscript-radio[@data-omni-key='biPreExistingDamage']//span[text()='Yes']";
        this.PRE_EXISTING_DAMAGE_NO = "//vlocity_ins-omniscript-radio[@data-omni-key='biPreExistingDamage']//span[text()='NO']";
        this.SelectKmRange = "//ul[@class='nds-dropdown-container listbox nds-listbox nds-listbox_vertical']//li//span[text()='4001-8000']";
        this.RIDING_RANGE = "//vlocity_ins-omniscript-select[@data-omni-key='biKMRange']//input[@class='nds-input nds-listbox__option-text_entity']";
        this.MC_FINANCED_YES = "//vlocity_ins-omniscript-radio[@data-omni-key='biIsFinanced']//span[text()='YES']";
        this.MC_FINANCED_NO = "//vlocity_ins-omniscript-radio[@data-omni-key='biIsFinanced']//span[text()='NO']";
        this.WHO_IS_FINANCER = "//vlocity_ins-omniscript-select[@data-omni-key='biFinancier']//input[@class='nds-input nds-listbox__option-text_entity']";
        this.MC_MOD_YES = "//vlocity_ins-omniscript-radio[@data-omni-key='biHasMod']//span[text()='YES']";
        this.MC_MOD_NO = "//vlocity_ins-omniscript-radio[@data-omni-key='biHasMod']//span[text()='NO']";
        this.CRUISE_CONTROL = "//vlocity_ins-omniscript-multiselect[@data-omni-key='biModType']//span[text()='CRUISE CONTROL']";
        this.ENGINE = "//vlocity_ins-omniscript-multiselect[@data-omni-key='biModType']//span[text()='ENGINE']";
        this.EXHAUST = "//vlocity_ins-omniscript-multiselect[@data-omni-key='biModType']//span[text()='EXHAUST']";
        this.PAINT = "//vlocity_ins-omniscript-multiselect[@data-omni-key='biModType']//span[text()='PAINT']";
        this.WHEELS = "//vlocity_ins-omniscript-multiselect[@data-omni-key='biModType']//span[text()='WHEELS']";
        this.OTHER = "//vlocity_ins-omniscript-multiselect[@data-omni-key='biModType']//span[text()='OTHER']";
        this.OTHER_MOD = "//vlocity_ins-omniscript-text[@data-omni-key='biOtherMod']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.ACCESSORIES_YES = "//vlocity_ins-omniscript-radio[@data-omni-key='biAccessories']//span[text()='YES']";
        this.ACCESSORIES_NO = "//vlocity_ins-omniscript-radio[@data-omni-key='biAccessories']//span[text()='NO']";
        this.ACCESSORIES_LIST = "//vlocity_ins-omniscript-text[@data-omni-key='biAccessoriesList']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.BASIC_EXCESS = "//vlocity_ins-omniscript-select[@data-omni-key='biExcess5K']//input[@class='nds-input nds-listbox__option-text_entity nds-not-empty nds-is-dirty']";
        this.TYRE_RIM_COVER_YES = "//vlocity_ins-omniscript-radio[@data-omni-key='miHasTRC']//span[text()='YES']";
        this.TYRE_RIM_COVER_NO = "//vlocity_ins-omniscript-radio[@data-omni-key='miHasTRC']//span[text()='NO']";
        this.LAT_UP_PERIOD_YES = "//vlocity_ins-omniscript-radio[@data-omni-key='LayupRequired']//span[text()='YES']";
        this.LAT_UP_PERIOD_NO = "//vlocity_ins-omniscript-radio[@data-omni-key='LayupRequired']//span[text()='NO']";
        this.SAVE_EXIT = "//vlocity_ins-omniscript-ip-action[@data-omni-key='IP_SaveQuote']//span[text()='SAVE & EXIT']";
        this.NEXT = "//vlocity_ins-button[@class='omniscript-btn-next nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='NEXT']";
        this.HOME_ADDRESS = "//vlocity_ins-omniscript-typeahead[@data-omni-key='homeAddress']//input[@class='nds-input nds-input_mask nds-listbox__option-text_entity']";
        this.ENTER_STORAGE_ADDRESS_MANUALLY = "//vlocity_ins-omniscript-set-values[@data-omni-key='svStorageAddress']//span[text()='Enter address manually']";
        this.STORAGE_ADD_CHECKBOX = "//vlocity_ins-omniscript-checkbox[@data-omni-key='isStorageAddSame']//span[@class='nds-checkbox_faux']";
        this.STORAGE_ADDRESS = "//vlocity_ins-omniscript-typeahead[@data-omni-key='storageAddress']//label[text()='Storage Address']";
        this.ENTER_ADDRESS_MANUALLY = "//vlocity_ins-omniscript-set-values[@data-omni-key='svAddress']//span[text()='Enter address manually']";

        this.StreetNumber="//vlocity_ins-omniscript-text[@data-omni-key='homeAddStreet']//label[text()='Street Number and Name']"
        this.Apartment="//vlocity_ins-omniscript-text[@data-omni-key='homeAddApartment']//label[text()='Apartment, Suite, etc (OPTIONAL)']"
        this.City="//vlocity_ins-omniscript-text[@data-omni-key='homeAddCity']//label[text()='City']"
        this.Statefieldclick="//vlocity_ins-omniscript-select[@data-omni-key='homeAddState']//input[@class='nds-input nds-listbox__option-text_entity nds-not-empty nds-is-dirty']"
        this.Selectstate="//ul[@class='nds-dropdown-container listbox nds-listbox nds-listbox_vertical']//span[text()='NSW']"
        this.Enterpostcode="//vlocity_ins-omniscript-text[@data-omni-key='homeAddPostcode']//input[@class='vlocity-input nds-input nds-input_mask']"
        this.Samestorageaddress="//vlocity_ins-omniscript-checkbox[@data-omni-key='isStorageAddSame']//span[@class='nds-checkbox_faux']"
 
        
        this.STORAGE_STREET_NO_AND_NAME = "//vlocity_ins-omniscript-text[@data-omni-key='storageAddStreet']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.STORAGE_APARTMENT = "//vlocity_ins-omniscript-text[@data-omni-key='storageAddApartment']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.STORAGE_CITY = "//vlocity_ins-omniscript-text[@data-omni-key='storageAddCity']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.STORAGE_STATE = "//vlocity_ins-omniscript-text[@data-omni-key='storageAddCity']//input[@class='vlocity-input nds-input nds-input_mask']";  // Note: Same key used for city and state
        this.STORAGE_POSTCODE = "//vlocity_ins-omniscript-text[@data-omni-key='storageAddPostcode']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.PRIMARY_RIDER_YES = "//vlocity_ins-omniscript-radio[@data-omni-key='isPrimaryRider']//span[text()='YES']";
        this.PRIMARY_RIDER_NO = "//vlocity_ins-omniscript-radio[@data-omni-key='isPrimaryRider']//span[text()='NO']";
        this.RIDING_COURSE_YES = "//vlocity_ins-omniscript-radio[@data-omni-key='rdRidingCourse']//span[text()='YES']";
        this.RIDING_COURSE_NO = "//vlocity_ins-omniscript-radio[@data-omni-key='rdRidingCourse']//span[text()='NO']";
        this.DRIVING_HISTORY_YES = "//vlocity_ins-omniscript-radio[@data-omni-key='rdDrivingHistory']//span[text()='YES']";
        this.DRIVING_HISTORY_NO = "//vlocity_ins-omniscript-radio[@data-omni-key='rdDrivingHistory']//span[text()='NO']";
        this.CRIMINAL_CONVICTION_YES = "//vlocity_ins-omniscript-radio[@data-omni-key='rdCriminalConviction']//span[text()='YES']";
        this.CRIMINAL_CONVICTION_NO = "//vlocity_ins-omniscript-radio[@data-omni-key='rdCriminalConviction']//span[text()='NO']";
        this.INSURANCE_HISTORY_YES = "//vlocity_ins-omniscript-radio[@data-omni-key='rdInsuranceHistory']//span[text()='YES']";
        this.INSURANCE_HISTORY_NO = "//vlocity_ins-omniscript-radio[@data-omni-key='rdInsuranceHistory']//span[text()='NO']";
        this.ClickAdditionalRider="//vlocity_ins-omniscript-set-values[@data-omni-key='addRiderIcon']//span[text()='+']";
        this.RIDER_NAME = "//vlocity_ins-omniscript-text[@data-omni-key='addRiderName']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.RIDER_AGE = "//vlocity_ins-omniscript-text[@data-omni-key='addRiderAge']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.RIDER_LICENSE = "//vlocity_ins-omniscript-text[@data-omni-key='addRiderLicenceHis']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.CO_INSURED_PARTY = "//vlocity_ins-omniscript-set-values[@data-omni-key='addCoInsIcon']//span[text()='+']";
        this.CO_INSURED_PARTY_NAME = "//vlocity_ins-omniscript-text[@data-omni-key='addCoInsName']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.CO_INSURED_PARTY_DOB = "//vlocity_ins-omniscript-date[@data-omni-key='addCoInsDOB']//input[@class='nds-input nds-input_mask']";
        this.REMOVE_CO_INSURED_PARTY = "//vlocity_ins-omniscript-set-values[@data-omni-key='SetValues1']//span[text()='Remove additional Co-Insured party']";
        this.BACK = "//vlocity_ins-button[@class='omniscript-btn-previous nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='BACK']";

        this.PROCEED_TO_PREMIUM = "//vlocity_ins-button[@class='omniscript-btn-next nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='PROCEED TO PREMIUM']";
        this.BACK ="//vlocity_ins-button[@class='omniscript-btn-previous nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='BACK']";

        this.PROMO_CODE = "//vlocity_ins-omniscript-text[@data-omni-key='promocode']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.APPLY = "//vlocity_ins-omniscript-ip-action[@data-omni-key='ipRecalculateRating']//button[@class='vlocity-btn nds-button nds-button_brand nds-button_stretch']";

        this.ROAD_SIDE_ASSISTANCE_YES = "//vlocity_ins-omniscript-custom-lwc[@data-omni-key='LWC_RSAPRemium']//button[text()='YES']";
        this.ROAD_SIDE_ASSISTANCE_NO = "//vlocity_ins-omniscript-custom-lwc[@data-omni-key='LWC_RSAPRemium']//button[text()='NO']";

        this.SELECT_ANNUAL_PREMIUM = "//vlocity_ins-output-field[@data-style-id-'state0element1block_element0block_element0block_element3block_element0_child']//p[text()='SELECT']";
        this.SELECT_MONTHLY_PREMIUM = "//vlocity_ins-output-field[@data-style-id-'state0element0block_element0block_element0block_element3block_element0_child']//p[text()='SELECT']";

        this.SAVE_AND_EMAIL_QUOTE = "//vlocity_ins-flex-action[@data-action-key='state0element0block_element0']//span[text()='SAVE & EMAIL QUOTE']";
        this.ClickonSendEmail="//vlocity_ins-omniscript-ip-action[@data-omni-key='ipCQSendEmailDealer']//span[text()='SEND']"
        this.PROCEED_TO_PAYMENT = "//vlocity_ins-button[@class='omniscript-btn-next nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='PROCEED TO PAYMENT']";
        this.CARD_PAYMENT = "//vlocity_ins-radio-image-group//span[text()='CARD PAYMENT']";

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

module.exports=DEALERYMIMCAU; 