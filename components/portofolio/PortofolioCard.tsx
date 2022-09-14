interface PortofolioCardProps {
  porto: {
    type: string;
    title: string;
    body: string;
  };
}

const PortofolioCard: React.FC<PortofolioCardProps> = ({ porto }) => {
  return <div>PortofolioCard</div>;
};

export default PortofolioCard;
