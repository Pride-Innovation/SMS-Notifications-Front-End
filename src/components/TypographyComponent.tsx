import {
    Link,
    styled,
    Typography,
} from '@mui/material';
import { ILinkComponent, ITypographyComponent } from './interface';

export const TypographyComponent = styled(Typography)<ITypographyComponent>(({
    theme,
    weight,
    size = '16px',
    color = theme.palette.grey[800]
}) => ({
    color: color,
    fontWeight: weight,
    fontSize: size,
}));


export const LinkComponent = ({
    weight,
    size = '16px',
    text,
    href = "#"
}: ILinkComponent) => (
    <Link href={href} underline='hover' fontSize={size} sx={{ cursor: "pointer" }} fontWeight={weight}>{text}</Link>
)