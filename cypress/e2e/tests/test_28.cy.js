
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=7d5ea000-1c84-46fd-894d-46774e9061d9&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=7d5ea000-1c84-46fd-894d-46774e9061d9&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      