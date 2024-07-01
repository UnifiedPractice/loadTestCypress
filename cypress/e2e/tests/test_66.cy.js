
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=8e12ba14-4396-4806-abc6-d736f915f023&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=8e12ba14-4396-4806-abc6-d736f915f023&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      