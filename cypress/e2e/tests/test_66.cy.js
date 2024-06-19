
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=3a0fc5e8-78f6-4fe2-bd28-0c1e5ca1146b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=3a0fc5e8-78f6-4fe2-bd28-0c1e5ca1146b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      