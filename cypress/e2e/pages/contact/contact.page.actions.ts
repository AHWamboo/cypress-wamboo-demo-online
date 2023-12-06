import { type IContactFormData } from './contact.page.interfaces';
import { contactPageSelectors } from './contact.page.selectors';

export class ContactPageActions {
    sendContactEmail(contactData: IContactFormData): void {
        cy.get(contactPageSelectors.contactForm.nameInput).type(contactData.name);
        cy.get(contactPageSelectors.contactForm.emailInput).type(contactData.email);
        cy.get(contactPageSelectors.contactForm.messageTextArea).type(contactData.message);
        cy.get(contactPageSelectors.contactForm.submitButton).click();
    }
}
