import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import useSound from "use-sound";
import { Backdrop } from "@material-ui/core";

export default function Battle() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [launch, setLaunch] = useState(false);
  const [playMusic, setPlayMusic] = useState(1);
  const choosePlatform = (platform) => {
    setSelectedPlatform(platform);
  };
  const [play] = useSound("/assets/audio/hover.mp3");
  useEffect(() => {
    document.getElementById("focus_input")?.focus();
  }, []);
  setTimeout(() => {
    setPlayMusic(playMusic + 1);
  }, 500);
  useEffect(() => {
    document.getElementById("player").play();
  }, [playMusic]);
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      ></Backdrop>
        <div
          id="main"
          className="bg-[url('https://www.gamemarketinggenie.com/hubfs/blockchain%20background.jpg')] bg-cover h-screen text-white flex"
        >
          <audio id="player" autoPlay controls className="hidden">
            <source
              src="/assets/audio/deep-space-adventure-sci-fi-orchestra-1258.mp3"
              type="audio/mp3"
            />
          </audio>

          <div className="lg:w-3/5"></div>
          <div className="lg:w-2/5 w-full bg-black opacity-80 flex">
            <div className="m-auto">
              <div className="login-box">
                <h2 className="font-bold">Login</h2>
                {!selectedPlatform ? (
                  <form>
                    <div className="user-box">
                      <input id="focus_input" type="text" name="" required="" />
                      <label>Username</label>
                    </div>
                    <div className="user-box">
                      <input type="password" name="" required="" />
                      <label>Password</label>
                    </div>
                    <a
                      className="cursor-pointer"
                      onClick={() => setLaunch(true)}
                      onMouseEnter={play}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Submit
                    </a>
                  </form>
                ) : null}
                {selectedPlatform === "meta" ? (
                  <div
                    className="relative cursor-pointer"
                    onClick={() => choosePlatform(null)}
                  >
                    <CloseIcon className="absolute -top-7 -right-4" />
                    <motion.img
                      animate={{
                        scale: [0, 1],
                        rotate: [0, 90, 120, 210, 300, 360],
                        borderRadius: ["10%", "10%", "10%", "10%", "10%"],
                      }}
                      src="/assets/qrs/meta-qr.png"
                    />
                  </div>
                ) : null}
                {selectedPlatform === "mchat" ? (
                  <div
                    className="relative cursor-pointer"
                    onClick={() => choosePlatform(null)}
                  >
                    <CloseIcon className="absolute -top-7 -right-4" />
                    <motion.img
                      animate={{
                        scale: [0, 1],
                        rotate: [0, 90, 120, 210, 300, 360],
                        borderRadius: ["10%", "10%", "10%", "10%", "10%"],
                      }}
                      src="/assets/qrs/mchat-qr.png"
                    />
                  </div>
                ) : null}
                {selectedPlatform === "mnft" ? (
                  <div
                    className="relative cursor-pointer"
                    onClick={() => choosePlatform(null)}
                  >
                    <CloseIcon className="absolute -top-7 -right-4" />
                    <motion.img
                      animate={{
                        scale: [0, 1],
                        rotate: [0, 90, 120, 210, 300, 360],
                        borderRadius: ["10%", "10%", "10%", "10%", "10%"],
                      }}
                      src="/assets/qrs/mnft-qr.png"
                    />
                  </div>
                ) : null}
                <div className="text-center my-[30px] font-bold">
                  Other login methods
                </div>
                <div className="flex">
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0 }}
                    onClick={() => choosePlatform("meta")}
                    src="/assets/logos/MetaMask-Logo-PNG6.png"
                    className="h-[70px] -mr-[20px] cursor-pointer"
                    onMouseEnter={play}
                  />
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.6 }}
                    onClick={() => choosePlatform("mchat")}
                    src="/assets/logos/mongolchat.png"
                    className="h-[70px] cursor-pointer"
                    onMouseEnter={play}
                  />
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.6 }}
                    onClick={() => choosePlatform("mnft")}
                    src="/assets/logos/ogmain.png"
                    className="h-[40px] mt-[15px] cursor-pointer "
                    onMouseEnter={play}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}



import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../../components/ProTip';
import Footer from '../../components/footer';
import Nav from '../../components/nav';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, CircularProgress } from '@material-ui/core';
import { UserRegistration, UsernameValidation } from '../../services/RegistrationService';
import MySnackbarContentWrapper from '../../components/snackbar';


const useStyles = makeStyles(theme => ({
  margin: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(2)
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end'
  },
  textField: {
  },
}));


function init() {
  return {
    username: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    confirmPassword: { value: "", error: "" },
  };
}

function reducer(state, action) {
  return {
    setValue: () => ({
      ...state,
      [action.payload.field]: { value: action.payload.value, error: "" }
    }),
    setError: () => ({
      ...state,
      [action.payload.field]: { value: state[action.payload.field].value, error: action.payload.error }
    }),
    reset: init
  }[action.type]() || new Error();
}

export default function Battle() {
  const classes = useStyles();
  const [state, dispatch] = React.useReducer(reducer, init(), init);
  const [snackbar, setSnackbar] = React.useState({ open: false, message: "", variant: "info" });
  const [loading, setLoading] = React.useState(false);

  const validate = async (field) => {
    // Empty check for all
    if (state[field].value.trim() === "") {
      dispatch({ type: "setError", payload: { field, error: "Can't be empty" } })
    }
    else if (field === 'username') {
      const data = {
        username: state.username.value
      };
      const isUsernameTaken = await UsernameValidation(data);

      if (isUsernameTaken === 400)
        dispatch({ type: "setError", payload: { field, error: "Already exists" } })
    }
    else if (field === 'email') {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (reg.test(state.email.value) == false) {
        dispatch({ type: "setError", payload: { field, error: "Invalid Email Address" } })
      }
    }
    else if (field === 'password') {
      if (state.password.value.trim().length < 6) {
        dispatch({ type: "setError", payload: { field, error: "Should be atleast 6 characters" } })
      }
    }
    if (field === 'confirmPassword') {
      if (state.password.value.trim() !== state.confirmPassword.value.trim()) {
        dispatch({ type: "setError", payload: { field, error: "Passwords doesn't match" } })
      }
    }
  }

  const handleSubmit = async () => {
    let errors = Object.values(state).some(state => !!state.error);
    let values = Object.values(state).every(state => !!state.value);
    if (!loading && !errors && values) {
      const data = {
        username: state.username.value,
        email: state.email.value,
        password: state.password.value,
        confirmPassword: state.confirmPassword.value,
      };
      setLoading(true);
      const registerStatus = await UserRegistration(data);
      if (registerStatus === 200) {
        dispatch({ type: 'reset' })
        setSnackbar({ open: true, message: 'User created successfully', variant: 'success' });
      } else setSnackbar({ open: true, message: 'Unable to create user', variant: 'error' });
      setLoading(false);
    }
  }

  return (
    <>
      <Nav />
      <Container maxWidth="sm" >
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Register
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Username"
              className={classes.textField}
              value={state.username.value}
              onBlur={() => validate('username')}
              error={!!state.username.error}
              helperText={state.username.error}
              onChange={(e) => dispatch({ type: 'setValue', payload: { field: 'username', value: e.target.value } })}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              className={classes.textField}
              value={state.email.value}
              onBlur={() => validate('email')}
              error={!!state.email.error}
              helperText={state.email.error}
              onChange={(e) => dispatch({ type: 'setValue', payload: { field: 'email', value: e.target.value } })}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              className={classes.textField}
              value={state.password.value}
              onBlur={() => validate('password')}
              error={!!state.password.error}
              helperText={state.password.error}
              onChange={(e) => dispatch({ type: 'setValue', payload: { field: 'password', value: e.target.value } })}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              className={classes.textField}
              value={state.confirmPassword.value}
              onBlur={() => validate('confirmPassword')}
              error={!!state.confirmPassword.error}
              helperText={state.confirmPassword.error}
              onChange={(e) => dispatch({ type: 'setValue', payload: { field: 'confirmPassword', value: e.target.value } })}
              margin="normal"
              variant="outlined"
            />
          </form>
          <div className={classes.container}>
            <Button color="primary" variant="contained" className={classes.margin} onClick={handleSubmit}>
              {loading ?
                <CircularProgress color="inherit" style={{ width: '24px', height: '24px' }} />
                : "Sign up"}
            </Button>
            <Button color="secondary" variant="contained" className={classes.margin} onClick={() => dispatch({ type: 'reset' })}>
              Cancel
            </Button>
          </div>
          <MySnackbarContentWrapper
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            variant={snackbar.variant}
            message={snackbar.message}
            open={snackbar.open}
            autoHideDuration={6000}
          />
          <ProTip message="Already registered?" verb="Login" url="/login" />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
