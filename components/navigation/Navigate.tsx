// pages/index.tsx

import Sidebar from "./Sidebar";

// Define the menu items dynamically
const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
];

const Navigate: React.FC = () => {
  return (
    <div>
      <Sidebar menuItems={menuItems} />
    </div>
  );
};

export default Navigate;
