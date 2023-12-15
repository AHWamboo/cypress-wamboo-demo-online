import { wpLoginSelectors } from './wp-login.page.selectors';

export class WpLoginAsserts {
    verifyLoginErrorLabel(labelUser: string | undefined): void {
        if (typeof labelUser !== 'string')
            throw new Error('Environment variable for parameter: labelUser has not been set.');

        if (labelUser.length === 0)
            throw new Error('Parameter: labelUser should not be an empty string.');

        cy.get(wpLoginSelectors.loginForm.loginErrorLabel).should('contain.text', labelUser);
    }
}
