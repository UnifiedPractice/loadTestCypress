
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=afb7cbad-6250-4210-ad55-73c4cf2a99e9&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=afb7cbad-6250-4210-ad55-73c4cf2a99e9&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      