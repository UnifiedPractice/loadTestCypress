
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=05fd77c1-ddb1-4af2-af90-cf28f5534589&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=05fd77c1-ddb1-4af2-af90-cf28f5534589&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      