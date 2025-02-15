import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createToken, setTokenLocalStorage } from '@/utils/auth';
import { WorldMap } from '@/components/ui/world-map';
import { WORLD_DOTS_LAT_AND_LNG } from '@/constants';
import { SpinningText } from '@/components/ui/spinning-text';

const Login = () => {
  const [username, setUserName] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const allowedUsernamesEnv = process.env.NEXT_PUBLIC_ALLOWED_USERNAMES;
    if (!allowedUsernamesEnv) {
      setAlertMessage('Allowed usernames are not configured.');
      setShowAlert(true);
      return;
    }
    const allowedUsernames = allowedUsernamesEnv.split(',');
    if (!allowedUsernames.includes(username)) {
      setAlertMessage('Username is not allowed');
      setShowAlert(true);
      return;
    } else {
      setShowAlert(false);
    }
    const token = createToken(username);
    setTokenLocalStorage(token);
    router.push('/'); // Redirect to the protected route
  };

  return (
    <div className="mx-auto mt-8 flex flex-col items-center justify-center gap-8">
      <div className="w-full max-w-xl">
        <div className="flex flex-col gap-6">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-4xl font-bold tracking-tight">
                  Welcome to <span className="text-primary">KarChunT</span>
                </h1>
                <div className="text-center text-lg">
                  Some documentation/books required to login, but I make it
                  simple for you. Basically you just need to submit your
                  username to get started.
                </div>
                <div className="text-center text-lg">
                  Please contact{' '}
                  <Link
                    href="https://github.com/KarChunT/karchunt.com/issues"
                    className="font-bold text-primary hover:underline"
                  >
                    me
                  </Link>{' '}
                  if you need to sign up.
                  <br />
                  The token will be generated for{' '}
                  <span className="font-bold text-primary">1 hour usage</span>.
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="karchunt"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Get Started
                </Button>

                <div className="text-center text-xs text-red-500">
                  {showAlert && <p>{alertMessage}</p>}
                </div>
              </div>
            </div>
          </form>
          {/* <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
            By clicking continue, you agree to our{' '}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div> */}
          <div className="mt-12">
            <SpinningText>learn more • earn more • grow more •</SpinningText>
          </div>
        </div>
      </div>
      {/* <WorldMap dots={WORLD_DOTS_LAT_AND_LNG} /> */}
    </div>
  );
};

export default Login;
