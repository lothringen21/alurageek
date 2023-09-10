import "./Articulos2.css"


function Articulos2() {
    return(
        <div className="articulos" id="centros-mesa">
            <h3>Centro mesa</h3>
            <div className="articulo">
                <img src="/img/CentrosDeMesa/alcatraz.jpeg" className="zoom" />
                <h4>Paz</h4>
                <p>Demuestra todo tu apoyo con buenos pensamientos y recuerda tu aprecio hacia esa persona</p>
                <p className="precio">$400</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="articulo">
                <img src="/img/CentrosDeMesa/azul.jpeg" alt="hortensias" className="zoom" />
                <h4>Eres mi cielo</h4>
                <p>Sorprende a esa persona con este detalle de hortensias azules y rosas blancas; deal para decorar un espacio interior</p>
                <p className="precio">$900</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="articulo">
                <img src="/img/CentrosDeMesa/cristal.jpeg" alt="rosasblancas" className="zoom" /> 
                <h4>Secreto</h4>
                <p>Demuestra tu amor con un tierno detalle que jamás olvidará, pequeño pero significativas rosas blancas</p>
                <p className="precio">$700</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="articulo">
                <img src="/img/CentrosDeMesa/luz.jpeg" alt="rosas" className="zoom" />
                <h4>Mi luz</h4>
                <p>Sorprende a esa persona con este arreglo de rosa claro, claveles y luces; ideal para ese momento especial.</p>
                <p className="precio">$1000</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="articulo">
                <img src="/img/CentrosDeMesa/trio.jpeg" alt="rojas" className="zoom" />
                <h4>Tu yo siempre</h4>
                <p>¡Es perfecto para celebrar cualquier ocasión especial como cumpleaños, o solo porque sí! Trio de rosas claro</p>
                <p className="precio">$600</p>
                <button>Añadir al carrito</button>
            </div>
        </div>
    )
}


export default Articulos2
