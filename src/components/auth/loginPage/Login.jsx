
import { Link } from "react-router-dom";
import "./Login.css";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
 
export default function LoginCard() {
  return (

    <section className="flex items-center justify-center w-full font-sans sect">
            <div className="relative flex items-center w-[417px] h-[500px] justify-center bg-opacity-100 form-box">

    <Card className="pt-3 bg-blue-300 rounded w-96 bg-opacity-8">
      <CardHeader
        variant="filled"
        color="gray"
        className="grid mb-4 rounded-md h-28 place-items-center"
      >
        <Typography  variant="h3" color="white" className="rounded-md">
          Авторизация
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" />
        <Input label="Password" size="lg" />
        <label ></label>
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Sign In
        </Button>
        <Typography variant="small" className="flex justify-center mt-6">
          Don&apos;t have an account?
          <Link to={'/register'}>
          <Typography
            as="a"
            // href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Sign up
          </Typography>
          </Link>
        </Typography>
      </CardFooter>
    </Card>
    </div>
    </section>
  );
}


// import React from "react";
// import "./Login.css";
// import { Link } from "react-router-dom";

// function Login() {
//   return (
//     <div>
//       <section className="flex items-center justify-center w-full font-sans sect">
//         <div className="relative flex items-center justify-center bg-red-600 form-box ">
//           <div className="form-value">
//             <form action="">
//               <h2 className="text-center sm:text-2xl text-yellow-50">
//                 Авторизация
//               </h2>
//               <div className="relative flex mx-0 my-8 border-b-2 inputbox-Email inputbox border-green-50">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-5 h-5"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                   />
//                 </svg>

//                 <input type="email" name="" />
//                 <label htmlFor="" className="labelIN">
//                   E-mail
//                 </label>
//               </div>
//               <div className="relative flex mx-0 my-8 border-b-2 inputbox-Pas inputbox border-green-50">
//                 {/* <LockClosedIcon className="w-4 h-4 lock-pas"></LockClosedIcon>  */}

//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-5 h-5"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
//                   />
//                 </svg>

//                 <input type="password" name="pass" id="passW"/>
//                 <label htmlFor="passW"  className="labelIN">
//                   Пароль
//                 </label>
//               </div>
//               <div className="flex justify-center forget">
//                 <label htmlFor="">
//                   <input type="checkbox" name="" />
//                   Запомнить меня{" "}
//                   <Link className="link-forget" to="">
//                     Забыл Пароль
//                   </Link>
//                 </label>
//               </div>
//               <button className="btn-log">Войти</button>
//               <div className="register">
//                 <p>
//                   Пройти{" "}
//                   <Link to="/register" className="link-register">
//                     {" "}
//                     регистрацию
//                   </Link>{" "}
//                   .Если вы не зарегистрированы
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Login;
