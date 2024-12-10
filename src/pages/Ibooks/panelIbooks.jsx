



const LiteraturaFicção = {
    Romance: "Romance",
    Aventura: "Aventura",
    Biografia: "Biografia",
    Ficção: "Ficção",
    FicçãoFantásia: "Ficção Fantásia",
    FicçãoCientífica: "Ficção Científica",
    ContoseCrônicas: "Contos e Crônicas",
    Infantil: "Infantil",
    Policial: "Policial",
    Humor: "Humor",
    SuspenseTerror: "Suspense e Terror",
    PoemasePoesia: "Poemas e Poesia",
}

const TécnicosAcadêmicos = {
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
    MedicinaSaúde: "Medicina e Saúde",
}


function MainCategory () {


    return (
        <>
            <div className="main-category">
                <nav id="category">
                    <h2 className="MenuTitle">categorias</h2>
                    <h3>Literatura Ficção</h3>
                        <ul>
                            {Object.keys(LiteraturaFicção).map((key) => {
                                return (
                                    <li key={key}>{LiteraturaFicção[key]}</li>
                                )
                            })}
                        </ul>
                    <h3>Técnicos e Acadêmicos</h3>
                        <ul>
                            {Object.keys(TécnicosAcadêmicos).map((key) => {
                                    return (
                                        <li key={key}>{TécnicosAcadêmicos[key]}</li>
                                    )
                            })}
                        </ul>
                </nav>
            </div>
        </>
    )
}


export default MainCategory