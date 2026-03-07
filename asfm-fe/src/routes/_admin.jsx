import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { useBoundStore } from '@/store';

export const Route = createFileRoute('/_admin')({
  beforeLoad: async ({ context, location }) => {
    const { initializeAuth, user, userRole, setUserRole } = useBoundStore.getState();

    await initializeAuth(); // force beforeLoad to wait for auth before redirecting

    // Get fresh state after init
    const freshState = useBoundStore.getState();
    const freshUser = freshState.user;
    let freshRole = freshState.userRole;

    if (!freshUser) {
      throw redirect({
        to: '/signin',
        search: {
          redirect: location.href,
        },
      });
    }

    // If role wasn't fetched during init, fetch it now
    if (!freshRole && freshUser) {
      await freshState.setUserRole();
      freshRole = useBoundStore.getState().userRole;
    }

    if (freshRole !== 'STAFF') {
      throw redirect({
        to: '/',
      });
    }
  },
  component: () => <Outlet />,
});
