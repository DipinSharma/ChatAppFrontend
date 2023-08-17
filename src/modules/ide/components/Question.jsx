import { Toolbar, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import React from 'react'
import { Example } from './Example';

export const Question = () => {
    return (
        <Box>
            <Toolbar />
            <Typography variant="h4">
                84. Largest Rectangle in Histogram
            </Typography>
            <Typography variant="p" component="p">
                Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
            </Typography>
            <Example no="1" src="https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg"
                Input=" heights = [2,1,5,6,2,3]"
                Output=" 10"
                Explanation="  The above is a histogram where width of each bar is 1.
                        The largest rectangle is shown in the red area, which has an area = 10 units."

            />
            <Example no="2" src="https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg"
                Input=" heights = [2,4]"
                Output=" 4"
            />
        </Box>
    )
}
