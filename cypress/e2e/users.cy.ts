/// <reference types="cypress" />

describe('Users CRUD', () => {

    beforeEach(() => {
        cy.task('db:erase');
        cy.visit('http://localhost:5173');
    });

    it('List, when no user exists, then "No User yet" must be shown', () => {
        cy.get('.MuiTypography-h4').contains('No User yet.');
    });

    it('List, when an user exists, then this user must be in the list', () => {
        const user = {
            name: 'user',
            email: 'user@email.com',
            password: 'adf5er8fg4er2fsdg41'
        };

        cy.task('db:create', user);

        cy.get('.column-name > .MuiTypography-root').contains(user.name);
        cy.get('.column-email > .MuiTypography-root').contains(user.email);
        cy.get('.column-password > .MuiTypography-root').contains(user.password);
        cy.get('.MuiTablePagination-displayedRows').contains('1-1 of 1');
    });

    it('Create, when fill form and click save, then must create the user', () => {
        const user = {
            name: 'user',
            email: 'user@email.com',
            password: 'adf5er8fg4er2fsdg41'
        };

        cy.get('.RaEmpty-toolbar > .MuiButtonBase-root').click();
        cy.get('#name').type(user.name);
        cy.get('#email').type(user.email);
        cy.get('#password').type(user.password);
        cy.get('.RaToolbar-defaultToolbar > .MuiButtonBase-root').click();
        cy.get('.MuiList-root > .MuiButtonBase-root').click();
        cy.contains('Element created');
        cy.get('.column-name > .MuiTypography-root').contains(user.name);
        cy.get('.column-email > .MuiTypography-root').contains(user.email);
        cy.get('.column-password > .MuiTypography-root').contains(user.password);
    });

    it('Create, when fill form and press enter, then must create the user', () => {
        const user = {
            name: 'user',
            email: 'user@email.com',
            password: 'adf5er8fg4er2fsdg41'
        };

        cy.get('.RaEmpty-toolbar > .MuiButtonBase-root').click();
        cy.get('#name').type(user.name);
        cy.get('#email').type(user.email);
        cy.get('#password').type(user.password).type('Cypress{enter}');
        cy.get('.MuiList-root > .MuiButtonBase-root').click();
        cy.contains('Element created');
        cy.get('.column-name > .MuiTypography-root').contains(user.name);
        cy.get('.column-email > .MuiTypography-root').contains(user.email);
        cy.get('.column-password > .MuiTypography-root').contains(user.password);
    });

    it('Edit, when fill form and click save, then must edit the user', () => {
        const user1 = {
            name: 'user1',
            email: 'user1@email.com',
            password: 'adf5er8fg4er2fsdg41'
        };

        cy.task('db:create', user1);

        const user2 = {
            name: 'user2',
            email: 'user2@email.com',
            password: 'ikoajkbakusbd54321a'
        };

        cy.get('.MuiTableBody-root > .MuiTableRow-root > .column-id').click();
        cy.get('#name').clear().type(user2.name);
        cy.get('#email').clear().type(user2.email);
        cy.get('#password').clear().type(user2.password);
        cy.get('.RaToolbar-defaultToolbar > .MuiButton-contained').click();
        cy.contains('Element updated');
        cy.get('.column-name > .MuiTypography-root').contains(user2.name);
        cy.get('.column-email > .MuiTypography-root').contains(user2.email);
        cy.get('.column-password > .MuiTypography-root').contains(user2.password);
    });

    it('Edit, when click to undo, then must undo the edit of the user', () => {
        const user1 = {
            name: 'user1',
            email: 'user1@email.com',
            password: 'adf5er8fg4er2fsdg41'
        };

        cy.task('db:create', user1);

        const user2 = {
            name: 'user2',
            email: 'user2@email.com',
            password: 'ikoajkbakusbd54321a'
        };

        cy.get('.MuiTableBody-root > .MuiTableRow-root > .column-id').click();
        cy.get('#name').clear().type(user2.name);
        cy.get('#email').clear().type(user2.email);
        cy.get('#password').clear().type(user2.password);
        cy.get('.RaToolbar-defaultToolbar > .MuiButton-contained').click();
        cy.get('.MuiSnackbarContent-action > .MuiButtonBase-root').click();
        cy.get('.column-name > .MuiTypography-root').contains(user1.name);
        cy.get('.column-email > .MuiTypography-root').contains(user1.email);
        cy.get('.column-password > .MuiTypography-root').contains(user1.password);
    });

    it('Delete, when inspect user and click delete, then must delete the user', () => {
        const user = {
            name: 'user',
            email: 'user@email.com',
            password: 'adf5er8fg4er2fsdg41'
        };

        cy.task('db:create', user);

        cy.get('.MuiTableBody-root > .MuiTableRow-root > .column-id').click();
        cy.get('.RaToolbar-defaultToolbar > .MuiButton-text').click();
        cy.contains('Element deleted');
        cy.get('.MuiTypography-h4').contains('No User yet.');
    });

    it('Delete, when click to undo, then must undo the delete of the user', () => {
        const user = {
            name: 'user',
            email: 'user@email.com',
            password: 'adf5er8fg4er2fsdg41'
        };

        cy.task('db:create', user);

        cy.get('.MuiTableBody-root > .MuiTableRow-root > .column-id').click();
        cy.get('.RaToolbar-defaultToolbar > .MuiButton-text').click();
        cy.get('.MuiSnackbarContent-action > .MuiButtonBase-root').click();
        cy.get('.column-name > .MuiTypography-root').contains(user.name);
        cy.get('.column-email > .MuiTypography-root').contains(user.email);
        cy.get('.column-password > .MuiTypography-root').contains(user.password);
    });
});