/* eslint-disable react/display-name */
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/solid'
import  { forwardRef } from 'react';

const Thumbnail = forwardRef(({result}, ref) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/original';
    // console.log(result);
    return (
        <div ref={ref} className='p-2 group cursor-pointer sm:hover:scale-105 
            transition-transform duration-200 ease-in hover:z-50'
        >
            <Image layout='responsive' 
                src={
                    `${BASE_URL}${result.backdrop_path || result.poster_path}` 
                    ||
                    `${BASE_URL}${result.poster_path
                    }`}
                height={1080} width={1920}
                alt={result.original_title}
            />
            <div className='p-2'>
                <p className='truncate max-w-md'>{result.overview}</p>
                <h2 className='group-hover:font-bold transition-all duration-100 ease-in-out mt-1 text-2xl 
                text-white'
                >
                    {result.title || result.original_title}
                </h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                     {result.media_type && `${result.media_type} .`}{' '}
                     {result.release_date} .{' '}
                    <ThumbUpIcon className='h-5 mx-2'/>{result.vote_count}
                </p>
            </div>
        </div>
    )
})

export default Thumbnail
