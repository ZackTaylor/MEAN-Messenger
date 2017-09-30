import { Routes } from "@angular/router";

import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";
import { AuthGuardService } from "./auth-guard.service";

export const AUTH_ROUTES: Routes = [
  { path: '', redirectTo: 'logout', pathMatch: 'full', canActivate: [AuthGuardService]},
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'logout', component: LogoutComponent}
];
