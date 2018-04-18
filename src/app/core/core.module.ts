import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { requestOptionsProvider } from './default-request-options';
import { AlertService } from './alert.service';
import { PunkapiService } from './punkapi.service';
import { UserService } from './user.service';
import { LocalStorageService } from './localStorage.service';
import { FakeBackendInterceptor } from './helpers/fake-backend';
import { AlertComponent } from './directives/alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    requestOptionsProvider,
    AlertService,
    PunkapiService,
    UserService,
    LocalStorageService,
    FakeBackendInterceptor
  ]
})
export class CoreModule { }
