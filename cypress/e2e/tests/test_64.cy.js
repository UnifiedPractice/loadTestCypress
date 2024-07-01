
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=03bea0ae-a614-4fc0-9dbe-700b407b5f27&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=03bea0ae-a614-4fc0-9dbe-700b407b5f27&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      