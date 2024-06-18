
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=ff93279b-cf66-402a-a522-29b51bd254b2&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=ff93279b-cf66-402a-a522-29b51bd254b2&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Sign in to Unified Practice').should('be.visible');

          });
        });
      