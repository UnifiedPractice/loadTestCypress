
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=0d340bcd-3c31-4d74-a62f-6aa38e3af4ac&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=0d340bcd-3c31-4d74-a62f-6aa38e3af4ac&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      