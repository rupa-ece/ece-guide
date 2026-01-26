import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-heart" fill="currentColor" />
            <span>for ECE students</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ECE Guide. Empowering future engineers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;