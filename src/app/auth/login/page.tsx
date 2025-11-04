import Image from "next/image";

const LoginPage = () => {
  return (
    <div>
      <h1>login</h1>
      <div className="flex justify-center">
        <div>
          <Image className="top-1  left-1.5"
            src="/Frame 2147226025.png"
            alt="example"
            width={748}
            height={1016}
          />
        </div>
        <div>
          <div className="flex justify-center items-center">

            <div className="">
              <Image className=" bg-blue-500 "
                src="/vector.png"
                alt="example"
                width={50}
                height={50}
              />
            </div>
            <div>
              <h5>Ehen Tours</h5>
            </div>
          </div>
          <h2 className="text-3xl font-bold">
            Welcome To Travel
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
