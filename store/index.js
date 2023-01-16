export const state = () => ({
  shareLink: null,
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
