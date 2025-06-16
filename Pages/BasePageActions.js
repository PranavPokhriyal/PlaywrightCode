const fs = require('fs');
const path = require('path');
const { Page, Download } = require('@playwright/test');

const { savePolicyNumber } = require('../Policyno Data/PolicyStorage'); // Adjust the path as per your structure


class BasePage {
    constructor(page) {
        this.page = page;
    }

    async safeClick(selector, timeout = 90000, actionName = '') {
        try {
            await this.page.waitForSelector(selector, { timeout });
            await this.page.click(selector);
            console.log(`✅ Clicked: ${actionName || selector}`);
        } catch (error) {
            console.error(`❌ Failed to click: ${actionName || selector}`);
            await this.takeScreenshot(`error-click-${actionName || 'unknown'}`);
            throw error;
        }
    }

    async safeFill(selector, value, timeout = 90000, fieldName = '') {
        try {
            await this.page.waitForSelector(selector, { timeout });
            await this.page.fill(selector, value);
            console.log(`✅ Filled: ${fieldName || selector} with "${value}"`);
        } catch (error) {
            console.error(`❌ Failed to fill: ${fieldName || selector}`);
            await this.takeScreenshot(`error-fill-${fieldName || 'unknown'}`);
            throw error;
        }
    }

    async safeEvaluate(script, actionName = 'Scroll') {
        try {
            await this.page.evaluate(script);
            console.log(`✅ Evaluated: ${actionName}`);
        } catch (error) {
            console.error(`❌ Failed to evaluate: ${actionName}`);
            await this.takeScreenshot(`error-eval-${actionName}`);
            throw error;
        }
    }

    async takeScreenshot(name) {
        const screenshotDir = path.join('Screenshots');
        if (!fs.existsSync(screenshotDir)) {
            fs.mkdirSync(screenshotDir);
        }
        const screenshotPath = path.join(screenshotDir, `${name}-${Date.now()}.png`);
        try {
            await this.page.screenshot({ path: screenshotPath, fullPage: true });
            console.log(`🖼️ Screenshot saved: ${screenshotPath}`);
        } catch (screenshotError) {
            console.error(`❌ Failed to take screenshot: ${screenshotError.message}`);
        }
    }

    async safeFrameFill(outerFrameSelector, arg2, arg3, arg4, arg5, arg6) {
        try {
            let input, timeout = 6000, fieldName = '';
    
            if (typeof arg5 === 'number') {
                // innerFrame version
                const innerFrameSelector = arg2;
                const inputSelector = arg3;
                const value = arg4;
                timeout = arg5;
                fieldName = arg6 || inputSelector;
    
                await this.page.waitForSelector(outerFrameSelector, { timeout });
                const outerFrame = this.page.frameLocator(outerFrameSelector);
                const innerFrame = outerFrame.frameLocator(innerFrameSelector);
                input = innerFrame.locator(inputSelector);
                await input.waitFor({ state: 'visible', timeout });
                await input.fill(value);
    
            } else {
                // no innerFrame version
                const inputSelector = arg2;
                const value = arg3;
                timeout = arg4 || 6000;
                fieldName = arg5 || inputSelector;
    
                await this.page.waitForSelector(outerFrameSelector, { timeout });
                const outerFrame = this.page.frameLocator(outerFrameSelector);
                input = outerFrame.locator(inputSelector);
                await input.waitFor({ state: 'visible', timeout });
                await input.fill(value);
            }
    
            console.log(`✅ Filled iframe field: ${fieldName}`);
        } catch (error) {
            console.error(`❌ Failed to fill iframe field: ${arg6 || arg5 || arg2}`);
            await this.takeScreenshot(`error-iframe-fill-${arg6 || arg5 || arg2}`);
            throw error;
        }
    }
    
    
    
    async safeFrameClick(iframeSelector, clickSelector, actionName = '') {
        try {
            const frame = this.page.frameLocator(iframeSelector);
            await frame.locator(clickSelector).click();
            console.log(`✅ Clicked ${actionName} in iframe`);
        } catch (error) {
            console.error(`❌ Failed to click ${actionName} in iframe`);
            await this.takeScreenshot(`error-frameclick-${actionName}`);
            throw error;
        }
    }
    

    async verifyLinkOpensCorrectUrl(linkSelector, timeout = 60000, description = '') {
        try {
            // Get the href from the anchor tag
            const locator = this.page.locator(linkSelector);
            const expectedUrl = await locator.getAttribute('href');
    
            if (!expectedUrl) {
                throw new Error(`No href found for selector: ${linkSelector}`);
            }
    
            // Listen for new tab opening
            const [newPage] = await Promise.all([
                this.page.context().waitForEvent('page'),
                locator.click()
            ]);
    
            // Wait for the new page to load
            await newPage.waitForLoadState('load', { timeout: 80000 });
    
            // Compare the actual URL
            const actualUrl = newPage.url();
            if (actualUrl.includes(expectedUrl)) {
                console.log(`✅ URL verification passed: ${actualUrl}`);
            } else {
                console.error(`❌ URL mismatch. Expected to contain: ${expectedUrl}, Actual: ${actualUrl}`);
                throw new Error('URL verification failed.');
            }
    
            // Close the tab and return
            await newPage.close();
        } catch (error) {
            console.error(`❌ Failed to verify link: ${description || linkSelector}`);
            await this.takeScreenshot(`link-verification-error-${description}`);
            throw error;
        }
    }
    

    async verifyText(selector, expectedText, timeout = 5000, fieldName = '') {
        try {
          const element = this.page.locator(selector);
          await element.waitFor({ state: 'visible', timeout });
      
          const actualText = await element.textContent();
          if (actualText.includes(expectedText)) {
            console.log(`✅ Text verification passed for ${fieldName || selector}`);
          } else {
            throw new Error(`Expected text "${expectedText}" not found in element. Actual: "${actualText}"`);
          }
        } catch (error) {
          console.error(`❌ Text verification failed for ${fieldName || selector}:`, error);
          await this.takeScreenshot(`error-verify-text-${fieldName || 'unknown'}`);
          throw error;
        }
      }

      async verifyPdfAction(linkSelector, timeout = 60000, description = '') {
    let newPage = null;

    try {
        const locator = this.page.locator(linkSelector);

        const [event] = await Promise.all([
            Promise.race([
                this.page.context().waitForEvent('page'),
                this.page.waitForEvent('download')
            ]),
            locator.click()
        ]);

        // 📄 New Tab Opened
        if (event && typeof event.waitForLoadState === 'function') {
            newPage = event;
            await newPage.waitForLoadState('load', { timeout });

            const pdfUrl = newPage.url();
            console.log(`🔎 Opened in new tab: ${pdfUrl}`);

            if (!pdfUrl.endsWith('.pdf')) {
                const response = await newPage.goto(pdfUrl);
                const contentType = response.headers()['content-type'];
                if (!contentType.includes('application/pdf')) {
                    throw new Error(`❌ Not a PDF. Got content-type: ${contentType}`);
                }
            }

            console.log(`✅ PDF View verified: ${pdfUrl}`);
            await newPage.close();  // ✅ Ensure tab is closed
        }

        // 📥 File Downloaded
        else if (event && typeof event.suggestedFilename === 'function') {
            const download = event;
            const suggestedName = download.suggestedFilename();

            if (!suggestedName.endsWith('.pdf')) {
                throw new Error(`❌ Downloaded file is not a PDF: ${suggestedName}`);
            }

            console.log(`✅ PDF Download verified: ${suggestedName}`);
        }

        // ❓ Unexpected Behavior
        else {
            throw new Error(`❌ Unknown event triggered on click.`);
        }

    } catch (error) {
        console.error(`❌ Failed to verify PDF action: ${description || linkSelector}`);
        
        // ⛔ Capture from the error page (if new tab)
        if (newPage) {
            await newPage.screenshot({ path: `Screenshots/pdf-action-error-${description}-${Date.now()}.png` });
            await newPage.close();  // ✅ Close it even on failure
        } else {
            await this.page.screenshot({ path: `Screenshots/pdf-action-error-${description}-${Date.now()}.png` });
        }

        // 👈 Now return to the original tab
        const allPages = this.page.context().pages();
        if (allPages.length > 0) {
            this.page = allPages[0]; // set focus to original page
            await this.page.bringToFront();
        }

        // Don't throw to continue script
    }
}
   
    
    // Save policy number to JSON file
async savePolicyNumber(policyType, policyNumber) {
    try {
        let data = {};
        if (fs.existsSync(policyFilePath)) {
            const content = fs.readFileSync(policyFilePath, 'utf-8');
            data = JSON.parse(content || '{}');
        }

        data[policyType] = {
            number: policyNumber,
            savedAt: new Date().toISOString()
        };

        fs.writeFileSync(policyFilePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log(`✅ Policy number saved for ${policyType}: ${policyNumber}`);
    } catch (error) {
        console.error(`❌ Failed to save policy number for ${policyType}:`, error);
    }
}

// Get policy number from JSON file
getPolicyNumber(policyType) {
    try {
        if (fs.existsSync(policyFilePath)) {
            const content = fs.readFileSync(policyFilePath, 'utf-8');
            const data = JSON.parse(content || '{}');
            return data[policyType]?.number || null;
        }
        return null;
    } catch (error) {
        console.error(`❌ Failed to read policy number for ${policyType}:`, error);
        return null;
    }
}

async getTextContent(selector, timeout = 5000, fieldName = '') {
    try {
      const element = this.page.locator(selector);
      await element.waitFor({ state: 'visible', timeout });
      const text = await element.textContent();
      const trimmedText = text?.trim();
      console.log(`✅ Retrieved text for ${fieldName || selector}: ${trimmedText}`);
      return trimmedText;
    } catch (error) {
      console.error(`❌ Failed to get text content for ${fieldName || selector}:`, error);
      await this.takeScreenshot(`error-get-text-${fieldName || 'unknown'}`);
      throw error;
    }
}
async selectDateFromPicker(day, month, year) {
    const dateXPath = `//td[@data-type='date' and contains(@aria-label, '${month} ${day} ${year}')]`;

    try {
        await this.safeClick(this.selectors.MC_DOB, 10000, 'Open Date Picker');
        await this.safeClick(dateXPath, 30000, `Select DOB: ${day}-${month}-${year}`);
    } catch (error) {
        console.error(`❌ Failed to select date: ${day}-${month}-${year}`);
        await this.takeScreenshot(`error-select-date-${day}-${month}-${year}`);
        throw error;
    }
}

async safeSelectOption(selector, optionLabel, timeout = 30000, actionDescription = '') {
    try {
      // Wait for the select element to be visible
      await this.page.waitForSelector(selector, { timeout });
      
      // Select the option by label
      await this.page.selectOption(selector, { label: optionLabel });
      
      console.log(`✅ ${actionDescription || `Selected option '${optionLabel}' in '${selector}'`}`);
    } catch (error) {
      console.error(`❌ Failed to select option '${optionLabel}' in '${selector}':`, error);
      await this.takeScreenshot(`error-select-option-${optionLabel}`);
      throw error;
    }
  }
  

}


module.exports = BasePage;
