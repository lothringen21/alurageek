import "./Articulos3.css"

function Articulos3() {
    return(
        <div className="articulos" id="floreros">
            <h3>Floreros</h3>
            <div className="articulo">
                <img src="/img/Floreros/gerberas.jpeg" alt="gerberas" className="zoom" />
                <h4>Alegria Rose</h4>
                <p>El mejor detalle para sorprender a esa persona especial es este hermoso arreglo de gerberas</p>
                <p className="precio">$400</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="articulo">
                <img src="/img/Floreros/lilys.jpeg" alt="lirios" className="zoom" />
                <h4>Casablanca</h4>
                <p>Demuestra todo tu apoyo con buenos pensamientos y recuerda tu amor hacia esa persona</p>
                <p className="precio">$900</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="articulo">
                <img src="/img/Floreros/rosas_blancas.jpeg" alt="rosasblancas" className="zoom" /> 
                <h4>Peace Love</h4>
                <p>Ilumina su dia con un detalle de rosas blancas y claveles rosas con follaje en florero de cristal</p>
                <p className="precio">$700</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="articulo">
                <img src="/img/Floreros/rosas_rojas.jpeg" alt="rosasrojas" className="zoom" />
                <h4>Clásico Amor</h4>
                <p>Envía este hermoso arreglo de 50 rosas rojas en jarrón cilindro y demuestra el amor que sientes</p>
                <p className="precio">$1000</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="articulo">
                <img src="/img/Floreros/rosas.jpeg" alt="rosas" className="zoom" />
                <h4>Rosa Venus</h4>
                <p>Sorprende a esa persona con este detalle de gerberas, claveles y rosas; ideal para decoraciones</p>
                <p className="precio">$600</p>
                <button>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default Articulos3
 