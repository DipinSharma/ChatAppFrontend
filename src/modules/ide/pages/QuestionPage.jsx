import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { Header } from '../../../shared/components/Header';
import { Question } from '../components/Question';
import { Ide } from '../components/Ide';

const QuestionPage = () => {
    return (
        <Container >
            <Header />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Question />
                </Grid>
                <Grid item xs={6}>
                    <Ide/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default QuestionPage