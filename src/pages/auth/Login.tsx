import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../../lib/validation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { loginThunk } from "../../thunks/auth.thunk";
import { ApiErrorResponse } from "../../interfaces/interfaces";

type LoginData = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onsubmit = async (data: LoginData) => {
    setIsLoading(true);
    try {
      const result = await dispatch(loginThunk(data));

      if (loginThunk.fulfilled.match(result)) {
        toast.success("Logged in successfully!");
        navigate("/dashboard");
      } else if (loginThunk.rejected.match(result)) {
        const payload = result.payload as ApiErrorResponse | string;

        // Handle different error formats
        if (typeof payload === "string") {
          toast.error(payload);
        } else {
          // Handle validation errors
          if (payload?.error === "VALIDATION_ERROR" && payload.details) {
            Object.entries(payload.details).forEach(([field, message]) => {
              toast.error(`${field}: ${message}`);
            });
          } else {
            // Handle other errors
            toast.error(payload?.message || "Login failed. Please try again.");
          }
        }
      }
    } catch (error: any) {
      // Fallback for unexpected errors
      toast.error(error.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-amber-500 min-h-screen w-full flex items-center justify-center">
        <div className="w-full flex flex-col sm:justify-center sm:items-center lg:flex-row  px-4 md:justify-around">
          <div className="text-center mb-8 lg:w-[35%] flex items-center justify-center">
            <Link
              to={"/"}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold"
            >
              Supa<span className="text-white">Menu</span>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-[100%] sm:w-[70%] lg:w-[50%] xl:w-[35%] min-h-[100%]">
            <div className="mb-6 mt-16 text-center">
              <h1 className="text-2xl font-semibold text-gray-800">Welcome</h1>
              <div>
                <h1 className="text-lg font-medium text-gray-600">
                  Login to SupaMenu
                </h1>
                <h2 className="text-sm text-gray-500">
                  Enter your email and password below
                </h2>
              </div>
            </div>

            <div className="">
              {/* form */}
              <form onSubmit={handleSubmit(onsubmit)} noValidate>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Email Address"
                    className={`mt-1 block w-full px-3 py-2 border focus:border-2 focus:shadow-md rounded-md shadow-sm focus:outline-none focus:ring-amber-500 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-300"
                        : "border-amber-300 focus:ring-amber-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <h6 className="text-right text-sm hover:text-amber-300 text-amber-500 mb-4">
                  <a href="">Forgot password?</a>
                </h6>
                <div className="mb-6 relative">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    {...register("password")}
                    placeholder="Password"
                    className={`mt-1 block w-full px-3 py-2 border focus:border-2 focus:shadow-md rounded-md shadow-sm focus:outline-none focus:ring-amber-500 ${
                      errors.password
                        ? "border-red-500 focus:ring-red-300"
                        : "border-amber-300 focus:ring-amber-500"
                    }`}
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                  <div
                    className="absolute inset-y-0 hover:text-amber-300 mt-6 right-3 flex items-center cursor-pointer text-gray-500"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {!showPass ? <Eye /> : <EyeClosed />}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className={`w-full cursor-pointer py-2 px-4 rounded-md transition ${
                      isLoading
                        ? "bg-amber-400 text-gray-200 cursor-not-allowed"
                        : "bg-amber-500 text-white hover:bg-amber-600"
                    }`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex justify-center items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-gray-200"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                          ></path>
                        </svg>
                        Logging in...
                      </div>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-6">
              <div className="text-center mb-4">
                <h1 className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to={"/register"}
                    className="text-amber-500 hover:text-amber-300 font-medium"
                  >
                    Sign up
                  </Link>
                </h1>
              </div>
              <div className="text-center">
                <h1 className="text-sm text-gray-600">
                  Forgot your password?{" "}
                  <a
                    href=""
                    className="text-amber-500 font-medium hover:text-amber-300"
                  >
                    Reset
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
