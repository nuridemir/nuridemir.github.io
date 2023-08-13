import React from 'react'

const CardComponent = ({ data }) => {
    return (
        <div
            className="block px-8 py-10  rounded  grid-item nd_shadow transition duration-300">
            <figure>
                <img className="w-full h-auto rounded-xl" src={data.img}
                    alt="image description" />
            </figure>
            <div className="mt-2">
                {
                    data.technology.map((item, index) => (
                        <span key={index}
                            className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-xl dark:bg-gray-700 dark:text-purple-400 border border-purple-400">{item}</span>
                    ))
                }
            </div>
            <p className="mt-2 text-2xl font-semibold text-white">{data.title}</p>
            <p className="py-2">
                {data.desc}
            </p>
            <p className='text-sm  ellipsis'>
                Source: <a href={data.source} target="_blank" className='text-blue-300 hover:text-blue-400 duration-300'>{data.source}</a>
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
                <a href={data.sourceCode}
                    target="_blank"
                    className="flex items-center justify-center bg-sky-700 py-2 rounded hover:bg-sky-900 duration-300">
                    Source Code</a>
                <a href={data.demo} target="_blank"
                    className="flex items-center justify-center border border-sky-900 py-2 rounded hover:bg-sky-900 duration-300">
                    Demo</a>
            </div>
        </div>
    )
}
export default CardComponent