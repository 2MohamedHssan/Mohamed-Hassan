import { links } from '@/data/navBarLinks'

function MobileMenue() {
  return (
    <ul className="absolute left-0 z-50 right-0 transition-all duration-300 w-full top-full flex flex-col items-center md:hidden justify-center space-y-4 bg-black text-white py-4">
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

export default MobileMenue