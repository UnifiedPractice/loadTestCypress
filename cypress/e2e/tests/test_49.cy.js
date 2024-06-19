
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=38802e3d-b831-4aeb-bf6a-f09ff548bb22&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=38802e3d-b831-4aeb-bf6a-f09ff548bb22&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      