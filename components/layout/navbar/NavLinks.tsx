import { links } from "@/data/navBarLinks"

function NavLinks() {
  return (
    <ul className={`md:flex hidden items-center gap-4 text-white`}>
      {links.map(({name, href}) => (
        <li key={name}> 
          <a href={href} className="hover:text-gray-400 transition-colors duration-300">
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks