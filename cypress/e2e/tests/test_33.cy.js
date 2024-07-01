
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=0ff6d692-ae8f-4460-ac8b-24db5c0996ba&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=0ff6d692-ae8f-4460-ac8b-24db5c0996ba&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      