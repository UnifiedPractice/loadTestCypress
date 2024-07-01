
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=fbeae298-9738-4469-a7a8-bde30cfde843&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=fbeae298-9738-4469-a7a8-bde30cfde843&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      