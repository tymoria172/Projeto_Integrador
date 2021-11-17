import { Button, Grid, TextField, Typography, Box } from '@mui/material';
import React, { ChangeEvent, useState, useEffect } from 'react';
import { login } from '../../services/Service';
import { Link, useHistory } from 'react-router-dom';
import Userlogin from '../../models/UserLogin';
import { api } from '../../services/Service';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {

    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState("");    

    const [userLogin, setUserLogin] = useState<Userlogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })

    }

    useEffect(() => {
        if (token != "") {
          dispatch(addToken(token));
          history.push("/home");
        }
      }, [token]);

      async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
          await login(`/usuarios/logar`, userLogin, setToken);      
          toast.success('Usuário logado com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
          
        } catch (error) {      
          toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        }
      }

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid xs={6}><Box paddingX={25} className='imagem '></Box></Grid>
                <Grid alignItems='center' xs={6}>
                    <Box paddingX={20} className='border'>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='#00B2FD' component='h3' align='center' className='textos1'>Yporã</Typography>

                            <TextField
                                value={userLogin.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='usuario'
                                label='usuario'
                                variant='outlined'
                                name='usuario'
                                margin='normal'
                                fullWidth />

                            <TextField
                                value={userLogin.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='senha'
                                label='senha'
                                variant='outlined'
                                name='senha'
                                margin='normal'
                                type='password'
                                fullWidth />

                            <Box marginTop={2} textAlign='center'>

                                <Button type='submit' variant='contained' color='primary'>
                                    Entrar
                                </Button>

                            </Box>
                        </form>
                        <Box display='flex' justifyContent='center' alignItems='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center' noWrap>Não tem uma conta?</Typography>
                            </Box>
                            <Link to='/cadastro'>
                                <Typography variant='subtitle1' gutterBottom align='center' className='textos1' noWrap>Cadastre-se</Typography>
                            </Link>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Login