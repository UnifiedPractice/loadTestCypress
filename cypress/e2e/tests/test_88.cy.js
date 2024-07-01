
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=586f4644-a5d8-455f-8ea3-167705b0a84e&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=586f4644-a5d8-455f-8ea3-167705b0a84e&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      