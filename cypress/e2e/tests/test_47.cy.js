
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=58c28408-46a5-42ce-87c8-2c593a827f42&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=58c28408-46a5-42ce-87c8-2c593a827f42&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      