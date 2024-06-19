
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=309a9541-7623-4f13-9ccf-69bc069b887b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=309a9541-7623-4f13-9ccf-69bc069b887b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      