import React ,{ Component }from "react";
import { FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import { MdOutlineEngineering } from "react-icons/md";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { BiBookReader } from "react-icons/bi";
import { FaLaptopHouse } from "react-icons/fa";
import { GiSecurityGate } from "react-icons/gi";
import { BiRecycle } from "react-icons/bi";
import { BsRecycle } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineHandyman } from "react-icons/md";



const serviceListName = [
    { 
        icon: <AiOutlineSecurityScan/>,
        // icon: <GiSecurityGate/>,
        link: "/seguranca-eletronica",
        title: 'Segurança Eletrônica',
        description: "Portaria Remota, Monitoramento, Alarmes, Sistemas e Equipamentos"
    },
    {
        // icon: <MdOutlineEngineering />,
        icon: <MdOutlineHandyman />,
        link: "/engenharia",
        title: 'Engenharia',
        description: "Projeto Estrutural, Arquitetônico, Gerenciamento e Execução de obras"
    },
    {
        icon: <FaLaptopHouse />,
        link: "/automacao",
        title: 'Automação',
        description: "Soluções Técnologicas, Residenciais, Comerciais e Industriais"
    },
    {
        // icon: <FiUsers />,
        icon: <FaHandsHelping />,
        link: "/governo",
        title: 'Governos',
        description: "Licitações e Compras Emergenciais para Órgãos Públicos"
    },
    { 
        icon: <BiRecycle />,
        // icon: <BsRecycle />,
        link: "/facilities",
        title: 'Facilities',
        description: "Recepção, Controle de Acesso, Limpeza, Zeladoria, Manutenção e afins"
    },
    {
        icon: <BiBookReader />,
        link: "/cursos",
        title: 'Cursos',
        description: "Capacitação Profissional, Treinamentos, Especializações e Normas Regulamentadoras"
    }
]


class ServiceList extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = serviceListName.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href={val.link}>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceList;