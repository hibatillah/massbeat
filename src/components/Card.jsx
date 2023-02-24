import { useNavigate } from "react-router-dom";

const ArticleCard = ({article}) => {
    const navigate = useNavigate();

    const toPage = (id) => {
        console.log(`open article ${id}`);
        navigate(`/articles/${id}`);
    }
    
    return (
        <div onClick={() => toPage(article.id)} className="article-card select-none">
            <div className="flex-none w-20">
                <img src={article.image} alt="profile" className="w-full h-full object-cover"/>
            </div>
            <div className="text-tertiary flex flex-col justify-center px-3">
                <h1 className="text-sm font-semibold leading-[18px] line-clamp-2">{article.title}</h1>
                <p className="text-xs">{article.source}</p>
                <p className="text-xs">{article.date}</p>
            </div>
        </div>
    )
}

const TrainerCard = (props) => {
    return (
        <div className="trainer-card group">
            <img src={props.img} alt="trainer" className="img-cover rounded-full group-hover:scale-105 transition-all" />
        </div>
    )
}

const ProgramCard = (props) => {
    return (
        <div className="program-card group snap-start">
            <img src={props.img} alt="program" className="img-cover group-hover:scale-105 transition-all z-0" />
            <div className="gradient-overlay">
                <h3 className="text-white text-lg font-semibold tracking-wide">{props.title}</h3>
            </div>
        </div>
    )
}

const MenuCard = (props) => {
    return (
        <div className="menu-card group">
            <img src={props.img} alt="menu" className="img-cover group-hover:scale-105 transition-all z-0" />
            <div className="gradient-overlay">
                <h3 className="text-white text-lg font-semibold tracking-wide">{props.title}</h3>
            </div>
        </div>
    )
}

const AdsCard = (props) => {
    return (
        <div className="w-full h-24 bg-primary rounded-md grid place-items-center">
            <span className="text-2xl text-white">Advertisment</span>
        </div>
    )
}

export {
    ArticleCard,
    TrainerCard,
    ProgramCard,
    MenuCard,
    AdsCard,
}