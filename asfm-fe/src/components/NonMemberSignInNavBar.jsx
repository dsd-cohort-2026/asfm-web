import { Button } from './ui/button';
import { useAuthStore } from '../hooks/useAuthStore';
import { useNavigate, useRouter } from '@tanstack/react-router';
import logo from '../assets/logo.png';

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
    <nav className="bg-secondary p-4 flex gap-4">
      <img src={logo} alt="Company Logo" className="h-17 w-17 -m-3" loading="lazy" />
      <div className="flex flex-grid items-center gap-4">
        {/* Create the logo */}
        <Button variant="outline">Home</Button>
        {/* is status it not guess add animal div */}
        {isAuthenticated && user.isAdmin && <Button variant="outline">Animal</Button>}
        {isAuthenticated && !user.isAdmin && (
          <Button variant="outline" onClick={handleAdminPortalClick}>
            Admin Portal
          </Button>
        )}
      </div>
      <div className="flex items-center gap-4 ml-auto">
        {!isAuthenticated ? (
          <>
            <Button variant="outline" onClick={login}>
              Sign In
            </Button>
            <Button variant="outline">Sign Up</Button>
          </>
        ) : (
          <div className="flex items-center gap-4 ml-auto">
            <div>
              <div className="bg-gray-200 px-4 py-2 rounded-2xl">UserName</div>
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
