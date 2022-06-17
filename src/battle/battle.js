import { Monster } from './monster';
export function Battle() {
  return (
    <div className="flex w-full h-full">
      <div className="w-5/12 bg-black ">1</div>
      <div className="w-2/12 h-full">2</div>
      <div className="w-5/12 h-full bg-black">
        <Monster />
      </div>
    </div>
  );
}
