import './LikeButtonStyles.css'
import { useLikes } from "../../hooks/useLikes";

const LikeButton = () => {
    const { data: { liked_by_me, count }, like, unlike } = useLikes('1')

    return <button
        className={`${liked_by_me ? 'liked' : ''} like-button`}
        onClick={liked_by_me ? unlike : like}
    >
        Like | <span className="likes-counter">{count}</span>
    </button>
}

export default LikeButton