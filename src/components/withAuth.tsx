import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getTokenLocalStorage, verifyToken } from '@/utils/auth';

const withAuth = (WrappedComponent) => {
  const WithAuthComponent = (props) => {
    const router = useRouter();
    const isAuthenticated = false;

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const token = getTokenLocalStorage();
        const isAuthenticated = token && verifyToken(token);
        if (!isAuthenticated) {
          router.push('/login'); // Redirect to login page if not authenticated
        }
      }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
      return null; // Render nothing while redirecting
    }

    return <WrappedComponent {...props} />;
  };

  WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithAuthComponent;
};

export default withAuth;
