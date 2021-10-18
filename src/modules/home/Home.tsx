import { Grid } from "@mui/material";
import Banner from "../../components/banner/Banner";
import CardList from "../../components/card-list/CardList";
import CustomCard, { ICustomCard } from "../../components/card/CustomCard";
import { data } from "../../resources/data/data-posters";

export default function Home() {
    const posters = data;

    const keys = Object.keys(posters);
    const values = Object.values(posters);

    return (
        <>
            <Banner />
            {keys.map((item: any, i: number) => (
                <CardList title={item} cards={values[i]} />
            ))}
        </>
    );
}
