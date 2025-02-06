export const CheckvaildDATA=(email,password,name)=>{

  const nameValid=/^[a-zA-Z0-9_-]{4,16}$/.test(name);

const emailValid=
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
const passwordValid=
  /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(password);
   if(!nameValid) return "User name is not valid";
   if(!emailValid) return "Email ID is not vaild";
   if(!passwordValid) return "Password Incorrect ";
    return null;


}