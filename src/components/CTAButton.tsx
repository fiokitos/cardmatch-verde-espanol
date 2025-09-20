interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CTAButton = ({ children, className = "" }: CTAButtonProps) => {
  return (
    <button 
      className={`
        bg-secondary hover:bg-secondary/90 
        text-secondary-foreground 
        font-poppins font-semibold 
        px-8 py-4 
        rounded-lg 
        transition-colors 
        duration-200 
        text-lg 
        shadow-lg 
        hover:shadow-xl 
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default CTAButton;