import { Dispatch } from "react"

export type TProps = {
    isOpen: boolean
    title: string
    message?: string
    onSubmit?: () => void
    onCancel?: Dispatch<React.SetStateAction<boolean>>
    submitText?: string
}