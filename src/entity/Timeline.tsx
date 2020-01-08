import { IMonth } from '../App';
import _ from 'lodash';
import {
  COMPANY_START_YEAR_AT,
  COMPANY_START_MONTH_AT,
  SERVER_PATH,
  CURRENT_YEAR,
  CURRENT_MONTH,
} from '../consts/vars';

class Timeline {
  months: IMonth[];
  constructor() {
    console.log('[constructor] timeline');
    const result: IMonth[] = [];
    let countYear = COMPANY_START_YEAR_AT;
    let countMonth = COMPANY_START_MONTH_AT;
    while (countYear <= CURRENT_YEAR) {
      const month = countYear === CURRENT_YEAR ? CURRENT_MONTH : 11;
      while (countMonth <= month) {
        result.push({
          year: countYear,
          month: countMonth,
        });
        countMonth++;
      }
      countMonth = 0;
      countYear++;
    }
    this.months = result;
  }

  public getAllYears(): number[] {
    const keys = _.uniq(this.months.map(m => m.year));
    return keys;
  }
  public getAllMonths(): IMonth[] {
    return this.months;
  }
}

export default Timeline;
