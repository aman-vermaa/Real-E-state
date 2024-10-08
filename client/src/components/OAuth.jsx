import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import { FcGoogle } from "react-icons/fc";
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async() =>{
    try{
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)

      const result = await signInWithPopup(auth, provider);
      console.log(result);
        
      const res = await fetch('api/auth/google',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: result.user.displayName, email: result.user.email, photo: result.user.photoURL })
      })
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/');

    }catch(error){
      console.log("Could'nt sign in with google",error);
    }
  }
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="flex items-center justify-center bg-neutral-100 border border-neutral-900 text-black rounded-lg p-3 uppercase hover:opacity-75 space-x-3"
    >
      <FcGoogle size={28} />
      <span className="font-medium">Sign in with Google</span>
    </button>
  );
}
