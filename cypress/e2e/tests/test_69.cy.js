
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=9aa3fb05-1e80-4c7a-85ad-1fa64e72fc6e&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=9aa3fb05-1e80-4c7a-85ad-1fa64e72fc6e&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      