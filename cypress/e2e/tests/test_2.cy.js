
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=34918cf6-c6d4-4e09-a98d-04dfcdf38801&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=34918cf6-c6d4-4e09-a98d-04dfcdf38801&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      