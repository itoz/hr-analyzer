import React, { useEffect, useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import axios from 'axios';
import moment from 'moment';
import Header from './components/Header';
import Total from './components/Total';
import TotalTable from './components/TotalTable';
import styles from './App.module.scss';
import Member from './entity/Member';
import Timeline from './entity/Timeline';
import AppContext from './contexts/AppContext';
import {
  COMPANY_START_YEAR_AT,
  COMPANY_START_MONTH_AT,
  SERVER_PATH,
  CURRENT_YEAR,
  CURRENT_MONTH,
} from './consts/vars';
// import reducer from "./reducer/reducer"
const cx = classNames.bind(styles);

export interface User {
  id: Number;
  last_name: string;
  first_name: string;
  joined_at: string;
  retiremented_at: string;
  job_title: string;
}
export interface ScoreTypes {
  joined: User[];
  retiremented: User[];
  total: User[];
}

export interface IYears {
  [key: string]: ScoreTypes;
}

export interface IMonth {
  year: number;
  month: number;
}

const App: React.FC = () => {
  let t: Timeline;
  let initYears: IYears = {};
  let initMonths: IMonth[] = [];
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [years, setYears] = useState(initYears);

  const createMonthArray = () => {
    t = new Timeline();
    // console.log(t.getAllYears());
    // console.log(t.getAllMonths());
  };
  const fetchUser = async () => {
    const response = await axios.get(SERVER_PATH + '/user');
    const users = response.data;
    const startYear = COMPANY_START_YEAR_AT;
    let keyYear = startYear;
    const y: IYears = {};
    while (keyYear <= CURRENT_YEAR) {
      y[keyYear] = {
        joined: [],
        retiremented: [],
        total: [],
      };
      keyYear++;
    }

    users.map((user: User) => {
      const member = Member.fromJSON(user);
      //入社
      if (user.joined_at) {
        const date = moment(user.joined_at).toDate();
        const year = date.getFullYear();
        y[year].joined.push(user);
      }
      //退職
      if (user.retiremented_at) {
        const retirement_at = moment(user.retiremented_at).toDate();
        const year = retirement_at.getFullYear();
        y[year].retiremented.push(user);
      } else {
        user.retiremented_at = moment(Date.now()).format('YYYY') + 1; //退職していなければミライの時間を入れる？
      }
      //在籍
      Object.keys(y).map(key => {
        const checkYearEnd = moment(key + '-12-01').unix(); //その年の12/01に在籍しているか
        const joinUnix = moment(user.joined_at).unix();
        const retirementUnix = moment(user.retiremented_at).unix();
        if (joinUnix <= checkYearEnd && checkYearEnd <= retirementUnix) {
          //在籍
          y[key].total.push(user);
        }
      });
    });
    // console.log(y);
    setYears(y);
    setUsers(users);
    setLoading(true);
  };

  useEffect(() => {
    // console.log('did mount');
    createMonthArray();
    fetchUser();
  }, []);

  return (
    <AppContext.Provider value={{ users, years }}>
      <div className={styles.App}>
        <Header />
        <div className={styles.mainArea}>
          {loading}
          <h2>社員数の推移</h2>
          <ul>
            <li>
              <div>Total</div>
            </li>
            <li>
              <div>定着率</div>
            </li>
            <li>
              <div>離職率</div>
            </li>
          </ul>
          <TotalTable />
          <Total />
          2020 (c)
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
