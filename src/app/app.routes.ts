  
  import { Routes } from '@angular/router';
  
  import { SectionHomeComponent } from './layouts/section-home/section-home.component';
  import { SectionProfileComponent } from './layouts/section-profile/section-profile.component';
  import { CreatePsychologistComponent } from './psychologist/create/createPsychologist.component';
  import { EditpacientComponent } from './patient/edit/edit.component';
  import { ListPatientsComponent } from './patient/list-patients/list-patients.component';


  export const ROUTES: Routes = [
    { path: '', component: SectionHomeComponent },
    { path: 'profileview',      component: SectionProfileComponent},
    { path: 'create-psychologist', component: CreatePsychologistComponent},
    { path: 'edit-patient', component: EditpacientComponent},
    { path: 'list-patients', component: ListPatientsComponent}, ];

