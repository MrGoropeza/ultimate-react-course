import './Home.scss';

import { useRef } from 'react';

import Button, { ButtonComponent } from '../components/Button/Button';
import { Footer, Header, Menu } from './components';

const HomePage = () => {
  const buttonRef = useRef<ButtonComponent | null>(null);

  return (
    <main className="container">
      <Header title="Fast React Pizza Co." />
      <Menu />
      <Footer />
      <Button ref={buttonRef}>Hola</Button>
      <button
        type="button"
        onClick={() => {
          buttonRef.current &&
            buttonRef.current.elementRef &&
            buttonRef.current.elementRef.focus();

          buttonRef.current &&
            buttonRef.current.customMethod &&
            buttonRef.current.customMethod();
        }}
      >
        Click
      </button>
    </main>
  );
};

export default HomePage;
