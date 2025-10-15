import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function CalculoRemuneracion() {

    const [sueldoBruto, setSueldoBruto] = useState(0);
    const [gratificacionLegal, setGratificacionLegal] = useState(0);
    const [tipoPrevision, setTipoPrevision] = useState("");
    const [montoMovilizacion, setMontoMovilizacion] = useState(0);
    const [montoColacion, setMontoColacion] = useState(0);
    const [montoViatico, setMontoViatico] = useState(0);
    

    // constantes   
    
    const porcentajeComisionAFP = 0.009;
    const porcentajeComisionSalud =tipoPrevision == 1 ? 0.07 : 0.1;
    const porcentajeImpuestoUnico = 0.01;
    const porcentajeSeguroCesantia = 0.006;

    // Variables de Resultado
    const resultadoSueldoImponible = parseInt(sueldoBruto) + parseInt(gratificacionLegal);   
    const resultadoComisionAFP = parseInt(resultadoSueldoImponible) * porcentajeComisionAFP;
    const resultadoAFP = parseInt(resultadoSueldoImponible) * 0.1;
    const resultadoSalud = parseInt(resultadoSueldoImponible * porcentajeComisionSalud);
    const resultadoImpuestoUnico = parseInt(resultadoSueldoImponible * porcentajeImpuestoUnico);
    const resultadoSeguroCesantia = parseInt(resultadoSueldoImponible * porcentajeSeguroCesantia);
    const resultadoMontoMovilizacion = parseInt(montoMovilizacion);
    const resultadoMontoColacion = parseInt(montoColacion);
    const resultadoMontoViatico = parseInt(montoViatico);

    console.log(resultadoMontoMovilizacion);

    const liquidoAPagar = resultadoSueldoImponible + resultadoMontoColacion + resultadoMontoMovilizacion + resultadoMontoViatico - resultadoComisionAFP - resultadoAFP - resultadoSalud - resultadoImpuestoUnico - resultadoSeguroCesantia;
    

    console.log('sueldoBruto: ' + sueldoBruto);
    console.log('gratificacionLegal: ' + gratificacionLegal);
    console.log(porcentajeImpuestoUnico);
    console.log(porcentajeSeguroCesantia);
    console.log(parseFloat(porcentajeComisionAFP));
    console.log('tipoPrevision: ' + tipoPrevision );



    return (
        <div>            
            <div className='row mt-3'> 
                <div className='col-lg-12 text-center bg-secondary text-white p-3 rounded '>
                <h2>Demo de Cálculo</h2>
                <h4>Sueldo Líquido</h4>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-lg-6'>
                <h4>Datos sueldo</h4>
                <label className='form-label' htmlFor='sueldoBruto'>Ingrese sueldo bruto</label>
                <input id='sueldoBruto' name='sueldoBruto' placeholder='1000000' type='number' className='form-control' value={sueldoBruto} onChange={(e) => setSueldoBruto(e.target.value)}></input>

                <div className='form-group mt-3'>
                    <label className='form-label' htmlFor='gratificacionLegal'>Gratificación Legal</label>
                    <input type='number' id='gratificacionLegal' name='gratificacionLegal' className='form-control' value={gratificacionLegal} placeholder='250000' onChange={(e) => setGratificacionLegal(e.target.value)}></input>
                </div>

                <div className='form-group-mt3'>
                    <label className='form-label' htmlFor='tipoPrevision'>Seleccione prevision de Salud</label>
                    <select className='form-select' id='tipoPrevision' name='tipoPrevision' value={tipoPrevision} onChange={(e) => setTipoPrevision(e.target.value)}>
                    <option>Seleccione Prevision</option>
                    <option value={1}>Fonasa</option>
                    <option value={2}>Isapre</option>
                    </select>
                </div>
                <h4 className='mt-4'>No Imponibles</h4>
                 <div className='form-group mt-3'>
                    <label className='form-label' htmlFor='montoMovilizacion'>Monto Movilizacion</label>
                    <input type='number' id='montoMovilizacion' name='montoMovilizacion' className='form-control' value={montoMovilizacion} placeholder='20000' onChange={(e) => setMontoMovilizacion(e.target.value)}></input>
                </div>
                 <div className='form-group mt-3'>
                    <label className='form-label' htmlFor='montoColacion'>Monto Colacion</label>
                    <input type='number' id='montoColacion' name='montoColacion' className='form-control' value={montoColacion} placeholder='200000' onChange={(e) => setMontoColacion(e.target.value)}></input>
                </div>
                 <div className='form-group mt-3'>
                    <label className='form-label' htmlFor='montoViatico'>Monto Viatico</label>
                    <input type='number' id='montoViatico' name='montoViatico' className='form-control' value={montoViatico} placeholder='20000' onChange={(e) => setMontoViatico(e.target.value)}></input>
                </div>

            </div>

            <div className='col-lg-6'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Concepto</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sueldo Bruto</td>
                            <td>$ {parseInt(sueldoBruto).toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>(-) AFP (10%)</td>
                            <td>$ {resultadoAFP.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>(-) Comision AFP ({(porcentajeComisionAFP * 100).toFixed(1)} %)</td>
                            <td>$ {resultadoComisionAFP.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>(-) Salud({(porcentajeComisionSalud * 100).toFixed(1)} %)</td>
                            <td>$ {resultadoSalud.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>(-) Impuesto único({(porcentajeImpuestoUnico * 100).toFixed(1)} %)</td>
                            <td>$ {resultadoImpuestoUnico.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>(-) Seguro cesantía({(porcentajeSeguroCesantia * 100).toFixed(1)} %)</td>
                            <td>$ {resultadoSeguroCesantia.toLocaleString()}</td>
                        </tr>

                        <tr style={{fontSize: '20px'}}>
                            <td colSpan={2}>Total</td>
                            <td>$ {liquidoAPagar.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        </div>
    </div>
    );
}

export default CalculoRemuneracion;