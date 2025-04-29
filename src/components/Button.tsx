interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, variant = 'primary', className = '', onClick }: ButtonProps) => {
  const baseStyles = 'px-6 py-2 rounded-full font-medium transition-all duration-200';
  const variantStyles = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 