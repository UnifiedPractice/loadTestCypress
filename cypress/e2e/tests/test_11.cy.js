
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=f8838457-3309-4c69-ad88-3013222603bd&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=f8838457-3309-4c69-ad88-3013222603bd&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      