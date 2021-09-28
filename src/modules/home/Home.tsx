import Banner from "../../components/banner/Banner";
import CustomCard from "../../components/card/CustomCard";

export default function Home() {
  return (
    <div>
      <Banner />
      <div style={{ display: "inline" }}>
        <CustomCard />
      </div>
      <div style={{ display: "inline" }}>
        <CustomCard />
      </div>
      <div style={{ display: "inline" }}>
        <CustomCard />
      </div>
      <div style={{ display: "inline" }}>
        <CustomCard />
      </div>
    </div>
  );
}
