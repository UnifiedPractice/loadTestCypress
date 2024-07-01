
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=0c7a846c-85a8-4b55-8079-8f6af9a1153a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=0c7a846c-85a8-4b55-8079-8f6af9a1153a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      