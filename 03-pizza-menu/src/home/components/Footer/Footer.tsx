import './Footer.scss';

import Order from '../Order/Order';

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}{' '}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We&apos;re happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
};

export default Footer;
