import React from 'react'
import './button.css';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  hasIcon?: boolean;
  Icon?: string;
}

const Button = ({ children, onClick, variant, hasIcon=false, Icon }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${variant} rounded-full text-sm`}>
      {hasIcon ? <img src={Icon} alt="" className='w-5 h-5 inline-block'/> : null } {children}
    </button>
  )
}

export default Button