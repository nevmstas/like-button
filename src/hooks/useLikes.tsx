import { useEffect, useState } from "react"
import { LikeData, MOCK_LIKE_DATA, api } from "../api/likesApi"

export const useLikes = (id: string) => {
    const [likeData, setLikeData] = useState<LikeData>(MOCK_LIKE_DATA)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<unknown>()
  
    useEffect(() => {
      const getLikes_ = async () => {
        try {
          setLoading(true)
          const likes = await api.getLikes()
          setLikeData(likes)
        } catch (e) {
          setError(e)
        } finally {
          setLoading(false)
        }
      }
  
      getLikes_()
    }, [])
  
    const update = async (value: boolean) => {
      const delta = value ? 1 : -1
  
      try {
        setLikeData((prev) => {
          const prevLike = prev[id]
          return {
            ...prev,
            [id]: prevLike
              ? { count: prevLike.count + delta, liked_by_me: value }
              : { count: 1, liked_by_me: value },
          }
        })
        await api.like(id)
      } catch (e) {
        setLikeData((prev) => {
          const prevLike = prev[id]
          return {
            ...prev,
            [id]: { count: prevLike.count - delta, liked_by_me: !value },
          }
        })
      }
    }
  
    const like_ = () => {
      return update(true)
    }
  
    const unlike_ = () => {
      return update(false)
    }
  
    return {
      data: likeData[id],
      like: like_,
      unlike: unlike_,
      loading,
      error,
    }
  }