
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=1facb906-e850-4d01-8a6f-97782c58d5cf&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=1facb906-e850-4d01-8a6f-97782c58d5cf&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      