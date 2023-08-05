import JFooter from "../components/molecule/j-footer/index.jsx";
import JIcon from "../components/atom/j-icon/index.jsx";

const Footer = () => {
  return (
    <JFooter year={new Date().getFullYear()}>
      <JIcon name="gmail" />
      <JIcon name="twitter" />
      <JIcon name="linkedin" />
      <JIcon name="github" />
    </JFooter>
  )
}

export default Footer;
