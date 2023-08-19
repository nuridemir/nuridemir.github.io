import React from 'react'

const CardItemComponent = ({ data }) => {
    return (
        <div
            className="block px-4 py-10 rounded grid-item nd_shadow transition duration-300">
            <figure>
                <img className="w-full h-auto rounded-xl shadow-md dark:shadow-none" src={data.img}
                    alt="image description" />
            </figure>
            <div className="mt-2 flex flex-wrap gap-1">
                {
                    data.tags.map((item, index) => (
                        <span key={index}
                            className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-xl dark:bg-gray-700 dark:text-purple-400  text-purple-600">{item}</span>
                    ))
                }
            </div>
            <p className="mt-2 text-2xl font-semibold text-slate-800 dark:text-white">{data.title}</p>
            <p className="py-2 text-slate-600 dark:text-slate-300 text-[15px]">
                {data.desc}
            </p>
            {data.source && (
                <p className='text-sm  ellipsis text-slate-600 dark:text-slate-300'>
                    Source: <a href={data.source} target="_blank" className='text-indigo-500 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-400 duration-300'>{data.source}</a>
                </p>
            )}

            <div className={`mt-4 grid grid-cols-2 gap-2`}>
                {data.link && (
                    <a href={data.link}
                        target="_blank"
                        className="flex items-center justify-center bg-indigo-500 py-2 rounded hover:bg-indigo-700 duration-300 text-white">
                        Read more</a>
                )}
                {data.sourceCode && (
                    <a href={data.sourceCode}
                        target="_blank"
                        className="flex items-center justify-center bg-indigo-500 py-2 rounded hover:bg-indigo-700 duration-300 text-white">
                        Source Code</a>
                )}
                {data.demo && (
                    <a href={data.demo} target="_blank"
                        className="flex items-center justify-center bg-indigo-200 py-2 rounded hover:bg-indigo-500 duration-300 text-indigo-700 hover:text-indigo-200 drop-shadow-md dark:drop-shadow-none">
                        Demo</a>
                )}
            </div>
        </div>
    )
}
export default CardItemComponent