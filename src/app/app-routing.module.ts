import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpuComponent } from './cpu/cpu.component';
import { MotherboardComponent } from './motherboard/motherboard.component';
import { HomeComponent } from './home/home.component';
import { PowersupplyComponent } from './powersupply/powersupply.component';
import { MemoryComponent } from './memory/memory.component';
import { ExternalharddriveComponent } from './externalharddrive/externalharddrive.component';
import { CpucoolerComponent } from './cpucooler/cpucooler.component';
import { CasefanComponent } from './casefan/casefan.component';
import { CaseComponent } from './case/case.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cpu', component: CpuComponent},
  {path: 'motherboard', component: MotherboardComponent},
  {path: 'power', component: PowersupplyComponent},
  {path: 'memory', component: MemoryComponent},
  {path: 'external',component:ExternalharddriveComponent},
  {path: 'cpucooler',component: CpucoolerComponent},
  {path: 'casefan', component: CasefanComponent},
  {path: 'case',component:CaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
