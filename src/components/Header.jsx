// import { useEffect } from 'react';
import './Header.style.css';
import { BsLinkedin, BsGithub, BsInstagram, BsFillEnvelopeFill } from "react-icons/bs"; // https://react-icons.github.io/react-icons/icons?name=bs
import { DiReact } from "react-icons/di";

export default function Header() {

	/* useEffect(() => {
		const divSobre = document.getElementsByClassName('divSobre')[0];
        divSobre.style.display = "none"
        const divQuali = document.getElementsByClassName('divQuali')[0];
        divQuali.style.display = "none"
        const divProjetos = document.getElementsByClassName('divProjetos')[0];
        divProjetos.style.display = "none"
	}, []);

    const hiddenDiv = (e) => {
        const { target: { value } } = e;
        const divSobre = document.getElementsByClassName(value)[0];
        if (divSobre.style.display === "none") {
            divSobre.style.display = ""
        } else {
            divSobre.style.display = "none"
        }
    } */

    return (
        <div className='SectionHeader'>
            <DiReact className='iconReact' size={30}/>
            <div className='divHeader'>
                {/* <button
                    value="divSobre"
                    onClick={ hiddenDiv }
                >
                    Sobre
                </button>
        
                <button
                    value = "divQuali"
                    onClick={ hiddenDiv }
                >
                    Qualificação
                </button>

                <button
                    value = "divProjetos"
                    onClick={ hiddenDiv }
                >
                    Projetos
                </button> */}

                <a href="https://www.linkedin.com/in/alexandre-magno-rangel-193842222/" target="blank"> {/* https://blog.betrybe.com/react/react-icons/ */}
                    <BsLinkedin size={20}/>
                </a>
                <a href="https://github.com/AlexandreR4ngel" target="blank">
                    <BsGithub size={20}/>
                </a>

                <a href="https://instagram.com/_alexandre__rangel?igshid=NGExMmI2YTkyZg==" target="blank">
                    <BsInstagram size={20}/>
                </a>

                <a href="https://instagram.com/_alexandre__rangel?igshid=NGExMmI2YTkyZg==" target="blank"> {/* BOTAR LINK DO EMAIL */}
                    <BsFillEnvelopeFill size={20}/>
                </a>

            </div>
        </div>
    )
}
