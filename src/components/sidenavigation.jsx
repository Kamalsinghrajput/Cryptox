function SideNavigation() {
  return (
    <>
      <div className="flex  flex-col justify-center">
        <div className="group h-36 w-96  cursor-pointer ">
          <div className="relative w-full h-full transition-all duration-500 ">
            <div className="absolute inset-0  ">
              <img
                className="w-full h-full shadow-black/80 rounded-3xl"
                src="https://cdn.pixabay.com/photo/2024/02/07/16/15/flower-8559381_1280.jpg"
                alt=""
              />
            </div>
            <div
              className={`absolute inset-0 w-full h-full px-12 bg-black/40
                 text-slate-200 rounded-3xl opacity-80 hover:opacity-100
                   `}
            >
              <h1 className="text-3xl  ">hello yheoadjfnb jndaj</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNavigation;
