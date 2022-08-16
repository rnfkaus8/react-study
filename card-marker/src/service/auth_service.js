import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';


class AuthService {
  login(providerName) {
    return signInWithPopup(getAuth(), this.getAuthProvider(providerName));
  }

  getAuthProvider(providerName) {
    if (providerName === 'google') {
      return new GoogleAuthProvider();
    } else if (providerName === 'github') {
      return new GithubAuthProvider();
    }
  }
}

export default AuthService;
