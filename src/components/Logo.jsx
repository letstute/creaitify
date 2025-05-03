import Image from "next/image";
import { images } from "@/constants/images";

export default function Logo({ size }) {
  return <Image src={images.primaryLogo} width={size} height={size} alt="" />;
}
