/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import './App.css'


import Primeiro from'./components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from'./components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'

export default (props) => (
    <div className="App">
        <Card titulo="#06-condicional com if">
            <CondicionalComIf numero={6}></CondicionalComIf>
        </Card>
        <Card titulo="#05-condicional">
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="#04-Repeticao">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03-Componente com filhos">
            <ComFilhos>
                <ul>
                    <li>ana</li>
                    <li>bia</li>
                    <li>carlos</li>
                    <li>daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02-Componente com parametro">
            <ComParametro titulo="opa" subtitulo="epa"></ComParametro>
        </Card>
        <Card titulo="#01-Primeiro componente"><Primeiro/></Card>
        {/*  */}
        {/* 
        <Primeiro /> */}
    </div>
)