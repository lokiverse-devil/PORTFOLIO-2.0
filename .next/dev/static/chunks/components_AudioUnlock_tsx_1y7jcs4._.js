(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AudioUnlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AudioUnlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/howler/dist/howler.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function AudioUnlock() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioUnlock.useEffect": ()=>{
            const unlock = {
                "AudioUnlock.useEffect.unlock": ()=>{
                    try {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx.state !== 'running') {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx.resume();
                        }
                    } catch (err) {
                        console.warn('AudioContext unlock notice:', err);
                    }
                    window.removeEventListener('pointerdown', unlock);
                    window.removeEventListener('touchstart', unlock);
                    window.removeEventListener('click', unlock);
                    window.removeEventListener('keydown', unlock);
                }
            }["AudioUnlock.useEffect.unlock"];
            window.addEventListener('pointerdown', unlock, {
                passive: true
            });
            window.addEventListener('touchstart', unlock, {
                passive: true
            });
            window.addEventListener('click', unlock, {
                passive: true
            });
            window.addEventListener('keydown', unlock, {
                passive: true
            });
            return ({
                "AudioUnlock.useEffect": ()=>{
                    window.removeEventListener('pointerdown', unlock);
                    window.removeEventListener('touchstart', unlock);
                    window.removeEventListener('click', unlock);
                    window.removeEventListener('keydown', unlock);
                }
            })["AudioUnlock.useEffect"];
        }
    }["AudioUnlock.useEffect"], []);
    return null;
}
_s(AudioUnlock, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AudioUnlock;
var _c;
__turbopack_context__.k.register(_c, "AudioUnlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_AudioUnlock_tsx_1y7jcs4._.js.map