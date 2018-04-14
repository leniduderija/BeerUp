import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { requestOptionsProvider } from './default-request-options';
import { PunkapiService } from './punkapi.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    requestOptionsProvider,    
    PunkapiService
  ]
})
export class CoreModule { }
