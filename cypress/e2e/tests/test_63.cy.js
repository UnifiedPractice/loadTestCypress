
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=87d769a3-00ed-4782-9b7b-e8d6da8d6ec5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=87d769a3-00ed-4782-9b7b-e8d6da8d6ec5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      