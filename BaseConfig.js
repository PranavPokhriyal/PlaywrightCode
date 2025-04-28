class BasicConfig {
    constructor(page, system = 'salesforce') {
        this.page = page;
        this.system = system;

        // Define login details for different systems
        this.configs = {
            salesforce: {
                loginUrl: "https://yamahamotorsaustralia--ymidev2.sandbox.lightning.force.com/",
                usernameField: "input[name='username']",
                passwordField: "input[name='pw']",
                loginButton: "input[name='Login']"
            },
            dealerPortal: {
                loginUrl: "http://dealer-portal-sfstaging.yamaha-motor.com.au/", 
                usernameField: "//input[@placeholder='Username']",        
                passwordField: "//input[@placeholder='Password']",        
                loginButton: "//span[text()='Log in']"            
            }
        };

        // Pick the config dynamically based on system
        this.currentConfig = this.configs[this.system];
    }

    async login(username, password) {
        const { loginUrl, usernameField, passwordField, loginButton } = this.currentConfig;

        await this.page.goto(loginUrl);

        await this.page.locator(usernameField).fill(username, { delay: 600 });
        await this.page.locator(passwordField).fill(password, { delay: 600 });
        await this.page.locator(loginButton).click();

        try {
            await this.page.waitForNavigation({ waitUntil: 'load' });
        } catch (error) {
            console.log("Navigation error:", error);
        }
    }
}

module.exports = BasicConfig;
