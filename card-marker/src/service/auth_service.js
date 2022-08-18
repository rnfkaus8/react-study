import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import firebaseApp from "./firebase.config";

class AuthService {
  login(providerName) {
    return signInWithPopup(getAuth(), this.getAuthProvider(providerName));
  }

  getAuthProvider(providerName) {
    if (providerName === "Google") {
      return new GoogleAuthProvider();
    } else if (providerName === "Github") {
      return new GithubAuthProvider();
    }
  }
}

export default AuthService;
