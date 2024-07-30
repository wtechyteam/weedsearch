return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Left side div for large screens and top div for small screens */}
      <div className="w-full h-[60vh] md:w-1/2 md:h-full relative flex-shrink-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image src={rb} className="w-full h-full object-cover" alt="login" />
        </div>
        <div className="absolute top-1/4 left-10 md:top-1/4 md:left-[15%] flex flex-col">
          <h1 className="text-3xl md:text-4xl text-white font-bold">
            Test Heading
          </h1>
          <p className="text-lg md:text-xl text-white font-normal">
            Login for free and get exciting offers
          </p>
        </div>
      </div>
 
      {/* Right side div */}
      <div className="w-full md:w-1/2 h-full bg-[#f5f5f5] flex flex-col p-6 md:p-12 lg:p-20 justify-between items-center">
        <h1 className="text-lg md:text-xl max-w-[500px] text-[#060606] font-bold">
          Brand Name
        </h1>
        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-6">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">SignUp</h3>
            <p className="text-base mb-2">
              Welcome Back! Please enter your details
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col">
              <input
                type="text"
                placeholder="Your Full Name Here"
                className="w-full text-black py-2 mb-3 bg-transparent border-b border-black outline-none focus:outline-none"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email Here"
                className="w-full text-black py-2 mb-3 bg-transparent border-b border-black outline-none focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Your Password Here"
                className="w-full text-black py-2 mb-3 bg-transparent border-b border-black outline-none focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="w-full flex items-center justify-between md:mb-1 mb-4">
                <div className="flex items-center">
                  {/* <input type="checkbox" className="w-4 h-4 mr-3" />
                  <p className="text-sm mt-1">Remember Me</p> */}
                </div>
                <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                  Forgot Password?
                </p>
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <div className="w-full flex flex-col my-2 md:my-4">
                <button className="w-full my-2 text-white bg-[#060606] font-semibold rounded-md p-2 text-base md:p-3 md:text-lg text-center flex items-center justify-center cursor-pointer" type="submit">
                  Sign Up
                </button>
                <button className="w-full my-2 text-[#060606] font-semibold bg-white border-2 border-black rounded-md p-2 text-base md:p-3 md:text-lg text-center flex items-center justify-center">
                  <Link href={`/login`}>Log In</Link>
                </button>
 
                <div className="w-full flex items-center justify-center relative py-2">
                  <div className="w-full h-[1px] my-4 bg-black"></div>
                  <p className="text-lg absolute my-2 text-black/80 bg-[#f5f5f5]">
                    Log in with
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-16 md:gap-4">
                  <button className="w-12 h-12 text-[#060606] font-semibold bg-white border-2 border-black rounded-full text-center flex items-center justify-center text-xs md:w-16 md:h-16 md:text-base">
                    <FontAwesomeIcon icon={faGoogle} size="2x" />
                  </button>
                  <button className="w-12 h-12 text-[#060606] font-semibold bg-white border-2 border-black rounded-full text-center flex items-center justify-center text-xs md:w-16 md:h-16 md:text-base">
                    <FontAwesomeIcon icon={faApple} size="2x" />
                  </button>
                  <button className="w-12 h-12 text-[#060606] font-semibold bg-white border-2 border-black rounded-full text-center flex items-center justify-center text-xs md:w-16 md:h-16 md:text-base">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </button>
                  <button className="w-12 h-12 text-[#060606] font-semibold bg-white border-2 border-black rounded-full text-center flex items-center justify-center text-xs md:w-16 md:h-16 md:text-base">
                    <FontAwesomeIcon icon={faMicrosoft} size="2x" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="w-full flex items-center justify-center mt-4">
          <p className="text-sm font-normal text-[#060606]">
            Dont have an account?
            <span className="font-semibold underline underline-offset-2 cursor-pointer">
              Sign up for free
            </span>
          </p>
        </div> */}
      </div>
    </div>
  );