/* eslint-disable react/button-has-type */
import { buttonClassname } from './button.helpers';
import styles from './button.module.css';
import { ButtonProps } from './button.props';

export const Button = ({
    children,
    type = 'button',
    size = 'md',
    style = 'solid',
    onClick,
    disabled = false,
}: ButtonProps) => {
    const className = buttonClassname(size, style, styles);

    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    type: 'button',
    size: 'md',
    style: 'solid',
    disabled: false,
} as ButtonProps;
