
import { Locator, Page } from "@playwright/test";
import ApplicationURL from "../helpers/ApplicationURL";
import { BasePage } from "./BasePage";

export default class LoginPage extends BasePage {

    private usernameField: Locator;
    private passwordField: Locator;
    private loginButton: Locator;
    // private errorMessage: Locator;
    // private default_username = process.env.STANDARD_USER as string;
    // private default_password = process.env.CORRECT_PASSWORD as string;

    
    constructor(protected page: Page) {
        super(page);
        this.usernameField = this.page.locator('input[test-id=email]');
        this.passwordField = this.page.locator('input[test-id=password]');
        this.loginButton = this.page.locator('[data-test="login-button"]');
        //this.errorMessage = this.page.locator('[data-test="error"]')
    }

    public async loginToApp(){
        //goo to url
        await this.page.goto('https://cymulate.com/');
        //move to login page
        await this.page.getByRole('link', { name: 'Log In' }).click();
        await this.page.getByRole('heading', { name: 'Log in to your account' }).click();

    }

    public async signIn (){
        //Fill user name and password
        await this.page.locator('input[test-id=email]').fill('asda');
        await this.page.locator('input[test-id=password]').fill('asda');  
        //Press sign up button
        await this.page.getByRole('button', { name: 'Sign in', exact: true }).click();
    }

}