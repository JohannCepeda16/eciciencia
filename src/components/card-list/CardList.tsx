import { Grid } from "@mui/material";
import { colors } from "../../commons";
import CustomCard, { ICustomCard } from "../card/CustomCard";
import CustomVideoCard from "../card/CustomVideoCard";

export interface ICardList {
    cards: ICustomCard[];
    title: string;
    likes: string[];
    fetchLikes: any;
}

export default function CardList(props: ICardList) {
    const data = props.cards;
    const title = props.title;
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "20px",
                    marginBottom: "20px",
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={12}
                    style={{
                        backgroundColor: colors.SECONDARY,
                        borderBottom: "1px #ffffff solid",
                        alignSelf: "center",
                    }}
                >
                    <h1
                        style={{
                            padding: 0,
                            margin: 0,
                            color: "white",
                            fontFamily: "Domine",
                        }}
                    >
                        {props.title}
                    </h1>
                </Grid>
            </div>
            <Grid
                container
                spacing={10}
                style={{ justifyContent: "center", alignItems: "center" }}
            >
                {data.map((card: ICustomCard, index: number) => (
                    <Grid item key={index}>
                        {card.type && card.type === "video" ? (
                            <CustomVideoCard
                                fetchLikes={props.fetchLikes}
                                likes={props.likes}
                                card={card}
                                xs={4}
                            />
                        ) : (
                            <CustomCard
                                fetchLikes={props.fetchLikes}
                                likes={props.likes}
                                card={card}
                                xs={4}
                            />
                        )}
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
