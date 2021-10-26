import { Grid } from "@mui/material";
import { colors } from "../../commons";
import CustomCard, { ICustomCard } from "../card/CustomCard";

export interface ICardList {
    cards: ICustomCard[];
    title: string;
    likes: string[]
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
                        backgroundColor: colors.THIRD,
                    }}
                >
                    <h1 style={{ padding: 0, margin: 0, color: colors.SECONDARY }}>
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
                        <CustomCard fetchLikes={props.fetchLikes} likes={props.likes} card={card} xs={4} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
