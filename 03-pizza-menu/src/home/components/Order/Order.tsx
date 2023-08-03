import './Order.scss';

type OrderProps = {
  closeHour: number;
};

const Order = ({ closeHour }: OrderProps) => {
  return (
    <div className="order">
      <p>We&apos;re open until {closeHour}:00. Come visit us or order online</p>
      <button type="button" className="btn">
        Order
      </button>
    </div>
  );
};

export default Order;
