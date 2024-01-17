import { API_BASE_URL } from '../../../../.config';

Cypress.Commands.add('APILoginJWT', (userName: string, userApiPassword: string) => {
    cy.request({
        method: 'POST',
        url: `${API_BASE_URL}/jwt-auth/v1/token`,
        body: {
            username: userName,
            password: userApiPassword,
        },
    })
        .its('body')
        .then((body) => {
            // cy.log(body.token);
            // cy.visit('https://wamboo-demo.online/wp-admin/edit.php', {
            //     headers: { Authorization: `Bearer ${body.token}` },
            // });
        });
});
