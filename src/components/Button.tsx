interface ButtonProps {
  children: React.ReactNode;
  variant?: 'header_primary' | 'header_secondary' | 'primary' | 'secondary' | 'icon_button' | 'dark';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode | string;
}

const Button = ({ children, variant = 'primary', className = '', onClick, icon }: ButtonProps) => {
  const baseStyles = 'px-6 py-2 rounded-md font-medium transition-all duration-200';
  const variantStyles = {
    header_primary: 'bg-white text-gray-900 border-2 border-[#0F172A] hover:bg-gray-50',
    header_secondary: 'bg-white text-gray-900 hover:bg-gray-50',
    primary: 'bg-orange-500 text-white font-bold',
    secondary: 'bg-white text-gray-900 hover:bg-gray-50',
    icon_button: 'bg-white text-blue-500 font-medium hover:bg-blue-50 text-lg',
    dark: 'bg-[#0F172A] text-white font-bold text-xl rounded-2xl hover:bg-[#1a2744] py-4'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className} flex items-center gap-2`}
      onClick={onClick}
    >
      {icon && typeof icon === 'string' ? (
        <img src={icon} alt="" className="w-5 h-5" />
      ) : (
        icon && <span className="w-5 h-5">{icon}</span>
      )}
      {children}
    </button>
  );
};

export default Button; 