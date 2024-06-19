
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=efe339a6-5d3b-4602-baba-d263bac64e6a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=efe339a6-5d3b-4602-baba-d263bac64e6a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      