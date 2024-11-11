import Sidebar from "./Sidebar";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  // { name: "Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
  // { name: "Projects", href: "/projects" },
  // { name: "Works", href: "/Works" },


];

const Navigate: React.FC = () => {
  return (
    <div>
      <Sidebar menuItems={menuItems} />
    </div>
  );
};

export default Navigate;
