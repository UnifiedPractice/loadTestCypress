
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=f865ce1e-15ac-4e32-9ac2-bc4963f62d7f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=f865ce1e-15ac-4e32-9ac2-bc4963f62d7f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      