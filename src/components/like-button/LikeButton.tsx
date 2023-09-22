import { useState } from "react";
import './LikeButtonStyles.css'
import { useLikes } from "../../hooks/useLikes";

// interface ILikeButton {
//     isLiked: boolean
//     likeCount: number
// }

const LikeButton = () => {
    const { likesCount, isLiked, handleLike } = useLikes()
    // const [liked, setLiked] = useState(false);
    // const [likeCount, setLikeCount] = useState(100);

    // const toggleLike = () => {
    //     if (liked) {
    //         setLikeCount(prev => prev - 1);
    //     } else {
    //         setLikeCount(prev => prev + 1);
    //     }
    //     setLiked(!liked);
    // };

    return <button
        className={`${isLiked ? 'liked' : ''} like-button`}
        onClick={handleLike}
    >
        Like | <span className="likes-counter">{likesCount}</span>
    </button>
}

export default LikeButton