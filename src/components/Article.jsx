import { useParams } from "react-router-dom";

const Article = () => {
    let params = useParams();
    
    return ( 
        <div className="">
            <h1>artikel {params.id}</h1>
        </div>
    );
}
 
export default Article;