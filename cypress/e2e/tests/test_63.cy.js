
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=ad514fcb-0d52-4dc7-ae7b-09df6410cb1f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=ad514fcb-0d52-4dc7-ae7b-09df6410cb1f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      