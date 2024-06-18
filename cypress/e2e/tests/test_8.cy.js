
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=841fc5d0-16fe-43a9-a181-d2a16bfd2f34&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=841fc5d0-16fe-43a9-a181-d2a16bfd2f34&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      