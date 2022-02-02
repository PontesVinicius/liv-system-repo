

const header = () => {
    return (
        <div className="div-text-header">

            <p className="text-title">
                Bons softwares são construidos por incríveis desenvolvedores
            </p>
            <div className="div-subtitle">
                <p className="text-subtitle">
                    Ajudamos a construir e gerenciar uma equipe de desenvolvedores
                    para dar vida à sua visão.
                </p>
            </div>
            <div className="div-email">
                <input type="email" placeholder="Receba nosso boletim" className="input-email" />
                <button onClick={() => console.log('clicked')} className="d-Button">Receber</button>
            </div>

        </div>
    )
}

export default header