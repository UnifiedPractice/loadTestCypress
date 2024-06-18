
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=a078d12a-c222-436f-be48-43d8b4d826a5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=a078d12a-c222-436f-be48-43d8b4d826a5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      