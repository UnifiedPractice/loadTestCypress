
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=c1baa36a-f2d4-4a11-8338-4b097bf6fd45&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=c1baa36a-f2d4-4a11-8338-4b097bf6fd45&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      