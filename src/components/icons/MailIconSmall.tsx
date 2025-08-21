import type React from "react";

type IconProps = React.SVGProps<SVGSVGElement>

const MailIconSmall: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props} // lets you pass className, style, onClick, etc.
  >
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1 2-7 5-7-5h14zm1 12H4V8l8 5.5L20 8v10z" />
  </svg>
);

export default MailIconSmall;
