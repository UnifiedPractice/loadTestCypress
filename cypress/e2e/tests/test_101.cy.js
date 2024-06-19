
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=e9288204-5276-41d8-a4f5-0dd564dc0814&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=e9288204-5276-41d8-a4f5-0dd564dc0814&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      