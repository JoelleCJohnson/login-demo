import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../utils"
import LoginForm from "./LoginForm"

export default function Login(){

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider()
        const response = await signInWithPopup(auth, provider)
        console.log(response?.user)
    }

    return (
        <section>
            <h2>Login</h2>
            <LoginForm />
            <button onClick={handleGoogleLogin}>Sign in with Google:</button>
        </section>
    )
}