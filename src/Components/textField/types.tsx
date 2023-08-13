// Types is just a name It can be anything (e.g State, Props)

type Types = {
  className?: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: {};
  focused?: boolean;
  size?: "medium" | "small";
};
export default Types;
