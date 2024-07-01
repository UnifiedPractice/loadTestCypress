
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=60ac3fa1-6dba-402e-9c15-2228637ea79c&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=60ac3fa1-6dba-402e-9c15-2228637ea79c&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      