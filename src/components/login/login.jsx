import { useState } from 'react';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    user: '',
    password: '',
  });
  const [show, setShow] = useState(false);
  return (
    <div>
      <form
        className="mi-clase-css"
        onSubmit={e => {
          e.preventDefault();
          console.log(userInfo);
          setShow(!false);
        }}
      >
        <input
          name="user"
          value={userInfo.user}
          onChange={e =>
            setUserInfo({
              ...userInfo,
              user: e.target.value,
            })
          }
        />
        <input
          type="password"
          name="password"
          value={userInfo.password}
          onChange={e =>
            setUserInfo({
              ...userInfo,
              password: e.target.value,
            })
          }
        />
        <button type="submit">Send</button>
        {show && (
          <img
            src="https://www.clipartmax.com/png/middle/295-2954731_loading-gif-blue-transparent.png"
            alt="loading
        "
            width="25px"
          />
        )}
      </form>
    </div>
  );
};
export default Login;
