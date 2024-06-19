
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=045cf00f-8816-4bf3-aba4-a6a332e60b83&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=045cf00f-8816-4bf3-aba4-a6a332e60b83&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      