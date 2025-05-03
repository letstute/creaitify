import Button from "./Button";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { images } from "@/constants/images";

export default function Header() {
  return (
    <header className="bg-primary-100 py-2 border-b border-zinc-200">
      <div className="container flex justify-between items-center">
        <Logo size={80} />
        <MainNav />
        <Button href="#" type="primary" image={images.buttonImage}>
          Book a call
        </Button>
      </div>
    </header>
  );
}
