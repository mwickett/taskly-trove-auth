
import { SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import TodoApp from "@/components/TodoApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to TaskMaster</h1>
            <p className="text-gray-600 dark:text-gray-400">Sign up to manage your tasks</p>
          </div>
          <SignUp />
        </div>
      </SignedOut>
      <SignedIn>
        <TodoApp />
      </SignedIn>
    </div>
  );
};

export default Index;
