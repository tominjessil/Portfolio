import React from "react";

interface SocialMediaButtonProps {
  url: string;
  name?: string;
  icon?: React.ElementType;
  iconColor?: string;
  children?: React.ReactNode;
  ariaLabel?: string;

}

const SocialMediaButton = ({ url, name, icon: Icon, ariaLabel, iconColor}: SocialMediaButtonProps) => {
  const handleClick = () => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      aria-label={ariaLabel || url}
      className="flex items-center p-2 rounded transition border border-black hover:bg-gray-100"
    >
      {name && <span className="mr-2 font-medium">{name}</span>}
      {Icon && <Icon className={`w-5 h-5 inline-block align-middle fill-current ${iconColor || ""}`} aria-hidden="true" />}
    </button>
  );
};

export default SocialMediaButton;