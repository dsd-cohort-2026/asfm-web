import { supabase } from '@/lib/supabaseClient';
import { useBoundStore } from '@/store';
import { useEffect } from 'react';

const AuthProvider = ({ children }) => {
  const [setSession, setLoading, clearSession] = useBoundStore((state) => [
    state.setSession,
    state.setLoading,
    state.clearSession,
  ]);

  useEffect(() => {
    // automatically update session state
    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setLoading(true);
      if (session) {
        setSession(session);
      } else {
        clearSession();
      }
      setLoading(false);
    });

    // check for existing session
    const initialSession = supabase.auth.getSession().data.session;
    setSession(initialSession);
    setLoading(false);

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [setSession, setLoading, clearSession]);

  return <>{children}</>;
};

export default AuthProvider;
