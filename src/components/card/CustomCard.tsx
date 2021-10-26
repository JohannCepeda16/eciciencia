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
import Icon from "../../assets/icons/logo.png";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import "./CustomCard.css";

const axios = require("axios");

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
    likes: string[];
}

export default function CustomCard(props: IProps & any) {
    const card: ICustomCard = props.card;
    const likes = props.likes;
    const [ip, setIP] = useState();
    const [expanded, setExpanded] = useState(false);
    const [likedByMe, setLikedByMe] = useState(false);

    useEffect(() => {
        isLikedByMe();
    }, []);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const isLikedByMe = async () => {
        const res = await axios.get("https://geolocation-db.com/json/");
        setIP(res.data.IPv4);
        setLikedByMe(likes.includes(res.data.IPv4));
    };

    const likePost = async () => {
        const db = getFirestore();
        const docRef = collection(db, "likes");
        const doc = getDocs(docRef);

        // await doc.set({
        //     first: "Ada",
        //     last: "Lovelace",
        //     born: 1815,
        // });
    };

    return (
        <Card
            sx={{
                minWidth: 345,
                maxWidth: 345,
                maxHeight: 600,
            }}
        >
            <div className="tooltip">
                <span className="tooltiptext">{card.title}</span>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <img src={Icon} style={{ width: 40, height: 40 }} />
                        </Avatar>
                    }
                    title={
                        card.title.length > 50
                            ? card.title.slice(0, 50) + "..."
                            : card.title
                    }
                    style={{
                        fontFamily: "Domine",
                    }}
                    subheader={card.date}
                />
            </div>
            <a target="_blank" href={card.url}>
                <CardMedia component="img" height="194" image={card.img} />
            </a>
            <CardContent>
                <textarea
                    style={{
                        textAlign: "justify",
                        width: "100%",
                        height: "150px",
                        resize: "none",
                        fontSize: "16px",
                        backgroundColor: "white",
                        fontFamily: "Domine",
                    }}
                    value={card.description}
                    disabled
                    readOnly
                />
            </CardContent>
            <CardActions disableSpacing style={{ marginTop: "auto" }}>
                <IconButton onClick={() => likePost()} aria-label="like">
                    <FavoriteIcon
                        style={{ backgroundColor: likedByMe ? "red" : "blue" }}
                    />
                    <label>{card.likes?.length || 0}</label>
                </IconButton>
                <Button href={card.url} target="_blank">
                    Visualizar PDF
                </Button>
            </CardActions>
        </Card>
    );
}
