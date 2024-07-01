
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=1327eec5-0b74-4ac2-9979-3030044e2256&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=1327eec5-0b74-4ac2-9979-3030044e2256&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      