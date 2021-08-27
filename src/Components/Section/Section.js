import s from "./Section.module.css";

const Section = ({ children }) => {
  return <section className={s.gallery}>{children}</section>;
};

export default Section;
