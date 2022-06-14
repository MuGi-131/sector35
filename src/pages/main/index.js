import Layout from "../components/Layout";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function Index({}) {
  return (
    <Layout>
      <AwesomeSlider animation="foldOutAnimation">
        <div data-src="https://i.pinimg.com/originals/82/1c/0c/821c0c03eb334fca2f17b4b90f26624c.jpg" />
        <div data-src="http://www.theappguruz.com/app/uploads/2015/07/final-output.png" />
        <div data-src="https://i.pinimg.com/originals/86/63/f2/8663f2ea844c902ea3ee32baa27f23c9.jpg" />
      </AwesomeSlider>
    </Layout>
  );
}
