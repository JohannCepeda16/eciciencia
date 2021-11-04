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
import { Button, CircularProgress } from "@mui/material";
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    setDoc,
} from "firebase/firestore/lite";
import "./CustomCard.css";
import { colors } from "../../commons";

const axios = require("axios");
export interface ICustomCard {
    id: string;
    type: string;
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

export default function CustomVideoCard(props: IProps & any) {
    const card: ICustomCard = props.card;
    const [likes, setLikes] = useState(props.likes || {});
    const fetchLikes = props.fetchLikes;
    const [ip, setIP] = useState();
    const [likedByMe, setLikedByMe] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLikes(props.likes);
    }, [props.likes]);

    useEffect(() => {
        isLikedByMe();
    }, [likes]);

    const isLikedByMe = async () => {
        // setLoading(true);
        const res = await axios.get("https://geolocation-db.com/json/");
        setIP(res.data.IPv4);
        if (likes && likes[card.id]) {
            setLikedByMe(likes[card.id].includes(res.data.IPv4));
        } else {
            setLikedByMe(false);
        }
        // setLoading(false);
    };

    const likePost = async () => {
        const db = getFirestore();
        const docRef = collection(db, "likes");
        const data = await getDocs(docRef);
        const docs = data.docs.map((doc) => doc.data());
        let fullLikes = docs[0].likes;

        let currentLikes = fullLikes[card.id] ? [...fullLikes[card.id]] : [];
        if (!currentLikes.includes(ip)) {
            currentLikes.push(ip);
        }

        fullLikes[card.id] = currentLikes;

        //Persist
        const document = doc(docRef, "OBV3K4fkQLPP58jwxhOY");
        const finalDto = { likes: fullLikes };
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
                style={{
                    border: "1px #002E6E solid",
                    borderRadius: "25px",
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
                            fontWeight: "bold",
                            boxShadow: "2px 2px 2px 1px #000",
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
                        Ver video
                    </Button>
                </CardActions>
            </Card>
        );
    } else {
        return <CircularProgress />;
    }
}
