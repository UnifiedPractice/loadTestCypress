
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=d9688b10-c721-4cb1-9e3c-a67c96496316&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=d9688b10-c721-4cb1-9e3c-a67c96496316&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      