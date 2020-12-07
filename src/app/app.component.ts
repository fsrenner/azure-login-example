import { MsalService, BroadcastService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';
import { Logger, CryptoUtils } from 'msal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Azure Login Example';
  loggedIn = false;
  isIframe = false;

  constructor(private broadcastService: BroadcastService, private authService: MsalService) { }

  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;
    
    this.checkoutAccount();

    this.broadcastService.subscribe('msal:loginSuccess', () => {
      this.checkoutAccount();
    });

    this.authService.handleRedirectCallback((authError, response) => {
      if (authError) {
        console.error('Redirect Error: ', authError.errorMessage);
        return;
      }

      console.log('Redirect Success: ', response);
    });

    this.authService.setLogger(new Logger((logLevel, message, piiEnabled) => {
      console.log('MSAL Logging: ', message);
    }, {
      correlationId: CryptoUtils.createNewGuid(),
      piiLoggingEnabled: false
    }));

  }

  login() {
    this.authService.loginRedirect({
      extraScopesToConsent: ['user.read']
    });
  }

  logout() {
    this.authService.logout();
  }

  checkoutAccount() {
    this.loggedIn = !!this.authService.getAccount();
  }
}
