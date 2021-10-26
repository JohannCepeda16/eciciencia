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
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    setDoc,
} from "firebase/firestore/lite";
import "./CustomCard.css";

const axios = require("axios");
export interface ICustomCard {
    id: string;
    title: string;
    description: string;
    img: string;
    date: string;
    url: string;
    likes?: string[];
}

export interface IProps {
    card: ICustomCard;
    fetchLikes: any;
    likes: string[];
}

export default function CustomCard(props: IProps & any) {
    const card: ICustomCard = props.card;
    const [likes, setLikes] = useState(props.likes || {});
    const fetchLikes = props.fetchLikes;
    const [ip, setIP] = useState();
    const [likedByMe, setLikedByMe] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        isLikedByMe();
    }, [props.likes]);

    const isLikedByMe = async () => {
        setLoading(true);
        const res = await axios.get("https://geolocation-db.com/json/");
        setIP(res.data.IPv4);
        if (likes && likes[card.id]) {
            setLikedByMe(likes[card.id].includes(res.data.IPv4));
        } else {
            setLikedByMe(false);
        }
        setLoading(false);
    };

    const likePost = async () => {
        let currentLikes = likes[card.id] ? [...likes[card.id]] : [];
        if (!currentLikes.includes(ip)) {
            currentLikes.push(ip);
        }
        let fullLikes = likes;
        fullLikes[card.id] = currentLikes;

        //Persist
        const db = getFirestore();
        const docRef = collection(db, "likes");
        const document = doc(docRef, "OBV3K4fkQLPP58jwxhOY");
        const finalDto = { likes: likes };
        const response = await setDoc(document, finalDto);
        setLikedByMe(true);
        // fetchLikes();
        setLikes(fullLikes);
    };

    if (!loading) {
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
                            <Avatar
                                sx={{ bgcolor: red[500] }}
                                aria-label="recipe"
                            >
                                <img
                                    src={Icon}
                                    style={{ width: 40, height: 40 }}
                                />
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
                            style={{ color: likedByMe ? "red" : "gray" }}
                        />
                        <label>{likes[card.id]?.length || 0}</label>
                    </IconButton>
                    <Button href={card.url} target="_blank">
                        Visualizar PDF
                    </Button>
                </CardActions>
            </Card>
        );
    } else {
        return <div>Cargando...</div>;
    }
}
