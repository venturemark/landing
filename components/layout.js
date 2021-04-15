import styles from "./layout.module.css";

export default function Layout({ children }) {
  return <div className={(styles.container, styles.body)}>{children}</div>;
}
