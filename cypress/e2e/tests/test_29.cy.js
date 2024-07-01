
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=15a831b0-b6e5-4cc8-9a8c-dd829de764cc&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=15a831b0-b6e5-4cc8-9a8c-dd829de764cc&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      