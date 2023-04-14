import Tab from './Tab/Tab';
import data from '../../src/data.json';

export const App = () => {
  return <Tab data={data.transactions} />;
};
