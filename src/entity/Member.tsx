import moment from 'moment';

export interface IMember {
  id: number;
  last_name: string;
  first_name: string;
  joined_at: string;
  retiremented_at: string;
  job_title: string;
}
class Member {
  public readonly id: number;
  public readonly last_name: string;
  public readonly first_name: string;
  public readonly joined_at: string;
  public readonly retiremented_at: string;
  public readonly job_title: string;

  constructor(member: IMember) {
    this.id = member.id;
    this.last_name = member.last_name;
    this.first_name = member.first_name;
    this.joined_at = member.joined_at;
    this.retiremented_at = member.retiremented_at;
    this.job_title = member.job_title;
  }

  //在籍しているか、
  public isEnrollmentByDate = (date: Date) => {
    //TODO moment.between
  };

  public static fromJSON = (json: any) => {
    const member: IMember = Object.assign({}, json);
    if (typeof member.id !== 'number') throw new Error('id must be a number');
    if (typeof member.last_name !== 'string')
      throw new Error('last_name must be a string');
    if (typeof member.first_name !== 'string')
      throw new Error('first_name must be a string');
    if (typeof member.joined_at !== 'string')
      throw new Error('joined_at must be a string');
    if (typeof member.job_title !== 'string')
      throw new Error('job_title must be a string');
    return new Member(member);
  };
}

export default Member;
