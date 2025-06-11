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
        this.MC_COVERAGE_REQD="//vlocity_ins-omniscript-radio//span[text()='COMPREHENSIVE']";
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

        this.PRODUCT_DISCLOSURE_STATEMENT="//vlocity_ins-flex-action[@class='state1element1block_element2_child flexActionElement']//span[text()='(View PDF)'']";
        this.FINANCIAL_SERVICES_GUIDE= "//vlocity_ins-flex-action[@class='state1element2block_element2_child flexActionElement']//span[text()='(View PDF)'']";
        this.TARGET_MARKET_DETERMINATION= "//vlocity_ins-flex-action[@class='state1element3block_element2_child flexActionElement']//span[text()='(View PDF)'']";
        this.SAVEEMAIL_QUOTE="//vlocity_ins-flex-action//span[text()='SAVE & EMAIL QUOTE']";
        this.CONTINUE="//vlocity_ins-button//span[text()='CONTINUE']";
        this.BACK= "//vlocity_ins-button//span[text()='BACK]";
        this.CANCEL = "//vlocity_ins-button//span[text()='CANCEL']";

        this.TITLE = "//vlocity_ins-omniscript-select[@data-omni-key='Title']//input[@class='nds-input nds-listbox__option-text_entity']";
        this.FIRST_NAME = "//vlocity_ins-omniscript-text[@data-omni-key='firstName']//label[text()='First Name']";
        this.LAST_NAME = "//vlocity_ins-omniscript-text[@data-omni-key='lastName']//label[text()='Last Name']";
        this.MOBILE = "//vlocity_ins-omniscript-text[@data-omni-key='Mobile_AU']//label[text()='Mobile']";
        this.LANDLINE = "//vlocity_ins-omniscript-text[@data-omni-key='Landline']//label[text()='Landline']";
        this.EMAIL = "//vlocity_ins-omniscript-email[@data-omni-key='Email']//label[text()='Email']";
        this.TICK_CHECKBOX = "//vlocity_ins-flex-img[@data-action-key-'state0element0block_element1']//img[@src-'/sfsites/c/resource/YMI_Check']";
        this.CONTINUE = "//vlocity_ins-button[@class='omniscript-btn-next nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='CONTINUE']";
        this.BACK = "//vlocity_ins-button[@class='omniscript-btn-previous nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='BACK']";
        this.CANCEL = "//vlocity_ins-button[@class='omniscript-btn-save-for-later']//span[text()='CANCEL']";
        

        this.VERIFICATION_CODE = "//vlocity_ins-omniscript-text[@data-omni-key='verificationCode']//label[text()='Verification Code']";
        this.RESEND_VERIFICATION_CODE = "//vlocity_ins-omniscript-ip-action[@data-omni-key='ReInitRegn']//span[text()='Resend verification code']";
        this.CONTINUE = "//vlocity_ins-button[@class='omniscript-btn-next nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='CONTINUE']";
        this.BACK = "//vlocity_ins-button[@class='omniscript-btn-previous nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='BACK']";
        this.CANCEL = "//vlocity_ins-button[@class='omniscript-btn-save-for-later']//span[text()='CANCEL']";
        

        this.FIRST_REGISTERED_OWNER_YES = "//vlocity_ins-omniscript-radio[@data-omni-key='biIsNewBike']//span[text()='YES']";
        this.FIRST_REGISTERED_OWNER_NO = "//vlocity_ins-omniscript-radio[@data-omni-key='biIsNewBike']//span[text()='NO']";
        this.DATE_OF_PURCHASE = "//vlocity_ins-omniscript-date[@data-omni-key='biDOP']//input[@class='nds-input nds-input_mask']";
        this.PURCHHASE_PRICE = "//vlocity_ins-omniscript-currency[@data-omni-key='biPurchasePrice']//span[text()='Purchase Price']";
        this.PRE_EXISTING_DAMAGE_YES = "//vlocity_ins-omniscript-radio[@data-omni-key='biPreExistingDamage']//span[text()='Yes']";
        this.PRE_EXISTING_DAMAGE_NO = "//vlocity_ins-omniscript-radio[@data-omni-key='biPreExistingDamage']//span[text()='No']";
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
        this.STREET_NO_AND_NAME = "//vlocity_ins-omniscript-text[@data-omni-key='homeAddStreet']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.APARTMENT = "//vlocity_ins-omniscript-text[@data-omni-key='homeAddApartment']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.CITY = "//vlocity_ins-omniscript-text[@data-omni-key='homeAddCity']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.STATE = "//vlocity_ins-omniscript-text[@data-omni-key='homeAddState']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.POSTCODE = "//vlocity_ins-omniscript-text[@data-omni-key='homeAddPostcode']//input[@class='vlocity-input nds-input nds-input_mask']";
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
        this.RIDER_NAME = "//vlocity_ins-omniscript-text[@data-omni-key='addRiderName']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.RIDER_AGE = "//vlocity_ins-omniscript-text[@data-omni-key='addRiderAge']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.RIDER_LICENSE = "//vlocity_ins-omniscript-text[@data-omni-key='addRiderLicenceHis']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.CO_INSURED_PARTY = "//vlocity_ins-omniscript-set-values[@data-omni-key='addCoInsIcon']//span[text()='+']";
        this.CO_INSURED_PARTY_NAME = "//vlocity_ins-omniscript-text[@data-omni-key='addCoInsName']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.CO_INSURED_PARTY_DOB = "//vlocity_ins-omniscript-date[@data-omni-key='addCoInsDOB']//input[@class='nds-input nds-input_mask']";
        this.REMOVE_CO_INSURED_PARTY = "//vlocity_ins-omniscript-set-values[@data-omni-key='SetValues1']//span[text()='Remove additional Co-Insured party']";
        this.NEXT = "//vlocity_ins-button[@class='omniscript-btn-next nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='NEXT']";
        this.BACK = "//vlocity_ins-button[@class='omniscript-btn-previous nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='BACK']";

        this.PROCEED_TO_PREMIUM = "//vlocity_ins-button[@class='omniscript-btn-next nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='PROCEED TO PREMIUM']";
        this.BACK ="//vlocity_ins-button[@class='omniscript-btn-previous nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_3-of-12']//span[text()='BACK']";

        this.PROMO_CODE = "//vlocity_ins-omniscript-text[@data-omni-key='promocode']//input[@class='vlocity-input nds-input nds-input_mask']";
        this.APPLY = "//vlocity_ins-omniscript-ip-action[@data-omni-key='ipRecalculateRating']//button[@class='vlocity-btn nds-button nds-button_brand nds-button_stretch']";

        this.ROAD_SIDE_ASSISTANCE_YES = "//vlocity_ins-omniscript-custom-lwc[@data-omni-key='LWC_RSAPRemium']//button[text()='YES']";
        this.ROAD_SIDE_ASSISTANCE_NO = "//vlocity_ins-omniscript-custom-lwc[@data-omni-key='LWC_RSAPRemium']//button[text()='NO']";

        this.SELECT_ANNUAL_PREMIUM = "//vlocity_ins-output-field[@data-style-id-'state0element1block_element0block_element0block_element3block_element0_child']//p[text()='SELECT']";
        this.SELECT_MONTHLY_PREMIUM = "//vlocity_ins-output-field[@data-style-id-'state0element0block_element0block_element0block_element3block_element0_child']//p[text()='SELECT']";

        this.SAVE_AND_EMAIL_QUOTE = "//vlocity_ins-flex-action[@data-action-key-'state0element0block_element0']//span[text()='SAVE & EMAIL QUOTE']";

        this.PROCEED_TO_PAYMENT = "//vlocity_ins-button[@class='omniscript-btn-next nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_4-of-12']//span[text()='PROCEED TO PAYMENT']";
        this.BACK_PAYMENT = "//vlocity_ins-button[@class='omniscript-btn-previous nds-size_12-of-12 nds-m-bottom_x-small nds-medium-size_4-of-12']//span[text()='BACK']";
        
        this.CARD_PAYMENT = "//vlocity_ins-radio-image-group[@class='slds-p-top_small']//span[text()='CARD PAYMENT']";
        this.DIRECT_DEBIT = "//vlocity_ins-radio-image-group[@class='slds-p-top_small']//span[text()='DIRECT DEBIT']";

        this.BACK_LWC = "//vlocity_ins-omniscript-custom-lwc[@data-omni-key='LWC_BackButton']//button[text()='BACK']";

        this.VISA = "//div[@data-id('VISA')]//img[@src-'https://imbursecdnsb.blob.core.windows.net/assets/portal/img/payment-icons/visa.png']";

        this.CARD_NUMBER = "//form[@action/v1/checkouts/84C81853BAE6AC816C991021AF7F02B8.uat01-vm-tx02']//input[@autocomplete-'cc-number']";

        this.CARD_HOLDER_FIRSTNAME = "//div[@class='wpwl-wrapper wpwl-wrapper-cardHolder']//input[@class='wpwl-control wpwl-control-empty wpwl-control-givenName']";

        this.SURNAME = "//div[@class='wpwl-wrapper wpwl-wrapper-cardHolder']//input[@class='wpwl-control wpwl-control-empty wpwl-control-surName']";

        this.PAY_NOW = "//div[@class='wpwl-wrapper wpwl-wrapper-submit']//button[@class='wpwl-button wpwl-button-pay']";

        this.SUBMIT = "//button[text()='Submit']";

        this.MAKE_A_CLAIM ="//button//span[text()='MAKE A CLAIM']";

        this.RENEW_POLICY = '//c-ymi-button-actions[@data-omni-key="LWC_NoRenewalButton"]//button[text()="RENEW POLICY"]';

        this.CERTIFICATE_OF_INSURANCE = "//button[@class='vlocity-btn nds-button nds-button_brand nds-button_stretch']//span[text()='CERTIFICATE OF INSURANCE']";

        this.BACK_BUTTON = "//button[@class='vlocity-btn nds-button nds-button_outline-brand nds-button_stretch']//span[text()='BACK']";
	


    }
}

module.exports=DEALERYMIMCAU; 