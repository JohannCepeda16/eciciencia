import { Grid } from "@mui/material";
import Banner from "../../components/banner/Banner";
import CustomCard, { ICustomCard } from "../../components/card/CustomCard";

export default function Home() {
  const data: ICustomCard[] = [
    {
      title: "Titulo de la carta #1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices at turpis vel aliquam. In in porta justo, vitae suscipit mi. Suspendisse venenatis mi vel magna aliquam mattis sed at sem. Donec non sem eu nunc accumsan maximus. Phasellus faucibus erat faucibus arcu ullamcorper efficitur tincidunt consequat lorem. Donec volutpat.",
      img: "",
      date: "10 Octubre 2021",
    },
    {
      title: "Titulo de la carta #2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices at turpis vel aliquam. In in porta justo, vitae suscipit mi. Suspendisse venenatis mi vel magna aliquam mattis sed at sem. Donec non sem eu nunc accumsan maximus. Phasellus faucibus erat faucibus arcu ullamcorper efficitur tincidunt consequat lorem. Donec volutpat.",
      img: "",
      date: "10 Octubre 2021",
    },
    {
      title: "Titulo de la carta #3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices at turpis vel aliquam. In in porta justo, vitae suscipit mi. Suspendisse venenatis mi vel magna aliquam mattis sed at sem. Donec non sem eu nunc accumsan maximus. Phasellus faucibus erat faucibus arcu ullamcorper efficitur tincidunt consequat lorem. Donec volutpat.",
      img: "",
      date: "10 Octubre 2021",
    },
  ];
  return (
    <>
      <Banner />
      <h1>Categoria #1</h1>
      <Grid
        container
        spacing={10}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {data.map((card: ICustomCard, index: number) => (
          <Grid item key={index}>
            <CustomCard card={card} xs={4} />
          </Grid>
        ))}
      </Grid>
      <h1>Categoria #2</h1>
      <Grid
        container
        spacing={10}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {data.map((card: ICustomCard, index: number) => (
          <Grid item key={index}>
            <CustomCard card={card} xs={4} />
          </Grid>
        ))}
      </Grid>
      <h1>Categoria #3</h1>
      <Grid
        container
        spacing={10}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {data.map((card: ICustomCard, index: number) => (
          <Grid item key={index}>
            <CustomCard card={card} xs={4} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
