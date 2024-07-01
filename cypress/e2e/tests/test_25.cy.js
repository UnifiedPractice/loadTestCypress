
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=d943eff0-f7fa-4a08-8ee9-54231cc5fd71&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=d943eff0-f7fa-4a08-8ee9-54231cc5fd71&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      