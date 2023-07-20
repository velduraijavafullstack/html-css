const generateOtp = () => {
  let otp = "";

  for(i=0; i<6; i++)
  {
    otp += Math.floor(math.random()*10);

  }
   return number(otp);
  };
  console.log("generateOtp-", generateOtp());