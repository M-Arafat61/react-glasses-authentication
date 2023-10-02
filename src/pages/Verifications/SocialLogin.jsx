import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
  const handleSocialLogin = media => {
    media()
      .then(res => {
        console.log(res.user);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const { googleLogin, githubLogin, facebookLogin } = useAuth();
  return (
    <div>
      <div className='divider'>continue with</div>
      <div className='flex justify-around'>
        <Link>
          <button
            onClick={() => handleSocialLogin(googleLogin)}
            className='btn btn-neutral btn-sm'
          >
            Google
          </button>
        </Link>
        <Link>
          <button
            onClick={() => handleSocialLogin(githubLogin)}
            className='btn btn-neutral btn-sm'
          >
            Github
          </button>
        </Link>
        <Link>
          <button
            onClick={() => handleSocialLogin(facebookLogin)}
            className='btn btn-neutral btn-sm'
          >
            Facebook
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SocialLogin;
