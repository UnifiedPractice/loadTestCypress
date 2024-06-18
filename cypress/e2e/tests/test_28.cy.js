
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=0f3c5fd1-3c51-4dcd-832e-6f4a1b79a79c&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=0f3c5fd1-3c51-4dcd-832e-6f4a1b79a79c&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      