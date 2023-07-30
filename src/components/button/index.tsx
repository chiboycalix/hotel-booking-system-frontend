import React from 'react'
import './button.css';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
}

const Button = ({ children, onClick, variant }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${variant} rounded-full`}>{children}</button>
  )
}

export default Button