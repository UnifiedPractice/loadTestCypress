
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=77991b40-ca1c-4a02-8559-d22ed0544502&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=77991b40-ca1c-4a02-8559-d22ed0544502&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      