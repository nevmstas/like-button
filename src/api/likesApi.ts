export type LikeData = Record<string, { count: number; liked_by_me: boolean }>
export const MOCK_ID = '1'
export const MOCK_LIKE_DATA: LikeData = {
  [MOCK_ID]: { count: 100, liked_by_me: false },
}
const MOCK_REQUEST_TIME = 250

const getLikes = (): Promise<LikeData> =>
  new Promise<LikeData>((resolve) => {
    setTimeout(() => resolve(MOCK_LIKE_DATA), MOCK_REQUEST_TIME)
  })

const like = async (id: string) =>
  await new Promise((resolve) => {
    MOCK_LIKE_DATA[id].liked_by_me = true
    setTimeout(() => resolve(true), MOCK_REQUEST_TIME)
  })

const unlike = async (id: string) =>
  await new Promise((resolve) => {
    MOCK_LIKE_DATA[id].liked_by_me = true
    setTimeout(() => resolve(true), MOCK_REQUEST_TIME)
  })

export const api = { getLikes, like, unlike }