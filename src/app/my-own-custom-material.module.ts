import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDialogModule,
  MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatProgressSpinnerModule,
  MatRadioModule, MatSidenavModule,
  MatSnackBarModule, MatTableModule, MatToolbarModule,
  MatTooltipModule
} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatToolbarModule, BrowserAnimationsModule, MatProgressSpinnerModule, MatTableModule, MatCheckboxModule, MatRadioModule, MatDialogModule, MatSnackBarModule,
    MatCardModule, MatFormFieldModule, MatInputModule
    , MatMenuModule, MatIconModule, MatGridListModule, MatTooltipModule, MatSidenavModule, MatListModule],
  exports: [MatButtonModule, MatToolbarModule, BrowserAnimationsModule, MatProgressSpinnerModule, MatTableModule, MatCheckboxModule, MatRadioModule, MatDialogModule, MatSnackBarModule,
    MatCardModule, MatFormFieldModule,
    MatInputModule, MatMenuModule, MatIconModule, MatGridListModule, MatTooltipModule, MatSidenavModule, MatListModule,
  ],
  declarations: []
})
export class MyOwnCustomMaterialModuleModule {

}
