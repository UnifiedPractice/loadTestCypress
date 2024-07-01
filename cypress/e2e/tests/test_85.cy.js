
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=b08db9f2-9e76-4b9b-addc-950cd7c4cddc&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=b08db9f2-9e76-4b9b-addc-950cd7c4cddc&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      