
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=43cbe2a7-005e-4cf7-8eae-ccc00ae174d5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=43cbe2a7-005e-4cf7-8eae-ccc00ae174d5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      