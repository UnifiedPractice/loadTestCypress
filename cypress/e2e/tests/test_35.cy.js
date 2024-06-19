
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=f911a1f9-6bc3-48ae-94e3-234505bf7fda&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=f911a1f9-6bc3-48ae-94e3-234505bf7fda&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      