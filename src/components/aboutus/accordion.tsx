"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

// ---------- Context ----------

type AccordionType = "single" | "multiple"

interface AccordionContextValue {
    openItems: string[]
    toggleItem: (value: string) => void
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null)

function useAccordionContext() {
    const ctx = React.useContext(AccordionContext)
    if (!ctx) {
        throw new Error("Accordion components must be used within <Accordion>")
    }
    return ctx
}

// ---------- Item Context (tracks value + open state per item) ----------

interface AccordionItemContextValue {
    value: string
    isOpen: boolean
}

const AccordionItemContext = React.createContext<AccordionItemContextValue | null>(null)

function useAccordionItemContext() {
    const ctx = React.useContext(AccordionItemContext)
    if (!ctx) {
        throw new Error("AccordionTrigger/AccordionContent must be used within <AccordionItem>")
    }
    return ctx
}

// ---------- Accordion Root ----------

interface AccordionSingleProps {
    type: "single"
    collapsible?: boolean
    defaultValue?: string
    value?: string
    onValueChange?: (value: string) => void
}

interface AccordionMultipleProps {
    type: "multiple"
    defaultValue?: string[]
    value?: string[]
    onValueChange?: (value: string[]) => void
}

type AccordionProps = (AccordionSingleProps | AccordionMultipleProps) &
    Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> & {
        children: React.ReactNode
    }

function Accordion(props: AccordionProps) {
    const { className, children, type, ...rest } = props as AccordionProps & {
        type: AccordionType
    }

    // Separate controlled/uncontrolled + single/multiple handling
    const isControlled = "value" in props && props.value !== undefined

    const [internalValue, setInternalValue] = React.useState<string[]>(() => {
        if (type === "single") {
            const dv = (props as AccordionSingleProps).defaultValue
            return dv ? [dv] : []
        } else {
            const dv = (props as AccordionMultipleProps).defaultValue
            return dv ?? []
        }
    })

    const openItems = isControlled
        ? type === "single"
            ? [(props as AccordionSingleProps).value].filter(Boolean) as string[]
            : ((props as AccordionMultipleProps).value ?? [])
        : internalValue

    const toggleItem = React.useCallback(
        (itemValue: string) => {
            if (type === "single") {
                const collapsible = (props as AccordionSingleProps).collapsible ?? false
                const isOpen = openItems.includes(itemValue)
                const next = isOpen && collapsible ? "" : itemValue

                if (!isControlled) {
                    setInternalValue(next ? [next] : [])
                }
                ; (props as AccordionSingleProps).onValueChange?.(next)
            } else {
                const isOpen = openItems.includes(itemValue)
                const next = isOpen
                    ? openItems.filter((v) => v !== itemValue)
                    : [...openItems, itemValue]

                if (!isControlled) {
                    setInternalValue(next)
                }
                ; (props as AccordionMultipleProps).onValueChange?.(next)
            }
        },
        [type, openItems, isControlled, props],
    )

    // strip non-DOM props before spreading
    const {
        defaultValue: _dv,
        value: _v,
        onValueChange: _ovc,
        collapsible: _c,
        ...domProps
    } = rest as any

    return (
        <AccordionContext.Provider value={{ openItems, toggleItem }}>
            <div className={cn(className)} {...domProps}>
                {children}
            </div>
        </AccordionContext.Provider>
    )
}

// ---------- AccordionItem ----------

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
    ({ className, value, children, ...props }, ref) => {
        const { openItems } = useAccordionContext()
        const isOpen = openItems.includes(value)

        return (
            <AccordionItemContext.Provider value={{ value, isOpen }}>
                <div
                    ref={ref}
                    data-state={isOpen ? "open" : "closed"}
                    className={cn("border-b border-black! items-start!", className)}
                    {...props}
                >
                    {children}
                </div>
            </AccordionItemContext.Provider>
        )
    },
)
AccordionItem.displayName = "AccordionItem"

// ---------- AccordionTrigger ----------

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
    ({ className, children, onClick, ...props }, ref) => {
        const { toggleItem } = useAccordionContext()
        const { value, isOpen } = useAccordionItemContext()

        return (
            <h3 className="flex">
                <button
                    ref={ref}
                    type="button"
                    data-state={isOpen ? "open" : "closed"}
                    aria-expanded={isOpen}
                    onClick={(e) => {
                        onClick?.(e)
                        toggleItem(value)
                    }}
                    className={cn(
                        "flex flex-1 flex-row! text-black! justify-between py-4 font-medium transition-all border-black hover:underline [&[data-state=open]>div>svg]:rotate-180",
                        className,
                    )}
                    {...props}
                >
                    <div className="flex flex-row items-center justify-between w-full">
                        {children}
                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </div>
                </button>
            </h3>
        )
    },
)
AccordionTrigger.displayName = "AccordionTrigger"


interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> { }

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
    ({ className, children, ...props }, ref) => {
        const { isOpen } = useAccordionItemContext()
        const innerRef = React.useRef<HTMLDivElement>(null)
        const [height, setHeight] = React.useState<number | undefined>(isOpen ? undefined : 0)

        React.useEffect(() => {
            if (!innerRef.current) return
            if (isOpen) {
                setHeight(innerRef.current.scrollHeight)
                // after transition, allow auto height for dynamic content
                const timeout = setTimeout(() => setHeight(undefined), 200)
                return () => clearTimeout(timeout)
            } else {
                // set explicit height first (from current), then collapse to 0
                setHeight(innerRef.current.scrollHeight)
                requestAnimationFrame(() => setHeight(0))
            }
        }, [isOpen])

        return (
            <div
                ref={ref}
                data-state={isOpen ? "open" : "closed"}
                style={{
                    height: height === undefined ? "auto" : `${height}px`,
                    overflow: "hidden",
                    transition: "height 200ms ease-out",
                }}
                className="text-sm"
                {...props}
            >
                <div ref={innerRef} className={cn("pb-4 pt-0 text-black text-start!", className)}>
                    {children}
                </div>
            </div>
        )
    },
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }