
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=4851f27a-8bdb-483c-8cca-e0642d84d41d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=4851f27a-8bdb-483c-8cca-e0642d84d41d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      