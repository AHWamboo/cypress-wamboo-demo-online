import { fixturesNames } from '../../../fixtures/fixtures-names';
import { CONTACT_PAGE_URL, ContactPageActions } from '../../pages/contact';
import { ContactFormAsserts } from '../../pages/contact/contact.page.asserts';

const contactPageActions: ContactPageActions = new ContactPageActions();
const contactPageAsserts: ContactFormAsserts = new ContactFormAsserts();

describe('Sending emails from the contact page', () => {
    beforeEach(() => {
        cy.visit(CONTACT_PAGE_URL);
    });

    it('The email should have been sent correctly and you should see a confirmation after it was sent', () => {
        cy.getFixtureData(fixturesNames.contactPage.contactFormData).then((contactData: any) => {
            contactPageActions.sendContactEmail({
                name: contactData.name,
                email: contactData.email,
                message: contactData.message,
            });
            contactPageAsserts.verifySubmittedContactFormLabel(contactData.submittedContactFormLabel);
        });
    });

    it('The email should have been sent correctly and contact/ endpoint should return 200', () => {
        cy.getFixtureData(fixturesNames.contactPage.contactFormData).then((contactData: any) => {
            contactPageActions.sendContactEmail({
                name: contactData.name,
                email: contactData.email,
                message: contactData.message,
            });
            contactPageAsserts.verifyContactFormEndpointStatus();
        });
    });

    it('A conact form approved without the required data should display the appropriate information and the fields should display in red', () => {
        contactPageAsserts.verifyAppearanceOfFormWithAllRequiredDataMissing();
    });
});
