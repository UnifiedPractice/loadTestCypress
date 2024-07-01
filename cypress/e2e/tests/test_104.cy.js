
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=15b80729-94de-4341-b9dc-53848d3e47de&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=15b80729-94de-4341-b9dc-53848d3e47de&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      