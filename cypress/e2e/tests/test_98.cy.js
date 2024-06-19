
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=39f3a355-32d3-45c3-81a1-cf85b6fca8f6&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=39f3a355-32d3-45c3-81a1-cf85b6fca8f6&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      