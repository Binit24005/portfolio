// import React from 'react';
// import { cn } from '../../lib/utils';

// const buttonVariants = {
//   default: 'bg-primary text-primary-foreground hover:bg-primary/90',
//   outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
// };

// export const Button = ({ children, variant = 'default', className, ...props }) => {
//   return (
//     <button
//       className={cn(
//         'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
//         'h-10 px-4 py-2',
//         buttonVariants[variant],
//         className
//       )}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };
import React from 'react';
import styled from 'styled-components';

const Button = ({children, className, ...props}) => {
  return (
    <StyledWrapper>
      <button className="button type1" {...props}>
        <span className="btn-txt">{children}</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    height: 35px;           /* Reduced from 46px */
    width: 130px;           /* Reduced from 170px */
    position: relative;
    background-color: transparent;
    cursor: pointer;
    border: 2px solid #252525;
    overflow: hidden;
    border-radius: 30px;
    color: #333;
    transition: all 0.5s ease-in-out;
    
    /* Flexbox for perfect centering */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-txt {
    z-index: 1;
    font-weight: 800;
    font-size: 12px;        /* Added to scale text down */
    letter-spacing: 2px;    /* Reduced from 4px to fit */
  }

  .type1::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.5s ease-in-out;
    background-color: #333;
    border-radius: 30px;
    visibility: hidden;
    height: 10px;
    width: 10px;
    z-index: -1;
  }

  .button:hover {
    box-shadow: 1px 1px 200px #252525;
    color: #fff;
    border: none;
  }

  .type1:hover::after {
    visibility: visible;
    transform: scale(100) translateX(2px);
  }
`;

export default Button;