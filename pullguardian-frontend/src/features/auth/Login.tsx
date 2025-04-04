import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md shadow-xl border-0 overflow-hidden">
        <div className="absolute h-2 bg-gradient-to-r from-blue-400 to-indigo-600 w-full top-0 left-0" />
        <CardHeader className="space-y-1 pt-6">
          <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
          <CardDescription className="text-center text-gray-500">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-4">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email address
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com"
                className="h-10 px-3 transition-colors focus:border-indigo-500 focus:ring-indigo-500" 
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <a href="#" className="text-xs text-indigo-600 hover:text-indigo-800 transition-colors">
                  Forgot password?
                </a>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••"
                className="h-10 px-3 transition-colors focus:border-indigo-500 focus:ring-indigo-500" 
              />
            </div>
            
            <div className="pt-2">
              <Button className="w-full h-10 bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors">
                Sign In
              </Button>
            </div>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-400">Or continue with</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="w-full h-10 bg-white">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="w-full h-10 bg-white">
              <svg className="w-5 h-5 mr-2 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.1663 11.9997C22.1663 6.39673 17.6023 1.83273 11.9993 1.83273C6.39634 1.83273 1.83234 6.39673 1.83234 11.9997C1.83234 17.0677 5.50134 21.2677 10.3083 22.0407V14.9177H7.69034V11.9997H10.3083V9.79673C10.3083 7.29073 11.9153 5.79673 14.2153 5.79673C15.3083 5.79673 16.4533 5.99673 16.4533 5.99673V8.52073H15.1913C13.9493 8.52073 13.4913 9.33473 13.4913 10.1687V11.9997H16.3363L15.8263 14.9177H13.4913V22.0407C18.2993 21.2677 22.1663 17.0677 22.1663 11.9997Z" />
              </svg>
              Facebook
            </Button>
          </div>
          
          <div className="text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}