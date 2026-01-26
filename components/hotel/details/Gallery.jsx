import Image from "next/image";

const Gallery = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image
          width={30}
          height={30}
          src="./assets/images/1.png"
          className="h-[400px]"
          alt=""
        />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          <Image width={30} height={30} src="./assets/images/2.png" alt="" />
          <Image width={30} height={30} src="./assets/images/3.png" alt="" />
          <Image width={30} height={30} src="./assets/images/4.png" alt="" />
          <Image width={30} height={30} src="./assets/images/5.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
