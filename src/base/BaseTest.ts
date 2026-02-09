import { test as base } from '@playwright/test';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

type AllPageFixtures = {
    dashboard: Dashboard;
    login: Login;
    home: Home;
   
};

// ✅ Store the extended test function in a new variable
const test = base.extend<AllPageFixtures>({
    dashboard: async ({ page }, use) => {
        await use(new Dashboard(page));
    },
    login: async ({ page }, use) => {
        await use(new Login(page));
    },
    home: async ({ page }, use) => {
        await use(new Home(page));
    },
    
});

// ✅ Export the correctly extended test function
export { test };