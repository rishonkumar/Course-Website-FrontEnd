import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();

    const navigateToSignIn = () => {
        navigate("/signin")
    }

    const navigateToSignUp = () => {
        navigate("/signup")
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4
        }}>
            <div>
                <Typography variant={"h5"}>Coursera</Typography>
            </div>

            <div
                style={{
                    display: "flex"
                }}
            >
                <div
                    style={{
                        marginRight: 10,

                    }}>
                    <Button variant="contained"
                            size="large"
                            onClick={navigateToSignUp}
                    >Sign in</Button>
                </div>
                <div>
                    <Button variant="contained"
                            size="large"
                            onClick = {navigateToSignIn}
                    >Sign Up</Button>
                </div>

            </div>
        </div>
    )
}

export default NavBar;