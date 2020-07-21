import ProviderList from '../app/components/Providers/ProviderList';
import ProviderCreate from '../app/components/Providers/ProviderCreate';

export const RESOURCES = [
  {
    name: 'users',
    list: ProviderList,
    icon: '',
    edit: '',
    create: ProviderCreate,
    show: ''
  }
];

const Routes = {
  HOME: '/'
};

export default Routes;