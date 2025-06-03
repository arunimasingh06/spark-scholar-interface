
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, User } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Dashboard" },
    { path: "/wallet", label: "Wallet" },
    { path: "/sponsor", label: "Sponsor" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 spark-gradient rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-spark-purple-400 to-spark-blue-400 bg-clip-text text-transparent">
            SkillSpark
          </span>
        </Link>

        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-gradient-spark text-white shadow-spark"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <Button variant="ghost" size="icon" className="hover:bg-white/10">
            <Wallet className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="hover:bg-white/10">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
