import { Page, Locator, expect } from '@playwright/test'
import { promises } from 'dns';



export class Dashboard {


   readonly page: Page;
   readonly dashboardsDropdown: Locator;
   readonly billingDropdown: Locator;
   readonly cashieringDropdown: Locator;
   readonly balancingDropdown: Locator;
   readonly delinquencyDropdown: Locator;
   readonly searchButton: Locator;
   readonly addRecordButton: Locator;
   readonly userDropdown: Locator;
   readonly logoutLink: Locator;
   readonly logoutButton: Locator;
   readonly propertyDashboardLink: Locator;
   readonly businessFilingDashboardLink: Locator;
   readonly utilityMeterDashboardLink : Locator;
   readonly settingsLink : Locator;
   readonly adminDashboardLink : Locator;
   readonly collectionsDashboardLink : Locator;
   readonly billingSummary : Locator;
   readonly fillingCodes : Locator;
   readonly manageDeductionType : Locator;

  



   constructor(page: Page) {
      this.page = page;
      this.dashboardsDropdown = page.locator('[id^="dashboard"]');  
      this.billingDropdown = page.locator('[id^="billing"]');
      this.cashieringDropdown = page.locator('(//*[@id="paymentsDropdown"])[1] | //*[@id="cashiering"]');
      this.balancingDropdown = page.locator('(//*[@id="paymentsDropdown"])[2] | //*[@id="balancing"]');
      this.delinquencyDropdown = page.locator('[id^="delinquen"]');
      this.searchButton = page.locator("button[aria-label='Search']");
      this.addRecordButton = page.locator("button[aria-label='Add New Record']");
      this.userDropdown = page.locator('#profile-button');
      this.logoutLink = page.locator(".dropdown-item[data-target='#logoutModal']");
      this.logoutButton = page.getByText('Log Out');
      this.propertyDashboardLink = page.locator('//a[@id ="propertyTaxDashboardLink"]');
      this.businessFilingDashboardLink = page.locator('//a[@id="businessFilingDashboard"]');
      this.utilityMeterDashboardLink = page.locator("//a[@id='UtilityMetersDashboard']");
      this.settingsLink = page.locator("//i[@class='mdi mdi-cog mdi-fw mdi-24px']");
      this.adminDashboardLink = page.locator("//a[normalize-space()='Admin Dashboard']");
      this.collectionsDashboardLink = page.locator("//a[@id='collectionsDashboard']");
      this.billingSummary = page.locator("//a[normalize-space()='Billing Summary']");
      this.fillingCodes = page.locator("//a[@id='BusDropdown']");
      this.manageDeductionType = page.locator("//a[normalize-space()='Manage Deduction Types']")



   }

   // verify Dashboard Title

   async verifyDashboardTitle() {
      await expect(this.page).toHaveTitle(/Landing Page | OpenGov Tax & Revenue/);
   }

   async isDashboardsDropdownVisible() {
      await expect(this.dashboardsDropdown).toBeVisible();
   }

   async isBillingDropdownVisible() {
      await expect(this.billingDropdown).toBeVisible();
   }

   async isCashieringDropdownVisible() {
      await expect(this.cashieringDropdown).toBeVisible();
   }


   async isBalancingDropdownVisible() {
      await expect(this.balancingDropdown).toBeVisible();
   }

   async isDelinquencyDropdownVisible() {
      await expect(this.delinquencyDropdown).toBeVisible();
   }

   async isSearchButtonVisible() {
      await expect(this.searchButton).toBeVisible();
   }

   async isAddRecordButtonVisible() {
      await expect(this.addRecordButton).toBeVisible();
   }

   async clickOnCreateRecord():  Promise<void>{
      await this.addRecordButton.click();
   }


   async navigateToPropertyTaxDashboard() {
      await this.dashboardsDropdown.click();
      await this.propertyDashboardLink.click();
   }

   async navigateToBusinessTaxDashboard() {
      await this.dashboardsDropdown.click();
      await this.businessFilingDashboardLink.click();
   }

   async navigateToUtilityMeterDashboard() {
      await this.dashboardsDropdown.click();
      await this.utilityMeterDashboardLink.click();
   }

   async navigateToAdminDashboard() {
      await this.settingsLink.click();
      await this.adminDashboardLink.click();
   }

   async navigateToCollectionsDashboard() {
      await this.dashboardsDropdown.click();
      await this.collectionsDashboardLink.click();
   }

   async navigateToBillingDashboard() {
      await this.billingDropdown.click();
      await this.billingSummary.click();
   }

    async navigateToDeductionType() {
      await this.settingsLink.click();
      await this.fillingCodes.click();
      await this.manageDeductionType.click();

   }

    async navigateToSearchScreen() {
      await this.searchButton.click();

   }

   
 

   
   // To logout as employee user
   
   async logoutEmployee() {
      await this.userDropdown.click();
      await this.logoutLink.click();
      await this.logoutButton.click();
      await expect(this.page).toHaveTitle('Login | OpenGov Tax & Revenue');

   }


}