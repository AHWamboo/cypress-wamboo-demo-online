import { wpLoginSelectors } from './wp-login.page.selectors';
import { WP_USER1, WP_USER1_PASSWORD } from '../../../../.config';

export class WpLoginActions {
    logIn(
        userName: string | undefined = WP_USER1,
        userPassword: string | undefined = WP_USER1_PASSWORD
    ): void {
        const name: string | undefined = userName;
        const pass: string | undefined = userPassword;

        if (typeof name === 'undefined')
            throw new Error(`The environment variable named: WP_USER1 has not been defined.`);
        if (typeof pass === 'undefined')
            throw new Error(`The environment variable named: USER1_PASSWORD has not been defined.`);

        cy.get(wpLoginSelectors.loginForm.emailInput).type(name, {
            log: false,
        });
        cy.get(wpLoginSelectors.loginForm.passwordInput).type(pass, {
            log: false,
        });
        cy.get(wpLoginSelectors.loginForm.submitButton).click();
    }
}
