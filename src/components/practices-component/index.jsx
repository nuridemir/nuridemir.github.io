import CardComponent from "~/components/card-component";

export default function PracticesComponent(props) {

    return (
        <>
            <CardComponent apiUrl="/pratices.json" title="Practices" errorMessage="Pratices not found..." href={props.href} paginate={props.paginate} listItemCount={props.listItemCount} />
        </>
    )
}