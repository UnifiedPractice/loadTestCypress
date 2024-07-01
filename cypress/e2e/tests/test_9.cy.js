
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=8887937e-f374-471a-bbfa-91f7c7b63cb9&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=8887937e-f374-471a-bbfa-91f7c7b63cb9&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      