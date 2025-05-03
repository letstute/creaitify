import Image from "next/image";
import Link from "next/link";

export default function Button({ children, href, type, image }) {
  const base = "bg-primary-900 text-white rounded-2xl";

  const styles = {
    primary: `${base} px-5 py-2.5`,
  };

  if (image) {
    return (
      <Link href={href} className={`${styles[type]} flex items-center gap-2`}>
        <Image
          src={image}
          width={40}
          height={40}
          alt=""
          className="bg-primary-100 rounded-full"
        />
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <Link href={href} className={styles[type]}>
      {children}
    </Link>
  );
}
