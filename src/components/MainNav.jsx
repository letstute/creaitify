import { navLinks } from "@/constants";

export default function MainNav() {
  return (
    <nav>
      <ul className="flex gap-6">
        {navLinks.map((item) => (
          <li key={item.path} className="hover:text-primary-900">
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
