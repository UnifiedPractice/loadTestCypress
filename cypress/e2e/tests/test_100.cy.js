
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=1837bec2-aedd-4926-888d-b63a12386cdb&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=1837bec2-aedd-4926-888d-b63a12386cdb&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      