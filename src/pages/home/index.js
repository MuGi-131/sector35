import dynamic from "next/dynamic";

const ClientComponent = dynamic(() => import("../components/carousel"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={"CarouselComp"}>
      <ClientComponent />
    </div>
  );
}
