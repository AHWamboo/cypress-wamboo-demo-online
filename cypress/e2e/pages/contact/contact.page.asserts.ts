import { type Interception } from 'cypress/types/net-stubbing';
import { contactPageSelectors } from './contact.page.selectors';

export class ContactFormAsserts {
    verifySubmittedContactFormLabel(label: string): any {
        cy.get(contactPageSelectors.contactForm.submittedSuccessLabel).should('have.text', label);
    }

    verifyContactFormEndpointStatus(): void {
        cy.intercept({
            method: 'POST',
            url: '/contact',
        }).as('contactFormEndpoint');

        cy.wait('@contactFormEndpoint').then((request: Interception) => {
            expect(request?.response?.statusCode).to.eql(200);
        });
    }
}
