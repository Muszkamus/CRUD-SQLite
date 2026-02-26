import "../styles/homepage.css";

type InputProps = {
  children: string;
  state: any;
  setState: any;
};

const Input = ({ children, state, setState }: InputProps) => {
  return (
    <input
      value={state}
      onChange={(e) => setState(e.target.value)}
      className="input"
      placeholder={children}
    ></input>
  );
};

export default Input;
