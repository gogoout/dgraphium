import { OperatorBuilder, OpBuilderValue, Subject } from '../operator';
import { UidLike, Uid } from '../uid';

export * from './comparison-operators';
export * from './term-operators';

export const uid = (...uids: UidLike[]) => new OperatorBuilder({
  name: 'uid',
  value: uids.map(x => new Uid(x)),
});

export const has = (subject: Subject) =>
  new OperatorBuilder({ name: 'has', subject });

export const eq = (
  subj: Subject, value: OpBuilderValue | OpBuilderValue[]
) =>
  new OperatorBuilder({ name: 'eq', subject: subj, value: value });

export const regexp = (subject: Subject, pattern: RegExp) =>
  new OperatorBuilder({ name: 'regexp', subject, value: pattern });
