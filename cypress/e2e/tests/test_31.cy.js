
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=a74bc9df-90c5-4e47-87ac-4880a8f47dfb&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=a74bc9df-90c5-4e47-87ac-4880a8f47dfb&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      