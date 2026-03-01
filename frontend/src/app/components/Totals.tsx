type TotalTypes = {
  totalAmountSpent: string;
};

export default function Totals({ totalAmountSpent }: TotalTypes) {
  return (
    <div>
      <div>
        <p>Total amount spent: £{totalAmountSpent} </p>
      </div>
    </div>
  );
}
