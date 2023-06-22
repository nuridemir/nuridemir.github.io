import { useState, useEffect } from "react";
import { fetchAllData } from "~/utils/fetch";
import CardComponent from "~/components/card-component";
import CardsLoadingComponent from "~/components/cards-loading-component";

export default function PracticesComponent() {

    // Pratice useState
    const [pratices, setPraticesData] = useState()
    const [praticesLoading, setPraticesLoading] = useState(false)

    const getAllPratices = async () => {
        setPraticesLoading(true)
        try {
            const response = await fetchAllData('/pratices.json')
            setPraticesData(response)
            setPraticesLoading(false)
        } catch (err) {
            console.log(err)
            setPraticesLoading(false)
        }
    }

    useEffect(() => {
        getAllPratices()
    }, [])

    return (
        <>
            {
                praticesLoading ? <CardsLoadingComponent /> : (
                    <div className='py-12 rounded-lg'>
                        <h2 className="text-4xl font-bold underline-offset-8  font-playfair">Practices</h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 md:px-0">
                            {pratices?.map((item, index) => (
                                <CardComponent key={index} data={item} />
                            ))}
                        </div>
                    </div>
                )
            }
        </>
    )
}