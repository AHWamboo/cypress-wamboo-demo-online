import { wpLoginSelectors } from './wp-login.page.selectors';

export class WpLoginActions {
    logIn(userName: string | undefined, userPassword: string | undefined): void {
        const name: string | undefined = userName;
        const pass: string | undefined = userPassword;

        if (typeof name === 'undefined')
            throw new Error(`The environment variable for WP login user has not been defined.`);
        if (typeof pass === 'undefined')
            throw new Error(`The environment variable for WP user password has not been defined.`);

        cy.get(wpLoginSelectors.loginForm.emailInput).type(name, {
            log: false,
            delay: 50,
        });
        cy.get(wpLoginSelectors.loginForm.passwordInput).type(pass, {
            log: false,
            delay: 50,
        });
        cy.get(wpLoginSelectors.loginForm.submitButton).click();
    }
}
