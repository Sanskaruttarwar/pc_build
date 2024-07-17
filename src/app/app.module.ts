import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CpuComponent } from './cpu/cpu.component';
import { MotherboardComponent } from './motherboard/motherboard.component';
import { HomeComponent } from './home/home.component';
import { CaseComponent } from './case/case.component';
import { CasefanComponent } from './casefan/casefan.component';
import { CpucoolerComponent } from './cpucooler/cpucooler.component';
import { ExternalharddriveComponent } from './externalharddrive/externalharddrive.component';
import { MemoryComponent } from './memory/memory.component';
import { PowersupplyComponent } from './powersupply/powersupply.component';

@NgModule({
  declarations: [
    AppComponent,
    CpuComponent,
    MotherboardComponent,
    HomeComponent,
    CaseComponent,
    CasefanComponent,
    CpucoolerComponent,
    ExternalharddriveComponent,
    MemoryComponent,
    PowersupplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [    provideClientHydration(), provideHttpClient(withFetch())  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
