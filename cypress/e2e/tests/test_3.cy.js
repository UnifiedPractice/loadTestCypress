
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=58377d35-4d11-4265-93b8-623f3ff5fe38&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=58377d35-4d11-4265-93b8-623f3ff5fe38&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      