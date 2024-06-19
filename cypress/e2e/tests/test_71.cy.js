
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=3b4677ee-7cca-4b43-b26f-3b7adeeace83&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=3b4677ee-7cca-4b43-b26f-3b7adeeace83&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      