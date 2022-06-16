import { Monster } from "./monster";
export function Battle() {
  return (
    <div className="h-[900px]">
      <div className="flex w-full h-full">
        <div className="w-5/12 bg-black ">1</div>
        <div className="w-2/12 ">2</div>
        <div className="w-5/12 bg-black">
          <Monster />
        </div>
      </div>
    </div>
  );
}
