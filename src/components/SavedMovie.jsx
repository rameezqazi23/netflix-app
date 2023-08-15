import React, { useEffect, useState } from 'react';
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { UserAuth } from '../context/AuthContext';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const SavedMovie = () => {
    const [savedMovie, setSavedMovie] = useState([])
    const { user } = UserAuth();

    useEffect(() => {
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
            setSavedMovie(doc.data()?.favourites)
            // console.log("Current data from firebase==>", doc.data().favourites)
        })

    }, [user?.email])
    // console.log("firebase data==>", savedMovie)

    const pathRef = doc(db, 'users', `${user?.email}`)
    const removeFvt = async (passedId) => {
        try {
            const result = savedMovie.filter((item) => item.id !== passedId)

            await updateDoc(pathRef, {
                favourites: result,
            })
        } catch (error) {
            console.log(error.message)

        }


    }


    const slideLeft = () => {
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>My Favorites</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40} />

                <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {savedMovie.length > 0 ?
                        (
                            savedMovie?.map((item, index) => (
                                <div key={index} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2'>
                                    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500${item?.image}`} alt={item?.title} />
                                    <div className='absolute top-0 lsft-0 w-full h-full opacity-0 hover:opacity-100 text-white hover:bg-black/80 hover:ease-in-out duration-100'>
                                        <p className='text-xs md:text-sm font-bold white-space-normal flex justify-center items-center text-center h-full'>
                                            {item?.title}
                                        </p>
                                        <p onClick={() => removeFvt(item.id)} className='absolute text-gray-300 top-4 right-4'>
                                            <AiOutlineClose />
                                        </p>

                                    </div>
                                </div>
                            ))
                        )
                        :
                        (
                            <p className='p-4'>
                                <span className='text-xl text-gray-500'>Add your favourite movies</span>{' '}
                                <Link to='/' className='text-xl text-white'>here</Link>
                            </p>
                        )}
                    {/* {savedMovie?.map((item, index) => (
                        <div key={index} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2'>
                            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500${item?.image}`} alt={item?.title} />
                            <div className='absolute top-0 lsft-0 w-full h-full opacity-0 hover:opacity-100 text-white hover:bg-black/80 hover:ease-in-out duration-100'>
                                <p className='text-xs md:text-sm font-bold white-space-normal flex justify-center items-center text-center h-full'>
                                    {item?.title}
                                </p>
                                <p onClick={() => removeFvt(item.id)} className='absolute text-gray-300 top-4 right-4'>
                                    <AiOutlineClose />
                                </p>

                            </div>
                        </div>
                    ))} */}

                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40} />

            </div >
        </>
    )
}

export default SavedMovie
