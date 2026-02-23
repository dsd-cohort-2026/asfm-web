import { Button } from './ui/button';
import { useAuthStore } from '../hooks/useAuthStore';
import { useNavigate, useRouter } from '@tanstack/react-router';

function TopNavBar() {
  const { isAuthenticated, login, logout } = useAuthStore();
  // Create an user object with isAdmin property
  const user = {
    isAdmin: false, // Change this to true to test admin view
  };
  const navigate = useNavigate();
  const router = useRouter();

  const handleAdminPortalClick = () => {
    navigate({ to: 'admin-portal' }); // Replace with your actual admin portal route
  };
  // Debug: Log all routes
  console.log('Available routes:', router);
  return (
    <nav className="bg-secondary p-4 flex justify-between">
      <div className="flex flex-grid items-center gap-4">
        {/* Create the logo */}
        <div className="rounded-md  text-secondary-foreground border-black px-4 py-2">Logo</div>
        <Button
          variant="outline"
          className="rounded-full hover:bg-secondary-foreground hover:text-secondary"
        >
          Home
        </Button>
        {/* is status it not guess add animal div */}
        {isAuthenticated && user.isAdmin && <Button variant="outline">Animal</Button>}
        {isAuthenticated && !user.isAdmin && (
          <Button variant="outline" onClick={handleAdminPortalClick}>
            Admin Portal
          </Button>
        )}
      </div>
      <div className="flex items-center gap-4">
        {!isAuthenticated ? (
          <>
            <Button variant="outline" onClick={login}>
              Sign In
            </Button>
            <Button variant="outline">Sign Up</Button>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <div>
              <div className="bg-gray-200 px-4 py-2 rounded-2xl"> UserName</div>
            </div>
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default TopNavBar;
