
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=58ffb24a-078b-4a57-88e8-12d62b47fa7b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=58ffb24a-078b-4a57-88e8-12d62b47fa7b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      