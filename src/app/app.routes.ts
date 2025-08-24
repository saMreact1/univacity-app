import { Routes } from '@angular/router';
import { ProgramSearchPage } from './pages/program-search/program-search.page';
import { ProgramDetailPage } from './pages/program-detail/program-detail.page';
import { FilterModalComponent } from './components/filter-modal/filter-modal.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'programs',
    pathMatch: 'full',
  },
  { 
    path: 'programs', 
    component: ProgramSearchPage 
  },
  { 
    path: 'programs/:id', 
    component: ProgramDetailPage
  },
  {
    path: 'filters',
    component: FilterModalComponent
  },
  { 
    path: '**', 
    redirectTo: 'programs' 
  }
];
