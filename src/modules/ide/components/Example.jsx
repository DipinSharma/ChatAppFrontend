import { Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Example = (props) => {
    return (
        <>
            <Toolbar />
            <Typography variant="h5">
                Example {props.no}:
            </Typography>
            <img src={props.src} alt=""></img>
            <Box sx={{opacity:"90%",backgroundColor:"rgb(240,240,240)" ,borderRadius:"2vh",padding:"3vh"}}>
                <Typography>
                    <Typography component="p">
                        <Typography component="strong" sx={{ fontWeight: "bold" }}>Input:
                        </Typography>{props.Input}</Typography>
                </Typography>
                <Typography>
                    <Typography component="p">
                        <Typography component="strong" sx={{ fontWeight: "bold" }}>Output:
                        </Typography>{props.Output}</Typography>
                </Typography>
                <Typography>
                    <Typography component="p">
                        <Typography component="strong" sx={{ fontWeight: "bold" }}>{props.Explanation ? "Explanation:" : ""}
                        </Typography>{props.Explanation}</Typography>

                </Typography>
            </Box>
        </>
    )
}
