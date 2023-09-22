import { useEffect, useState } from "react";
import { api } from "../api/likesApi";

export const useLikes = () => {
    const [{ isLiked, likesCount }, setLikeData] = useState({ likesCount: 100, isLiked: false });
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await api.getLikesCount()
                setLikeData(data)
            } catch (e: any) {
                setError(e)
            } finally {
                setLoading(false)
            }
        }

        fetchData()

    }, [])

    const like = async () => {
        await api.like(!isLiked)
    }

    const handleLike = (e: any) => {
        e.preventDefault()
        like()
        if (isLiked) {
            setLikeData(prev => ({ ...prev, likesCount: prev.likesCount-- }))
        } else {
            setLikeData(prev => ({ ...prev, likesCount: prev.likesCount++ }))
        }
        setLikeData(prev => ({ ...prev, isLiked: !prev.isLiked }));
    }

    return {
        isLiked,
        likesCount,
        loading,
        handleLike,
        error
    }
}