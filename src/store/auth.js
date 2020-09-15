import firebase from 'firebase/app'

export default {
  actions: {
    async login ({ dispath, commit }, { email, password }) {
      // eslint-disable-next-line no-useless-catch
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (error) {
        commit('setError', error)
        throw error
      }
    },
    async logout () {
      await firebase.auth().signOut()
    }
  }
}
