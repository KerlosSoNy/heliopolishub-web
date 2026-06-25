"use client"

import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState, memo, useCallback } from "react"
import { cn } from "@/lib/utils"
import {
    Gauge,
} from "lucide-react"
import AnimatedLinkButton from "./atoms/AnimatedButton"
import Image from "next/image"

// Sample diecast car data
const sampleDiecastCars = [
    // KEY PRODUCTS - featured cars (1-5)
    {
        id: 1,
        name: "Kaido House X Mini GT BMW M3 E30",
        price: "1350 EGP",
        score: 98,
        image: "/images/cars/3.JPG"
    },
    {
        id: 2,
        name: "Kaido House Nissan Skyline GT-R R34",
        price: "1350 EGP",
        score: 92,
        image: "/images/cars/r34.webp"
    },
    {
        id: 3,
        name: "Hot Wheels Premuim Testarossa",
        price: "800 EGP",
        score: 94,
        image: "/images/cars/testarossa.jpg"
    },
    {
        id: 4,
        name: "Mini Gt Porsche 911 Dukar",
        price: "950 EGP",
        score: 93,
        image: "/images/cars/miniGt.jpg"
    },
    {
        id: 5,
        name: "Mj Bmw E46 Need For Speed",
        price: "1450 EGP",
        score: 91,
        image: "/images/cars/Mj.webp"
    },

    // BACKGROUND PRODUCTS (6-20)
    {
        id: 6,
        name: "Chevrolet Corvette C8",
        price: "$19.99",
        score: 88,
        image: "/images/cars/1.JPG"
    },
    {
        id: 7,
        name: "BMW M3 E30",
        price: "$20.99",
        score: 89,
        image: "/images/cars/2.JPG"
    },
    {
        id: 8,
        name: "Toyota Supra MK4",
        price: "$22.99",
        score: 90,
        image: "/images/cars/3.JPG"
    },
    {
        id: 9,
        name: "Mazda RX-7 FD",
        price: "$21.99",
        score: 87,
        image: "/images/cars/4.JPG"
    },
    {
        id: 10,
        name: "Dodge Challenger SRT",
        price: "$20.99",
        score: 86,
        image: "/images/cars/5.JPG"
    },
    {
        id: 11,
        name: "Audi R8 V10",
        price: "$23.99",
        score: 90,
        image: "/images/cars/6.JPG"
    },
    {
        id: 12,
        name: "McLaren F1",
        price: "$27.99",
        score: 96,
        image: "/images/cars/7.JPG"
    },
    {
        id: 13,
        name: "Honda NSX",
        price: "$21.99",
        score: 88,
        image: "/images/cars/8.JPG"
    },
    {
        id: 14,
        name: "Mercedes-AMG GT",
        price: "$24.99",
        score: 91,
        image: "/images/cars/9.JPG"
    },
    {
        id: 15,
        name: "Bugatti Veyron",
        price: "$29.99",
        score: 97,
        image: "/images/cars/10.JPG"
    },
]

const keyProducts = sampleDiecastCars.slice(0, 5)
const backgroundProducts = sampleDiecastCars.slice(5)

interface ProductMetadata {
    name: string
    price: string
    score: number
}

function getRandomEdgePoint(containerSize: { width: number; height: number }, edge: 'top' | 'bottom' | 'left' | 'right') {
    const margin = 100
    switch (edge) {
        case 'top':
            return { x: Math.random() * containerSize.width, y: -margin }
        case 'bottom':
            return { x: Math.random() * containerSize.width, y: containerSize.height + margin }
        case 'left':
            return { x: -margin, y: Math.random() * containerSize.height }
        case 'right':
            return { x: containerSize.width + margin, y: Math.random() * containerSize.height }
    }
}

function createCurvedPath(start: { x: number; y: number }, end: { x: number; y: number }) {
    const curveVariation = 30 + Math.random() * 60
    const midX = (start.x + end.x) / 2 + (Math.random() - 0.5) * curveVariation
    const midY = (start.y + end.y) / 2 + (Math.random() - 0.5) * curveVariation

    return [
        start,
        { x: midX, y: midY },
        end
    ]
}

interface AnimatedProductProps {
    product: typeof sampleDiecastCars[0]
    isKeyProduct?: boolean
    containerSize: { width: number; height: number }
    onReachCenter?: (metadata: ProductMetadata) => void
    onComplete?: () => void
}

function AnimatedProduct({ product, isKeyProduct = false, containerSize, onReachCenter, onComplete }: AnimatedProductProps) {
    const controls = useAnimation()

    useEffect(() => {
        const animateProduct = async () => {
            if (isKeyProduct) {
                const edges: Array<'top' | 'bottom' | 'left' | 'right'> = ['top', 'bottom', 'left', 'right']
                const entryEdge = edges[Math.floor(Math.random() * edges.length)]

                const startPoint = getRandomEdgePoint(containerSize, entryEdge)
                const centerPoint = { x: containerSize.width / 2 - 40, y: containerSize.height / 2 - 40 }

                await controls.set({
                    x: startPoint.x,
                    y: startPoint.y,
                    scale: 0.7,
                    filter: "blur(4px)",
                    opacity: 0.8
                })

                await controls.start({
                    x: centerPoint.x,
                    y: centerPoint.y,
                    scale: 1.8,
                    filter: "blur(0px)",
                    opacity: 1,
                    transition: {
                        duration: 3 + Math.random() * 2,
                        ease: "easeInOut",
                        type: "tween"
                    }
                })

                onReachCenter?.({
                    name: product.name,
                    price: product.price,
                    score: product.score,
                })

                await new Promise(resolve => setTimeout(resolve, 3000))

                const exitEdges: Array<'top' | 'bottom' | 'left' | 'right'> = ['top', 'bottom', 'left', 'right']
                const randomExitEdge = exitEdges[Math.floor(Math.random() * exitEdges.length)]
                const randomExitPoint = getRandomEdgePoint(containerSize, randomExitEdge)

                await controls.start({
                    x: randomExitPoint.x,
                    y: randomExitPoint.y,
                    scale: 0.7,
                    filter: "blur(4px)",
                    opacity: 0.5,
                    transition: {
                        duration: 2.5 + Math.random() * 1,
                        ease: "easeInOut",
                        type: "tween"
                    }
                })

            } else {
                const animateLoop = async () => {
                    while (true) {
                        const edges: Array<'top' | 'bottom' | 'left' | 'right'> = ['top', 'bottom', 'left', 'right']
                        const entryEdge = edges[Math.floor(Math.random() * edges.length)]
                        const exitEdge = edges[Math.floor(Math.random() * edges.length)]

                        const startPoint = getRandomEdgePoint(containerSize, entryEdge)
                        const endPoint = getRandomEdgePoint(containerSize, exitEdge)
                        const path = createCurvedPath(startPoint, endPoint)

                        await controls.set({
                            x: startPoint.x,
                            y: startPoint.y,
                            scale: 0.5 + Math.random() * 0.4,
                            filter: "blur(0px)",
                            opacity: 0.6 + Math.random() * 0.4
                        })

                        for (let i = 1; i < path.length; i++) {
                            await controls.start({
                                x: path[i].x,
                                y: path[i].y,
                                transition: {
                                    duration: 2 + Math.random() * 2,
                                    ease: "linear",
                                    type: "tween"
                                }
                            })
                        }

                        await new Promise(resolve => setTimeout(resolve, 100))
                    }
                }

                animateLoop()
            }

            if (isKeyProduct) {
                onComplete?.()
            }
        }

        animateProduct()
    }, [isKeyProduct, containerSize])

    return (
        <motion.div
            className="absolute w-24 h-24 md:w-28 md:h-28"
            animate={controls}
        >
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                <Image
                    width={200}
                    height={200}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>
        </motion.div>
    )
}

interface CircularProgressProps {
    value: number
    size?: number
    className?: string
}

function CircularProgress({ value, size = 32, className }: CircularProgressProps) {
    const percentage = Math.min(Math.max(value, 0), 100)

    return (
        <div
            className={cn("relative flex items-center justify-center", className)}
            style={{ width: size, height: size }}
        >
            <div
                className="absolute inset-0 rounded-full border-[2.5px]"
                style={{ borderColor: 'hsl(var(--muted))' }}
            />
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    background: `conic-gradient(from 0deg, hsl(142 76% 36%) 0deg ${(percentage * 3.6)}deg, transparent ${(percentage * 3.6)}deg 360deg)`,
                    mask: `radial-gradient(circle at center, transparent ${size / 2 - 3}px, black ${size / 2 - 2}px)`,
                    WebkitMask: `radial-gradient(circle at center, transparent ${size / 2 - 3}px, black ${size / 2 - 2}px)`
                }}
            />
            <span className="relative text-xs font-bold text-green-600 dark:text-green-400 z-10">
                {value}
            </span>
        </div>
    )
}

interface MetadataDisplayProps {
    metadata: ProductMetadata
}

const MetadataDisplay = memo(function MetadataDisplay({ metadata }: MetadataDisplayProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
            style={{ willChange: 'transform, opacity' }}
        >
            <div className="relative w-20 h-20 md:w-24 md:h-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: 15 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="absolute -left-8 top-1/2 transform -translate-x-full -translate-y-1/2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 rounded-lg p-2.5 shadow-lg"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <Gauge className="w-3 h-3 text-white" />
                        </div>
                        <div className="text-nowrap">
                            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Price</div>
                            <div className="text-sm font-bold text-gray-900 dark:text-white">{metadata.price}</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: -15 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="absolute -right-14.5 md:-right-16.5 top-1/2 transform translate-x-full -translate-y-1/2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 rounded-lg p-2.5 shadow-lg"
                >
                    <div className="flex items-center gap-2">
                        <CircularProgress value={metadata.score} size={32} />
                        <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Rating</div>
                            <div className="text-sm font-bold text-green-600 dark:text-green-400">{metadata.score}/100</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.0, duration: 0.3 }}
                    className="absolute -top-4 ms-4 left-1/2 transform -translate-x-1/2 -translate-y-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 rounded-lg p-3 shadow-lg min-w-[200px] max-w-[280px]"
                >
                    <div className="text-sm font-semibold text-gray-900 dark:text-white text-center line-clamp-2 leading-tight">
                        {metadata.name}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
})


export function DiecastHeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [containerSize, setContainerSize] = useState({ width: 800, height: 600 })
    const [currentMetadata, setCurrentMetadata] = useState<ProductMetadata | null>(null)
    const [keyProductIndex, setKeyProductIndex] = useState(0)
    const [isKeyProductAnimating, setIsKeyProductAnimating] = useState(true)
    const [backgroundProductInstances] = useState(() => {
        return Array.from({ length: 15 }, (_, index) => ({
            id: `bg-stable-${index}`,
            product: backgroundProducts[index % backgroundProducts.length]
        }))
    })

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null
        const updateSize = () => {
            if (timeout) clearTimeout(timeout)
            timeout = setTimeout(() => {
                if (containerRef.current) {
                    const rect = containerRef.current.getBoundingClientRect()
                    setContainerSize({ width: rect.width, height: rect.height })
                }
            }, 100)
        }
        updateSize()
        window.addEventListener('resize', updateSize)
        return () => {
            window.removeEventListener('resize', updateSize)
            if (timeout) clearTimeout(timeout)
        }
    }, [])

    const handleKeyProductComplete = useCallback(() => {
        setIsKeyProductAnimating(false)
        setTimeout(() => {
            setKeyProductIndex((prev) => (prev + 1) % keyProducts.length)
            setIsKeyProductAnimating(true)
        }, 100)
    }, [])
    const handleProductReachCenter = useCallback((metadata: ProductMetadata) => {
        setCurrentMetadata(metadata)
        setTimeout(() => {
            setCurrentMetadata(null)
        }, 3000)
    }, [])
    return (
        <section className="relative container flex items-center py-20 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-background via-background to-muted/30" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid xl:grid-cols-2 gap-4 xl:gap-12 items-center min-h-[60vh]">
                    <motion.div
                        className="flex flex-col lg:items-start items-center gap-6 text-center lg:text-left "
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="bg-linear-to-r from-secondary to-secondary/70 bg-clip-text text-transparent">
                                Premium Diecast Cars
                            </span>
                            <br />
                            <span className="bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent">
                                1:64 Scale Collection
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Discover our curated collection of highly detailed 1:64 scale diecast model cars. From classic muscle cars to modern supercars, find your perfect miniature masterpiece.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <AnimatedLinkButton
                                label="Browse Collection"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div
                            ref={containerRef}
                            className="relative w-full h-96 xl:h-100 lg:h-125 rounded-2xl overflow-hidden border border-border/50"
                            style={{
                                background: `
                                radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.08), transparent 60%),
                                radial-gradient(circle at 70% 80%, hsl(var(--accent) / 0.08), transparent 60%),
                                linear-gradient(135deg, hsl(var(--background)), hsl(var(--muted) / 0.2))
                                `,
                                willChange: 'transform',
                                transform: 'translate3d(0, 0, 0)'
                            }}
                        >
                            {backgroundProductInstances.map((item) => (
                                <AnimatedProduct
                                    key={item.id}
                                    product={item.product}
                                    isKeyProduct={false}
                                    containerSize={containerSize}
                                />
                            ))}
                            {isKeyProductAnimating && (
                                <AnimatedProduct
                                    key={`key-${keyProducts[keyProductIndex].id}-${keyProductIndex}`}
                                    product={keyProducts[keyProductIndex]}
                                    isKeyProduct={true}
                                    containerSize={containerSize}
                                    onReachCenter={handleProductReachCenter}
                                    onComplete={handleKeyProductComplete}
                                />
                            )}
                            <AnimatePresence mode="wait">
                                {currentMetadata && (
                                    <MetadataDisplay metadata={currentMetadata} />
                                )}
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-linear-to-t from-background/10 via-transparent to-background/10 pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default function DiecastHomePage() {
    return <DiecastHeroSection />
}
