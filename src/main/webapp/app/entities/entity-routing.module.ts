import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'demande',
        data: { pageTitle: 'sssssssssApp.demande.home.title' },
        loadChildren: () => import('./demande/demande.routes'),
      },
      {
        path: 'reclamation',
        data: { pageTitle: 'sssssssssApp.reclamation.home.title' },
        loadChildren: () => import('./reclamation/reclamation.routes'),
      },
      {
        path: 'courses',
        data: { pageTitle: 'sssssssssApp.courses.home.title' },
        loadChildren: () => import('./courses/courses.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
