import {Button, Card, TextField, Typography} from "@mui/material";

function Signup() {
    return (
        <div>
            <div
                style={{
                    marginBottom: 20,
                    marginTop : 50,
                    padding: 20,
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <Typography variant="h1">Welcome to Coursera.
                            Sign Up Below
                </Typography>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",

                }}
            >
                <Card
                    variant = "outlined"
                    style = {{
                        width: "400px",
                        padding : 30,
                        backgroundColor : "whitesmoke",
                        marginTop : 50
                    }}
                >
                    <TextField
                        id="email"
                        label="Email"
                        autoComplete="email"
                        required
                        fullWidth
                    />
                    <TextField
                        id="password"
                        label="password"
                        required
                        fullWidth
                        style={{
                            marginTop: "20px"
                        }}
                    />
                    <Button
                        variant = "contained"
                        size = "large"
                        style = {{
                            marginTop : 20,

                        }}
                    >Sign Up</Button>
                </Card>

            </div>
        </div>
    );
}

export default Signup;
