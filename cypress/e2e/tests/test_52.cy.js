
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=4df42c52-e91f-43e2-b85a-6bcd1a50d331&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=4df42c52-e91f-43e2-b85a-6bcd1a50d331&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      