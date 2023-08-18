import React, { useState, useEffect } from 'react'
import ReactPaginate from "react-paginate"
import { fetchAllData } from '~/utils/fetch'
import CardsLoadingComponent from '../cards-loading-component'
import CardItemComponent from '../card-item-component'

export default function CardComponent(props) {

    const [data, setData] = useState()
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



    function Items({ currentItems }) {
        return (
            <>
                {
                    isLoading ? <CardsLoadingComponent /> : (
                        <>
                            {
                                !currentItems ? props.errorMessage : (
                                    <div className='rounded-lg'>
                                        <h2 className="text-4xl font-bold underline-offset-8  font-playfair">{props.title}</h2>
                                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-0">
                                            {currentItems?.map((item, index) => (
                                                <CardItemComponent key={index} data={item} />
                                            ))}
                                        </div>
                                    </div>
                                )
                            }
                        </>
                    )
                }
            </>
        );
    }

    function PaginatedItems({ itemsPerPage }) {

        const [itemOffset, setItemOffset] = useState(0);

        const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = data?.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(data?.length / itemsPerPage);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % data?.length;
            // console.log(
            //     `User requested page number ${event.selected}, which is offset ${newOffset}`
            // );
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={currentItems} />
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </>
        );
    }


    return (
        <>
            <PaginatedItems itemsPerPage={3} />
        </>
    )
}