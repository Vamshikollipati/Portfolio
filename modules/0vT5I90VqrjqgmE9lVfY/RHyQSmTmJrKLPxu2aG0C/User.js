let Component;
let IconInner;
var Icon = (React) => {
    if (!Component) {
        Component = /* @__PURE__ */ new Map([
            [
                "bold",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"
                }))
            ],
            [
                "duotone",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",
                    opacity: "0.2"
                }), /* @__PURE__ */ React.createElement("path", {
                    d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                }))
            ],
            [
                "fill",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"
                }))
            ],
            [
                "light",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"
                }))
            ],
            [
                "regular",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                }))
            ],
            [
                "thin",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"
                }))
            ]
        ]);
        IconInner = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", {
            ref,
            ...props
        }, Component.get(props.weight)));
    }
    return IconInner;
};
const __FramerMetadata__ = {
    exports: {
        default: {
            type: "reactComponent",
            slots: [],
            annotations: {
                framerContractVersion: "1"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
var User_default = Icon;
export {
    __FramerMetadata__,
    User_default as
    default
};