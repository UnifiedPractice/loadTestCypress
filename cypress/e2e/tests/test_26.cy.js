
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=4c250840-74c0-40e0-b700-f2eabd5ddf88&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=4c250840-74c0-40e0-b700-f2eabd5ddf88&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      