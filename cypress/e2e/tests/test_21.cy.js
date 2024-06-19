
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=04ebaeee-fa70-46f1-b412-288a05446a71&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=04ebaeee-fa70-46f1-b412-288a05446a71&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      