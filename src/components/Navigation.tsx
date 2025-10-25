import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Computação Quântica
            </span>
          </Link>
          
          <div className="flex gap-2">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"}
                className="text-foreground hover:text-primary"
              >
                Início
              </Button>
            </Link>
            <Link to="/o-que-e">
              <Button 
                variant={isActive("/o-que-e") ? "default" : "ghost"}
                className="text-foreground hover:text-primary"
              >
                O Que É
              </Button>
            </Link>
            <Link to="/areas">
              <Button 
                variant={isActive("/areas") ? "default" : "ghost"}
                className="text-foreground hover:text-primary"
              >
                Áreas
              </Button>
            </Link>
            <Link to="/mercado">
              <Button 
                variant={isActive("/mercado") ? "default" : "ghost"}
                className="text-foreground hover:text-primary"
              >
                Mercado
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
