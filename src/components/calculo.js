import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function CalculoRemuneracion() {

    const [sueldoBruto, setSueldoBruto] = useState(0);
    const [gratificacionLegal, setGratificacionLegal] = useState(0);

    

    // constantes
    const porcentajeComisionAFP = 0.009;
    const porcentajeComisionSalud = 0.07;
    const porcentajeImpuestoUnico = 0.01;
    const porcentajeSeguroCesantia = 0.006;


    const resultadoComisionAFP = parseInt(sueldoBruto) * porcentajeComisionAFP;
    const resultadoAFP = parseInt(sueldoBruto) * 0.1;
    const resultadoSalud = parseInt(sueldoBruto * porcentajeComisionSalud);
    const resultadoImpuestoUnico = parseInt(sueldoBruto * porcentajeImpuestoUnico);
    const resultadoSeguroCesantia = parseInt(sueldoBruto * porcentajeSeguroCesantia);

    const liquidoAPagar = sueldoBruto - resultadoComisionAFP - resultadoAFP - resultadoSalud - resultadoImpuestoUnico - resultadoSeguroCesantia;
    

    console.log('sueldoBruto: ' + sueldoBruto);
    console.log('gratificacionLegal: ' + gratificacionLegal);
    console.log(porcentajeImpuestoUnico);
    console.log(porcentajeSeguroCesantia);

    console.log(parseFloat(porcentajeComisionAFP));


    return (
        <div className='row mt-3'>
            <div className='col-lg-6'>
                <h4>Datos sueldo</h4>
                <label className='form-label' htmlFor='sueldoBruto'>Ingrese sueldo bruto</label>
                <input id='sueldoBruto' name='sueldoBruto' placeholder='1000000' type='number' className='form-control' value={sueldoBruto} onChange={(e) => setSueldoBruto(e.target.value)}></input>

                <div className='form-group mt-3'>
                    <label className='form-label' htmlFor='gratificacionLegal'>Gratificación Legal</label>
                    <input type='number' id='gratificacionLegal' name='gratificacionLegal' className='form-control' value={gratificacionLegal} placeholder='250000' onChange={(e) => setGratificacionLegal(e.target.value)}></input>
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
                            <td>{parseInt(sueldoBruto).toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>(-) AFP (10%)</td>
                            <td>{resultadoAFP.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Comision AFP</td>
                            <td>{resultadoComisionAFP.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Salud</td>
                            <td>{resultadoSalud.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Impuesto único</td>
                            <td>{resultadoImpuestoUnico.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Seguro cesantía</td>
                            <td>{resultadoSeguroCesantia.toLocaleString()}</td>
                        </tr>

                        <tr>
                            <td colSpan={2}>Total</td>
                            <td>{liquidoAPagar.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        </div>
    );
}

export default CalculoRemuneracion;