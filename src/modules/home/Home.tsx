import Banner from "../../components/banner/Banner";
import CardList from "../../components/card-list/CardList";
import { dataPosters, postGraduate } from "../../assets/data/data-posters";

export default function Home() {
    const posters = dataPosters;
    const postGraduatePosters = postGraduate;

    const posterKeys = Object.keys(posters);
    const posterValues = Object.values(posters);

    const graduateKeys = Object.keys(postGraduatePosters);
    const graduateValues = Object.values(postGraduatePosters);

    return (
        <>
            <Banner />
            {/* Posgrado */}
            {graduateKeys.map((item: any, i: number) => (
                <CardList key={i} title={item} cards={graduateValues[i]} />
            ))}
            {/* Semilleros  */}
            {posterKeys.map((item: any, i: number) => (
                <CardList key={i} title={item} cards={posterValues[i]} />
            ))}
        </>
    );
}
