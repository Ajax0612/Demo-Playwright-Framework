import fs from 'fs';
import path from 'path';

const resultsDir = path.join(__dirname, '../..', 'allure-results');



if (fs.existsSync(resultsDir)) {
    fs.rmSync(resultsDir, { recursive: true, force: true });
    console.log('✅ Cleared old Allure results.');
} else {
    console.log('ℹ️ No previous Allure results found.');
}