
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=f19206d0-91f2-4e4f-b696-4cbf3124088a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=f19206d0-91f2-4e4f-b696-4cbf3124088a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      