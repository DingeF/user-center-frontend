((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__user__login__index'],
{ "src/pages/user/login/index.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _components = __mako_require__("src/components/index.ts");
var _api = __mako_require__("src/services/ant-design-pro/api.ts");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _max = __mako_require__("src/.umi/exports.ts");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _antdstyle = __mako_require__("node_modules/antd-style/es/index.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reactdom = __mako_require__("node_modules/react-dom/index.js");
var _defaultSettings = /*#__PURE__*/ _interop_require_default._(__mako_require__("config/defaultSettings.ts"));
var _constants = __mako_require__("src/constants/index.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
var _s1 = $RefreshSig$();
var _s2 = $RefreshSig$();
const useStyles = (0, _antdstyle.createStyles)(({ token })=>{
    return {
        action: {
            marginLeft: '8px',
            color: 'rgba(0, 0, 0, 0.2)',
            fontSize: '24px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            transition: 'color 0.3s',
            '&:hover': {
                color: token.colorPrimaryActive
            }
        },
        lang: {
            width: 42,
            height: 42,
            lineHeight: '42px',
            position: 'fixed',
            right: 16,
            borderRadius: token.borderRadius,
            ':hover': {
                backgroundColor: token.colorBgTextHover
            }
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'auto',
            backgroundImage: "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
            backgroundSize: '100% 100%'
        }
    };
});
const ActionIcons = ()=>{
    _s();
    const { styles } = useStyles();
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.AlipayCircleOutlined, {
                className: styles.action
            }, "AlipayCircleOutlined", false, {
                fileName: "src/pages/user/login/index.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.TaobaoCircleOutlined, {
                className: styles.action
            }, "TaobaoCircleOutlined", false, {
                fileName: "src/pages/user/login/index.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.WeiboCircleOutlined, {
                className: styles.action
            }, "WeiboCircleOutlined", false, {
                fileName: "src/pages/user/login/index.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(ActionIcons, "QPvPkklC6sd4P8R4UlFhc8PPHaY=", false, function() {
    return [
        useStyles
    ];
});
_c = ActionIcons;
const Lang = ()=>{
    _s1();
    const { styles } = useStyles();
    return;
};
_s1(Lang, "QPvPkklC6sd4P8R4UlFhc8PPHaY=", false, function() {
    return [
        useStyles
    ];
});
_c1 = Lang;
const LoginMessage = ({ content })=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Alert, {
        style: {
            marginBottom: 24
        },
        message: content,
        type: "error",
        showIcon: true
    }, void 0, false, {
        fileName: "src/pages/user/login/index.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
};
_c2 = LoginMessage;
const Login = ()=>{
    _s2();
    const [userLoginState, setUserLoginState] = (0, _react.useState)({});
    const [type, setType] = (0, _react.useState)('account');
    const { initialState, setInitialState } = (0, _max.useModel)('@@initialState');
    const { styles } = useStyles();
    const { message } = _antd.App.useApp();
    const fetchUserInfo = async ()=>{
        var _initialState_fetchUserInfo;
        const userInfo = await (initialState === null || initialState === void 0 ? void 0 : (_initialState_fetchUserInfo = initialState.fetchUserInfo) === null || _initialState_fetchUserInfo === void 0 ? void 0 : _initialState_fetchUserInfo.call(initialState));
        if (userInfo) (0, _reactdom.flushSync)(()=>{
            setInitialState((s)=>({
                    ...s,
                    currentUser: userInfo
                }));
        });
    };
    const handleSubmit = async (values)=>{
        let defaultErrorMessage = '';
        try {
            // 登录
            const res = await (0, _api.login)({
                ...values,
                type
            });
            if (res.data !== null) {
                const defaultLoginSuccessMessage = '登录成功！';
                message.success(defaultLoginSuccessMessage);
                await fetchUserInfo();
                const urlParams = new URL(window.location.href).searchParams;
                window.location.href = urlParams.get('redirect') || '/welcome';
                return;
            }
            defaultErrorMessage = '登陆失败! ' + (res === null || res === void 0 ? void 0 : res.description);
            throw Error('登陆失败，请重试！');
        } catch (error) {
            console.log(error);
            message.error(defaultErrorMessage);
        }
    };
    const { status, type: loginType } = userLoginState;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: styles.container,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Helmet, {
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("title", {
                    children: [
                        '登录',
                        _defaultSettings.default.title && ` - ${_defaultSettings.default.title}`
                    ]
                }, void 0, true, {
                    fileName: "src/pages/user/login/index.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/user/login/index.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Lang, {}, void 0, false, {
                fileName: "src/pages/user/login/index.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                style: {
                    flex: '1',
                    padding: '32px 0'
                },
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.LoginForm, {
                    contentStyle: {
                        minWidth: 280,
                        maxWidth: '75vw'
                    },
                    logo: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                        alt: "logo",
                        src: _constants.SYSTEM_LOGO
                    }, void 0, false, {
                        fileName: "src/pages/user/login/index.tsx",
                        lineNumber: 155,
                        columnNumber: 17
                    }, void 0),
                    title: "用户中心",
                    subTitle: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                        href: _constants.PLANT_DOC,
                        target: "_blank",
                        children: "编程学习社交圈子"
                    }, void 0, false, {
                        fileName: "src/pages/user/login/index.tsx",
                        lineNumber: 157,
                        columnNumber: 21
                    }, void 0),
                    actions: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Space, {
                        style: {
                            justifyContent: 'flex-end',
                            width: '100%'
                        },
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                            type: "default",
                            size: "small",
                            icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.UserAddOutlined, {}, void 0, false, {
                                fileName: "src/pages/user/login/index.tsx",
                                lineNumber: 163,
                                columnNumber: 23
                            }, void 0),
                            onClick: ()=>_max.history.push('/user/register'),
                            children: "注册账号"
                        }, void 0, false, {
                            fileName: "src/pages/user/login/index.tsx",
                            lineNumber: 160,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "src/pages/user/login/index.tsx",
                        lineNumber: 159,
                        columnNumber: 13
                    }, void 0),
                    initialValues: {
                        autoLogin: true
                    },
                    onFinish: async (values)=>{
                        await handleSubmit(values);
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tabs, {
                            activeKey: type,
                            onChange: setType,
                            centered: true,
                            items: [
                                {
                                    key: 'account',
                                    label: '账户密码登录'
                                }
                            ]
                        }, void 0, false, {
                            fileName: "src/pages/user/login/index.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this),
                        status === 'error' && loginType === 'account' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(LoginMessage, {
                            content: '错误的账户和密码'
                        }, void 0, false, {
                            fileName: "src/pages/user/login/index.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this),
                        type === 'account' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                    name: "userAccount",
                                    fieldProps: {
                                        size: 'large',
                                        prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.UserOutlined, {}, void 0, false, {
                                            fileName: "src/pages/user/login/index.tsx",
                                            lineNumber: 198,
                                            columnNumber: 27
                                        }, void 0)
                                    },
                                    placeholder: '请输入账户',
                                    rules: [
                                        {
                                            required: true,
                                            message: '账户是必填项！'
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "src/pages/user/login/index.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText.Password, {
                                    name: "userPassword",
                                    fieldProps: {
                                        size: 'large',
                                        prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.LockOutlined, {}, void 0, false, {
                                            fileName: "src/pages/user/login/index.tsx",
                                            lineNumber: 212,
                                            columnNumber: 27
                                        }, void 0)
                                    },
                                    placeholder: '请输入密码',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码是必填项！'
                                        },
                                        {
                                            min: 8,
                                            type: "string",
                                            message: '密码长度不小于8！'
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "src/pages/user/login/index.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        status === 'error' && loginType === 'mobile' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(LoginMessage, {
                            content: "验证码错误"
                        }, void 0, false, {
                            fileName: "src/pages/user/login/index.tsx",
                            lineNumber: 230,
                            columnNumber: 60
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                marginBottom: 24
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormCheckbox, {
                                    noStyle: true,
                                    name: "autoLogin",
                                    children: "自动登录"
                                }, void 0, false, {
                                    fileName: "src/pages/user/login/index.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                    style: {
                                        float: 'right'
                                    },
                                    children: "忘记密码 ?"
                                }, void 0, false, {
                                    fileName: "src/pages/user/login/index.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/user/login/index.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/user/login/index.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/user/login/index.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_components.Footer, {}, void 0, false, {
                fileName: "src/pages/user/login/index.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/user/login/index.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
};
_s2(Login, "v/HCSE7tsVAREF2LcU+uxVKK53Y=", false, function() {
    return [
        _max.useModel,
        useStyles,
        _antd.App.useApp
    ];
});
_c3 = Login;
var _default = Login;
var _c;
var _c1;
var _c2;
var _c3;
$RefreshReg$(_c, "ActionIcons");
$RefreshReg$(_c1, "Lang");
$RefreshReg$(_c2, "LoginMessage");
$RefreshReg$(_c3, "Login");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
 }]);
//# sourceMappingURL=p__user__login__index-async.js.map