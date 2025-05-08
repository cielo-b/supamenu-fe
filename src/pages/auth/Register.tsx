import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { registerSchema } from "../../lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { registerThunk } from "../../thunks/user.thunk";
import {
  ApiErrorResponse,
  ValidationErrorResponse,
} from "../../interfaces/interfaces";

type RegisterData = z.infer<typeof registerSchema>;

const Register = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const onsubmit = async (data: RegisterData) => {
    setIsLoading(true);
    try {
      const result = await dispatch(registerThunk(data));
      if (registerThunk.fulfilled.match(result)) {
        toast.success("User registered successfully, login to continue.");
        navigate("/login");
      } else if (registerThunk.rejected.match(result)) {
        // Handle cases where payload might be undefined
        const payload = result.payload as ApiErrorResponse | undefined;

        if (payload?.error === "VALIDATION_ERROR") {
          const validationPayload = payload as ValidationErrorResponse;
          Object.entries(validationPayload.details || {}).forEach(
            ([field, message]) => {
              toast.error(`${field}: ${message}`);
            }
          );
        } else {
          // Handle other errors
          toast.error(
            payload?.message ||
              (result.error as any)?.message ||
              "An error occurred during registration"
          );
        }
      }
    } catch (error: any) {
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
              <h1 className="text-2xl font-semibold text-gray-800">Signup</h1>
            </div>

            <div className="">
              {/* form */}
              <form onSubmit={handleSubmit(onsubmit)} noValidate>
                <div className="mb-4">
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    {...register("firstName")}
                    placeholder="First Name"
                    className={`mt-1 block w-full px-3 py-2 border focus:border-2 focus:shadow-md rounded-md shadow-sm focus:outline-none ${
                      errors.firstName
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 focus:ring-amber-500 focus:border-amber-500"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    {...register("lastName")}
                    placeholder="Last Name"
                    className={`mt-1 block w-full px-3 py-2 border focus:border-2 focus:shadow-md rounded-md shadow-sm focus:outline-none ${
                      errors.lastName
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 focus:ring-amber-500 focus:border-amber-500"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    {...register("phoneNumber")}
                    placeholder="Phone"
                    className={`mt-1 block w-full px-3 py-2 border focus:border-2 focus:shadow-md rounded-md shadow-sm focus:outline-none ${
                      errors.phoneNumber
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 focus:ring-amber-500 focus:border-amber-500"
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
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
                    className={`mt-1 block w-full px-3 py-2 border focus:border-2 focus:shadow-md rounded-md shadow-sm focus:outline-none ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 focus:ring-amber-500 focus:border-amber-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
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
                    className={`mt-1 block w-full px-3 py-2 border focus:border-2 focus:shadow-md rounded-md shadow-sm focus:outline-none pr-10 ${
                      errors.password
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 focus:ring-amber-500 focus:border-amber-500"
                    }`}
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                  <div
                    className="absolute inset-y-0 mt-6 hover:text-amber-300 right-3 flex items-center cursor-pointer text-gray-500"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {!showPass ? <Eye /> : <EyeClosed />}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition"
                  >
                    Signup
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-6">
              <div className="text-center mb-4">
                <h1 className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-amber-500 hover:text-amber-300 font-medium"
                  >
                    Login
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
