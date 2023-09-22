let likesObject = { likesCount: 100, isLiked: false }

const getLikesCount: any = async () =>
    await new Promise((resolve) => {
        setTimeout(() => resolve(likesObject), 250);
    });


const like = async (isLiked: boolean) =>
    await new Promise((resolve) => {
        likesObject = { ...likesObject, isLiked };
        setTimeout(() => resolve(true), 250);
    });

export const api = { getLikesCount, like }