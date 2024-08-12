import { ModalProps } from '@mantine/core';
import { ReactNode } from 'react';
interface IModalProps extends ModalProps {
    opened: boolean;
    title: ReactNode | string;
    onClose: () => void;
    size?: 'lg' | 'xl' | 'md';
    zIndex?: number;
    centered?: boolean;
}
export declare function Modal({ children, ...props }: IModalProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Modal.d.ts.map