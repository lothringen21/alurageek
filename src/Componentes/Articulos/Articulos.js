import "./Articulos.css"

function Articulos() {
    return(
        <div className="articulos" id="bouquets">
            <h3>Bouquets</h3>
            <div className="articulo">
                <img src="/img/bouquets/bouquet.jpeg" alt="bouquet" className="zoom" />
                <h4>Pinky Promise</h4>
                <p>Hermosas rosas rosadas con un toque de nube clara, ideal para momentos inolvidables</p>
                <p className="precio">$400</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="articulo">
                <img src="/img/bouquets/gerbera.jpeg" alt="gerbera" className="zoom" />
                <h4>Amor Bonito</h4>
                <p>Demuestra tu amor con este arreglo de gerberas, <br />para cualquier <br />ocasión especial</p>
                <p className="precio">$900</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="articulo">
                <img src="/img/bouquets/ramo-rosas-y-girasoles-.png" alt="rosasygirasoles" className="zoom" /> 
                <h4>SunRoses</h4>
                <p>Dí cuánto amas a tu persona favorita, con este bouquet <br />de rosas rojas y girasoles</p>
                <p className="precio">$700</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="articulo">
                <img src="/img/bouquets/ramo1.jpeg" alt="rosas" className="zoom" />
                <h4>Rosa Pastel</h4>
                <p>Llena su día de alegría <br />con esta linda combinación de flores que la haran sonreir </p>
                <p className="precio">$1000</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="articulo">
                <img src="/img/bouquets/rosas.jpeg" alt="rojas" className="zoom" />
                <h4>Instante maravilloso</h4>
                <p>Amor distinguido, <br /> con rosas rojas<br /> y rosas claras, perfecto <br />para cualquier ocasión</p>
                <p className="precio">$600</p>
                <button>Añadir al carrito</button>
            </div>
        </div>
    )
}


export default Articulos
