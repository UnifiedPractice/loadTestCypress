
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=251c0371-06c6-47e9-958d-5bfd650fb2de&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=251c0371-06c6-47e9-958d-5bfd650fb2de&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      