interface FocusTrapOptions {
    element: () => HTMLElement | null;
    enabled: () => boolean;
}
declare function createFocusTrap({ element, enabled }: FocusTrapOptions): void;
export default createFocusTrap;
//# sourceMappingURL=useFocusTrap.d.ts.map