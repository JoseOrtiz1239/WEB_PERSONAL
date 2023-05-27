import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import graphEmbeddings from "../images/graph_embeddings.png"
import kafkaMl from "../images/kafkaml.png"
import scikitPipes from "../images/scikit_pipes.png"
import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-1",
        title: "Análisis Exploratorio de Datos - Venta de Autos",
        links: [
            {
                name: "repo",
                url: "https://github.com/JoseOrtiz1239/VENTA-DE-AUTOS-ANALISIS-DE-DATOS",
                icon: <AiFillGithub/>
            }
        ],
        image: "https://peruconsultas.com/wp-content/uploads/2021/05/donde_comprar_carros_en_peru.jpg",
        description: "Una tienda de autos se propuso inicialmente aumentar las ventas de toda su gama, pero se percata que no todo sale de acuerdo al plan de negocios. Por lo que desea impulsar a la marca menos vendida y requiere saber por que esta marca tiene ventas tan bajas.",
        target: "_blank"
    },
    {
        id: "project-0",
        title: "Modelado y creación de BD CREDIT S.A.",
        links: [
            {
                name: "repo",
                url: "https://github.com/JoseOrtiz1239/MODELADO-Y-CREACION-DE-BD-CREDIT-SA",
                icon: <AiFillGithub/>
            }
        ],
        image: "https://www.lawebdelprogramador.com/usr/191000/191829/57a7df5d0af1b-Captura-de-pantalla-de-2016-08-07-222229.png",
        description: "Desafío final del módulo de Cloud SQL del Data Analyst Program de Datapath",
        target: "_blank"
    }
]

export default projectConfig