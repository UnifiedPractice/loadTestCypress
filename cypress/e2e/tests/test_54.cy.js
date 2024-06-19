
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=6251352d-4abb-41cf-a039-b53b9d377094&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=6251352d-4abb-41cf-a039-b53b9d377094&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      