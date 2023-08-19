import React, { useState, useEffect } from 'react'
import ReactPaginate from "react-paginate"
import { fetchAllData } from '~/utils/fetch'
import CardsLoadingComponent from '../cards-loading-component'
import CardItemComponent from '../card-item-component'
import { NavLink } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs"
import SearchInputComponent from '../search-input-component'

export default function CardComponent(props) {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);

        // Veri içinde arama yapın ve sonuçları ayarlayın
        const filteredResults = data.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchResults(filteredResults);
    };

    if (data.length < 0) {
        return props.errorMessage
    }


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

    if (props.paginate) {
        function Items({ currentItems }) {
            return (
                <>
                    {
                        isLoading ? <CardsLoadingComponent /> : (
                            <>
                                {
                                    !currentItems ? props.errorMessage : (
                                        <div className='rounded-lg'>
                                            <h2 className="text-slate-800 dark:text-slate-400 text-4xl font-bold underline-offset-8 font-playfair">{props.title}</h2>
                                            {props.searchInput && <SearchInputComponent />}
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
                    <Items currentItems={searchResults.length < 0 ? searchResults : currentItems} />
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
                <PaginatedItems itemsPerPage={6} />
            </>
        )
    }

    return (
        <div>
            <div className='rounded-lg'>
                {!props.href ? <h2 className=" text-slate-800 dark:text-slate-400 text-4xl font-bold underline-offset-8 font-playfair">{props.title}</h2> : (
                    <div className='flex items-center justify-between'>
                        <h2 className=" text-slate-800 dark:text-slate-400 text-4xl font-bold underline-offset-8 font-playfair">{props.title}</h2>
                        <NavLink to={props.href} className='flex tracking-widest items-center gap-2 dark:text-blue-400 dark:hover:text-blue-500 text-blue-700 hover:text-blue-400 duration-200 font-semibold text-xl'>see more <BsArrowRight /></NavLink>
                    </div>
                )}
                {props.searchInput && <SearchInputComponent setSearchTerm={setSearchTerm} searchTerm={searchTerm} setSearchResults={setSearchResults} searchResults={searchResults} handleSearch={handleSearch} />}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-0 mt-8">
                    {
                        props.listItemCount ? (
                            <>
                                {data?.slice(0, props.listItemCount).map((item, index) => (
                                    <CardItemComponent key={index} data={item} />
                                ))}
                            </>
                        ) : (<>
                            {data?.map((item, index) => (
                                <CardItemComponent key={index} data={item} />
                            ))}
                        </>)
                    }
                </div>
            </div>
        </div>
    )
}