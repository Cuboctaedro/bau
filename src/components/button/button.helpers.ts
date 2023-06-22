import { ButtonSize, ButtonStyle } from './button.props';

export const buttonClassname = (
    size: ButtonSize,
    style: ButtonStyle,
    classes: CSSModuleClasses,
) => {
    let className = classes.button;
    if (style === 'text') {
        className = `${className} ${classes.text}`;
    } else {
        if (style === 'solid') {
            className = `${className} ${classes.solid}`;
        }
        if (style === 'outline') {
            className = `${className} ${classes.outline}`;
        }
        if (size === 'sm') {
            className = `${className} ${classes.small}`;
        }
        if (size === 'md') {
            className = `${className} ${classes.medium}`;
        }
        if (size === 'lg') {
            className = `${className} ${classes.large}`;
        }
    }
    return className;
};
