import s from "./Container.module.css";

const Container = ({ narrow = false }) => {
  return <div className={cn(s.root, { [s.narrow]: narrow })}>{children}</div>;
};

export default Container;
