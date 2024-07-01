
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=84d3ad26-9460-49c5-8ba8-66edb6808d66&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=84d3ad26-9460-49c5-8ba8-66edb6808d66&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      