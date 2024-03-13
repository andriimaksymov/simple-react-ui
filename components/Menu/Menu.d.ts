import { ReactNode } from '../../../node_modules/react';
export type MenuOrigin = {
    vertical: "top" | "center" | "bottom";
    horizontal: "left" | "center" | "right";
};
export type MenuPosition = {
    top: number;
    left: number;
};
export type MenuProps = {
    /**
     * An HTML element, or a function that returns one. It's used to set the position of the menu.
     */
    anchorEl?: Element;
    /**
     * This is the point on the anchor where the popover's
     * `anchorEl` will attach to. This is not used when the
     * anchorReference is 'anchorPosition'.
     *
     * Options:
     * vertical: [top, center, bottom];
     * horizontal: [left, center, right].
     * @default {
     *   vertical: 'top',
     *   horizontal: 'left',
     * }
     */
    anchorOrigin?: MenuOrigin;
    /**
     * The position that may be used to set the position of the popover.
     * The coordinates are relative to the application's client area.
     */
    anchorPosition?: MenuPosition;
    /**
     * Override or extend the style applied to the component.
     */
    className?: string;
    /**
     * If 'true', the component is shown.
     */
    isOpen: boolean;
    /**
     * This is the point on the popover which
     * will attach to the anchor's origin.
     *
     * Options:
     * vertical: [top, center, bottom, x(px)];
     * horizontal: [left, center, right, x(px)].
     * @default {
     *   vertical: 'top',
     *   horizontal: 'left',
     * }
     */
    transformOrigin?: MenuOrigin;
    /**
     * If 'true' menu width contain target element width
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Shadow depth, corresponds to `dp` in the spec.
     * It accepts values between 0 and 5 inclusive.
     * @default 1
     */
    elevation?: 1 | 2 | 3 | 4 | 5;
    /**
     * Menu contents, normally MenuItems.
     */
    children?: ReactNode;
    /**
     * Callback fired when the component requests to be closed.
     */
    onClose?: () => void;
};
/**
 * Component for displaying a menu.
 * @param {MenuProps} props - The props for the Menu component.
 * @returns {JSX.Element} - The rendered Menu component.
 */
declare const Menu: (props: MenuProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element | null;
export default Menu;
