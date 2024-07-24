import {Button, TextField} from "@mui/material";


const Login = () => {



    return (
        <div className="center-inside">
            <h1>Sign In</h1>
            <TextField id="standard" label="Email" variant="standard"/>
            <TextField id="standard" label="Password" variant="standard" type="password"/>
            <Button variant="contained" color="secondary">Login</Button>
        </div>
    )
}

export default Login;