import { CaretRightFill } from "react-bootstrap-icons";

const PageTitle = (props) => {
    return (
        <h1 className='text-3xl font-bold text-primary mb-1.5'>{props.title}</h1>
    )
}

const SectionTitle = (props) => {
    return (
        <div className="flex justify-between items-center px-4 py-px">
            <h2 className="font-semibold text-lg">{props.title}</h2>
            <CaretRightFill />
        </div>
    )
}

export {
    PageTitle,
    SectionTitle,
}