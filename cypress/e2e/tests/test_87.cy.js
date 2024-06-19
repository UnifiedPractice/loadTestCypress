
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=ba05eae4-f92a-4c43-8bc8-212316262acb&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=ba05eae4-f92a-4c43-8bc8-212316262acb&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      