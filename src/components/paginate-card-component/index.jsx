import React, { useState, useEffect } from 'react'
import ReactPaginate from "react-paginate"
import { fetchAllData } from '~/utils/fetch'
import CardsLoadingComponent from '../cards-loading-component'
import CardItemComponent from '../card-item-component'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs"
import SearchInputComponent from '../search-input-component'

export default function PaginateCardComponent(props) {

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

    // Seacrh input
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        let searchTerm = e.target.value;
        setSearchTerm(searchTerm);
        const filteredResults = data?.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
    };
    // **Seacrh input


    // error message
    if (data.length < 0) {
        return props.errorMessage
    }
    // **error message

    function Items({ currentItems }) {
        return (
            <>
                {
                    isLoading ? <CardsLoadingComponent /> : (
                        <>
                            {
                                !currentItems ? props.errorMessage : (
                                    <div className='rounded-lg'>


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
        const currentItems = searchResults.length > 0 ? searchResults.slice(itemOffset, endOffset) : data.slice(itemOffset, endOffset);
        const pageCount = Math.ceil((searchResults.length > 0 ? searchResults.length : data.length) / itemsPerPage);
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % (searchResults.length > 0 ? searchResults.length : data.length);
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={searchResults.length < 0 ? searchResults : currentItems} />
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={4}
                    pageCount={pageCount}
                    previousLabel="Previous"
                    renderOnZeroPageCount={null}
                />
            </>
        );
    }

    // **Pagination true ise
    return (
        <>
            <h2 className="text-slate-800 dark:text-slate-400 text-4xl font-bold underline-offset-8 font-playfair">{props.title}</h2>
            {props.searchInput && <SearchInputComponent searchPlaceholder={props.searchPlaceholder} setSearchTerm={setSearchTerm} searchTerm={searchTerm} setSearchResults={setSearchResults} searchResults={searchResults} handleSearch={handleSearch} />}
            <PaginatedItems itemsPerPage={6} />
        </>
    )
}