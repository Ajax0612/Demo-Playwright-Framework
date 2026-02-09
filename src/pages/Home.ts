import { Locator, Page } from "@playwright/test";


export class Home {

  readonly page: Page;
  readonly loginDropdown: Locator;
  readonly employeeLink: Locator;


  constructor(page: Page) {
    this.page = page;
    this.loginDropdown = page.locator('#navbarDropdown');
    this.employeeLink = page.locator('//a[text()="Employee"]');



  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async navigateToEmployeelogin() {
    await this.loginDropdown.click();
    await this.employeeLink.click();
  }

}