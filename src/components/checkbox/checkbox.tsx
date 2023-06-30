import { CheckboxProps } from './checkbox.props';
import styles from './checkbox.module.css';

export const Checkbox = ({
    name,
    label,
    value,
    checked,
    onChange,
    disabled = false,
}: CheckboxProps) => {
    return (
        <>
            <input
                id={name}
                name={name}
                type="checkbox"
                value={value}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className={styles.checkbox}
            />
            <label htmlFor={name} className={styles.label}>{label}</label>
        </>
    );
};
