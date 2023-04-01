import Grid2 from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Gamecard from '../components/Gamecard'
export default function Game() {
    return (
        <Container maxWidth='sm'>
            <Grid2 container spacing={2}>
                <Grid2 xs={4}>
                    <Gamecard></Gamecard>
                </Grid2>
                <Grid2 xs={4}>
                    <Gamecard></Gamecard>
                </Grid2>
                <Grid2 xs={4}>
                    <Gamecard></Gamecard>
                </Grid2>
                <Grid2 xs={4}>
                    <Gamecard></Gamecard>
                </Grid2>
                <Grid2 xs={4}>
                    <Gamecard></Gamecard>
                </Grid2>
                <Grid2 xs={4}>
                    <Gamecard></Gamecard>
                </Grid2>
            </Grid2>
        </Container>
    )
}