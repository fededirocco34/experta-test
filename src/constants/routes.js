import ProviderList from '../app/components/Providers/ProviderList';
import ProviderCreate from '../app/components/Providers/ProviderCreate';
import ProviderShow from '../app/components/Providers/ProviderShow';

export const RESOURCES = [
  {
    name: 'providers',
    list: ProviderList,
    icon: '',
    edit: '',
    create: ProviderCreate,
    show: ProviderShow
  }
];

const Routes = {
  HOME: '/'
};

export default Routes;