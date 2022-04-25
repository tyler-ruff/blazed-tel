import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { BillingComponent } from './billing/billing.component';
import { ProfileComponent } from './profile/profile.component';
import { UcpComponent } from './ucp/ucp.component';
import { SolutionComponent } from './solution/solution.component';
import { SupportComponent } from './support/support.component';
import { PricingComponent } from './pricing/pricing.component';
import { UnknownComponent } from './unknown/unknown.component';

import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: "solution", component: SolutionComponent },
  { path: "support", component: SupportComponent },
  { path: "pricing", component: PricingComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard], 
    children: [
      { path: "settings", component: SettingsComponent },
      { path: "billing", component: BillingComponent },
      { path: "ucp", component: UcpComponent },
      { path: "", component: ProfileComponent },
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: "**", component: UnknownComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
