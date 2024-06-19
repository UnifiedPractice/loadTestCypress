
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=d12bfe5a-1899-45f3-93a3-ca20d77a7376&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=d12bfe5a-1899-45f3-93a3-ca20d77a7376&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      