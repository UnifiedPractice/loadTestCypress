
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=53fedf84-18da-4316-b811-e7e2d242d3e2&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=53fedf84-18da-4316-b811-e7e2d242d3e2&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      