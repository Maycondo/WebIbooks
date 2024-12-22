import { useState } from "react"
import Toppanel from "../../components/Toppanel/Toppanel.jsx";
import { ContainerCategory, DivCategory, NavCategory, CategoriaItem } from "./style.js"


import Categoria from "./categorias/categoriaIbooks.jsx"

const categorias = {
    LiteraturaFicção: {
      Romance: "romance",
      Aventura: "aventura",
      Biografia: "Biografia",
      Ficção: "Ficção",
      "Ficção Fantásia": "Ficção Fantásia",
      "Ficção Científica": "Ficção Científica",
      "Contos Crônicas": "Contos Crônicas",
      Infantil: "Infantil",
      Policial: "Policial",
      Humor: "Humor",
      "Suspense Terror": "Suspense Terror",
      "Poemas Poesia": "Poemas Poesia",
    },
    TécnicosAcadêmicos: {
      Ciências: "Ciências",
      Linguística: "Linguística",
      Filosofia: "Filosofia",
      Psicologia: "Psicologia",
      Educação: "Educação",
      Administração: "Administração",
      Economia: "Economia",
      Direito: "Direito",
      Engenharia: "Engenharia",
      Arquitetura: "Arquitetura",
      "Medicina e Saúde": "Medicina e Saúde",
    },
  };


function MainCategory () {


    const [selectedCategoria, setSelectedCategoria] = useState("Romance")


    const renderCategoria = () => {
        for (const section of Object.values(categorias )){
            if (section[selectedCategoria]) {
                return section[selectedCategoria]
            }
            return null
        }
    }


    return (
        <ContainerCategory>
          <Toppanel />
            <DivCategory>
                    <NavCategory>
                        <h2 className="MenuTitle">CATEGORIAS</h2>
                            {Object.entries(categorias).map(([section, items]) => (
                                <div key={section}>
                                <h3>{section}</h3>
                                    <ul>
                                        {Object.keys(items).map((key) => (
                                            <CategoriaItem key={key} onClick={() => setSelectedCategoria(key)} isSelected={ selectedCategoria === key }>{key}</CategoriaItem>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                    </NavCategory>
                <Categoria selectedCategoria={renderCategoria()}></Categoria>
            </DivCategory>
        </ContainerCategory>
      );
}


export default MainCategory