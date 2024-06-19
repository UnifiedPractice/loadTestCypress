
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=f8b93545-be48-404f-a179-d5785055db44&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=f8b93545-be48-404f-a179-d5785055db44&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      