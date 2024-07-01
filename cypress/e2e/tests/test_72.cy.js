
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=6607aead-f1b6-49d9-b57a-0e196be7f533&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=6607aead-f1b6-49d9-b57a-0e196be7f533&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      