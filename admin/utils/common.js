import { BILL_STATUS } from './enums';

export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1)
};

export const getProcessBill = (contracts) => {
  const processContract = contracts.find((contract) => {
    return contract.bill && contract.bill.status === BILL_STATUS.PROCESS;
  });
  return processContract ? processContract.bill : {};
};

export const getProcessContract = (contracts) => {
  const processContract = contracts.find((contract) => {
    return contract.bill && contract.bill.status === BILL_STATUS.PROCESS;
  });
  return processContract ? processContract : {};
};
