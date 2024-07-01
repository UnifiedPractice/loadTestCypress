
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=59f59c25-1b1b-43ce-8a0b-a08d00933bff&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=59f59c25-1b1b-43ce-8a0b-a08d00933bff&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      