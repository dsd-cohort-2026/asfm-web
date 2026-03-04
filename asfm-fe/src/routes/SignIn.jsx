import Layout from '@/components/Layout';
import SignInForm from '@/components/SignInForm';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/SignIn')({
  validateSearch: (search) => ({
    redirect: search.redirect || '/',
  }),
  beforeLoad: ({ context, search }) => {
    if (context.user) {
      throw redirect({ to: search.redirect || '/' });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <SignInForm />
    </Layout>
  );
}
