import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/* global.console.warning = message => {
    throw new Error(message);
  };
  
  global.console.error = message => {
    throw new Error(message);
  }; */
