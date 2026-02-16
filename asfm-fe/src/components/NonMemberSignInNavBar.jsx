import { Button } from "./ui/button";

function TopNavBar({ status, username }) {
  return (
    <nav className="bg-secondary p-4 flex justify-between">
      <div className="flex flex-grid items-center gap-4">
        {/* Create the logo */}
         <div  className="rounded-md-10  text-secondary-foreground border-black-400 px-4 py-2">Logo</div>
        <Button variant="outline" className="rounded-full border border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">Home</Button>
        {/* is status it not guess add animal div */}
        {status !== "guest" && <Button variant="outline" className="rounded-full border border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">Animal</Button>}
      </div>
      <div className="flex items-center gap-4">
        {status === "guest" ? (
          <>
            <Button variant="outline" className="rounded-full border border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">Sign In</Button>
            <Button variant="outline" className="rounded-full border border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">Sign Up</Button>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-secondary-foreground">Profile</Button>
            <Button variant="outline" className="text-secondary-foreground">Logout</Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default TopNavBar;
