import { useState } from "react"
import Toppanel from "../../components/Toppanel/Toppanel.jsx";
import { ContainerCategory, DivCategory, NavCategory} from "./style.js"
import "./categorias/style.css"



// Categorias de livros 
import CategoriaRomance from "./categorias/categoriaRomance"


const categorias = {
    "LiteraturaFicção": {
        Romance: "Romance",Aventura: "Aventura",Biografia: "Biografia",Ficção: "Ficção",FicçãoFantásia: "Ficção Fantásia",FicçãoCientífica: "Ficção Científica",ContoseCrônicas: "Contos e Crônicas",
        Infantil: "Infantil",Policial: "Policial",Humor: "Humor",SuspenseTerror: "Suspense e Terror",PoemasePoesia: "Poemas e Poesia",
    },
    "TécnicosAcadêmicos": {
        Ciências: "Ciências",Linguística: "Linguística",Filosofia: "Filosofia",Psicologia: "Psicologia",Educação: "Educação",Administração: "Administração",
        Economia: "Economia",Direito: "Direito",Engenharia: "Engenharia",Arquitetura: "Arquitetura",MedicinaSaúde: "Medicina e Saúde",
    }
    
}


function MainCategory () {


    const [selectedCategoria, setSelectedCategoria] = useState("Romance")


    const sectionCategoria = () => {
        switch(selectedCategoria){
            case "Romance": return <CategoriaRomance/>; case "Aventura": return "Aventura"; case "Biografia":return "Biografia"
            case "Ficção": return "Ficção"; case "Ficção Fantásia": return "Ficção Fantásia"; case "Ficção Científica":return "Ficção Científica"
            case "Contos e Crônicas": return "Contos e Crônicas"; case "Infantil": return "Infantil"; case "Policial":return "Policial"
            case "Humor": return "Humor"; case "Suspense e Terror": return "Suspense e Terror"; case "Poemas e Poesia": return "Poemas e Poesia"
            case "Ciências": return "Ciências"; case "Linguística": return "Linguística"; case "Filosofia": return "Filosofia"; case "Psicologia": return ""
            case "Educação": return "Educação"; case "Administração": return "Administração"; case "Economia": return "Economia"; case "Direito": return ""
            case "Engenharia": return "Engenharia"; case "Arquitetura": return "Arquitetura"; case "Medicina e Saúde": return "Medicina e Saúde"; default: return
        }   
    }

    const stylecategoria = (key) => ({
        color: selectedCategoria === key ? '#CD853F' : '#2c1810', 
        borderLeft: selectedCategoria === key ? 'solid 3px #2c1810' : '',
        cursor: 'pointer', 
        fontWeight: selectedCategoria === key ? 'bold' : 'normal',
        transition: 'background-color 0.2s',

    });


    return (
        <ContainerCategory>
                <Toppanel/>
                    <DivCategory>
                        <NavCategory>
                            <h2 className="MenuTitle">CATEGORIAS</h2>
                                {Object.entries(categorias).map(([section, items]) => (
                                    <div key={section}>
                                        <h3>{section}</h3>
                                        <ul>
                                            {Object.keys(items).map((key) => (
                                                <li key={key} onClick={() =>setSelectedCategoria(items[key])} style={stylecategoria(key)}>{items[key]}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </NavCategory>
                        <div className="CARDROMANCE">
                            {sectionCategoria()}
                        </div>
                    </DivCategory>
        </ContainerCategory>

    )
}


export default MainCategory