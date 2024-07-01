
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=0b9f5738-96e8-453d-8c86-e5b5901c70ca&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=0b9f5738-96e8-453d-8c86-e5b5901c70ca&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      