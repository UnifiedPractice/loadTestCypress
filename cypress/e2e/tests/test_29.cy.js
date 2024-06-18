
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=a62c8d9a-480d-4e31-bdeb-c93a501ed548&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=a62c8d9a-480d-4e31-bdeb-c93a501ed548&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      