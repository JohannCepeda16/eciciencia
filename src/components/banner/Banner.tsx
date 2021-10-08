import BannerImg from "../../commons/icons/banner.png";

export default function Banner() {
  return (
    <div>
      <img src={BannerImg} style={{ width: "100%", height: "500px" }} />
      <hr />
    </div>
  );
}
