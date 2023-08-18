import CardComponent from "~/components/card-component";

export default function PracticesComponent() {

    return (
        <>
            <CardComponent apiUrl="/pratices.json" title="Practices" errorMessage="Pratices not found..." />
        </>
    )
}