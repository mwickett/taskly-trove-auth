
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import TodoApp from "@/components/TodoApp";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [authMode, setAuthMode] = useState<"signIn" | "signUp">("signIn");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="mb-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to TaskMaster</h1>
            <p className="text-gray-600 dark:text-gray-400">Sign in or create an account to manage your tasks</p>
          </div>
          
          <div className="flex space-x-4 mb-6">
            <Button 
              variant={authMode === "signIn" ? "default" : "outline"}
              onClick={() => setAuthMode("signIn")}
            >
              Sign In
            </Button>
            <Button 
              variant={authMode === "signUp" ? "default" : "outline"}
              onClick={() => setAuthMode("signUp")}
            >
              Sign Up
            </Button>
          </div>
          
          {authMode === "signIn" ? <SignIn /> : <SignUp />}
        </div>
      </SignedOut>
      <SignedIn>
        <TodoApp />
      </SignedIn>
    </div>
  );
};

export default Index;
