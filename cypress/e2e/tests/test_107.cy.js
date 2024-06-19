
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=56b12fcc-4b6b-4b8b-8bd3-033a5dc528e5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=56b12fcc-4b6b-4b8b-8bd3-033a5dc528e5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      