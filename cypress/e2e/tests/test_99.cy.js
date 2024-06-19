
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=d6a2844c-7d6a-431f-88e1-61a0b571a2e5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=d6a2844c-7d6a-431f-88e1-61a0b571a2e5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      