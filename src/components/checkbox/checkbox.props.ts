export interface CheckboxProps {
    label: string
    name: string
    value: string
    checked: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
    disabled?: boolean
}
