import { useState, useEffect } from "react";
import { fetchAllData } from "~/utils/fetch";
import CardComponent from "~/components/card-component";
import CardsLoadingComponent from "~/components/cards-loading-component";

export default function ProjectsComponent() {

    // Project useState
    const [projects, setProjectsData] = useState()
    const [projectsLoading, setProjectsLoading] = useState(false)

    const getAllProjects = async () => {
        setProjectsLoading(true)
        try {
            const response = await fetchAllData('/projects.json')
            setProjectsData(response)
            setProjectsLoading(false)
        } catch (err) {
            console.log(err)
            setProjectsLoading(false)
        }
    }

    useEffect(() => {
        getAllProjects()
    }, [])

    return (
        <>
            {
                projectsLoading ? <CardsLoadingComponent /> : (
                    <div className='py-12 rounded-lg'>
                        <h2 className="text-4xl font-bold underline-offset-8 d-block font-playfair">Projects</h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 md:px-0">
                            {projects?.map((item, index) => (
                                <CardComponent key={index} data={item} />
                            ))}
                        </div>
                    </div>
                )
            }

        </>
    )
}