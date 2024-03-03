function Coincard() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center">
        <div className="group h-96 w-96  cursor-pointer [perspective:1000px]">
          <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve 3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0  ">
              <img
                className="w-full h-full shadow-black/80 rounded-3xl"
                src="https://cdn.pixabay.com/photo/2024/02/07/16/15/flower-8559381_1280.jpg"
                alt=""
              />
            </div>
            <div
              className={`absolute inset-0 w-full h-full bg-black/80 px-12
               text-slate-200 rounded-3xl [transform:rotateY(180deg)]
                opacity-0 hover:opacity-100 transition-all duration-500 ease-linear`}
            >
              <h1 className="text-3xl  ">hello yheoadjfnb jndaj</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coincard;
