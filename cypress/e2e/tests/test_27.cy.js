
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=68c355d3-5af1-4ebd-b6e5-7d2e9e5f81bb&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=68c355d3-5af1-4ebd-b6e5-7d2e9e5f81bb&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      