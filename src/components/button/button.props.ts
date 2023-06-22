export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonStyle = 'solid' | 'outline' | 'text';

export interface ButtonProps {
    children: React.ReactNode
    type?: ButtonType
    size?: ButtonSize
    style?: ButtonStyle
    onClick: React.MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
}
