
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=664e8e42-3f3f-4b8a-98f5-3178815cde36&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=664e8e42-3f3f-4b8a-98f5-3178815cde36&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      