import { useRouteError } from "react-router";

const ErrorPage = () => {
     const error = useRouteError();
    return (
        <div className="flex flex-col justify-center items-center bg-white pt-10">
            <div className="w-[300px] h-[300px]">
                <img src="https://i.ibb.co.com/ZpnvC9RF/error-404.png" alt="" />
            </div>
            <div className="mt-5"><span className="text-[20px] font-bold text-red-500">{error.data}</span></div>
        </div>
    );
};

export default ErrorPage;