import React from "react";

interface InputProps {
  Icon: any;
  onChange: (event: any) => void;
  placeHolder: string;
  type: string;
  name: string;
  id: string;
  isAuthInput: boolean;
  hasIcon: boolean;
  value?: string;
}
const Input = ({ Icon, onChange, type, placeHolder, name, id, value, isAuthInput=false, hasIcon=false }: InputProps) => {
  const authInputClass = 'w-full border-b border-horizontal-line-color focus:border-primary-color focus:outline-none pl-10 pb-4 placeholder:text-secondary-text-color placeholder:text-sm'
  return (
    <div className="w-full flex">
      { hasIcon ? <img src={Icon} alt={name} className="absolute" /> : null }
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeHolder}
        onChange={onChange}
        className={isAuthInput ? authInputClass: ''}
        value={value}
      />
    </div>
  );
};

export default Input;
