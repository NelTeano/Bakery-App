import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT, CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  styleUrl: './auth-button.scss',
  template: `
  <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button 
        class="auth-button-logout"
        (click)="auth.logout({ logoutParams: { returnTo: document.location.origin } })"
      >
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button 
        class="auth-button-login"
        (click)="auth.loginWithRedirect({
        appState: { target: '/dashboard' }
      })"
      >
        Log in
      </button>
  </ng-template>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}