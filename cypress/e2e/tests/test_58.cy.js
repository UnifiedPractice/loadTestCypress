
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=ee2b46c2-ce4c-4e02-b6b4-43d1706cb4af&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=ee2b46c2-ce4c-4e02-b6b4-43d1706cb4af&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      