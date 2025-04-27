import { test, expect } from '@playwright/test';
import ApplicationURL from '../helpers/ApplicationURL';
import { exec } from 'child_process';
import LoginPage from '../Pages/LoginPage';

test('sanity test', async ({ page }) => {
//   await page.goto('https://cymulate.com/');
  
    const loginPage = new LoginPage(page);
    await loginPage.loginToApp();
    await loginPage.signIn();

});