
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=ca2a2c45-a867-43ba-af98-d12c1b3bd453&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=ca2a2c45-a867-43ba-af98-d12c1b3bd453&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      