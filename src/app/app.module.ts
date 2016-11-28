import { NgModule, ErrorHandler }                   from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp }                                    from './app.component';
import { HomePage }                                 from '../pages/home/home';
// =============================================================================
import { UserService }                              from '../providers/user-service';
import { FormControlService }                       from '../dynamic_form_utils/formcontrolservice';
// =============================================================================
import { DynamicFormComponent }                     from '../dynamic_form_utils/dynamic-form.component';
import { DynamicFormFieldComponent }                from '../dynamic_form_utils/df-field.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DynamicFormComponent,
    DynamicFormFieldComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DynamicFormComponent,
    DynamicFormFieldComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, UserService,FormControlService]
})
export class AppModule {}
