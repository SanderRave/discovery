const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4">
        {/* Text Section */}
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-4">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        {/* Form Section */}
        <div className="my-4">
          <form className="flex flex-col sm:flex-row items-center w-full">
            <input
              className="p-3 w-full sm:w-auto flex-1 rounded-md bg-white text-black outline-none"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black sm:ml-4">
              Notify me
            </button>
          </form>
          <p className="mt-4 text-sm">
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a] cursor-pointer hover:underline">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
