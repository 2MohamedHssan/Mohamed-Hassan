import { links } from '@/data/navBarLinks';

function MobileMenue() {
  return (
    <ul className="absolute left-0 z-50 right-0 transition-all duration-300 w-full top-full flex flex-col items-center md:hidden justify-center space-y-5 bg-[#000000]/95 backdrop-blur-2xl border-b border-amber-500/30 text-white py-6 shadow-2xl">
      {links.map(({ name, href }) => (
        <li key={name}>
          <a
            href={href}
            className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-300 hover:text-amber-300 transition-colors duration-200"
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MobileMenue;