import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href={'/login'}>Ir para o Login</Link>
    </div>
  );
}

export default Home;