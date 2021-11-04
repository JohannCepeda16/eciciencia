import Banner from "../../components/banner/Banner";
import CardList from "../../components/card-list/CardList";
import { dataPosters, postGraduate, leaderShip } from "../../assets/data/data-posters";
import { Link, Typography, Breadcrumbs } from "@mui/material";

export default function Home(props: any) {
    const posters = dataPosters;
    const postGraduatePosters = postGraduate;
    const leaderShipPosters = leaderShip;

    const posterKeys = Object.keys(posters);
    const posterValues = Object.values(posters);

    const graduateKeys = Object.keys(postGraduatePosters);
    const graduateValues = Object.values(postGraduatePosters);

    const leaderShipKeys = Object.keys(leaderShipPosters);
    const leaderShipValues = Object.values(leaderShipPosters);

    return (
        <>
            <Banner />
            <Breadcrumbs
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "Domine",
                    margin:"50px",
                }}
                aria-label="breadcrumb"
            >
                <Link fontSize="30px" underline="hover" color="inherit" href="#maestria">
                    Posters de maestría
                </Link>
                <Link fontSize="30px" underline="hover" color="inherit" href="#semilleros">
                    Posters de semilleros
                </Link>
                <Link fontSize="30px" underline="hover" color="inherit" href="#reto-liderazgo">
                    Resultados - Reto Liderazgo
                </Link>
            </Breadcrumbs>
            
            {/* Posgrado */}
            <div id="maestria">
                {graduateKeys.map((item: any, i: number) => (
                    <CardList fetchLikes={props.fetchLikes} key={i} title={item} cards={graduateValues[i]} likes={props.likes}/>
                ))}
            </div>
            {/* Semilleros  */}
            <div id="semilleros">
                {posterKeys.map((item: any, i: number) => (
                    <CardList fetchLikes={props.fetchLikes} key={i} title={item} cards={posterValues[i]} likes={props.likes}/>
                ))}
            </div>

            {/* Reto liderazgo  */}
            <div id="reto-liderazgo">
                {leaderShipKeys.map((item: any, i: number) => (
                    <CardList fetchLikes={props.fetchLikes} key={i} title={item} cards={leaderShipValues[i]} likes={props.likes}/>
                ))}
            </div>
        </>
    );
}
