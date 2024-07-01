
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=2f906b89-f812-4ec2-84ae-4a0e9a536970&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=2f906b89-f812-4ec2-84ae-4a0e9a536970&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      