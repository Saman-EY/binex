import RegisterPage from "@/app/components/login-sign-up/RegisterPage";

function Page() {
  return (
    <>
      <div className="flex flex-col items-center w-full gap-8 max-w-[500px] mx-auto justify-center lg:pt-[15%] pb-6">
        <RegisterPage />
      </div>
    </>
  );
}

export default Page;
