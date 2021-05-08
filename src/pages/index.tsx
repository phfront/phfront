import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section>
      <h1>PEDRO HENRIQUE SILVA ROSA</h1>
    </section>
  );
}

export default Home;
