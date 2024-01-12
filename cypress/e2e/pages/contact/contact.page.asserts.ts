import { type Interception } from 'cypress/types/net-stubbing';
import { contactPageSelectors } from './contact.page.selectors';
import { fixturesNames } from '../../../fixtures/fixtures-names';

export class ContactFormAsserts {
    verifySubmittedContactFormLabel(label: string): any {
        cy.get(contactPageSelectors.contactForm.submittedLabel).should('have.text', label);
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

    verifyAppearanceOfFormWithAllRequiredDataMissing(): void {
        cy.get(contactPageSelectors.contactForm.submitButton).click();

        cy.getFixtureData(fixturesNames.contactPage.contactFormData).then((data: any) => {
            this.verifySubmittedContactFormLabel(data.incorrectlySubmittedContactFormLabel);
        });

        cy.get(contactPageSelectors.contactForm.nameInput)
            .should('have.class', 'et_contact_error')
            .should('have.css', 'border', '1px solid rgb(255, 0, 0)');
        cy.get(contactPageSelectors.contactForm.emailInput)
            .should('have.class', 'et_contact_error')
            .should('have.css', 'border', '1px solid rgb(255, 0, 0)');
        cy.get(contactPageSelectors.contactForm.messageTextArea)
            .should('have.class', 'et_contact_error')
            .should('have.css', 'border', '1px solid rgb(255, 0, 0)');
    }
}
