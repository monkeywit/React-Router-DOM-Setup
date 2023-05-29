import Navbar from "../components/Navbar";

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default AppLayout;
