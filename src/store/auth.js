import firebase from 'firebase/app'

export default {
  actions: {
    async login ({ dispath, comit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (error) {

      }
    }
  }
}
