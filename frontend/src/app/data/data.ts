export type categoryDataTypes = {
  id: number;
  category: string;
};

export const categoryData: categoryDataTypes[] = [
  { id: 1, category: "Food" },
  { id: 2, category: "Fuel" },
  { id: 3, category: "Drinks" },
  { id: 4, category: "Subscription" },
];

export type methodDataTypes = {
  id: number;
  method: string;
};

export const methodData: methodDataTypes[] = [
  { id: 1, method: "Card" },
  { id: 2, method: "Cash" },
];
