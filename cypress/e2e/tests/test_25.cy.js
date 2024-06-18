
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=43ff3c94-aabf-41b8-a147-bcc460aa8f88&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=43ff3c94-aabf-41b8-a147-bcc460aa8f88&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      