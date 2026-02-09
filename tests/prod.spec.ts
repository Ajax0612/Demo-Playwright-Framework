import { expect } from '@playwright/test'
//import dataJson from '../tests/testdata/prodData.json';
import envConfig from '../src/config/EnvConfig';
import { test } from '../src/base/BaseTest';


// const data = Array.isArray(dataJson) ? dataJson : [dataJson];

// for (const logindata of data) {


//     test.describe('Production verification for all T&R customers ', async () => {

//         test(`Verify dashboard loading for ${logindata.CustomerName} `, async ({ home, login, dashboard }) => {
//             await home.goto(logindata.url);
//             await login.loginEmployee(envConfig().empUser_prod, envConfig().empPassword_prod);
//             await dashboard.verifyDashboardTitle();
//             await dashboard.isDashboardsDropdownVisible();
          
//         });

//     });

// }



test.describe('Verify record creation from employee portal @prodSanity ', () => {


    test.beforeEach(async ({ home, login }) => {
        await home.goto("/");
        await login.loginEmployee(envConfig().empUser, envConfig().empPassword);

    });

    test('Verify create Property Record @sanity @regression', async ({ dashboard }) => {

        await dashboard.clickOnCreateRecord();
     

    });


})
