import { motion } from "framer-motion";

export default function SidebarNav({ sections, active, onSelect }) {
  return (
    <motion.nav
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden md:block sticky top-52"
    >
      <ul className="space-y-3">
        {sections.map((s, i) => (
          <li
            key={s.id}
            onClick={() => onSelect(s.id)}
            className={`cursor-pointer px-3 py-1 rounded-lg transition-all duration-200 font-medium group ${
              active === s.id
                ? "text-green-600 font-semibold bg-green-50"
                : "text-gray-400 hover:text-gray-800 hover:bg-gray-100"
            }`}
          >
            <span className="mr-2">{i + 1}.</span>
            <span className="group-hover:underline">{s.title}</span>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
