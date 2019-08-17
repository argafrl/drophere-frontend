import React from 'react';
import { Link } from 'react-router-dom';

import style from '../../../css/login.module.scss';

import Loading from '../../common/Loading';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const RecoverPassword = props => {
  const [state, setState] = React.useState({
    email: '',
    error: '',
    isLoading: false,
  });

  const handleChange = name => {
    return event => {
      setState({ ...state, [name]: event.target.value });
    }
  }

  const onSubmitHandler = event => {
    event.preventDefault();
    setState({ ...state, isLoading: true })
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1>Kumpulkan Filemu di Sini!</h1>
        <p>Dapatkan kemudahan dalam menerima filemu di sini</p>
      </div>

      <div className={style.form}>
        <form onSubmit={onSubmitHandler}>
          <div className={style['form-container']}>
          <Typography variant="h6">Pulihkan Password</Typography>
            <TextField
              type="email"
              label='Email'
              fullWidth
              required
              value={state.email}
              onChange={handleChange('email')}
            />

            {state.error ? <div className="error">{state.error.message}</div> : ''}
            <button className="custom-button">Masuk</button>
          </div>
          {state.isLoading ? <Loading /> : ''}
        </form>
      </div>

      <div className={style.footer}>
        <p>Sudah memiliki akun? <Link to="/home">Login</Link></p>
        <p>Belum punya akun? <Link to="/register">Daftar</Link></p>
      </div>
    </div>
  );
}

export default RecoverPassword;