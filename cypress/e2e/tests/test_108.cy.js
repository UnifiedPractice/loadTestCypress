
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=134e55c7-cc0c-401b-953d-97af394f4586&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=134e55c7-cc0c-401b-953d-97af394f4586&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      