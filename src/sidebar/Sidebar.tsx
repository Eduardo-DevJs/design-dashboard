import iconUser from "../assets/fi_users.svg";
import iconSettings from "../assets/fi_settings.svg";
import iconPower from "../assets/power.svg";
import iconSave from "../assets/save.svg";
import iconCart from "../assets/fi_shopping-cart.svg";
import iconGrid from "../assets/fi_grid.svg";

export default function Sidebar() {
  return (
    <aside className="bg-white p-10 h-screen">
      <div>
        <h1 className="font-bold text-2xl">
          dudu
          <span className="text-purple-900">Front</span>
        </h1>

        <nav>
          <ul className="mt-16 flex flex-col gap-10">
            <li className="flex gap-4 cursor-pointer transition-all hover:text-purple-600 hover:bg-purple-50 rounded p-2 items-center">
              <img src={iconGrid} alt="" />
              <span>Dashboard</span>
            </li>
            <li className="flex gap-4 cursor-pointer transition-all hover:text-purple-600 hover:bg-purple-50 rounded p-2 items-center">
              <img src={iconSave} alt="" />
              <span>Carteira</span>
            </li>
            <li className="flex gap-4 cursor-pointer transition-all hover:text-purple-600 hover:bg-purple-50 rounded p-2 items-center">
              <img src={iconCart} alt="" />
              <span>Transações</span>
            </li>
            <li className="flex gap-4 cursor-pointer transition-all hover:text-purple-600 hover:bg-purple-50 rounded p-2 items-center">
              <img src={iconUser} alt="" />
              <span>Suporte</span>
            </li>
            <li className="flex gap-4 cursor-pointer transition-all hover:text-purple-600 hover:bg-purple-50 rounded p-2 items-center">
              <img src={iconSettings} alt="" />
              <span>Ajustes</span>
            </li>
            <li className="flex gap-4 cursor-pointer transition-all hover:text-red-500 hover:bg-red-100-50 rounded p-2 items-center">
              <img src={iconPower} alt="" />
              <span>Desconectar</span>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
