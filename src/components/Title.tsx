import { PropsWithChildren } from 'react';

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className='text-4xl font-extrabold text-center m-4'>{children}</h1>
  );
};

export { Title };
