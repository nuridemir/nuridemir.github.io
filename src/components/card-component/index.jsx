import React, { useState, useEffect } from 'react'
import { fetchAllData } from '~/utils/fetch'
import CardItemComponent from '../card-item-component'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs"
import CardsLoadingComponent from '../cards-loading-component'

export default function CardComponent(props) {

    let propsListItemCount = props.listItemCount || 3

    // Data fetch
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const getAllData = async () => {
        setIsLoading(true)
        try {
            const response = await fetchAllData(props.apiUrl)
            setData(response)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getAllData()
    }, [])
    // **Data fetch

    // error message
    if (data.length < 0) {
        return props.errorMessage
    }
    // **error message

    return (
        <div>
            <div className='rounded-lg'>
                {!props.href ? <h2 className=" text-slate-800 dark:text-slate-400 text-4xl font-bold underline-offset-8 font-playfair">{props.title}</h2> : (
                    <div className='flex items-center justify-between'>
                        <h2 className=" text-slate-800 dark:text-slate-400 text-4xl font-bold underline-offset-8 font-playfair">{props.title}</h2>
                        <Link to={props.href} className='flex tracking-widest items-center gap-2 dark:text-blue-400 dark:hover:text-blue-500 text-blue-700 hover:text-blue-400 duration-200 font-semibold text-xl'>see more <BsArrowRight /></Link>
                    </div>
                )}

                {
                    !isLoading ? <CardsLoadingComponent /> : (
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-0 mt-8">
                            {data?.slice(0, propsListItemCount).map((item, index) => (
                                <CardItemComponent key={index} data={item} />
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    )
}