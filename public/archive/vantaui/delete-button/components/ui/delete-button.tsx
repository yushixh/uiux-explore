"use client"

import * as React from "react"
import { CornerDownLeftIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface DeleteButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  showShortcut?: boolean
  shortcutIcon?: React.ReactNode
  shortcutLabel?: string
}

const DeleteButton = React.forwardRef<HTMLButtonElement, DeleteButtonProps>(
  (
    {
      children = "Delete",
      className,
      showShortcut = true,
      shortcutIcon = (
        <CornerDownLeftIcon aria-hidden="true" className="size-3" />
      ),
      shortcutLabel = "Press Enter",
      type = "button",
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      data-slot="delete-button"
      className={cn(
        "inline-flex h-9 cursor-pointer items-center justify-center gap-3 rounded-lg border border-red-600/70 bg-linear-to-b from-red-400 to-red-500 pl-4 pr-2 text-sm font-medium text-white shadow-[inset_0_1px_0_rgb(255_255_255/35%),0_1px_2px_rgb(127_29_29/22%),0_4px_10px_rgb(239_68_68/18%)] transition-[filter,transform,box-shadow] outline-none select-none hover:brightness-105 focus-visible:ring-3 focus-visible:ring-red-400/35 active:translate-y-px active:shadow-[inset_0_1px_0_rgb(255_255_255/25%),0_1px_2px_rgb(127_29_29/18%)] disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {showShortcut && (
        <span
          aria-label={shortcutLabel}
          className="inline-flex px-1 py-0.5 items-center justify-center rounded-sm border border-white/25 bg-white/10 shadow-[inset_0_1px_0_rgb(255_255_255/18%),0_1px_1px_rgb(127_29_29/10%)]"
        >
          {shortcutIcon}
        </span>
      )}
    </button>
  )
)

DeleteButton.displayName = "DeleteButton"

export { DeleteButton }
export type { DeleteButtonProps }
