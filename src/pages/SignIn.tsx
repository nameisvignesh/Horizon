
import { SignIn as ClerkSignIn } from "@clerk/clerk-react";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-16rem)] px-4">
      <div className="w-full max-w-md glass-morphism p-8 rounded-xl">
        <h1 className="text-2xl font-bold text-center mb-8 text-horizon">Sign In</h1>
        <ClerkSignIn
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-transparent shadow-none",
              headerTitle: "text-horizon",
              headerSubtitle: "text-gray-400",
              socialButtonsBlockButton: "bg-white/10 hover:bg-white/20 border border-white/20",
              socialButtonsBlockButtonText: "text-white",
              formFieldLabel: "text-gray-300",
              formFieldInput: "bg-white/10 border border-white/20 text-white placeholder:text-gray-400",
              formButtonPrimary: "bg-horizon hover:bg-horizon/80 text-black",
              footerActionText: "text-gray-400",
              footerActionLink: "text-horizon hover:text-horizon/80",
            },
          }}
        />
      </div>
    </div>
  );
};

export default SignIn;
