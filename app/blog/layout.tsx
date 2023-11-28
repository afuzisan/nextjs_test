import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
}

const HomeLayout: FC<Props> = ({ children }) => {
  return (
    <div className="tt"
      style={{
        background: '#ddd',
      }}
    >

      {children}
    </div>
  );
};

export default HomeLayout;