import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hola! Soy <strong className="main-name"> Jose Ortiz</strong>
        </h1>,
    titles: [
        "Data Scientist",
        "Data Analyst",
        "Software Engineer"
    ],
    about: {
        start: "Proximo a egresar de Ingeniería de Software con experiencia en desarrollo de Software NodeJS, .NET, Oracle (PL SQL) con metodologías ágiles y cascada. En busca de nuevos retos que abarquen Data & Analytics habiendo cursado programas y especializaciones para adquirir estos conocimientos.",
        exit: "Tengo nivel en Python, SQL y Power BI " +
            "con mucho interés en machine learning."
    },
    workTimeline: [
        {
            id: "work-1",
            title: "Junior Software Engineer",
            company: "NTT DATA",
            description: "Atención de fallas 2N (Análisis) y 3N (Desarrollo) para el cliente América Movil desde la recepción hasta el pase a producción utilizando herramientas como VS 2013, PL SQL, Jenkins, Gitlab, SonarQube y NUnit.",
            date: "2022-present",
            icon: <DiCodeigniter/>,
            tags: [".NET", "PL/SQL", "Gitlab", "SonarQube", "Jenkins"]
        },
        {
            id: "work-0",
            title: "Practicante de Assurance",
            company: "EY",
            description: "Apoyo en la construcción de un acelerador de estados financieros y creación de reportes de ventas/wins por los servicios ofrecidos del área en base a la data almacenada por los gerentes (se realizó modelamiento y limpieza de datos)",
            date: "2020-2021",
            icon: <FaMobileAlt/>,
            tags: ["Node.js", "Power BI", "JavaScript", "Github"]
        }
    ]
}


export default homeConfig