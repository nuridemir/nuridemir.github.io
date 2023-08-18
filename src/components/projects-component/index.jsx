import CardComponent from "~/components/card-component";

export default function ProjectsComponent(props) {

    return (
        <>
            <CardComponent apiUrl="/projects.json" title="Projects" errorMessage="Projects not found..." href={props.href} paginate={props.paginate} />
        </>
    )
}