
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=073ff0c0-09ee-4e3d-8694-81f95fdce389&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=073ff0c0-09ee-4e3d-8694-81f95fdce389&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      