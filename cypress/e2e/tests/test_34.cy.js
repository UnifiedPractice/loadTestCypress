
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=2031d619-6f38-49dd-bac8-ed5d6786da9d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=2031d619-6f38-49dd-bac8-ed5d6786da9d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      