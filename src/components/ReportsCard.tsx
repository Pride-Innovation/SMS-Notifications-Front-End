import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';
import { ReactElement } from 'react';

interface IMultiActionAreaCard {
    icon: ReactElement;
    color: string;
    header: string;
    name: string;
    handleCardClick: (name: string) => void
}

export default function MultiActionAreaCard({
    icon,
    color,
    header,
    name,
    handleCardClick
}: IMultiActionAreaCard) {
    return (
        <Card sx={{ width: "100%" }}>
            <CardActionArea onClick={() => handleCardClick(name)} sx={{ display: "flex", justifyContent: "start" }}>
                <Box sx={{ bgcolor: color, p: 4 }}>
                    {icon}
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {header}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        200 {name} Messages
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
