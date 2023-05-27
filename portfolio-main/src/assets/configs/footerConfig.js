import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {BsMedium} from "react-icons/bs";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/JoseOrtiz1239",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/edwin-jose-ortiz-crisostomo-2623b7148/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        }
    ]
}

export default footerConfig
