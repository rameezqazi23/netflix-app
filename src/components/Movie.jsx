import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase/firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';


const Movie = ({ item }) => {
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)

    const { user } = UserAuth();

    const itemPath = doc(db, 'users', `${user?.email}`)

    const savedItem = async () => {
        if (user?.email) {
            setLike(!like)
            setSaved(true)
            await updateDoc(itemPath, {
                favourites: arrayUnion({
                    id: item.id,
                    title: item.title,
                    image: item.backdrop_path,
                })
            })
        } else {
            alert("Login or Create your account first to save favourites")
        }
    }



    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2'>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 lsft-0 w-full h-full opacity-0 hover:opacity-100 text-white hover:bg-black/80 hover:ease-in-out duration-100'>
                <p className='text-xs md:text-sm font-bold white-space-normal flex justify-center items-center text-center h-full'>{item.title}</p>
                <p className='absolute top-4 left-4 text-gray-300'>
                    <button onClick={savedItem}>
                        {like ? <FaHeart /> : <FaRegHeart />}
                    </button>
                </p>
            </div>
        </div>


    )
}

export default Movie
