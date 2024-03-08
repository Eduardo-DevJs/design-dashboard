import Sidebar from "./sidebar/Sidebar";
import iconSearch from "./assets/button-search.svg";
import iconNotification from "./assets/button-notification.svg";
import profile from "./assets/fotoProfile.jpg";
import graphic from "./assets/graphic.svg";
import Info from "./info/Info";
import Card from "./card/Card";
import Footer from "./footer/Footer";

export default function App() {
  return (
    <div className="max-w-[1400px] grid grid-col-dash gap-10">
      <Sidebar></Sidebar>
      <main className="p-10">
        <header className="flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold">Ola Dudu</h2>
            <h4 className="text-xl">
              Aqui estão as informações sobre suas vendas
            </h4>
          </div>

          <div className="flex items-center gap-6">
            <img src={iconSearch} alt="" />
            <img src={iconNotification} alt="" />
            <img className="max-w-10 rounded-full" src={profile} alt="" />
            <span className="text-base">Dudu Liria</span>
          </div>
        </header>

        <section className="grid grid-cols-2 gap-4 mt-8">
          <Info>
            <h2 className="font-bold text-xl mb-10">Gráfico de receitas</h2>
            <img src={graphic} alt="" />
          </Info>
          <Info>
            <h2 className="font-bold text-xl mb-10">Histórico de transações</h2>
            <ul className="flex flex-col gap-2">
              <li className="bg-purple-100 text-purple-700 flex justify-between font-bold p-4 rounded">
                <h3>Ontem</h3>
                <h3>R$ -540,32</h3>
              </li>
              <li className="bg-purple-100 text-purple-700 flex justify-between font-bold p-4 rounded">
                <h3>Quinta-Feira</h3>
                <h3>R$ -273,90</h3>
              </li>
              <li className="bg-purple-100 text-purple-700 flex justify-between font-bold p-4 rounded">
                <h3>Segunda-Feira</h3>
                <h3>R$ -1456,20</h3>
              </li>
            </ul>
          </Info>
        </section>

        <section className="mt-10">
          <div className="grid grid-cols-4 gap-3">
            <Card>
              <h2 className="text-base font-semibold">Total de vendas</h2>
              <h1 className="font-bold text-2xl mt-3">R$ 3.265,21</h1>
            </Card>
            <Card>
              <h2 className="text-base font-semibold">Total Liquido</h2>
              <h1 className="font-bold text-2xl mt-3">R$ 3.265,21</h1>
            </Card>
            <Card>
              <h2 className="text-base font-semibold">Compras canceladas</h2>
              <h1 className="font-bold text-2xl mt-3">R$ 3.265,21</h1>
            </Card>
            <Card>
              <h2 className="text-base font-semibold">Reembolsos</h2>
              <h1 className="font-bold text-2xl mt-3">R$ 3.265,21</h1>
            </Card>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
