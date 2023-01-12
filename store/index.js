export const state = () => ({
  shareLink: 0,
})

export const getters = {
  getShareLink(state) {
    return state.shareLink
  },
}

export const mutations = {
  setShareLink(state, shareLink) {
    state.shareLink = shareLink
  },
}
