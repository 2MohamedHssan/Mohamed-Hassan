import { links } from "@/data/navBarLinks"

function NavLinks() {
  return (
    <ul className="md:flex hidden items-center gap-7">
      {links.map(({ name, href }) => (
        <li key={name}>
          <a
            href={href}
            className="text-xs font-mono tracking-[0.15em] uppercase text-zinc-300 hover:text-amber-300 transition-colors duration-200 relative group py-1"
          >
            <span>{name}</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-400 group-hover:w-full transition-all duration-300" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;