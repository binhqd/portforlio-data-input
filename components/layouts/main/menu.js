export default () => {
  return [
    {
      name: 'Personal Info',
      class: 'fa fa-dashboard',
      id: 'profile',
      items: [
        {
          name: 'Danh mục',
          link: '/profile'
        }
      ]
    },
    {
      name: 'Positions',
      id: 'positions',
      class: 'fa fa-dashboard',
      items: [
        {
          name: 'List positions',
          link: '/positions'
        },
        {
          name: 'Add new position',
          link: '/positions/add'
        }
      ]
    },
    {
      name: 'Projects',
      id: 'projects',
      class: 'fa fa-dashboard',
      items: [
        {
          name: 'List projects',
          link: '/projects'
        },
        {
          name: 'Add new project',
          link: '/projects/add'
        }
      ]
    },
    {
      name: 'Skills',
      id: 'skills',
      class: 'fa fa-dashboard',
      items: [
        {
          name: 'List skills',
          link: '/skills'
        },
        {
          name: 'Add new skill',
          link: '/skills/add'
        }
      ]
    }
  ];
};

const isMenuOpen = () => {}

export {isMenuOpen}
