
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=6f3c0808-9c00-48ba-8d91-f0fcbf4053b2&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=6f3c0808-9c00-48ba-8d91-f0fcbf4053b2&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      