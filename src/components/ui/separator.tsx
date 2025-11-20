"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

function Separator({ className, orientation = "horizontal", decorative = true, style, ...props }: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
    return (
        <SeparatorPrimitive.Root
            data-slot="separator"
            decorative={decorative}
            orientation={orientation}
            className={cn("shrink-0", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className)}
            style={{
                backgroundColor: "#6B7280",
                ...style,
            }}
            {...props}
        />
    );
}

export { Separator };
