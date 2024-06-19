
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=c6db6607-13f7-4234-bb18-abdf874e5545&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=c6db6607-13f7-4234-bb18-abdf874e5545&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      