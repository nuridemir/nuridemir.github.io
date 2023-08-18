import CardComponent from "~/components/card-component";

export default function ProjectsComponent() {

    return (
        <>
            <CardComponent apiUrl="/projects.json" title="Practices" errorMessage="Projects not found..." />
        </>
    )
}