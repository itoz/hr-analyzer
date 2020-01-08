import { createContext } from 'react';
import { User, IYears } from '../App';
interface IContextProps {
  years: IYears;
  users: User[];
}
const AppContext = createContext({} as IContextProps);
export default AppContext;
