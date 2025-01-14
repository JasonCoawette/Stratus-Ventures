'use client';

import { cn } from "@/utils/utils";

type IconButtonProps = {
  iconName: string;
  onClick: () => void;
  className?: string;
};

export default function IconButton({ iconName, onClick, className }: IconButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn("w-fit h-fit flex-shrink-0 flex items-center justify-center transition-colors duration-200", className)}
            aria-label={"An " + iconName + " icon"}
        >

        </button>
    );
}