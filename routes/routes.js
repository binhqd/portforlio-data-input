import App from 'components/app';
import Home from 'components/home';
import Profile from 'pages/profile/Profile.jsx';
import ListPositions from 'pages/positions/ListPositions.jsx';
import AddPosition from 'pages/positions/AddPosition.jsx';
import ListProjects from 'pages/projects/ListProjects.jsx';
import AddProject from 'pages/projects/AddProject.jsx';
import ListSkills from 'pages/skills/ListSkills.jsx';
import AddSkill from 'pages/skills/AddSkill.jsx';

import {Login} from 'pages';

const routes = [
  {
    component: App,
    routes: [
      {
        component: Login,
        exact: true,
        path: '/',
      },
      {
        path: '/home',
        exact: true,
        component: Home
      },
      {
        path: '/profile',
        exact: true,
        component: Profile
      },
      {
        path: '/positions',
        exact: true,
        component: ListPositions
      },
      {
        path: '/positions/add',
        exact: true,
        component: AddPosition
      },
      {
        path: '/projects',
        exact: true,
        component: ListProjects
      },
      {
        path: '/projects/add',
        exact: true,
        component: AddProject
      },
      {
        path: '/skills',
        exact: true,
        component: ListSkills
      },
      {
        path: '/skills/add',
        exact: true,
        component: AddSkill
      }
    ]
  }
];

export default routes;
