import { SignInWithGooglePopup } from '../../utile/firebase/firebase.utile'

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await SignInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>This is A Sign In Page </h1>
      <button onClick={logGoogleUser}>
        sign with google
      </button>
    </div>
  );
};
export default SignIn;
