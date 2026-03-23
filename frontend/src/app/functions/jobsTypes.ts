export type AddDataTypes = {
  date: string;
  category: string;
  method: string;
  // description: string;
  amount: number;
};

export type AddDataResponse = {
  status: number;
  data: any; // or your real response type
};

export type deleteDataResponse = {
  status: number;
  data: any; // or your real response type
};
