import moment from 'moment';

export const SERVER_PATH = 'http://localhost:3001/api/v1';

export const COMPANY_START_AT = '2014-04-17';
export const COMPANY_START_YEAR_AT = moment(COMPANY_START_AT).get('year');
export const COMPANY_START_MONTH_AT = moment(COMPANY_START_AT).get('month');
export const CURRENT_YEAR = moment(Date.now()).get('year');
export const CURRENT_MONTH = moment(Date.now()).get('month');
