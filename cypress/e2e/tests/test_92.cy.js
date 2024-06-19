
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=6a3b29c0-155b-4d24-8a35-0b704734e8ba&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=6a3b29c0-155b-4d24-8a35-0b704734e8ba&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      