export function Container({ children }) {
  return (
    <div className="flex text-white w-full bg-blue-300 h-[100vh] md:h-[85vh] md:mx-[50px]">
      <div className="m-auto w-full text-center">
        <div className="bg-white mx-[80px] h-[700px]">{children}</div>
      </div>
    </div>
  );
}
