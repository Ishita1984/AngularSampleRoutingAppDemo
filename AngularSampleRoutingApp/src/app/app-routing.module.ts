import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth.guard';
import { SelectiveStrategy } from './selective-strategy.service';
import { CustomerModule } from './customers/customer.module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'products',
        //canLoad: [AuthGuard], //download product bundle when login is successful. canLoad guard blocks preloading.
        canActivate: [AuthGuard], //download product bundle though redirects to login page
        data: { preload: false }, //preload product bundle if sets to true. Otherwise lazy load.
        loadChildren: () =>
          import('./products/product.module').then(m => m.ProductModule)
      },      
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ], { enableTracing: true, preloadingStrategy: SelectiveStrategy }),CustomerModule //preloadingStrategy: PreloadAllModules
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
