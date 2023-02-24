import { CaretRightFill } from "react-bootstrap-icons";

const PageTitle = (props) => {
    return (
        <h1 className='text-xl font-bold text-primary mb-1'>{props.title}</h1>
    )
}

const SectionTitle = (props) => {
    return (
        <div className="flex justify-between items-center px-2 py-px">
            <h2 className="font-semibold">{props.title}</h2>
            <CaretRightFill />
        </div>
    )
}

export {
    PageTitle,
    SectionTitle,
}