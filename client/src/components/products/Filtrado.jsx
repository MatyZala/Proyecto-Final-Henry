import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { orderByPrice, getByCategory, rangoByPrice, byDiscount, byEnvios, getByMarcas } from '../../redux/actions/productsA';
import style from './assets/Filtrado.module.css';
import BuscadorMarcas from "./BuscadorMarcas";


function Filtrado({ orderByPrice, getByCategory, rangoByPrice, byEnvios, byDiscount }) {
    const [state, setState] = useState({
        price: '',
        categoria: '',
        rango: "",
        discount:"",
        envio: "",
        marcas: "",
    })

    useEffect(() => {
        if (state.price.length > 2) orderByPrice(state.price)
        if (state.categoria.length > 2) getByCategory(state.categoria)
        if (state.rango.length > 2) rangoByPrice(state.rango)////////
        if (state.discount.length > 2) byDiscount(state.discount)////////
        if (state.envio.length > 2) byEnvios(state.envio)////////

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])


    return (
        <div>
            <form className={style.container}>
                <label htmlFor='asc/desc'>
                    <select value={state.price} onChange={(e) => setState({ ...state, price: e.target.value })}>
                        <option value={''}>Precio</option>
                        <option value='ASC'>[Ascendente]</option>
                        <option value='DESC'>[Descendente]</option>
                    </select>
                </label>
                <label htmlFor='categorias'>
                    <select value={state.categoria} onChange={(e) => setState({ ...state, categoria: e.target.value })}>
                        <option value={''}>Categoría</option>
                        <option value='MotherBoard'>MotherBoard</option>
                        <option value='RAM'>RAM</option>
                        <option value='Micro-procesador'>Micro-procesador</option>
                        <option value='SSD'>SSD</option>
                        <option value='HDD'>HDD</option>
                        <option value='M.2NVme'>M.2NVme</option>
                        <option value='Placa de video'>Placa de videos</option>
                        <option value='Monitor'>Monitores</option>
                        <option value='Fuente de alimentación'>Fuente de alimentación</option>
                        <option value='Teclados'>Teclados</option>
                        <option value='Auriculares'>Auriculares</option>
                        <option value='Mouse'>Mouse</option>
                        <option value='Mousepad'>Mousepad</option>
                        <option value='Sillas'>Sillas</option>
                        <option value='Gabinete'>Gabinetes</option>
                        <option value='Webcam'>Webcam</option>
                        <option value='Parlante'>Parlante</option>
                        <option value='Micrófono'>Microfonos</option>
                        <option value='Refrigeración'>Refrigeración</option>
                    </select>
                </label>

                <label htmlFor='byEnvios'>
                    <select value={state.envio} onChange={(e) => setState({ ...state, envio: e.target.value })}>
                        <option value={''}>Envíos</option>
                        <option value='false'>Envíos con costo</option>
                        <option value='true'>Envío Gratis</option>
                    </select>
                </label> 


                <label htmlFor='rangoPrecio'>
                    <select value={state.rango} onChange={(e) => setState({ ...state, rango: e.target.value })}>
                        <option value={''}>Rango de precio</option>
                        <option value='-10mil'>-$10mil</option>
                        <option value='+10mil'>$10mil-$50mil</option>
                        <option value='+50mil'>+$50mil</option>
                        
                    </select>
                </label>

                {/* <label htmlFor='byDiscount'>
                    <select value={state.discount} onChange={(e) => setState({ ...state, discount: e.target.value })}>
                        <option value={''}>Descuentos</option>
                        <option value='+5%'>+5%</option>
                        <option value='+15%'>+15%</option>
                        <option value='+25%'>+25%</option>
                        <option value='+35%'>+35%</option>
                        <option value='+45%'>+45%</option>
                    </select>
                </label> */}

                <BuscadorMarcas/>

            </form>
        </div>
    )
}

export default connect(null, { orderByPrice, getByCategory, rangoByPrice, byEnvios, byDiscount, })(Filtrado)