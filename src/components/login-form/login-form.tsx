import { FormEvent, ReactEventHandler, useRef, useState } from 'react';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { MIN_PASSWORD_LENGTH } from '../../const/app-const';
import { userActions, userSelectors } from '../../store/slices/user-slice/user-slice';
import { RequestStatus } from '../../const/api-const';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';

export type AuthDataChangeHandler = ReactEventHandler<HTMLInputElement>;

function LoginForm(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const authRequestStatus = useAppSelector(
    userSelectors.selectAuthRequestStatus
  );
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  });

  const disabledInputs = authRequestStatus === RequestStatus.Loading;

  const disabledForm =
    !emailRef.current?.validity.valid ||
    authData.password.length < MIN_PASSWORD_LENGTH ||
    authRequestStatus === RequestStatus.Loading;

  const handleAuthDataChange: AuthDataChangeHandler = (evt): void => {
    const { name, value } = evt.currentTarget;
    setAuthData({ ...authData, [name]: value });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;

    if (authData.email !== null && authData.password !== null) {
      dispatch(
        userActions.login({
          login: authData.email,
          password: authData.password,
        }))
        .unwrap()
        .then(() => {
          form.reset();
          setAuthData({
            email: '',
            password: '',
          });
        })
        .catch((error: AxiosError) => {
          toast.warn(error.message);
        });
    }
  };

  return (
    <form
      className="login__form form"
      onSubmit={handleSubmit}
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          ref={emailRef}
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          data-testid="email-input-testid"
          required
          onChange={handleAuthDataChange}
          disabled={disabledInputs}
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          data-testid="password-input-testid"
          required
          minLength={MIN_PASSWORD_LENGTH}
          onChange={handleAuthDataChange}
          disabled={disabledInputs}
        />
      </div>
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={disabledForm}
      >
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
