import { vi } from "vitest";

// jsdom does not implement PointerEvent; without this, fireEvent.pointer* drops clientX/Y.
class PointerEventPolyfill extends MouseEvent {
    readonly pointerId: number;
    readonly width: number;
    readonly height: number;
    readonly pressure: number;
    readonly tangentialPressure: number;
    readonly tiltX: number;
    readonly tiltY: number;
    readonly twist: number;
    readonly pointerType: string;
    readonly isPrimary: boolean;

    constructor(type: string, props: PointerEventInit = {}) {
        super(type, props);
        this.pointerId = props.pointerId ?? 1;
        this.width = props.width ?? 1;
        this.height = props.height ?? 1;
        this.pressure = props.pressure ?? 0.5;
        this.tangentialPressure = props.tangentialPressure ?? 0;
        this.tiltX = props.tiltX ?? 0;
        this.tiltY = props.tiltY ?? 0;
        this.twist = props.twist ?? 0;
        this.pointerType = props.pointerType ?? "mouse";
        this.isPrimary = props.isPrimary ?? true;
    }
}

Object.defineProperty(window, "PointerEvent", {
    configurable: true,
    writable: true,
    value: PointerEventPolyfill,
});
Object.defineProperty(globalThis, "PointerEvent", {
    configurable: true,
    writable: true,
    value: PointerEventPolyfill,
});

// jest-canvas-mock is strict-mode and expects jest on globalThis (patched in node_modules).
(globalThis as any).jest = vi;

await import("vitest-canvas-mock");

(globalThis as any).jest = vi;

globalThis.ResizeObserver = vi.fn().mockImplementation(function (this: ResizeObserver) {
    this.observe = vi.fn();
    this.unobserve = vi.fn();
    this.disconnect = vi.fn();
}) as unknown as typeof ResizeObserver;

Image.prototype.decode = () => new Promise(resolve => window.setTimeout(resolve, 10));
