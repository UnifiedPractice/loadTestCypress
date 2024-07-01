
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=ebc3b638-6faa-4fbf-bdbc-edf38eb1815f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=ebc3b638-6faa-4fbf-bdbc-edf38eb1815f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      