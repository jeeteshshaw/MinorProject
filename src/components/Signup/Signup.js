import { TextField, Button, Checkbox, FormControlLabel, withStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Signup.css'
import { grey } from '@material-ui/core/colors';

// material ui stylesheet
// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '25ch',

//         },
//     },
// }));

// custom stylesheet for check-box
const GreyCheckbox = withStyles({
    root: {
        color: grey[400],
        '&$checked': {
            color: grey[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

//....................................main Function
function Signup() {
    //............... state/variable initialization 
    // check-box state
    const [state, setState] = useState({

        TC: false,
    });
    // New user state
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
        phone: ''
    })

    //........ ....... StateHandle
    // check-box handler
    const handleChange = (event) => {
        setState({ [event.target.name]: event.target.checked });
    };
    // new user form input handler
    const SignupFormHandler = (e) => {
        switch (e.target.id) {
            case "name":
                setNewUser({
                    ...newUser,
                    name: e.target.value
                })
                break;
            case "email":
                setNewUser({
                    ...newUser,
                    email: e.target.value
                })
                break;
            case "pass":
                setNewUser({
                    ...newUser,
                    password: e.target.value
                })
                break;
            case "cpass":
                setNewUser({
                    ...newUser,
                    cpassword: e.target.value
                })
                break;
            case "phone":
                setNewUser({
                    ...newUser,
                    phone: e.target.value
                })
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        document.getElementById('')
        console.log(newUser)
    }, [newUser])
    return (
        <>

            <div className="main__form">
                <form action="">
                    <div className="form__header">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="form__main">
                        <div className="form__input">
                            <TextField id="name" fullWidth
                                // error
                                // helperText="Incorrect entry."
                                onChange={SignupFormHandler}
                                autoComplete='off'
                                InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
                                InputLabelProps={{ style: { color: '#8c8c8c' } }}
                                label="Full Name" variant="filled" />
                        </div>
                        <div className="form__input">
                            <TextField id="email" fullWidth
                                autoComplete='off'
                                onChange={SignupFormHandler}
                                InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
                                InputLabelProps={{ style: { color: '#8c8c8c' } }}
                                label="Email" variant="filled" />
                        </div>
                        <div className="form__input">
                            <TextField id="pass" fullWidth
                                type="password"
                                onChange={SignupFormHandler}
                                autoComplete='off'
                                InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
                                InputLabelProps={{ style: { color: '#8c8c8c' } }}
                                label="Password" variant="filled" />
                        </div>
                        <div className="form__input">
                            <TextField id="cpass" fullWidth
                                onChange={SignupFormHandler}
                                type="password"
                                autoComplete='off'
                                InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
                                InputLabelProps={{ style: { color: '#8c8c8c' } }}
                                label="Confirm Password" variant="filled" />

                        </div>
                        <div className="form__input">
                            <TextField id="phone" fullWidth
                                autoComplete='off'
                                onChange={SignupFormHandler}
                                InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
                                InputLabelProps={{ style: { color: '#8c8c8c' } }}
                                label="Phone" variant="filled" />

                        </div>
                    </div>
                    <div className="form__submit">
                        <div className="option">
                            <FormControlLabel
                                control={<GreyCheckbox checked={state.checkedG} onChange={handleChange} name="TC" />}
                                label="Agree Term and Condition"
                            />
                        </div>
                        <Button variant="contained" fullWidth
                            style={{ backgroundColor: 'red', padding: '0.7rem 0' }} color="secondary" >
                            Sign Up
                        </Button>
                    </div>
                </form>
                <div className="login">
                    <p className="login">If already have a Account! <Link exact to='/user/login' className='link' >Log in</Link></p>
                </div>
            </div>
        </>
    )
}

export default Signup
