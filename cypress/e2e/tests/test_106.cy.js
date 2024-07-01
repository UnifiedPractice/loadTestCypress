
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=cc7846db-7fea-488f-ad5a-3daa2b52d359&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=cc7846db-7fea-488f-ad5a-3daa2b52d359&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      