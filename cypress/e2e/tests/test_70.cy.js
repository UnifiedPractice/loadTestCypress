
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=a5f891be-eeac-4715-ae81-86d770d8aef4&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=a5f891be-eeac-4715-ae81-86d770d8aef4&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      