import { Page, Locator } from '@playwright/test';




export class Login {

    readonly page: Page;
    readonly loginDropdown: Locator;
    readonly empLoginlink: Locator;
    readonly empUsername: Locator;
    readonly empPassword: Locator;
    readonly empLoginButton: Locator;



    readonly customerLoginlink: Locator;
    readonly customerUsername: Locator;
    readonly customerPassword: Locator;
    readonly customerLoginButton: Locator;

    readonly ssoEmpUsername: Locator;
    readonly ssoEmpPassword: Locator;
    readonly ssoEmpContinueButton: Locator;
    readonly ssoEmpLoginButton: Locator;



    constructor(page: Page) {
        this.page = page;
        this.loginDropdown = page.locator('#navbarDropdown');
        this.empLoginlink = page.locator('//a[text()="Employee"]');
        this.empUsername = page.locator('#employeeUsername');
        this.empPassword = page.locator('//input[@id = "employeePassword"]');
        this.empLoginButton = page.locator('//input[@id = "employeeLoginSubmit"]');


        this.ssoEmpUsername = page.locator('//input[@name="email"]');
        this.ssoEmpContinueButton = page.locator("(//button[normalize-space()='Continue'])[1]");
        this.ssoEmpPassword = page.locator('//input[@name="password"]');
        this.ssoEmpLoginButton = page.locator('//button[@type="submit"]')

        this.customerLoginlink = page.locator('//a[text()="Customer"]');
        this.customerUsername = page.locator("//input[@id='UserName']");
        this.customerPassword = page.locator("//input[@id='password-field']");
        this.customerLoginButton = page.locator("//button[normalize-space()='Submit']")

    }


    /**
     * Logs in as an employee using provided credentials.
     * 
     * @param userName - The employee's username.
     * @param password - The employee's password.
     */

    async loginEmployee(userName: string, password: string): Promise<void> {
        await this.loginDropdown.click();
        await this.empLoginlink.click();
        await this.empUsername.fill(userName);
        await this.empPassword.fill(password);
        await this.empLoginButton.click();

    }

    /**
     * Logs in as an employee with SSO using provided credentials.
     * 
     * @param userName - The employee's username.
     * @param password - The employee's password.
     */

    async loginSSOEmployee(userName: string, password: string): Promise<void> {
       
        await this.loginDropdown.click();
        await this.empLoginlink.click();
        await this.ssoEmpUsername.fill(userName);
        await Promise.all([
            this.page.waitForLoadState('load'),
            this.ssoEmpContinueButton.click()
        ]);
        await this.ssoEmpPassword.fill(password);
        await Promise.all([
            this.page.waitForLoadState('load'),
            this.ssoEmpLoginButton.click()
        ]);

    }



    /**
     * Logs in as a taxpayer using provided credentials.
     * 
     * @param userName - The taxpayer's username.
     * @param password - The taxpayer's password.
     */

    async loginTaxpayer(userName: string, password: string): Promise<void> {
        await this.loginDropdown.click();
        await this.customerLoginlink.click();
        await this.customerUsername.fill(userName);
        await this.customerPassword.fill(password);
        await this.customerLoginButton.click();
    }







}