import React from "react";

interface NavbarButtonProps {
  icon: React.ElementType;
  text: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ icon: Icon, text }) => {
  return (
    <div className="h-15 w-15 md:w-full md:h-10 p-4 md:rounded-full cursor-pointer flex space-x-2 items-center hover:bg-gray-100">
      <Icon className="text-3xl md:text-base" />
      <a className="hidden md:inline">{text}</a>
    </div>
  );
};

export default NavbarButton;
