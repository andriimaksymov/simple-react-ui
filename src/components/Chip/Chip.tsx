import clsx from "clsx";
import { forwardRef, UIEvent } from "react";

import IconButton from "../IconButton";

import styles from "./Chip.module.sass";
import { ChipProps } from "../../../types/Chip";

const CloseIcon = ({ ...props }) => (
  <svg {...props} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.45956 7.45955C7.85008 7.06903 8.48325 7.06903 8.87377 7.45955L14 12.5858L19.1262 7.45955C19.5168 7.06903 20.1499 7.06903 20.5404 7.45955C20.931 7.85007 20.931 8.48324 20.5404 8.87376L15.4142 14L20.5404 19.1262C20.931 19.5167 20.931 20.1499 20.5404 20.5404C20.1499 20.931 19.5168 20.931 19.1262 20.5404L14 15.4142L8.87377 20.5404C8.48325 20.931 7.85008 20.931 7.45956 20.5404C7.06904 20.1499 7.06904 19.5167 7.45956 19.1262L12.5858 14L7.45956 8.87376C7.06904 8.48324 7.06904 7.85007 7.45956 7.45955Z" />
  </svg>
);

/**
 * Chip component for displaying tags or small interactive elements.
 * @param {ChipProps} props The props for the Chip component.
 * @param {React.Ref<HTMLDivElement>} ref The ref for the Chip.
 * @returns {JSX.Element} The Chip component.
 */

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      className,
      color = "default",
      deleteIcon,
      disabled,
      round,
      variant = "contained",
      children,
      onDelete,
      onClick,
      ...props
    },
    ref,
  ) => {
    const classNames = clsx(
      styles.root,
      className,
      color && styles[color],
      round && styles.round,
      {
        [styles.disabled]: disabled,
        [styles[variant]]: variant,
        [styles.clickable]: onClick,
      },
    );

    const handleDelete = (e: UIEvent<HTMLSpanElement>) => {
      e.stopPropagation();
      onDelete?.();
    };

    return (
      <div
        ref={ref}
        className={classNames}
        {...(onClick && { onClick })}
        {...props}
      >
        <div className={styles.inner}>{children}</div>
        {onDelete && (
          <IconButton
            component="span"
            className={styles.button}
            icon={deleteIcon ?? CloseIcon}
            onClick={handleDelete}
          />
        )}
      </div>
    );
  },
);

export default Chip;
