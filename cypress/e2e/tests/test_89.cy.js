
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=3260c6dd-dfbe-463f-99e4-890e935911e3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=3260c6dd-dfbe-463f-99e4-890e935911e3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      