
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=77c9660c-8c92-45d0-9b87-b34ca491218a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=77c9660c-8c92-45d0-9b87-b34ca491218a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      