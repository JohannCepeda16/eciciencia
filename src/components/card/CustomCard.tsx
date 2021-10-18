import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { Button } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export interface ICustomCard {
    title: string;
    description: string;
    img: string;
    date: string;
    url: string;
    likes?: string[];
}

export interface IProps {
    card: ICustomCard;
}

export default function CustomCard(props: IProps & any) {
    const card: ICustomCard = props.card;
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
            sx={{
                minWidth: 345,
                maxWidth: 345,
                maxHeight: 600,
            }}
        >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        ECI
                    </Avatar>
                }
                title={
                    card.title.length >= 50
                        ? card.title.slice(0, 50) + "..."
                        : card.title
                }
                subheader={card.date}
            />
            <CardMedia component="img" height="194" image={card.img} />
            <CardContent>
                <textarea
                    style={{
                        textAlign: "justify",
                        width: "100%",
                        height: "150px",
                        resize: "none",
                    }}
                    value={card.description}
                    disabled
                    readOnly
                />
            </CardContent>
            <CardActions disableSpacing style={{ marginTop: "auto" }}>
                <IconButton aria-label="like">
                    <FavoriteIcon />
                    <label>{card.likes?.length || 0}</label>
                </IconButton>
                <Button href={card.url} target="_blank">
                    Visualizar PDF
                </Button>
            </CardActions>
        </Card>
    );
}
