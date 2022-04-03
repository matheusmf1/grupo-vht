import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import { MdOutlineEngineering } from "react-icons/md";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { BiBookReader } from "react-icons/bi";


const serviceListName = [
    { 
        icon: <AiOutlineSecurityScan/>,
        link: "/seguranca",
        title: 'Segurança',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        icon: <MdOutlineEngineering />,
        link: "/engenharia",
        title: 'Engenharia',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        icon: <FiLayers />,
        link: "/automacao",
        title: 'Automação',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        icon: <FiUsers />,
        link: "/governo",
        title: 'Governos',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    { 
        icon: <FiMonitor />,
        link: "/facilities",
        title: 'Facilities',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        icon: <BiBookReader />,
        link: "/cursos",
        title: 'Cursos',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
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