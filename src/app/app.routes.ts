
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Resume } from './pages/resume/resume';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'resume', component: Resume },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: '**', redirectTo: '' }
];
