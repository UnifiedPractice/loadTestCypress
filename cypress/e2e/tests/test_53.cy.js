
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=334d1510-4d42-468e-bc30-503c278bf8c7&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=334d1510-4d42-468e-bc30-503c278bf8c7&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      