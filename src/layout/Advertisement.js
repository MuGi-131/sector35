import { MobileSidebar } from "./MobileSidebar";
export function Advertisement() {
  return (
    <div className="w-[100px] bg-black">
      <MobileSidebar />
      <div className="flex flex-col text-white text-xs">
        <div className="w-full h-[90px]">limited offer</div>
        <div className="w-full h-[90px]">limited offer</div>
        <div className="w-full h-[90px]">limited offer</div>
        <div className="w-full h-[90px]">limited offer</div>
        <div className="w-full h-[90px]">limited offer</div>
      </div>
    </div>
  );
}
