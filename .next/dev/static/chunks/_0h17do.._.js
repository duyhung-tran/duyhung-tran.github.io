(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/my-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function MyButton(props) {
    if (props.variant == "blue-button-full-width") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: props.link,
            target: props.target,
            className: `inline-block w-full text-center bg-[var(--main-colour)] hover:bg-[var(--main-darkercolour)] transition-colors rounded-full text-white font-medium py-[10px] px-4 ${props.textSize ?? "text-xs"}`,
            children: props.text
        }, void 0, false, {
            fileName: "[project]/components/my-button.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    } else if (props.variant == "blue-button") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: props.link,
            target: props.target,
            className: `text-center bg-[var(--main-colour)] hover:bg-[var(--main-darkercolour)] rounded-full text-white font-medium py-[10px] px-4 ${props.textSize ?? "text-xs"}`,
            children: props.text
        }, void 0, false, {
            fileName: "[project]/components/my-button.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this);
    } else if (props.variant == "blue-button-outline") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: props.link,
            target: props.target,
            className: `text-center shadow-[inset_0_0_0_1px_var(--main-colour)] hover:bg-[var(--main-colour)] rounded-full text-[var(--main-colour)] hover:text-white font-medium py-[10px] px-4 ${props.textSize ?? "text-xs"}`,
            children: props.text
        }, void 0, false, {
            fileName: "[project]/components/my-button.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this);
    } else if (props.variant == "blue-button-outline-bg") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: props.link,
            target: props.target,
            className: `text-center shadow-[inset_0_0_0_1px_var(--main-colour)] bg-white backdrop-blur-md hover:bg-[var(--main-colour)] rounded-full text-[var(--main-colour)] hover:text-white font-medium py-[10px] px-4 ${props.textSize ?? "text-xs"}`,
            children: props.text
        }, void 0, false, {
            fileName: "[project]/components/my-button.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    } else if (props.variant == "blue-button-outline-full-width") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: props.link,
            target: props.target,
            className: `inline-block w-full text-center shadow-[inset_0_0_0_1px_var(--main-colour)] hover:bg-[var(--main-colour)] rounded-full text-[var(--main-colour)] hover:text-white font-medium py-[10px] px-4 ${props.textSize ?? "text-xs"}`,
            children: props.text
        }, void 0, false, {
            fileName: "[project]/components/my-button.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this);
    } else if (props.variant == "hyperlink") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: props.link,
            target: props.target,
            className: `bg-transparent rounded-full text-[var(--main-colour)] leading-loose hover:underline font-medium p-0 ${props.textSize ?? "text-sm"}`,
            children: props.text
        }, void 0, false, {
            fileName: "[project]/components/my-button.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this);
    } else if (props.variant == "grey-hyperlink") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: props.link,
            target: props.target,
            className: `bg-transparent rounded-full text-[var(--colour-bodytext-3)] leading-loose hover:text-[var(--main-colour)] hover:underline font-medium flex items-center p-0 ${props.textSize ?? "text-sm"}`,
            children: props.text
        }, void 0, false, {
            fileName: "[project]/components/my-button.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    } else if (props.variant == "grey-hyperlink-active") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: `bg-transparent rounded-full text-[var(--colour-bodytext)] leading loose flex items-center font-medium p-0 ${props.textSize ?? "text-sm"}`,
            children: props.text
        }, void 0, false, {
            fileName: "[project]/components/my-button.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this);
    }
}
_c = MyButton;
var _c;
__turbopack_context__.k.register(_c, "MyButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/my-button.tsx [app-client] (ecmascript)");
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-40 pb-28 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full justify-between flex",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-[var(--colour-bodytext-2)]",
                    children: "I’d love to hear from you. Let’s connect!"
                }, void 0, false, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/footer.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-7"
            }, void 0, false, {
                fileName: "[project]/components/footer.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row w-full justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "hyperlink",
                        text: "LinkedIn",
                        link: "https://www.linkedin.com/in/hung-tran-profile",
                        target: "_blank",
                        textSize: "text-sm"
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-1"
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "hyperlink",
                        text: "GitHub",
                        link: "https://github.com/hungiie",
                        target: "_blank",
                        textSize: "text-sm"
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-1"
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "hyperlink",
                        text: "d.hungtran12@gmail.com",
                        link: "mailto:d.hungtran12@gmail.com",
                        target: "_blank",
                        textSize: "text-sm"
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-1"
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "hyperlink",
                        text: "Resume",
                        link: "https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing",
                        target: "_blank",
                        textSize: "text-sm"
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/footer.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/project-thumbnail2.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectThumbnail2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/my-button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function ProjectThumbnail2(props) {
    if (props.isLink == "image-link") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-8 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[var(--colour-bodytext-3)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--main-colour)] mb-4 leading-loose",
                            children: props.name
                        }, void 0, false, {
                            fileName: "[project]/components/project-thumbnail2.tsx",
                            lineNumber: 24,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[var(--colour-bodytext-3)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--colour-bodytext)] mb-4 leading-loose",
                            children: [
                                "(",
                                props.type,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/project-thumbnail2.tsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/project-thumbnail2.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--colour-bodytext)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--colour-bodytext)] leading-loose",
                        children: props.desc
                    }, void 0, false, {
                        fileName: "[project]/components/project-thumbnail2.tsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/project-thumbnail2.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4"
                }, void 0, false, {
                    fileName: "[project]/components/project-thumbnail2.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "relative block overflow-hidden group mt-auto bg-[var(--container-bg)] rounded-3xl shadow-[0px_0px_15px_rgba(0,0,0,0.01)] 2xl:shadow-[0px_0px_35px_rgba(0,0,0,0.01)]",
                    href: props.link,
                    target: props.target,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: props.imageSrc,
                            alt: props.name,
                            width: 1640,
                            height: 1228,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/components/project-thumbnail2.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-x-0 bottom-0 h-[30%] flex items-center justify-center opacity-0 transition-all duration-100 ease-out group-hover:opacity-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                link: props.link,
                                text: `Open ${props.name}`,
                                textSize: "text-sm",
                                target: props.target,
                                variant: "blue-button"
                            }, void 0, false, {
                                fileName: "[project]/components/project-thumbnail2.tsx",
                                lineNumber: 50,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/project-thumbnail2.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/project-thumbnail2.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/project-thumbnail2.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, this);
    } else if (props.isLink == "video-link") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-8 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[var(--colour-bodytext-3)] md:text-[var(--colour-bodytext-4)] mb-4 leading-loose md:group-hover:text-[var(--main-colour)]",
                            children: props.name
                        }, void 0, false, {
                            fileName: "[project]/components/project-thumbnail2.tsx",
                            lineNumber: 61,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[var(--colour-bodytext-3)] md:text-[var(--colour-bodytext-4)] mb-4 md:group-hover:text-[var(--colour-bodytext)] leading-loose",
                            children: [
                                "(",
                                props.type,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/project-thumbnail2.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/project-thumbnail2.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--colour-bodytext)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--colour-bodytext)] leading-loose",
                        children: props.desc
                    }, void 0, false, {
                        fileName: "[project]/components/project-thumbnail2.tsx",
                        lineNumber: 69,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/project-thumbnail2.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4"
                }, void 0, false, {
                    fileName: "[project]/components/project-thumbnail2.tsx",
                    lineNumber: 73,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "relative block overflow-hidden group mt-auto bg-[var(--container-bg)] rounded-3xl shadow-[0px_0px_15px_rgba(0,0,0,0.01)] 2xl:shadow-[0px_0px_35px_rgba(0,0,0,0.01)]",
                    href: props.link,
                    target: props.target,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            className: `w-full h-full object-cover !bg-transparent block`,
                            style: {
                                clipPath: "inset(-1px -1px)"
                            },
                            autoPlay: true,
                            muted: true,
                            loop: true,
                            playsInline: true,
                            poster: props.imageSrcPoster,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: props.imageSrc,
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/components/project-thumbnail2.tsx",
                                lineNumber: 76,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/project-thumbnail2.tsx",
                            lineNumber: 75,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-x-0 bottom-0 h-[30%] flex items-center justify-center opacity-0 transition-all duration-100 ease-out group-hover:opacity-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                link: props.link,
                                text: `Open ${props.name}`,
                                textSize: "text-sm",
                                target: props.target,
                                variant: "blue-button"
                            }, void 0, false, {
                                fileName: "[project]/components/project-thumbnail2.tsx",
                                lineNumber: 92,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/project-thumbnail2.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/project-thumbnail2.tsx",
                    lineNumber: 74,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/project-thumbnail2.tsx",
            lineNumber: 59,
            columnNumber: 13
        }, this);
    }
}
_c = ProjectThumbnail2;
var _c;
__turbopack_context__.k.register(_c, "ProjectThumbnail2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/slide-up.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SlideUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SlideUp({ children, delay = 0 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideUp.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "SlideUp.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                    }
                }
            }["SlideUp.useEffect"], {
                threshold: 0.3
            });
            if (ref.current) observer.observe(ref.current);
            return ({
                "SlideUp.useEffect": ()=>{
                    if (ref.current) observer.unobserve(ref.current);
                }
            })["SlideUp.useEffect"];
        }
    }["SlideUp.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            transitionDelay: `${delay}ms`
        },
        className: `
        transition-all duration-400 ease-out
        ${visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-sm"}
      `,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/slide-up.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(SlideUp, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c = SlideUp;
var _c;
__turbopack_context__.k.register(_c, "SlideUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/slide-up-nothres.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SlideUpNoThres
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SlideUpNoThres({ children, delay = 0 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideUpNoThres.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "SlideUpNoThres.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                    }
                }
            }["SlideUpNoThres.useEffect"], {
                threshold: 0
            });
            if (ref.current) observer.observe(ref.current);
            return ({
                "SlideUpNoThres.useEffect": ()=>{
                    if (ref.current) observer.unobserve(ref.current);
                }
            })["SlideUpNoThres.useEffect"];
        }
    }["SlideUpNoThres.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            transitionDelay: `${delay}ms`
        },
        className: `
        transition-all duration-400 ease-out
        ${visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-sm"}
      `,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/slide-up-nothres.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(SlideUpNoThres, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c = SlideUpNoThres;
var _c;
__turbopack_context__.k.register(_c, "SlideUpNoThres");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DotsMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function DotsMenu() {
    _s();
    const [openMenu, setOpenMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpenMenu(!openMenu),
                className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--nav-border)] transition text-[var(--main-colour)] text-2xl",
                "aria-label": "Open menu",
                children: "⋮"
            }, void 0, false, {
                fileName: "[project]/components/menu.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            openMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-0 bg-[var(--background)] border border-[var(--nav-border)] rounded-2xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/about",
                        className: "block w-50 px-4 py-4 text-sm text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)]",
                        children: "About me"
                    }, void 0, false, {
                        fileName: "[project]/components/menu.tsx",
                        lineNumber: 20,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing",
                        target: "_blank",
                        className: "w-full block px-4 py-4 text-sm text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)]",
                        children: "Resume"
                    }, void 0, false, {
                        fileName: "[project]/components/menu.tsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/menu.tsx",
                lineNumber: 19,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/menu.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_s(DotsMenu, "qV1mtfM2fjcqS+QRhZwG0vvhG2w=");
_c = DotsMenu;
var _c;
__turbopack_context__.k.register(_c, "DotsMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/nav2.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyNav2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/my-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/menu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MyNav2(props) {
    _s();
    const [showNav, setShowNav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyNav2.useEffect": ()=>{
            const handleScroll = {
                "MyNav2.useEffect.handleScroll": ()=>{
                    if (window.scrollY > 250) {
                        setShowNav(true);
                    } else {
                        setShowNav(false);
                    }
                }
            }["MyNav2.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "MyNav2.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["MyNav2.useEffect"];
        }
    }["MyNav2.useEffect"], []);
    // base classes for nav
    const baseNavClasses = "w-full bg-[var(--nav-bg)] backdrop-blur-lg border-b-1 border-[var(--nav-border)] fixed z-20 h-14 flex justify-center top-0 transition-all duration-400";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `${baseNavClasses} ${showNav ? "translate-y-0" : "-translate-y-full"}`,
        children: [
            props.variant === "About to home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-10 md:w-2/3 md:px-0 lg:w-[85%] 2xl:w-[80%] flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "hyperlink",
                        text: "Return to home",
                        link: "/",
                        textSize: "text-sm",
                        target: "_self"
                    }, void 0, false, {
                        fileName: "[project]/components/nav2.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "blue-button",
                        text: "Resume",
                        link: "https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing",
                        textSize: "text-sm",
                        target: "_blank"
                    }, void 0, false, {
                        fileName: "[project]/components/nav2.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/nav2.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this),
            props.variant === "Projects to home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-10 md:px-0 md:w-2/3 lg:w-[75%] 2xl:w-[75%] flex items-center justify-between relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "hyperlink",
                        text: "Return to home",
                        link: "/",
                        textSize: "text-sm",
                        target: "_self"
                    }, void 0, false, {
                        fileName: "[project]/components/nav2.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "blue-button-outline",
                                text: "About me",
                                link: "about",
                                textSize: "text-sm",
                                target: "_self"
                            }, void 0, false, {
                                fileName: "[project]/components/nav2.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-3"
                            }, void 0, false, {
                                fileName: "[project]/components/nav2.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "blue-button",
                                text: "Resume",
                                link: "https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing",
                                textSize: "text-sm",
                                target: "_blank"
                            }, void 0, false, {
                                fileName: "[project]/components/nav2.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/nav2.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/nav2.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/nav2.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this),
            props.variant === "Home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-10 md:px-0 md:w-2/3 lg:w-[85%] 2xl:w-[80%] flex items-center justify-between relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "hyperlink",
                        text: "Back to top",
                        link: "#top",
                        textSize: "text-sm",
                        target: "_self"
                    }, void 0, false, {
                        fileName: "[project]/components/nav2.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "blue-button-outline",
                                text: "About me",
                                link: "about",
                                textSize: "text-sm",
                                target: "_self"
                            }, void 0, false, {
                                fileName: "[project]/components/nav2.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-3"
                            }, void 0, false, {
                                fileName: "[project]/components/nav2.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "blue-button",
                                text: "Resume",
                                link: "https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing",
                                textSize: "text-sm",
                                target: "_blank"
                            }, void 0, false, {
                                fileName: "[project]/components/nav2.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/nav2.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/nav2.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/nav2.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/nav2.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(MyNav2, "d6mkrMkELrbzjTknqXCbobR4vWU=");
_c = MyNav2;
var _c;
__turbopack_context__.k.register(_c, "MyNav2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/project-thumbnail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectThumbnail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/my-button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function ProjectThumbnail(props) {
    if (props.isLink == "image-link") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden flex flex-col group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--colour-bodytext-3)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--main-colour)] mb-4 leading-loose",
                        children: props.name
                    }, void 0, false, {
                        fileName: "[project]/components/project-thumbnail.tsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/project-thumbnail.tsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "relative block overflow-hidden group mt-auto bg-[var(--container-bg)] rounded-3xl shadow-[0px_0px_20px_rgba(0,0,0,0.02)]",
                    href: props.link,
                    target: props.target,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: props.imageSrc,
                            alt: props.name,
                            width: 1640,
                            height: 1228,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/components/project-thumbnail.tsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-x-0 bottom-0 h-[30%] flex items-center justify-center opacity-0 transition-all duration-100 ease-out group-hover:opacity-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                link: props.link,
                                text: `Open ${props.name}`,
                                textSize: "text-sm",
                                target: props.target,
                                variant: "blue-button"
                            }, void 0, false, {
                                fileName: "[project]/components/project-thumbnail.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/project-thumbnail.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/project-thumbnail.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--colour-bodytext)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--colour-bodytext)] leading-loose",
                        children: props.desc
                    }, void 0, false, {
                        fileName: "[project]/components/project-thumbnail.tsx",
                        lineNumber: 43,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/project-thumbnail.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/project-thumbnail.tsx",
            lineNumber: 21,
            columnNumber: 13
        }, this);
    } else if (props.isLink == "video-link") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-auto group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-[var(--colour-bodytext-3)] md:text-[var(--colour-bodytext-4)] mb-4 leading-loose md:group-hover:text-[var(--main-colour)]",
                    children: props.name
                }, void 0, false, {
                    fileName: "[project]/components/project-thumbnail.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-7"
                }, void 0, false, {
                    fileName: "[project]/components/project-thumbnail.tsx",
                    lineNumber: 56,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "relative block overflow-hidden group mt-auto bg-[var(--container-bg)] rounded-3xl shadow-[0px_0px_15px_rgba(0,0,0,0.01)]",
                    href: props.link,
                    target: props.target,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            className: `w-full h-full object-cover !bg-transparent block`,
                            style: {
                                clipPath: "inset(-1px -1px)"
                            },
                            autoPlay: true,
                            muted: true,
                            loop: true,
                            playsInline: true,
                            poster: props.imageSrcPoster,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: props.imageSrc,
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/components/project-thumbnail.tsx",
                                lineNumber: 59,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/project-thumbnail.tsx",
                            lineNumber: 58,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-x-0 bottom-0 h-[30%] flex items-center justify-center opacity-0 transition-all duration-100 ease-out group-hover:opacity-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                link: props.link,
                                text: `Open ${props.name}`,
                                textSize: "text-sm",
                                target: props.target,
                                variant: "blue-button"
                            }, void 0, false, {
                                fileName: "[project]/components/project-thumbnail.tsx",
                                lineNumber: 72,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/project-thumbnail.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/project-thumbnail.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--colour-bodytext)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--colour-bodytext)] leading-loose",
                        children: props.desc
                    }, void 0, false, {
                        fileName: "[project]/components/project-thumbnail.tsx",
                        lineNumber: 76,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/project-thumbnail.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/project-thumbnail.tsx",
            lineNumber: 52,
            columnNumber: 13
        }, this);
    }
}
_c = ProjectThumbnail;
var _c;
__turbopack_context__.k.register(_c, "ProjectThumbnail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-2xl gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-2xl px-6 has-[>svg]:px-4",
            xl: "h-20 rounded-2xl px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/shadcn-io/colour-toggle-button/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeSelector",
    ()=>ThemeSelector,
    "useThemeTransition",
    ()=>useThemeTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const themes = [
    {
        name: 'Blue',
        className: 'blue'
    },
    {
        name: 'Pink',
        className: 'pink'
    },
    {
        name: 'Green',
        className: 'green'
    },
    {
        name: 'Orange',
        className: 'orange'
    }
];
const useThemeTransition = ()=>{
    _s();
    const startTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useThemeTransition.useCallback[startTransition]": (updateFn)=>{
            const doc = document;
            if (doc.startViewTransition) {
                doc.startViewTransition(updateFn);
            } else {
                updateFn();
            }
        }
    }["useThemeTransition.useCallback[startTransition]"], []);
    return {
        startTransition
    };
};
_s(useThemeTransition, "aSXcc7IgneAVGsT64HZDvmgva18=");
const ThemeSelector = ({ className })=>{
    _s1();
    const [activeTheme, setActiveTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(themes[0]);
    const { startTransition } = useThemeTransition();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeSelector.useEffect": ()=>{
            const saved = localStorage.getItem('theme-class');
            if (saved) {
                const theme = themes.find({
                    "ThemeSelector.useEffect.theme": (t)=>t.className === saved
                }["ThemeSelector.useEffect.theme"]);
                if (theme) applyTheme(theme);
            }
        }
    }["ThemeSelector.useEffect"], []);
    const applyTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThemeSelector.useCallback[applyTheme]": (theme)=>{
            const root = document.documentElement;
            themes.forEach({
                "ThemeSelector.useCallback[applyTheme]": (t)=>root.classList.remove(t.className)
            }["ThemeSelector.useCallback[applyTheme]"]);
            root.classList.add(theme.className);
            localStorage.setItem('theme-class', theme.className);
            setActiveTheme(theme);
        }
    }["ThemeSelector.useCallback[applyTheme]"], []);
    const handleThemeClick = (theme)=>{
        startTransition(()=>applyTheme(theme));
    };
    const colorMap = {
        Blue: '#0B8EFF',
        Pink: '#FF3AA0',
        Green: '#38BD2E',
        Orange: '#FF7A00'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group flex items-center rounded-full overflow-hidden transition-all duration-300 hover:cursor-pointer w-[44px] hover:w-[220px]'),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center transition-all duration-300 group-hover:pr-2",
            style: {
                width: 'auto'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onMouseEnter: (e)=>{
                        e.currentTarget.style.backgroundColor = 'var(--main-colour)';
                    },
                    onMouseLeave: (e)=>{
                        e.currentTarget.style.backgroundColor = 'transparent';
                    },
                    size: "icon",
                    variant: "outline",
                    className: "bg-[var(--background)] transition-colors duration-300 group-hover:bg-[var(--palette-hover)]",
                    style: {
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        padding: 0,
                        minWidth: 0,
                        zIndex: 10,
                        cursor: 'pointer',
                        // borderColor: colorMap[activeTheme.name],
                        ['--palette-hover']: colorMap[activeTheme.name]
                    },
                    title: "Select Theme",
                    children: "🎨"
                }, void 0, false, {
                    fileName: "[project]/components/ui/shadcn-io/colour-toggle-button/index.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center ml-2",
                    children: themes.map((theme, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "icon",
                            variant: "secondary",
                            onClick: ()=>handleThemeClick(theme),
                            className: "opacity-0 translate-x-[-7px] bg-transparent group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hover:scale-115 hover:bg-transparent hover:cursor-pointer",
                            style: {
                                transitionDelay: `${index * 40}ms`
                            },
                            title: theme.name,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 16,
                                    height: 16,
                                    borderRadius: '50%',
                                    backgroundColor: colorMap[theme.name],
                                    display: 'block'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ui/shadcn-io/colour-toggle-button/index.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, theme.name, false, {
                            fileName: "[project]/components/ui/shadcn-io/colour-toggle-button/index.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/ui/shadcn-io/colour-toggle-button/index.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/shadcn-io/colour-toggle-button/index.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/shadcn-io/colour-toggle-button/index.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}; // 'use client';
 // import { useState, useCallback, useEffect, useRef } from 'react';
 // import { cn } from '@/lib/utils';
 // import { Button } from '../../button';
 // interface ThemeOption {
 //   name: string;
 //   className: string;
 // }
 // const themes: ThemeOption[] = [
 //   { name: 'Blue', className: 'blue' },
 //   { name: 'Pink', className: 'pink' },
 //   { name: 'Green', className: 'green' },
 //   { name: 'Orange', className: 'orange' },
 // ];
 // type ThemeSelectorProps = {
 //   className?: string;
 // };
 // type DocumentWithViewTransition = Document & {
 //   startViewTransition?: (callback: () => void) => void;
 // };
 // export const useThemeTransition = () => {
 //   const startTransition = useCallback((updateFn: () => void) => {
 //     const doc = document as DocumentWithViewTransition;
 //     if (doc.startViewTransition) {
 //       doc.startViewTransition(updateFn);
 //     } else {
 //       updateFn();
 //     }
 //   }, []);
 //   return { startTransition };
 // };
 // export const ThemeSelector = ({ className }: ThemeSelectorProps) => {
 //   const [activeTheme, setActiveTheme] = useState<ThemeOption>(themes[0]);
 //   const [showHint, setShowHint] = useState(false);
 //   const { startTransition } = useThemeTransition();
 //   const containerRef = useRef<HTMLDivElement>(null);
 //   const hasAnimated = useRef(false);
 //   useEffect(() => {
 //     const saved = localStorage.getItem('theme-class');
 //     if (saved) {
 //       const theme = themes.find((t) => t.className === saved);
 //       if (theme) {
 //         applyTheme(theme);
 //       }
 //     }
 //   }, []);
 //   useEffect(() => {
 //     const element = containerRef.current;
 //     if (!element || hasAnimated.current) return;
 //     const observer = new IntersectionObserver(
 //       ([entry]) => {
 //         if (!entry.isIntersecting || hasAnimated.current) return;
 //         hasAnimated.current = true;
 //         setTimeout(() => {
 //           setShowHint(true);
 //           setTimeout(() => {
 //             setShowHint(false);
 //           }, 800);
 //         }, 300);
 //         observer.disconnect();
 //       },
 //       {
 //         threshold: 0.5,
 //       }
 //     );
 //     observer.observe(element);
 //     return () => observer.disconnect();
 //   }, []);
 //   const applyTheme = useCallback((theme: ThemeOption) => {
 //     const root = document.documentElement;
 //     themes.forEach((t) => root.classList.remove(t.className));
 //     root.classList.add(theme.className);
 //     localStorage.setItem('theme-class', theme.className);
 //     setActiveTheme(theme);
 //   }, []);
 //   const handleThemeClick = (theme: ThemeOption) => {
 //     startTransition(() => applyTheme(theme));
 //   };
 //   const colorMap: Record<string, string> = {
 //     Blue: '#0B8EFF',
 //     Pink: '#FF3AA0',
 //     Green: '#38BD2E',
 //     Orange: '#FF7A00',
 //   };
 //   return (
 //     <div
 //       ref={containerRef}
 //       className={cn(
 //         'group flex items-center rounded-full overflow-hidden transition-all duration-300 hover:cursor-pointer',
 //         showHint ? 'w-[220px]' : 'w-[44px] hover:w-[220px]',
 //         className
 //       )}
 //     >
 //       <div className="flex items-center transition-all duration-300 group-hover:pr-2">
 //         <Button
 //           onMouseEnter={(e) => {
 //             e.currentTarget.style.backgroundColor = 'var(--main-colour)';
 //           }}
 //           onMouseLeave={(e) => {
 //             e.currentTarget.style.backgroundColor = 'transparent';
 //           }}
 //           size="icon"
 //           variant="outline"
 //           className="bg-[var(--background)] transition-colors duration-300 group-hover:bg-[var(--palette-hover)]"
 //           style={{
 //             width: 44,
 //             height: 44,
 //             borderRadius: '50%',
 //             padding: 0,
 //             minWidth: 0,
 //             zIndex: 10,
 //             cursor: 'pointer',
 //             ['--palette-hover' as any]: colorMap[activeTheme.name],
 //           }}
 //           title="Select Theme"
 //         >
 //           🎨
 //         </Button>
 //         <div className="flex items-center ml-2">
 //           {themes.map((theme, index) => (
 //             <Button
 //               key={theme.name}
 //               size="icon"
 //               variant="secondary"
 //               onClick={() => handleThemeClick(theme)}
 //               className={cn(
 //                 'bg-transparent transition-all duration-300 hover:scale-115 hover:bg-transparent hover:cursor-pointer',
 //                 showHint
 //                   ? 'opacity-100 translate-x-0'
 //                   : 'opacity-0 translate-x-[-7px] group-hover:opacity-100 group-hover:translate-x-0'
 //               )}
 //               style={{
 //                 transitionDelay: `${index * 40}ms`,
 //               }}
 //               title={theme.name}
 //             >
 //               <span
 //                 style={{
 //                   width: 16,
 //                   height: 16,
 //                   borderRadius: '50%',
 //                   backgroundColor: colorMap[theme.name],
 //                   display: 'block',
 //                 }}
 //               />
 //             </Button>
 //           ))}
 //         </div>
 //       </div>
 //     </div>
 //   );
 // };
_s1(ThemeSelector, "XK76Fjl1ajX6CH3Y/7V62SmeMDU=", false, function() {
    return [
        useThemeTransition
    ];
});
_c = ThemeSelector;
var _c;
__turbopack_context__.k.register(_c, "ThemeSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/shadcn-io/theme-toggle-button/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggleButton",
    ()=>ThemeToggleButton,
    "useThemeTransition",
    ()=>useThemeTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
});
const useThemeTransition = ()=>{
    _s();
    const startTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useThemeTransition.useCallback[startTransition]": (updateFn)=>{
            const doc = document;
            if (doc.startViewTransition) {
                doc.startViewTransition(updateFn);
            } else {
                updateFn();
            }
        }
    }["useThemeTransition.useCallback[startTransition]"], []);
    return {
        startTransition
    };
};
_s(useThemeTransition, "aSXcc7IgneAVGsT64HZDvmgva18=");
const ThemeToggleButton = ({ theme = 'light', showLabel = false, variant = 'circle', start = 'center', url, className, onClick })=>{
    _s1();
    const { startTransition } = useThemeTransition();
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThemeToggleButton.useCallback[handleClick]": ()=>{
            const styleId = `theme-transition-${Date.now()}`;
            const style = document.createElement('style');
            style.id = styleId;
            let css = '';
            // start positions
            const positions = {
                center: 'center',
                'top-left': 'top left',
                'top-right': 'top right',
                'bottom-left': 'bottom left',
                'bottom-right': 'bottom right'
            };
            const cx = start === 'center' ? '50' : start.includes('left') ? '0' : '100';
            const cy = start === 'center' ? '50' : start.includes('top') ? '0' : '100';
            if (variant === 'blur') {
                css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) {
            animation: none;
          }
          ::view-transition-new(root) {
            opacity: 1;
            animation: blur-fade-in 0.6s ease-out forwards;
          }
          @keyframes blur-fade-in {
            from { opacity: 0.3; } 
            to {opacity: 1; }
          }
        }
      `;
            }
            if (variant === 'none') {}
            if (variant === 'circle') {
                css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) { animation: none; }
          ::view-transition-new(root) {
            animation: circle-expand 0.4s ease-out;
            transform-origin: ${positions[start]};
          }
          @keyframes circle-expand {
            from { clip-path: circle(0% at ${cx}% ${cy}%); }
            to { clip-path: circle(150% at ${cx}% ${cy}%); }
          }
        }
      `;
            }
            if (variant === 'circle-blur') {
                css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) { animation: none; }
          ::view-transition-new(root) {
            animation: circle-blur-expand 0.5s ease-out;
            transform-origin: ${positions[start]};
            filter: blur(0);
          }
          @keyframes circle-blur-expand {
            from {
              clip-path: circle(0% at ${cx}% ${cy}%);
              filter: blur(4px);
            }
            to {
              clip-path: circle(150% at ${cx}% ${cy}%);
              filter: blur(0);
            }
          }
        }
      `;
            }
            if (variant === 'gif' && url) {
                css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) {
            animation: fade-out 0.4s ease-out;
          }
          ::view-transition-new(root) {
            animation: gif-reveal 2.5s cubic-bezier(0.4, 0, 0.2, 1);
            mask-image: url('${url}');
            mask-size: 0%;
            mask-repeat: no-repeat;
            mask-position: center;
          }
          @keyframes fade-out {
            to { opacity: 0; }
          }
          @keyframes gif-reveal {
            0% { mask-size: 0%; }
            20% { mask-size: 35%; }
            60% { mask-size: 35%; }
            100% { mask-size: 300%; }
          }
        }
      `;
            }
            if (variant === 'polygon') {
                css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) { animation: none; }
          ::view-transition-new(root) {
            animation: ${theme === 'light' ? 'wipe-in-dark' : 'wipe-in-light'} 0.4s ease-out;
          }
          @keyframes wipe-in-dark {
            from { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); }
            to { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
          }
          @keyframes wipe-in-light {
            from { clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%); }
            to { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
          }
        }
      `;
            }
            // inject CSS
            if (css) {
                style.textContent = css;
                document.head.appendChild(style);
                // auto cleanup
                setTimeout({
                    "ThemeToggleButton.useCallback[handleClick]": ()=>{
                        document.getElementById(styleId)?.remove();
                    }
                }["ThemeToggleButton.useCallback[handleClick]"], 3000);
            }
            // IMPORTANT 🔥 — actually start the view transition
            startTransition({
                "ThemeToggleButton.useCallback[handleClick]": ()=>{
                    onClick?.();
                }
            }["ThemeToggleButton.useCallback[handleClick]"]);
        }
    }["ThemeToggleButton.useCallback[handleClick]"], [
        variant,
        start,
        url,
        theme,
        onClick,
        startTransition
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        onMouseEnter: (e)=>{
            e.currentTarget.style.backgroundColor = 'var(--main-colour)';
        },
        onMouseLeave: (e)=>{
            e.currentTarget.style.backgroundColor = 'transparent';
        },
        size: "icon",
        variant: "outline",
        style: {
            width: 44,
            height: 44,
            borderRadius: '50%',
            padding: 0,
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            cursor: 'pointer'
        },
        onClick: handleClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative overflow-hidden transition-all', showLabel && className),
        "aria-label": `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`,
        children: [
            theme === 'light' ? "☀️" : "🌙",
            showLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: theme === 'light' ? `Light` : `Dark`
            }, void 0, false, {
                fileName: "[project]/components/ui/shadcn-io/theme-toggle-button/index.tsx",
                lineNumber: 241,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/shadcn-io/theme-toggle-button/index.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ThemeToggleButton, "YImA9cNX2S3AbzZ0zjdZg8cQ5ec=", false, function() {
    return [
        useThemeTransition
    ];
});
_c = ThemeToggleButton;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggleButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/testimonial.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
function Testimonial(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col justify-between bg-[var(--container-bg)] shadow-[0px_0px_15px_rgba(0,0,0,0.01)] px-7 py-6 rounded-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-[var(--colour-bodytext-2)] leading-loose",
                children: [
                    '"',
                    props.text,
                    '"'
                ]
            }, void 0, true, {
                fileName: "[project]/components/testimonial.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-9"
            }, void 0, false, {
                fileName: "[project]/components/testimonial.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-[40px] h-[40px] rounded-full overflow-hidden flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: props.imgSrc,
                            alt: "",
                            width: 100,
                            height: 100,
                            className: "object-cover rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/components/testimonial.tsx",
                            lineNumber: 19,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/testimonial.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-[var(--colour-bodytext)] leading-loose",
                                children: props.name
                            }, void 0, false, {
                                fileName: "[project]/components/testimonial.tsx",
                                lineNumber: 22,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[var(--colour-bodytext-3)] leading-loose",
                                children: [
                                    props.job,
                                    " at ",
                                    props.company,
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/testimonial.tsx",
                                lineNumber: 23,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/testimonial.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/testimonial.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/testimonial.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_c = Testimonial;
var _c;
__turbopack_context__.k.register(_c, "Testimonial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/my-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2d$thumbnail2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project-thumbnail2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$up$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-up.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$up$2d$nothres$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-up-nothres.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/nav2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2d$thumbnail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project-thumbnail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$shadcn$2d$io$2f$colour$2d$toggle$2d$button$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/shadcn-io/colour-toggle-button/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$shadcn$2d$io$2f$theme$2d$toggle$2d$button$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/shadcn-io/theme-toggle-button/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$testimonial$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/testimonial.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home2() {
    _s();
    const [animate, setAnimate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home2.useEffect": ()=>{
            setTimeout({
                "Home2.useEffect": ()=>setAnimate(true)
            }["Home2.useEffect"], 900);
        }
    }["Home2.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center",
        id: "top",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "Home"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-10 md:w-2/3 md:px-0 lg:w-[85%] 2xl:w-[80%] mt-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$up$2d$nothres$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-full flex items-center relative justify-between`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-start items-start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/yay.jpg",
                                            width: 3099,
                                            height: 3363,
                                            className: "w-[64px] aspect-square mb-2 rounded-2xl shadow-xl",
                                            alt: "Hung Tran"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 32,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                variant: "blue-button-outline",
                                                text: "About me",
                                                link: "about",
                                                target: "_self",
                                                textSize: "text-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 35,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 36,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                variant: "blue-button",
                                                text: "Resume",
                                                link: "https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing",
                                                textSize: "text-sm",
                                                target: "_blank"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 37,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 34,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-12"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-md font-semibold text-[var(--colour-pure)] leading-loose",
                                    children: "Hi, my name is Hung."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-9"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-[75%]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-md text-[var(--colour-bodytext)] leading-loose",
                                        children: "As an overthinker, I think a lot about all my interactions... probably more than I should."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-md text-[var(--colour-bodytext)] leading-loose",
                                        children: [
                                            "Luckily, that's also my job. I'm a UX designer, currently at ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    link: "https://research.samsung.com/srca",
                                                    target: "_blank",
                                                    variant: "hyperlink",
                                                    text: "Samsung",
                                                    textSize: "text-md"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 176
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 50,
                                                columnNumber: 145
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-9"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-md text-[var(--colour-bodytext)]",
                                        children: [
                                            "Send me an ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    link: "mailto:d.hungtran12@gmail.com",
                                                    target: "_blank",
                                                    variant: "hyperlink",
                                                    text: "email",
                                                    textSize: "text-md"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 112
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 81
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-md text-[var(--colour-bodytext)]",
                                        children: [
                                            "Send me a message on ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    link: "https://www.linkedin.com/in/hung-tran-profile/",
                                                    target: "_blank",
                                                    variant: "hyperlink",
                                                    text: "LinkedIn",
                                                    textSize: "text-md"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 122
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 91
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-md text-[var(--colour-bodytext)]",
                                        children: [
                                            "Check out my ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    link: "https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing",
                                                    target: "_blank",
                                                    variant: "hyperlink",
                                                    text: "resume",
                                                    textSize: "text-md"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 114
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 83
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-9"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-md text-[var(--colour-bodytext-3)] leading-loose",
                                children: "Scroll down for works."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full hidden md:flex justify-start items-center mt-14 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$shadcn$2d$io$2f$theme$2d$toggle$2d$button$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggleButton"], {
                                        theme: theme === "light" ? "dark" : "light",
                                        onClick: ()=>{
                                            const next = theme === "dark" ? "light" : "dark";
                                            setTheme(next);
                                        },
                                        variant: "none",
                                        start: "center",
                                        className: "hover:cursor-pointer",
                                        showLabel: false
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$shadcn$2d$io$2f$colour$2d$toggle$2d$button$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeSelector"], {}, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-45"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-25",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$up$2d$nothres$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2d$thumbnail2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    isLink: "video-link",
                                    link: "rules",
                                    type: "UX design",
                                    name: "Samsung Knox Manage: Rules",
                                    desc: "Designed a device management feature that triggers actions when specific conditions are met (time, location, device status, etc.)",
                                    imageSrc: "/Rule video.mp4",
                                    imageSrcPoster: "rule-poster.png",
                                    imageSrcDark: "/Rule video - d.mp4",
                                    imageSrcPosterDark: "rule-poster - d.png",
                                    target: "_self"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$up$2d$nothres$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2d$thumbnail2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    isLink: "image-link",
                                    link: "organizations",
                                    type: "Design system",
                                    name: "Samsung Knox Manage: Organizations",
                                    desc: "Designed a scalable, design-system–ready component that visualizes the inheritance logic among parent-child entities.",
                                    imageSrc: "/organize.png",
                                    imageSrcDark: "/organize - d.png",
                                    imageSrcPoster: "",
                                    imageSrcPosterDark: "",
                                    target: "_self"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$up$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2d$thumbnail2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    isLink: "video-link",
                                    link: "cardio",
                                    type: "UX design",
                                    name: "card.io",
                                    desc: "Designed a Spotify feature that guides runners in creating personalized cardio playlists, helping them feel confident and in control.",
                                    imageSrc: "/cardio video.mp4",
                                    imageSrcPoster: "/cardio-poster.png",
                                    imageSrcDark: "/cardio video - d.mp4",
                                    imageSrcPosterDark: "/cardio-poster - d.png",
                                    target: "_self"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$up$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2d$thumbnail2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    isLink: "image-link",
                                    link: "",
                                    type: "UX research",
                                    name: "Samsung Health (coming soon)",
                                    desc: "Conducted research to inform future Samsung Health wearable experiences, including Galaxy Watch & Galaxy Ring.",
                                    imageSrc: "/shealth.png",
                                    imageSrcPoster: "",
                                    imageSrcDark: "",
                                    imageSrcPosterDark: "",
                                    target: "_self"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-45"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 99,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-[var(--colour-bodytext)] leading-loose mb-12",
                        children: "My other work spans development, visual design, and service design."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 103,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-15 mt-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$up$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2d$thumbnail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    isLink: "image-link",
                                    link: "https://drive.google.com/file/d/1d0jGR0QJN3mzwX6o9n0C54g6aHej0I9l/view",
                                    name: "Full stack",
                                    desc: "React Native note-taking app, integrating Apple Maps API, Text-to-speech API, and Firebase.",
                                    imageSrc: "/memorymate.png",
                                    imageSrcDark: "/memorymate - d.png",
                                    imageSrcPoster: "",
                                    imageSrcPosterDark: "",
                                    target: "_blank"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$up$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2d$thumbnail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    isLink: "image-link",
                                    link: "visuals",
                                    name: "Visual design",
                                    desc: `I like to play around with visual design and motions. Here's the damage.`,
                                    imageSrc: "/visuall.png",
                                    imageSrcDark: "/visuall - d.png",
                                    imageSrcPoster: "",
                                    imageSrcPosterDark: "",
                                    target: "_self"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$up$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2d$thumbnail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    isLink: "image-link",
                                    link: "servicedesign",
                                    name: "Service design",
                                    desc: "A cooling initiative helping neighbourhood houses protect vulnerable communities from extreme heat.",
                                    imageSrc: "/cool-tgt.png",
                                    imageSrcDark: "/organize - d.png",
                                    imageSrcPoster: "",
                                    imageSrcPosterDark: "",
                                    target: "_self"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-45",
                        id: "testimonials"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 116,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-[var(--colour-bodytext)] leading-loose mb-2",
                                children: "They said it, not me."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-md text-[var(--colour-bodytext-3)] leading-loose",
                                children: "Testimonials from those I reported to."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 118,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$up$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$testimonial$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: "Tian Jia",
                                        job: "Senior UX Designer, UX Manager",
                                        company: "Samsung",
                                        text: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Hung has demonstrated ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "underline decoration-[var(--main-colour)] underline-offset-4 font-semibold",
                                                    children: "a strong talent for both UX research and graphical UI tasks"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 135
                                                }, this),
                                                ". His ability to analyze user needs and translate them into intuitive, visually appealing designs has been impressive. ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 413
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 420
                                                }, this),
                                                " Overall, his dedication and versatility make him a valuable asset to any design team."
                                            ]
                                        }, void 0, true),
                                        imgSrc: "/tian.jpeg"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$testimonial$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: "Thomas Nelles",
                                        job: "Senior Communications Consultant",
                                        company: "Fraser Health",
                                        text: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "From designing a multi-page document for our Indigenous Health team to crafting a Urgent Care video, ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "underline decoration-[var(--main-colour)] underline-offset-4 font-semibold",
                                                    children: "his clients have been very impressed with his work to date"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 227
                                                }, this),
                                                ". He adapts to changing timelines easily including timely requests and juggling multiple projects. ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 484
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 491
                                                }, this),
                                                "His calm demeanor and ability to clearly communicate his working progress are just some of his strengths."
                                            ]
                                        }, void 0, true),
                                        imgSrc: "/thomas.jpeg"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-fit bg-[var(--container-bg)] shadow-[0px_0px_15px_rgba(0,0,0,0.01)] px-7 py-6 rounded-3xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-[var(--colour-bodytext-3)] leading-loose",
                                                children: 'This spot is for you :")'
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-[var(--colour-bodytext-3)] leading-loose",
                                                children: [
                                                    "Let's build something great together! I’d love to hear from you via my ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            link: "mailto:d.hungtran12@gmail.com",
                                                            target: "_blank",
                                                            variant: "hyperlink",
                                                            text: "email",
                                                            textSize: "text-md"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 194
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 163
                                                    }, this),
                                                    ", or ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$my$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            link: "https://www.linkedin.com/in/hung-tran-profile/",
                                                            target: "_blank",
                                                            variant: "hyperlink",
                                                            text: "LinkedIn",
                                                            textSize: "text-md"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 353
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 322
                                                    }, this),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 151,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Home2, "xg9GUWi2fMaWm3WUXrx5Xr/lric=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Home2;
var _c;
__turbopack_context__.k.register(_c, "Home2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0h17do.._.js.map