
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=d43a7c53-35cb-4299-bb0f-bb1f251516a3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=d43a7c53-35cb-4299-bb0f-bb1f251516a3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      