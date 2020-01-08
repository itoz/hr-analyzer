import classNames from 'classnames/bind';
import React, { MouseEvent, useState, useContext } from 'react';
import { IYears } from '../App';
import { Table, DropdownButton, Dropdown } from 'react-bootstrap';
import styles from './TotalTable.module.scss';
import moment from 'moment';
import AppContext from '../contexts/AppContext';
const cx = classNames.bind(styles);
// interface Props{
//     years:IYears
// }
const TotalTable = () => {
  const { years, users } = useContext(AppContext);

  let initYear: string = 'すべて';
  const [currentYear, setCurrentYear] = useState(initYear);
  const onClickYear = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const selectedYear = e.currentTarget.textContent;
    console.log(e.currentTarget.textContent);
    console.log(selectedYear);
    if (selectedYear) setCurrentYear(selectedYear);
  };

  console.log('sss');
  console.log(users);
  return (
    <>
      <div className="Box">
        <div className={styles.pullDownArea}>
          {/* <DropdownButton id="dropdown-basic-button" title="すべて">
          <Dropdown.Item href="#/action-1">エンジニア</Dropdown.Item>
          <Dropdown.Item href="#/action-2">デザイナ</Dropdown.Item>
          <Dropdown.Item href="#/action-3">ディレクター</Dropdown.Item>
          <Dropdown.Item href="#/action-4">コーポレートスタッフ</Dropdown.Item>
          <Dropdown.Item href="#/action-5">その他</Dropdown.Item>
        </DropdownButton> */}
          職種別:
          <select>
            <option value="all">すべて</option>
            <option value="ENGINEER">エンジニア</option>
            <option value="DESIGNER">デザイナ</option>
            <option value="DIRECTOR">ディレクター</option>
            <option value="CORPORATE_STAFF">コーポレートスタッフ</option>
            <option value="OTHER">その他</option>
          </select>
        </div>
        選択年 {currentYear}
        <Table responsive>
          <thead className={styles.tright}>
            <tr>
              <th>#</th>
              {Object.keys(years).map(year => {
                return (
                  <th key={year} className="number">
                    <div onClick={onClickYear} className={styles.clickable}>
                      {' '}
                      {year}
                    </div>
                  </th>
                );
              })}
              <th>
                <b>TOTAL</b>
              </th>
            </tr>
          </thead>
          <tbody className={styles.tright}>
            <tr>
              <td>
                在籍人数
                <br />
                <small>12月1日時点での在籍人数 </small>
              </td>
              {Object.keys(years).map(year => {
                const total = years[year].total;
                return (
                  <td key={year} className={cx(styles.font_l, 'number')}>
                    <b>{total.length}</b>{' '}
                  </td>
                );
              })}
              <td>#</td>
            </tr>
            <tr>
              <td>入社数</td>
              {Object.keys(years).map(year => {
                const joined = years[year].joined;
                return (
                  <td key={year}>
                    <b className="plus number">{joined.length}</b>
                  </td>
                );
              })}
              <td>#</td>
            </tr>
            <tr>
              <td>退職数</td>
              {Object.keys(years).map(year => {
                const retiremented = years[year].retiremented;
                return (
                  <td key={year}>
                    <b className="minus number">{retiremented.length}</b>
                  </td>
                );
              })}
              <td>#</td>
            </tr>
            <tr>
              <td>
                離職率
                <br />
                <small>離職人数÷従業員数×100</small>
              </td>
              {Object.keys(years).map(year => {
                return (
                  <td key={year}>
                    <b className="minus number">
                      {Math.floor(
                        (years[year].retiremented.length /
                          years[year].total.length) *
                          10000
                      ) / 100}
                      %
                    </b>
                  </td>
                );
              })}
              <td>#</td>
            </tr>
            <tr>
              <td>
                定着率
                <br />
                <small>定着率＝100％－離職率</small>
              </td>
              {Object.keys(years).map(year => {
                return (
                  <td key={year}>
                    <b className="plus number ">
                      {100 -
                        Math.floor(
                          (years[year].retiremented.length /
                            years[year].total.length) *
                            10000
                        ) /
                          100}
                      %
                    </b>
                  </td>
                );
              })}
              <td>#</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default TotalTable;
