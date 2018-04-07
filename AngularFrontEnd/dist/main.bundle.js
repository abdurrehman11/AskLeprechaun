webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/activate/activate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".field_error {\r\n    color: red\r\n}\r\n\r\n.field_success {\r\n    color: green;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activate/activate.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"section landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"text-center\" style=\"font-family: Arial,Helvetica,sans-serif; letter-spacing:0.06em; font-size:49px; font-weight:bold; color:#252525;\">LOG IN</h2>\n                    \n                    <!--custom error/success message class-->\n                    <div class=\"row show-hide-message\">\n                        <div [ngClass]=\"messageClass\">\n                            {{ message }}\n                        </div>\n                    </div>\n\n                    <!-- Login Form -->\n                    <form class=\"contact-form\" [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\n                        \n                           <!-- Username Input -->\n                            <div class=\"col-md-6\">\n                                <label style=\"color:black; \">Username</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-single-02\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" name=\"username\"  placeholder=\"Username\" formControlName=\"username\">\n                                </div>\n                                <div [ngClass]=\"{'field_error': (form.controls.username.errors && form.controls.username.dirty),\n                                                 'field_success': form.controls.username.valid && form.controls.username.dirty}\">\n                                    <ul class=\"help-block\">\n                                        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">\n                                            This field is required\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n\n                            <!-- Password Input -->\n                         <div class=\"col-md-6\">\n                                <label style=\"color:black;\">Password</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-lock-circle-open\"></i>\n                                    </span>\n                                    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                                </div>\n                                <div [ngClass]=\"{'field_error': (form.controls.password.errors && form.controls.password.dirty),\n                                                 'field_success': form.controls.password.valid && form.controls.password.dirty}\">\n                                    <ul class=\"help-block\">\n                                        <li *ngIf=\"form.controls.password.errors?.required &&\n                                                   form.controls.password.dirty\">This field is required\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        \n                            <!-- Submit Form Button -->\n                            <div style=\"padding-left:15px;\">\n                                <!--<button class=\"btn btn-success btn-lg btn-fill\">Sign In</button>-->\n                                <input type=\"submit\" class=\"btn btn-success btn-lg btn-fill\" value=\"Sign In\"\n                                [disabled]=\"!form.valid || processing \">\n                            </div>\n                        \n                    </form>\n                </div>\n            </div>\n\t\t\t\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/activate/activate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivateComponent = (function () {
    function ActivateComponent(formBuilder, authService, route, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.processing = false;
        this.createForm();
    }
    // Function to create registration form
    ActivateComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
    };
    ActivateComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
    };
    ActivateComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
    };
    ActivateComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.login(user).subscribe(function (data) {
            if (!data.success) {
                _this.processing = false;
                _this.message = data.message;
                _this.messageClass = 'alert alert-danger';
                _this.enableForm();
            }
            else {
                _this.message = data.message;
                _this.messageClass = 'alert alert-success';
                _this.disableForm();
                _this.authService.storeUserData(data.token, data.user);
                console.log(data.user.username);
                setTimeout(function () {
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]);
                    }
                    else {
                        _this.router.navigate(['/faqs']);
                    }
                }, 2000);
            }
        });
    };
    ActivateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.route.snapshot.paramMap.get('token');
        this.authService.activateUser(token).subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = 'alert alert-danger';
                _this.valid = data.success;
            }
            else {
                _this.message = data.message;
                _this.messageClass = 'alert alert-success';
                _this.valid = data.success;
            }
        });
    };
    return ActivateComponent;
}());
ActivateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-activate',
        template: __webpack_require__("../../../../../src/app/activate/activate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/activate/activate.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], ActivateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=activate.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-login/admin-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".field_error {\r\n    color: red\r\n}\r\n\r\n.field_success {\r\n    color: green;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-login/admin-login.component.html":
/***/ (function(module, exports) {

module.exports = " \n <div class=\"section landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"text-center\" style=\"font-family: Arial,Helvetica,sans-serif; letter-spacing:0.06em; font-size:49px; font-weight:bold; color:#252525;\">LOG IN</h2>\n                    \n                    <!--custom error/success message class-->\n                    <div class=\"row show-hide-message\">\n                        <div [ngClass]=\"messageClass\">\n                            {{ message }}\n                        </div>\n                    </div>\n\n                    <!-- Login Form -->\n                    <form class=\"contact-form\" [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\n                        \n                           <!-- Username Input -->\n                            <div class=\"col-md-6\">\n                                <label style=\"color:black; \">Username</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-single-02\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" name=\"username\"  placeholder=\"Username\" formControlName=\"username\">\n                                </div>\n                                <div [ngClass]=\"{'field_error': (form.controls.username.errors && form.controls.username.dirty),\n                                                 'field_success': form.controls.username.valid && form.controls.username.dirty}\">\n                                    <ul class=\"help-block\">\n                                        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">\n                                            This field is required\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n\n                            <!-- Password Input -->\n                         <div class=\"col-md-6\">\n                                <label style=\"color:black;\">Password</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-lock-circle-open\"></i>\n                                    </span>\n                                    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                                </div>\n                                <div [ngClass]=\"{'field_error': (form.controls.password.errors && form.controls.password.dirty),\n                                                 'field_success': form.controls.password.valid && form.controls.password.dirty}\">\n                                    <ul class=\"help-block\">\n                                        <li *ngIf=\"form.controls.password.errors?.required &&\n                                                   form.controls.password.dirty\">This field is required\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        \n                            <!-- Submit Form Button -->\n                            <div  style=\"padding-left:15px;\">\n                                <!--<button class=\"btn btn-success btn-lg btn-fill\">Sign In</button>-->\n                                        \n                                <input type=\"submit\" class=\"btn btn-success btn-lg btn-fill\" value=\"Sign In\"\n                                [disabled]=\"!form.valid || processing\">\n                            </div>    \n                    </form>\n                </div>\n            </div>\n\t\t\t\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/admin/admin-login/admin-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLoginComponent = (function () {
    function AdminLoginComponent(formBuilder, router, authService, adminService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.adminService = adminService;
        this.processing = false;
        this.createForm(); // Create Angular 2 Form when component loads
    }
    // Function to create registration form
    AdminLoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    AdminLoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
    };
    AdminLoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
    };
    AdminLoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.adminService.login(user).subscribe(function (data) {
            if (!data.success) {
                _this.processing = false;
                _this.message = data.message;
                _this.messageClass = 'alert alert-danger';
                _this.enableForm();
            }
            else {
                _this.message = data.message;
                _this.messageClass = 'alert alert-success';
                _this.disableForm();
                _this.authService.storeUserData(data.token, data.user);
                setTimeout(function () {
                    _this.router.navigate(['/admin/manageUsers']);
                }, 2000);
            }
        });
    };
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    return AdminLoginComponent;
}());
AdminLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-login',
        template: __webpack_require__("../../../../../src/app/admin/admin-login/admin-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-login/admin-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_admin_service__["a" /* AdminService */]) === "function" && _d || Object])
], AdminLoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\t\n        <div class=\"row\">\n           \n\t\t   <div class=\"col-md-12\">\n\t\t\t\n                <div class=\"card\">\n<!--<form style=\"padding-right:100px;\"class=\"navbar-right\">\n  <input type=\"text\" placeholder=\"Search Users\" />\n  <button type=\"submit\" class=\"btn btn-info btn-sm\" style=\"font-weight:bold;\" value=\"Search\">Search</button>\n</form>-->\n                    <div class=\"card-header\" data-background-color=\"green\">\n                        <h4 class=\"title\" style=\"font-size:49px;\">Manage Users</h4>\n                        <p class=\"category\" style=\"font-size:20px;\">Block, Unblock and Delete Users</p>\n\t\t\t\t\t\t<!-- Simple Search Bar -->\n                        <div class=\"navbar-form\">\n                            <div class=\"form-group\">\n                            <!-- Search Input -->\n                                <label for=\"search\">Search by Name</label>\n                                <input type=\"text\" class=\"form-control\" name=\"search\" placeholder=\"search for...\" [(ngModel)]=\"searchKeyword\">\n                            </div>\n                        </div>\n\n                        <div class=\"row show-hide-message\">\n                            <div [ngClass]=\"messageClass\">\n                                {{ message }}\n                            </div>\n                        </div>\n\t\t\t\t\t</div>\n\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table\">\n                            <thead class=\"text-success\">\n                                <tr>\n                                    <th style=\"font-size:20px; font-weight:bold;\">Name</th>\n                                    <th style=\"font-size:20px; font-weight:bold;\">Email</th>\n                                    <th style=\"font-size:20px; font-weight:bold;\">Phone</th>\n                                    <th style=\"font-size:20px; font-weight:bold;\">Salary</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let user of users | filter : searchKeyword\">\n                                    <td>{{ user.username }}</td>\n                                    <td>{{ user.email }}</td>\n                                    <td>{{ user.username }}</td>\n                                    <td class=\"text-danger\">{{ user.email }}</td>\n\n\t\t\t\t\t\t\t\t\t<a>\n                                        <button style=\"font-weight:bold;\" class=\"btn btn-warning btn-round btn-sm\" [disabled]=\"user.block\" type=\"button\" (click)=\"blockUser($event, user.id)\" name=\"button\">Block</button>\n                                    </a>\n                                    <a>\n                                        <button style=\"font-weight:bold;\" class=\"btn btn-success btn-round btn-sm\" [disabled]=\"!user.block\" type=\"button\" (click)=\"unblockUser($event, user.id)\" name=\"button\">Unblock</button>\n                                    </a>\n\t\t\t\t\t\t\t\t\t<a>\n                                        <button style=\"font-weight:bold;\" class=\"btn btn-danger btn-round btn-sm\" type=\"button\" (click)=\"deleteUser($event, user.id)\" name=\"button\">Delete</button>\n                                    </a>\n                                </tr>\n                                <!--<tr>\n                                    <td>Minerva Hooper</td>\n                                    <td>Curaçao</td>\n                                    <td>Sinaai-Waas</td>\n                                    <td class=\"text-danger\">$23,789</td>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-warning btn-round btn-sm\">Block</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-success btn-round btn-sm\">Unblock</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-danger btn-round btn-sm\">Delete</a>\n                                </tr>\n                                <tr>\n                                    <td>Sage Rodriguez</td>\n                                    <td>Netherlands</td>\n                                    <td>Baileux</td>\n                                    <td class=\"text-danger\">$56,142</td>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-warning btn-round btn-sm\">Block</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-success btn-round btn-sm\">Unblock</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-danger btn-round btn-sm\">Delete</a>\n                                </tr>\n                                <tr>\n                                    <td>Philip Chaney</td>\n                                    <td>Korea, South</td>\n                                    <td>Overland Park</td>\n                                    <td class=\"text-danger\">$38,735</td>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-warning btn-round btn-sm\">Block</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-success btn-round btn-sm\">Unblock</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-danger btn-round btn-sm\">Delete</a>\n                                </tr>\n                                <tr>\n                                    <td>Doris Greene</td>\n                                    <td>Malawi</td>\n                                    <td>Feldkirchen in Kärnten</td>\n                                    <td class=\"text-danger\">$63,542</td>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-warning btn-round btn-sm\">Block</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-success btn-round btn-sm\">Unblock</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-danger btn-round btn-sm\">Delete</a>\n                                </tr>\n                                <tr>\n                                    <td>Mason Porter</td>\n                                    <td>Chile</td>\n                                    <td>Gloucester</td>\n                                    <td class=\"text-danger\">$78,615</td>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-warning btn-round btn-sm\">Block</a>\n\t\t\t\t\t\t\t\t\t<span style=\"padding-left:5px\"><a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-success btn-round btn-sm \">Unblock</a></span>\n\t\t\t\t\t\t\t\t\t<span style=\"padding-left:5px\"><a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-danger btn-round btn-sm \">Delete</a></span>\n                                </tr>-->\n                            </tbody>\n                        </table>\n\n                    </div>\n                </div>\n\t\t\t\t\n            </div>\n\n           \n        </div>\n    </div>\n\t<br>\n\t<br>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent(adminService) {
        this.adminService = adminService;
    }
    UsersComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.adminService.getAllUsers().subscribe(function (data) {
            _this.users = data.users;
            console.log(_this.users);
            //console.log(this.users[0].username);
        });
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    UsersComponent.prototype.blockUser = function (event, id) {
        var _this = this;
        this.userId = id;
        this.adminService.blockUser(id).subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = 'alert alert-danger';
            }
            else {
                console.log('blocked');
                _this.message = data.message;
                _this.messageClass = 'alert alert-success';
                setTimeout(function () {
                    _this.getAllUsers();
                }, 1000);
            }
        });
    };
    UsersComponent.prototype.unblockUser = function (event, id) {
        var _this = this;
        this.userId = id;
        this.adminService.unblockUser(id).subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = 'alert alert-danger';
            }
            else {
                console.log('unblocked');
                _this.message = data.message;
                _this.messageClass = 'alert alert-success';
                setTimeout(function () {
                    _this.getAllUsers();
                }, 1000);
            }
        });
    };
    // delete user
    UsersComponent.prototype.deleteUser = function (event, id) {
        var _this = this;
        this.adminService.deleteUser(id).subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = 'alert alert-danger';
            }
            else {
                console.log('deleted');
                _this.message = data.message;
                _this.messageClass = 'alert alert-success';
                setTimeout(function () {
                    _this.getAllUsers();
                }, 1000);
            }
        });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/admin/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/users/users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]) === "function" && _a || Object])
], UsersComponent);

var _a;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AppComponent = (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add();
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "navbar", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__faqs_faqs_component__ = __webpack_require__("../../../../../src/app/faqs/faqs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__activate_activate_component__ = __webpack_require__("../../../../../src/app/activate/activate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__save_password_save_password_component__ = __webpack_require__("../../../../../src/app/save-password/save-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_notification_notification_component__ = __webpack_require__("../../../../../src/app/components/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_admin_login_admin_login_component__ = __webpack_require__("../../../../../src/app/admin/admin-login/admin-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_users_users_component__ = __webpack_require__("../../../../../src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__getcoin_getcoin_component__ = __webpack_require__("../../../../../src/app/getcoin/getcoin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__getcoin_ethereum_ethereum_component__ = __webpack_require__("../../../../../src/app/getcoin/ethereum/ethereum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__getcoin_ethclassic_ethclassic_component__ = __webpack_require__("../../../../../src/app/getcoin/ethclassic/ethclassic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__getcoin_dash_dash_component__ = __webpack_require__("../../../../../src/app/getcoin/dash/dash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__getcoin_litecoin_litecoin_component__ = __webpack_require__("../../../../../src/app/getcoin/litecoin/litecoin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__getcoin_digibyte_digibyte_component__ = __webpack_require__("../../../../../src/app/getcoin/digibyte/digibyte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_coin_service__ = __webpack_require__("../../../../../src/app/services/coin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_tweet_service__ = __webpack_require__("../../../../../src/app/services/tweet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__guards_adminAuth_guard__ = __webpack_require__("../../../../../src/app/guards/adminAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__guards_adminNotAuth_gurad__ = __webpack_require__("../../../../../src/app/guards/adminNotAuth.gurad.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























// import { FilterPipe } from './getcoin/filter.pipe';

















__WEBPACK_IMPORTED_MODULE_37_rxjs_Observable__["Observable"].of(1, 2, 3).map(function (x) { return x + '!!!'; }); // etc
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__shared_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shared_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__faqs_faqs_component__["a" /* FaqsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__getcoin_getcoin_component__["a" /* GetcoinComponent */],
            __WEBPACK_IMPORTED_MODULE_28__filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_23__getcoin_ethereum_ethereum_component__["a" /* EthereumComponent */],
            __WEBPACK_IMPORTED_MODULE_24__getcoin_ethclassic_ethclassic_component__["a" /* EthclassicComponent */],
            __WEBPACK_IMPORTED_MODULE_25__getcoin_dash_dash_component__["a" /* DashComponent */],
            __WEBPACK_IMPORTED_MODULE_26__getcoin_litecoin_litecoin_component__["a" /* LitecoinComponent */],
            __WEBPACK_IMPORTED_MODULE_27__getcoin_digibyte_digibyte_component__["a" /* DigibyteComponent */],
            __WEBPACK_IMPORTED_MODULE_15__activate_activate_component__["a" /* ActivateComponent */],
            __WEBPACK_IMPORTED_MODULE_16__reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_17__save_password_save_password_component__["a" /* SavePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_19__admin_admin_login_admin_login_component__["a" /* AdminLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_20__admin_users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_28__filter_pipe__["a" /* FilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_21__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["HttpModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_29__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_30__services_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_31__services_coin_service__["a" /* CoinService */],
            __WEBPACK_IMPORTED_MODULE_32__services_tweet_service__["a" /* TweetService */],
            __WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_34__guards_notAuth_guard__["a" /* NotAuthGuard */],
            __WEBPACK_IMPORTED_MODULE_35__guards_adminAuth_guard__["a" /* AdminAuthGuard */],
            __WEBPACK_IMPORTED_MODULE_36__guards_adminNotAuth_gurad__["a" /* AdminNotAuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nucleoicons_nucleoicons_component__ = __webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__faqs_faqs_component__ = __webpack_require__("../../../../../src/app/faqs/faqs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__activate_activate_component__ = __webpack_require__("../../../../../src/app/activate/activate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__save_password_save_password_component__ = __webpack_require__("../../../../../src/app/save-password/save-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_admin_login_admin_login_component__ = __webpack_require__("../../../../../src/app/admin/admin-login/admin-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_users_users_component__ = __webpack_require__("../../../../../src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__getcoin_getcoin_component__ = __webpack_require__("../../../../../src/app/getcoin/getcoin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__getcoin_ethereum_ethereum_component__ = __webpack_require__("../../../../../src/app/getcoin/ethereum/ethereum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__getcoin_ethclassic_ethclassic_component__ = __webpack_require__("../../../../../src/app/getcoin/ethclassic/ethclassic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__getcoin_dash_dash_component__ = __webpack_require__("../../../../../src/app/getcoin/dash/dash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__getcoin_litecoin_litecoin_component__ = __webpack_require__("../../../../../src/app/getcoin/litecoin/litecoin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__getcoin_digibyte_digibyte_component__ = __webpack_require__("../../../../../src/app/getcoin/digibyte/digibyte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_adminAuth_guard__ = __webpack_require__("../../../../../src/app/guards/adminAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_adminNotAuth_gurad__ = __webpack_require__("../../../../../src/app/guards/adminNotAuth.gurad.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_notAuth_guard__["a" /* NotAuthGuard */]] },
    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'nucleoicons', component: __WEBPACK_IMPORTED_MODULE_8__components_nucleoicons_nucleoicons_component__["a" /* NucleoiconsComponent */] },
    { path: 'faqs', component: __WEBPACK_IMPORTED_MODULE_9__faqs_faqs_component__["a" /* FaqsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_notAuth_guard__["a" /* NotAuthGuard */]] },
    { path: 'activate/:token', component: __WEBPACK_IMPORTED_MODULE_11__activate_activate_component__["a" /* ActivateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_notAuth_guard__["a" /* NotAuthGuard */]] },
    { path: 'resetPassword', component: __WEBPACK_IMPORTED_MODULE_12__reset_password_reset_password_component__["a" /* ResetPasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_notAuth_guard__["a" /* NotAuthGuard */]] },
    { path: 'changePassword/:token', component: __WEBPACK_IMPORTED_MODULE_13__save_password_save_password_component__["a" /* SavePasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_notAuth_guard__["a" /* NotAuthGuard */]] },
    { path: 'admin/manageUsers', component: __WEBPACK_IMPORTED_MODULE_15__admin_users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_adminAuth_guard__["a" /* AdminAuthGuard */]] },
    { path: 'admin/login', component: __WEBPACK_IMPORTED_MODULE_14__admin_admin_login_admin_login_component__["a" /* AdminLoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_adminNotAuth_gurad__["a" /* AdminNotAuthGuard */]] },
    { path: 'getcoin', component: __WEBPACK_IMPORTED_MODULE_16__getcoin_getcoin_component__["a" /* GetcoinComponent */] },
    { path: 'getcoin/ETH', component: __WEBPACK_IMPORTED_MODULE_17__getcoin_ethereum_ethereum_component__["a" /* EthereumComponent */] },
    { path: 'getcoin/ETC', component: __WEBPACK_IMPORTED_MODULE_18__getcoin_ethclassic_ethclassic_component__["a" /* EthclassicComponent */] },
    { path: 'getcoin/DASH', component: __WEBPACK_IMPORTED_MODULE_19__getcoin_dash_dash_component__["a" /* DashComponent */] },
    { path: 'getcoin/LTC', component: __WEBPACK_IMPORTED_MODULE_20__getcoin_litecoin_litecoin_component__["a" /* LitecoinComponent */] },
    { path: 'getcoin/DGB', component: __WEBPACK_IMPORTED_MODULE_21__getcoin_digibyte_digibyte_component__["a" /* DigibyteComponent */] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot(routes)
        ],
        exports: [],
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/basicelements/basicelements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-buttons\">\n    <div class=\"container\">\n\t\t  <br> <br>\n\t\t <div class=\"col-md-8 ml-auto mr-auto text-center\">\n            <h2 class=\"title\" style=\"font-size:49px; color:black; letter-spacing: 0.06em; font-family:Arial,Helvetica,sans-serif;\">What is Ask <span style=\"color:#00973A;\"> Leprechaun?</span>\t</h2>\n\t\t\t<p class=\"description\" style=\"font-size:25px; color:black; font-family:Arial,Helvetica,sans-serif;\">Leprechaun is an Irish mythical creature which collects gold but now\n\t\t\tthe leprechauns are not only smart enough to collect modern gold that are the\n\t\t\tCrpyto Currencies but uses deep learning and twitter analysis to predict the GOLD! <br> <br>\n\t\t\t\n\t\t\t<span style=\"font-size:25px; color:#ED1566; font-family:Arial,Helvetica,sans-serif;\"> SO BE SMART AND </span> <span style=\"font-size:25px; color:#00973A;  font-family:Arial,Helvetica,sans-serif;\">ASK LEPRECHAUN</span>!</p>\n        </div>\t\n</div>\n</div>\t\t\n<div style=\"background:#252525; color:white; height:190px; line-height: 1.6em; text-align: center; font-size:20px; font-family:avenir-lt-w01_35-light1475496,sans-serif;\n letter-spacing:0.55em; padding-top:85px;\t\">FEARLESS INVESTMENTS IN OVER 10 COINS </div>\n<div style=\"background:#00973A; height:13px;\"> </div>\n<div class=\"parallax\" style=\"background-image: url('assets/img/image1.webp');\"> </div>\n<div class=\"section section-buttons\">\n    <div class=\"container\">\n        \n\t\t <div class=\"col-md-8 ml-auto mr-auto text-center\">\n            <h2 class=\"title\" style=\"font-size:49px; color:black; letter-spacing: 0.06em; font-family:Arial,Helvetica,sans-serif;\">Why Ask<span style=\"color:#00973A;\"> Leprechaun</span>?</h2> <br>\n\t\t\t<br>\t\n\t\n     <div class=\"expandable-box container\">\n       <p class=\"title\" style=\"font-size:19px; color:black; padding-top:-10px;   font-weight:bold;\">Ask. Listen. Solve.</p>\n    </div>\n    \n    <div class=\"expandable-box\">\n      <p class=\"title\" style=\"font-size:19px; color:black; padding-top:-10px;   font-weight:bold;\">You need us</p>\n    </div>\n    \n    <div class=\"expandable-box\">\n       \n      <p class=\"title\" style=\"font-size:19px; color:black; padding-top:-10px;   font-weight:bold;\">Live richly</p>\n    </div>\n    \n    <div class=\"expandable-box\">\n       \n      <p class=\"title\" style=\"font-size:19px; color:black; padding-top:-20px;   font-weight:bold;\">We know money</p>\n    </div>\n    \n    <div class=\"expandable-box\">\n      <p class=\"title\" style=\"font-size:19px; color:black; padding-top:-10px;   font-weight:bold;\">You’re first</p>\n    </div>\n    \n    <div class=\"expandable-box\">\n      <p class=\"title\" style=\"font-size:19px; color:black; padding-top:-10px;   font-weight:bold;\" >New money</p>\n \n  </div>\n</div>\n  </div>\n  </div>\n \n  \n  \n\n<br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n  \n  <div style=\"background:#252525; height:540px;\">\n  <br>\n\n<div class=\"row\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-6\">\n        <h2 class=\"title text-center\" style=\"font-size:49px; color:white; letter-spacing: 0.06em; font-family:Arial,Helvetica,sans-serif;\">RECENT NEWS</h2> <br>\n    </div>\n    <div class=\"col-sm-3\"></div>\n\n</div>\n\n\n      <div class=\"row\">\n          <div class=\"col-sm-1\"></div>\n    <div class=\"coinmarketcap-currency-widget col-sm-3\" style=\" padding-left:10px;  float: none; box-sizing: border-box; line-height: 1;\" data-currency=\"bitcoin\" data-base=\"USD\" data-secondary=\"\" data-ticker=\"false\" data-rank=\"false\"data-marketcap=\"false\" data-volume=\"false\" data-stats=\"USD\" data-statsticker=\"false\"></div>\n\n    <div class=\"coinmarketcap-currency-widget col-sm-3\" style=\" padding-left:10px; float: none; box-sizing: border-box; line-height: 1;\" data-currency=\"ethereum\" data-base=\"USD\" data-secondary=\"\" data-ticker=\"false\" data-rank=\"false\" data-marketcap=\"false\" data-volume=\"false\" data-stats=\"USD\" data-statsticker=\"false\"></div>\n    <div class=\"coinmarketcap-currency-widget col-sm-3\" style=\" padding-left:10px; float: none; box-sizing: border-box; line-height: 1;\" data-currency=\"litecoin\" data-base=\"USD\" data-secondary=\"\" data-ticker=\"false\" data-rank=\"false\" data-marketcap=\"false\" data-volume=\"false\" data-stats=\"USD\" data-statsticker=\"false\"></div>\n          <div class=\"col-sm-1\"></div>\n      </div>\n    <br>\n\n      <div class=\"row\">\n\n          <div class=\"col-sm-1\"></div>\n    <div class=\"coinmarketcap-currency-widget col-sm-3\" style=\"padding-left:10px; float: none; box-sizing: border-box; line-height: 1;\" data-currencyid=\"131\" data-base=\"USD\" data-secondary=\"\" data-ticker=\"true\" data-rank=\"false\" data-marketcap=\"false\" data-volume=\"false\" data-stats=\"USD\" data-statsticker=\"true\"></div>\n    <div class=\"coinmarketcap-currency-widget col-sm-3\" style=\"padding-left:10px; float: none; box-sizing: border-box; line-height: 1;\" data-currencyid=\"109\" data-base=\"USD\" data-secondary=\"\" data-ticker=\"true\" data-rank=\"false\" data-marketcap=\"false\" data-volume=\"false\" data-stats=\"USD\" data-statsticker=\"true\"></div>\n    <div class=\"coinmarketcap-currency-widget col-sm-3\" style=\"padding-left:10px; float: none; box-sizing: border-box; line-height: 1;\" data-currencyid=\"52\" data-base=\"USD\" data-secondary=\"\" data-ticker=\"false\" data-rank=\"false\" data-marketcap=\"false\" data-volume=\"false\" data-stats=\"USD\" data-statsticker=\"false\"></div>\n\n          <div class=\"col-sm-1\"></div>\n\n      </div>\n\n\n   \n  </div>\n\n  \n  <div class=\"parallax\" style=\"background-image: url('assets/img/image2.webp');\"> </div>\n\n  <div class=\"section section-buttons\">\n    <div class=\"container\">\n        \n\t\t <div class=\"col-md-8 ml-auto mr-auto text-center\">\n            <h2 class=\"title text-center\" style=\"font-size:49px; color:black; letter-spacing: 0.06em; \">CONTACT US</h2>\n\t\t </div>\n\t\t\t<h3 class=\"container\" style=\"font-size:25px; color:black; font-weight:bold;  font-family:Arial,Helvetica,sans-serif;\">FOR ANY INQUIRES,<br> PLEASE CALL OR EMAIL US:</h3>\n\t\t\t<p class=\"container\" style=\"font-size:22px; color:grey;  font-family:Arial,Helvetica,sans-serif;\">03333709568 | leprechaunfyp@gmail.com</p>\n\t\t\t\n\t\t\t<h3 class=\"container\" style=\"font-size:25px; color:black; font-weight:bold;  font-family:Arial,Helvetica,sans-serif;\">OUR ADDRESS:</h3>\n\t\t\t<p class=\"container\" style=\"font-size:22px; color:grey; font-family:Arial,Helvetica,sans-serif;\">Tarbela Road, District Swabi, Khyber Pakhtoon Khwa, Topi 23660</p>\n\t\t\t<h3 class=\"container\" style=\"font-size:25px; color:black; font-weight:bold;  font-family:Arial,Helvetica,sans-serif;\">Alternatively</h3>\n\t\t\t<p class=\"container\" style=\"font-size:22px; color:grey; font-family:Arial,Helvetica,sans-serif;\">You can fill in the following contact:</p>\n\n\t\t\t\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <form class=\"contact-form\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label style=\"font-weight:bold;\" >Name</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-single-02\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" style=\"font-weight:bold;\" placeholder=\"Name\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label style=\"font-weight:bold;\" >Email</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-email-85\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" style=\"font-weight:bold;\" placeholder=\"Email\">\n                                </div>\n                            </div>\n                        </div>\n                        <label style=\"font-weight:bold;\">Message</label>\n                        <textarea class=\"form-control\" rows=\"4\" style=\"font-weight:bold;\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 mr-auto ml-auto\">\n                                <button class=\"btn btn-success btn-lg btn-fill\">Send Message</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    \n\t\t\t\n\t</div>\n</div>        \n"

/***/ }),

/***/ "../../../../../src/app/components/basicelements/basicelements.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".parallax {\n  /* The image used */\n  /* Set a specific height */\n  min-height: 500px;\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n#rcorners2 {\n  border-radius: 25px;\n  background: #253137; }\n\n.container {\n  width: 100%;\n  margin: 30px auto; }\n\n.expandable-boxes {\n  position: relative; }\n\n.expandable-box {\n  width: 30%;\n  height: 130px;\n  float: left;\n  margin: 0 3% 20px 0;\n  border: 7px solid #E8E8E8;\n  border-radius: 1px;\n  padding: 10px;\n  box-sizing: border-box;\n  transition: all .3s ease-in-out; }\n  .expandable-box.open {\n    border-color: #dd0000;\n    width: 96%;\n    height: 180px;\n    margin: 0; }\n  .expandable-box.out {\n    width: 0;\n    height: 0;\n    overflow: hidden;\n    border: none;\n    padding: 0;\n    margin: 0;\n    opacity: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/basicelements/basicelements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicelementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicelementsComponent = (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state_default = true;
    }
    BasicelementsComponent.prototype.ngOnInit = function () { };
    return BasicelementsComponent;
}());
BasicelementsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basicelements',
        template: __webpack_require__("../../../../../src/app/components/basicelements/basicelements.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/basicelements/basicelements.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BasicelementsComponent);

//# sourceMappingURL=basicelements.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/components.component.html":
/***/ (function(module, exports) {

module.exports = "<app-basicelements></app-basicelements>\n<app-navigation></app-navigation>\n<!--<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Progress Bar</h3>\n                    <br/>\n                </div>\n                <ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar><br>\n                <ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar><br>\n                <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar><br>\n                <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\n\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Pagination</h3>\n                    <br/>\n                </div>\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n                <br/>\n                <ngb-pagination [collectionSize]=\"100\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\"></ngb-pagination>\n            </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Navigation Tabs</h3>\n                </div>\n\n                <div class=\"nav-tabs-navigation\">\n                    <div class=\"nav-tabs-wrapper\">\n                        <ngb-tabset [justify]=\"'center'\">\n                            <ngb-tab title=\"Home\">\n                                <ng-template ngbTabContent>\n                                    <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Profile\">\n                                <ng-template ngbTabContent>\n                                    <p>Here is your profile.</p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Messages\">\n                                <ng-template ngbTabContent>\n                                    <p>Here are your messages.</p>\n                                </ng-template>\n                            </ngb-tab>\n                        </ngb-tabset>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Labels</h3>\n                </div>\n                <span class=\"label label-default\">Default</span>\n                <span class=\"label label-primary\">Primary</span>\n                <span class=\"label label-info\">Info</span>\n                <span class=\"label label-success\">Success</span>\n                <span class=\"label label-warning\">Warning</span>\n                <span class=\"label label-danger\">Danger</span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"section section-notifications\" id=\"notifications\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h3>Notification</h3>\n        </div>\n    </div>\n    <app-notification></app-notification>\n</div>\n<!--<app-typography></app-typography\n<div class=\"section javascript-components\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h2>Angular Native Components</h2>\n        </div>\n        <div class=\"row\" id=\"modals\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Modal</h3>\n                </div>\n                <app-modal-component></app-modal-component>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Popovers</h3>\n                </div>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\">\n                    on right\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                    on top\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                    on left\n                </button>\n                \n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                    on bottom\n                </button>\n\n            </div>\n            <br/>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Datepicker</h3>\n                </div>\n                <div class=\"row\">\n                    <div class='col-sm-6'>\n                        <form class=\"form-inline\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group date\">\n                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\">\n                                    <span class=\"input-group-addon\">\n                                        <span class=\"glyphicon glyphicon-calendar\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n                                    </span>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Tooltips</h3>\n                </div>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                   on right\n               </button>\n               <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                  on left\n               </button>\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                   on top\n                </button>\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                   on bottom\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n-->\n<!--<div class=\"section\" id=\"carousel\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h3>Carousel</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <div class=\"card page-carousel\">\n                    <ngb-carousel>\n                        <ng-template ngbSlide>\n                            <img src=\"../assets/img/soroush-karimi.jpg\" alt=\"Random first slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Somewhere</p>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img src=\"../assets/img/federico-beccari.jpg\" alt=\"Random second slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Somewhere else</p>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img src=\"../assets/img/joshua-stannard.jpg\" alt=\"Random third slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Here it is</p>\n                            </div>\n                        </ng-template>\n                    </ngb-carousel>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentsComponent = (function () {
    function ComponentsComponent(renderer) {
        this.renderer = renderer;
        this.page = 4;
        this.page1 = 5;
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
    };
    return ComponentsComponent;
}());
ComponentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-components',
        template: __webpack_require__("../../../../../src/app/components/components.component.html"),
        styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _a || Object])
], ComponentsComponent);

var _a;
//# sourceMappingURL=components.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__ = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basicelements_basicelements_component__ = __webpack_require__("../../../../../src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__typography_typography_component__ = __webpack_require__("../../../../../src/app/components/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nucleoicons_nucleoicons_component__ = __webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_component__ = __webpack_require__("../../../../../src/app/components/components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modal_modal_component__ = __webpack_require__("../../../../../src/app/components/modal/modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__["NouisliderModule"],
            __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__components_component__["a" /* ComponentsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__basicelements_basicelements_component__["a" /* BasicelementsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_8__typography_typography_component__["a" /* TypographyComponent */],
            __WEBPACK_IMPORTED_MODULE_9__nucleoicons_nucleoicons_component__["a" /* NucleoiconsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__modal_modal_component__["a" /* NgbdModalComponent */],
            __WEBPACK_IMPORTED_MODULE_11__modal_modal_component__["b" /* NgbdModalContent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_11__modal_modal_component__["b" /* NgbdModalContent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_10__components_component__["a" /* ComponentsComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<p>You can pass an existing component as content of the modal window. In this case remember to add content component\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\n\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\n-->"

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    return NgbdModalContent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgbdModalContent.prototype, "name", void 0);
NgbdModalContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-content',
        template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], NgbdModalContent);

var NgbdModalComponent = (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    return NgbdModalComponent;
}());
NgbdModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-component',
        template: __webpack_require__("../../../../../src/app/components/modal/modal.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object])
], NgbdModalComponent);

var _a, _b;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"tim-title\">\n            <h3>Menu</h3>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"d-inline-block dropdown\">\n                                        <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-danger\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu-icon\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar-menu-icon\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-email-85\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item \">\n                                    <div ngbDropdown class=\"dropdown\">\n                                    <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-danger dropdown-menu-right\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n    </div>\n    <div id=\"navbar\">\n        <div class=\"container\">\n            <div class=\"tim-title\">\n                <h3>Navigation</h3>\n                <br/>\n            </div>\n        </div>\n\t\t\n        <div class=\"navigation-example\">\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Primary Color</a>\n                    Bilal\n                    \n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Info Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-success\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i> </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Warning Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Danger Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Share</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Tweet</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i> Pin</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Transparent</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-transparent\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-transparent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Facebook</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i> Instagram</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n        </div>\n    </div>\n</div>\n-->"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/components/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\t\n        <div class=\"row\">\n           \n\t\t   <div class=\"col-md-12\">\n\t\t\t\n                <div class=\"card\">\n<form style=\"padding-right:100px;\"class=\"navbar-right\">\n  <input type=\"text\" placeholder=\"Search Users\" />\n  <button type=\"submit\" class=\"btn btn-info btn-sm\" style=\"font-weight:bold;\" value=\"Search\">Search</button>\n</form>\n                    <div class=\"card-header\" data-background-color=\"green\">\n                        <h4 class=\"title\" style=\"font-size:49px;\">Manage Users</h4>\n                        <p class=\"category\" style=\"font-size:20px;\">Block, Unblock and Delete Users</p>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n                    </div>\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table\">\n                            <thead class=\"text-success\">\n                                <tr>\n                                    <th style=\"font-size:20px; font-weight:bold;\">Name</th>\n                                    <th style=\"font-size:20px; font-weight:bold;\">Email</th>\n                                    <th style=\"font-size:20px; font-weight:bold;\">Phone</th>\n                                    <th style=\"font-size:20px; font-weight:bold;\">Salary</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>Dakota Rice</td>\n                                    <td>Niger</td>\n                                    <td>Oud-Turnhout</td>\n                                    <td class=\"text-danger\">$36,738</td>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-warning btn-round  btn-sm\">Block</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-success btn-round btn-sm\">Unblock</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-danger btn-round btn-sm\">Delete</a>\n                                </tr>\n                                <tr>\n                                    <td>Minerva Hooper</td>\n                                    <td>Curaçao</td>\n                                    <td>Sinaai-Waas</td>\n                                    <td class=\"text-danger\">$23,789</td>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-warning btn-round btn-sm\">Block</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-success btn-round btn-sm\">Unblock</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-danger btn-round btn-sm\">Delete</a>\n                                </tr>\n                                <tr>\n                                    <td>Sage Rodriguez</td>\n                                    <td>Netherlands</td>\n                                    <td>Baileux</td>\n                                    <td class=\"text-danger\">$56,142</td>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-warning btn-round btn-sm\">Block</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-success btn-round btn-sm\">Unblock</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-danger btn-round btn-sm\">Delete</a>\n                                </tr>\n                                <tr>\n                                    <td>Philip Chaney</td>\n                                    <td>Korea, South</td>\n                                    <td>Overland Park</td>\n                                    <td class=\"text-danger\">$38,735</td>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-warning btn-round btn-sm\">Block</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-success btn-round btn-sm\">Unblock</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-danger btn-round btn-sm\">Delete</a>\n                                </tr>\n                                <tr>\n                                    <td>Doris Greene</td>\n                                    <td>Malawi</td>\n                                    <td>Feldkirchen in Kärnten</td>\n                                    <td class=\"text-danger\">$63,542</td>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-warning btn-round btn-sm\">Block</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-success btn-round btn-sm\">Unblock</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-danger btn-round btn-sm\">Delete</a>\n                                </tr>\n                                <tr>\n                                    <td>Mason Porter</td>\n                                    <td>Chile</td>\n                                    <td>Gloucester</td>\n                                    <td class=\"text-danger\">$78,615</td>\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-warning btn-round btn-sm\">Block</a>\n\t\t\t\t\t\t\t\t\t<span style=\"padding-left:5px\"><a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-success btn-round btn-sm \">Unblock</a></span>\n\t\t\t\t\t\t\t\t\t<span style=\"padding-left:5px\"><a href=\"#pablo\" style=\"font-weight:bold;\" class=\"btn btn-danger btn-round btn-sm \">Delete</a></span>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                    </div>\n                </div>\n\t\t\t\t\n            </div>\n\n           \n        </div>\n    </div>\n\t<br>\n\t<br>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway);", ""]);

// module
exports.push([module.i, "body {\n  color: #333;\n  background: #fcfcfc;\n  font-family: 'Raleway', sans-serif;\n  overflow-x: hidden; }\n\n.faq-header {\n  font-size: 42px;\n  border-bottom: 1px dotted #ccc;\n  padding: 24px; }\n\n.faq-content {\n  margin: 0 auto; }\n\n.faq-question {\n  padding: 20px 0;\n  border-bottom: 1px dotted #ccc; }\n\n.panel-title {\n  font-size: 24px;\n  width: 100%;\n  position: relative;\n  margin: 0;\n  padding: 10px 10px0 48px;\n  display: block;\n  cursor: pointer; }\n\n.panel-content {\n  font-size: 20px;\n  padding: 0px 14px;\n  margin: 0 40px;\n  height: 0;\n  overflow: hidden;\n  z-index: -1;\n  position: relative;\n  opacity: 0;\n  transition: .4s ease; }\n\n.panel:checked ~ .panel-content {\n  height: auto;\n  opacity: 1;\n  padding: 14px; }\n\n.plus {\n  position: absolute;\n  margin-left: 20px;\n  margin-top: 4px;\n  z-index: 5;\n  font-size: 42px;\n  line-height: 100%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  transition: .2s ease; }\n\n.panel:checked ~ .plus {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n.panel {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
            icon: 'nc-bell-55'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
            icon: 'nc-bell-55'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    return NotificationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "alerts", void 0);
NotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notification',
        template: __webpack_require__("../../../../../src/app/components/notification/notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/notification/notification.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NotificationComponent);

//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nucleoicons/nucleoicons.component.html":
/***/ (function(module, exports) {

module.exports = "<<header>\n    <h1>Paper Kit 2 Icons</h1>\n    <p>Built with <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a></p>\n</header>\n\n<div id=\"icons-wrapper\">\n    <section>\n        <ul>\n            <li>\n                <i class=\"nc-icon nc-air-baloon\"></i>\n                <p>nc-air-baloon</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-album-2\"></i>\n                <p>nc-album-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-alert-circle-i\"></i>\n                <p>nc-alert-circle-i</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-center\"></i>\n                <p>nc-align-center</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-left-2\"></i>\n                <p>nc-align-left-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ambulance\"></i>\n                <p>nc-ambulance</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-app\"></i>\n                <p>nc-app</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-atom\"></i>\n                <p>nc-atom</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-badge\"></i>\n                <p>nc-badge</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bag-16\"></i>\n                <p>nc-bag-16</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bank\"></i>\n                <p>nc-bank</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-basket\"></i>\n                <p>nc-basket</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bell-55\"></i>\n                <p>nc-bell-55</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bold\"></i>\n                <p>nc-bold</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-book-bookmark\"></i>\n                <p>nc-book-bookmark</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bookmark-2\"></i>\n                <p>nc-bookmark-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box-2\"></i>\n                <p>nc-box-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box\"></i>\n                <p>nc-box</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-briefcase-24\"></i>\n                <p>nc-briefcase-24</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bulb-63\"></i>\n                <p>nc-bulb-63</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bullet-list-67\"></i>\n                <p>nc-bullet-list-67</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bus-front-12\"></i>\n                <p>nc-bus-front-12</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-pause\"></i>\n                <p>nc-button-pause</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-play\"></i>\n                <p>nc-button-play</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-power\"></i>\n                <p>nc-button-power</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-calendar-60\"></i>\n                <p>nc-calendar-60</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-camera-compact\"></i>\n                <p>nc-camera-compact</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-caps-small\"></i>\n                <p>nc-caps-small</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cart-simple\"></i>\n                <p>nc-cart-simple</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-bar-32\"></i>\n                <p>nc-chart-bar-32</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-pie-36\"></i>\n                <p>nc-chart-pie-36</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chat-33\"></i>\n                <p>nc-chat-33</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-check-2\"></i>\n                <p>nc-check-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-circle-10\"></i>\n                <p>nc-circle-10</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-download-93\"></i>\n                <p>nc-cloud-download-93</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-upload-94\"></i>\n                <p>nc-cloud-upload-94</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-compass-05\"></i>\n                <p>nc-compass-05</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-controller-modern\"></i>\n                <p>nc-controller-modern</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-credit-card\"></i>\n                <p>nc-credit-card</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-delivery-fast\"></i>\n                <p>nc-delivery-fast</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-diamond\"></i>\n                <p>nc-diamond</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-email-85\"></i>\n                <p>nc-email-85</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-favourite-28\"></i>\n                <p>nc-favourite-28</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-glasses-2\"></i>\n                <p>nc-glasses-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe-2\"></i>\n                <p>nc-globe-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe\"></i>\n                <p>nc-globe</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-hat-3\"></i>\n                <p>nc-hat-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-headphones\"></i>\n                <p>nc-headphones</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-html5\"></i>\n                <p>nc-html5</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-image\"></i>\n                <p>nc-image</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-istanbul\"></i>\n                <p>nc-istanbul</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-key-25\"></i>\n                <p>nc-key-25</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-laptop\"></i>\n                <p>nc-laptop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-layout-11\"></i>\n                <p>nc-layout-11</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-lock-circle-open\"></i>\n                <p>nc-lock-circle-open</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-map-big\"></i>\n                <p>nc-map-big</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-down\"></i>\n                <p>nc-minimal-down</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-left\"></i>\n                <p>nc-minimal-left</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-right\"></i>\n                <p>nc-minimal-right</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-up\"></i>\n                <p>nc-minimal-up</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-mobile\"></i>\n                <p>nc-mobile</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-money-coins\"></i>\n                <p>nc-money-coins</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-note-03\"></i>\n                <p>nc-note-03</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-palette\"></i>\n                <p>nc-palette</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-paper\"></i>\n                <p>nc-paper</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-pin-3\"></i>\n                <p>nc-pin-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-planet\"></i>\n                <p>nc-planet</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-refresh-69\"></i>\n                <p>nc-refresh-69</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ruler-pencil\"></i>\n                <p>nc-ruler-pencil</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-satisfied\"></i>\n                <p>nc-satisfied</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-scissors\"></i>\n                <p>nc-scissors</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-send\"></i>\n                <p>nc-send</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings-gear-65\"></i>\n                <p>nc-settings-gear-65</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings\"></i>\n                <p>nc-settings</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-share-66\"></i>\n                <p>nc-share-66</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-shop\"></i>\n                <p>nc-shop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-add\"></i>\n                <p>nc-simple-add</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-delete\"></i>\n                <p>nc-simple-delete</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-remove\"></i>\n                <p>nc-simple-remove</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-02\"></i>\n                <p>nc-single-02</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-copy-04\"></i>\n                <p>nc-single-copy-04</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sound-wave\"></i>\n                <p>nc-sound-wave</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-spaceship\"></i>\n                <p>nc-spaceship</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sun-fog-29\"></i>\n                <p>nc-sun-fog-29</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-support-17\"></i>\n                <p>nc-support-17</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tablet-2\"></i>\n                <p>nc-tablet-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tag-content\"></i>\n                <p>nc-tag-content</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tap-01\"></i>\n                <p>nc-tap-01</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tie-bow\"></i>\n                <p>nc-tie-bow</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tile-56\"></i>\n                <p>nc-tile-56</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-time-alarm\"></i>\n                <p>nc-time-alarm</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-touch-id\"></i>\n                <p>nc-touch-id</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-trophy\"></i>\n                <p>nc-trophy</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tv-2\"></i>\n                <p>nc-tv-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-umbrella-13\"></i>\n                <p>nc-umbrella-13</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-user-run\"></i>\n                <p>nc-user-run</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-vector\"></i>\n                <p>nc-vector</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-watch-time\"></i>\n                <p>nc-watch-time</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-world-2\"></i>\n                <p>nc-world-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-zoom-split\"></i>\n                <p>nc-zoom-split</p>\n            </li>\n            <!-- list of icons here with the proper class-->\n        </ul>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/nucleoicons/nucleoicons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nucleoicons/nucleoicons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NucleoiconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NucleoiconsComponent = (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('app-nucleoicons')[0];
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.add('navbar-hidden');
        body.classList.add('demo-icons');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-hidden');
    };
    return NucleoiconsComponent;
}());
NucleoiconsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nucleoicons',
        template: __webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], NucleoiconsComponent);

var _a;
//# sourceMappingURL=nucleoicons.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container tim-container\">\n        <div class=\"tim-title\">\n            <h3>Typography</h3>\n            <br/>\n        </div>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"typography-line\">\n                    <h1>\n                        <span class=\"note\">Header 1</span> Thinking in textures\n                    </h1>\n                </div>\n                <div class=\"typography-line\">\n                    <h2>\n                        <span class=\"note\">Header 2</span> Thinking in textures\n                    </h2>\n                </div>\n                <div class=\"typography-line\">\n                    <h3>\n                        <span class=\"note\">Header 3</span> Thinking in textures\n                    </h3>\n                </div>\n                <div class=\"typography-line\">\n                    <h4>\n                        <span class=\"note\">Header 4</span> Thinking in textures\n                    </h4>\n                </div>\n                <div class=\"typography-line\">\n                    <h5>\n                        <span class=\"note\">Header 5</span> Thinking in textures\n                    </h5>\n                </div>\n                <div class=\"typography-line\">\n                    <h6>\n                        <span class=\"note\">Header 6</span> Thinking in textures\n                    </h6>\n                </div>\n                <div class=\"typography-line\">\n                    <p>\n                        <span class=\"note\">Paragraph</span> Thinking in textures\n                    </p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Quote</span>\n                    <blockquote class=\"blockquote\">\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>\n                    </blockquote>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Muted text</span>\n                    <p class=\"text-muted\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Primary text</span>\n                    <p class=\"text-primary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Success text</span>\n                    <p class=\"text-success\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Info text</span>\n                    <p class=\"text-info\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Warning text</span>\n                    <p class=\"text-warning\">Etiam porta sem malesuada magna mollis euismod.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Danger text</span>\n                    <p class=\"text-danger\">Donec ullamcorper nulla non metus auctor fringilla.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <h2><span class=\"note\">Small tag</span>Header with small subtitle\n                        <br/>\n                        <small>\".small\" is a tag for the headers</small>\n                    </h2>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div id=\"images\">\n            <div class=\"container\">\n                <div class=\"tim-title\">\n                    <h3>Images</h3>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-8 col-sm-6 col-md-3\">\n                        <h4 class=\"images-title\">Rounded Image</h4>\n                        <img src=\"assets/img/uriel-soberanes.jpg\" class=\"img-rounded img-responsive\" alt=\"Rounded Image\">\n                        <div class=\"img-details\">\n                            <div class=\"author\">\n                                <img src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                            </div>\n                            <p>Chet Faker</p>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Circle Image</h4>\n                        <img src=\"assets/img/faces/joe-gardner-2.jpg\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Joe Gardner</p>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Thumbnail</h4>\n                        <img src=\"assets/img/faces/clem-onojeghuo-3.jpg\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Erik Faker</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-typography',
        template: __webpack_require__("../../../../../src/app/components/typography/typography.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/typography/typography.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TypographyComponent);

//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ "../../../../../src/app/faqs/faqs.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"row\">\n\n\n\n    <div class=\"col-sm-2\"> </div>\n\n\n\n\n    <div class=\"col-sm-8\">\n\n\n    <br><br><br><br>\n<div class=\"faq-header text-center\">Frequently Asked Questions</div>\n<div class=\"faq-content\">\n<div class=\"faq-question\">\n<input id=\"q1\" type=\"checkbox\" class=\"panel\">\n\n<label for=\"q1\" class=\"panel-title\">\n\n\n            <div class=\"row\">\n\n                <div class=\"col-sm-3\">    <div class=\"plus\">+</div>   </div>\n\n                <div class=\"col-sm-8\">\n                    Why should we ASK LEPRECHAUN?\n                </div>\n\n            </div>\n\n\n\n\n\n\n\n\n\n\n</label>\n<div class=\"panel-content\">LEPRECHAUN uses deep learning neural networks and twitter\n            analysis of various coins to predict the future. Leprechaun is smart.\n            So you should Ask LEPRECHAUN\n</div>\n</div>\n\n<div class=\"faq-question\">\n<input id=\"q2\" type=\"checkbox\" class=\"panel\">\n\n    <label for=\"q2\" class=\"panel-title\">\n\n    <div class=\"row\">\n\n        <div class=\"col-sm-3\">    <div class=\"plus\">+</div>   </div>\n\n        <div class=\"col-sm-8 \">\n            How can I use the Ask Leprechaun predictions?\n        </div>\n\n    </div>\n\n    </label>\n<div class=\"panel-content\">\n\n\n    The technology behind ASK LEPRECHAUN is designed to predict broad market moves that happen over periods of several weeks or months. Therefore, ASK LEPRECHAUN typically disregards short term quick market spikes and drops (oscillations) that last approximately 7-10 days or less. If ASK LEPRECHAUN predicts a downward market trend, you may want to consider moving your stock-based assets to bonds or cash, and keep the money there until ASK LEPRECHAUN predicts a market rise. At that point it may be a good idea to move money from cash or bonds back to stock assets. Keep in mind, however, that we explicitly do not provide any specific recommendations regarding trading your assets - that will be solely your own decision and responsibility, in consultation with your personal financial advisor.</div>\n</div>\n\n<div class=\"faq-question\">\n<input id=\"q3\" type=\"checkbox\" class=\"panel\">\n\n<label for=\"q3\" class=\"panel-title\">\n\n\n    <div class=\"row\">\n\n        <div class=\"col-sm-3\">    <div class=\"plus\">+</div>   </div>\n\n        <div class=\"col-sm-8\">\n            Can ASK LEPRECHAUN be used for predicting prices of individual stocks?\n        </div>\n\n    </div>\n\n\n\n</label>\n<div class=\"panel-content\">The use of ASK LEPRECHAUN for predicting individual stock behavior should be done with caution. As mentioned above, ASK LEPRECHAUN will generate a warning for an upcoming broad market change based on a consistent ASK LEPRECHAUN down- or uptrend. Thus, it is not a suitable predictive tool for day trading of individual stocks. Furthermore, pricing directions of individual stocks do not necessarily follow broad market moves. Nevertheless, you can certainly try to check if price variations of your favorite stocks can be actually predicted by ASK LEPRECHAUN.</div>\n</div>\n\n<div class=\"faq-question\">\n<input id=\"q4\" type=\"checkbox\" class=\"panel\">\n<<label for=\"q4\" class=\"panel-title\">\n\n\n    <div class=\"row\">\n\n        <div class=\"col-sm-3\">    <div class=\"plus\">+</div>   </div>\n\n        <div class=\"col-sm-8\">\n            Can you guarantee that ASK LEPRECHAUN will predict market moves with 100% accuracy?\n        </div>\n\n    </div>\n\n</label>\n<div class=\"panel-content\">Based on our experience to date, ASK LEPRECHAUN has consistently predicted 90% of significant stock market movements. However, as with any prediction, there is always a chance that some market changes may be difficult to foresee. In general, ASK LEPRECHAUN is most effective under conditions of natural economic cycles. Extraneous factors or circumstances that are not related to normal economy flow may affect ASK LEPRECHAUN readings and decrease its predictive power. However, twitter sentimental analysis of various crypto currencies helps us to overcome this issue to great extent but this problem still exists.\n            Thus, one should always keep an eye on significant non-economic events and be extra cautious in applying ASK LEPRECHAUN predictions when such events do take place. Ultimately the decision to sell or buy your assets is completely your own; ASK LEPRECHAUN is a tool that provides input to help you make such decision.\n</div>\n</div>\n\n<div class=\"faq-question\">\n<input id=\"q5\" type=\"checkbox\" class=\"panel\">\n\n    <label for=\"q5\" class=\"panel-title\">\n\n\n        <div class=\"row\">\n\n            <div class=\"col-sm-3\">    <div class=\"plus\">+</div>   </div>\n\n            <div class=\"col-sm-8\">\n                Does the magnitude of ASK LEPRECHAUN changes predict the extent of forthcoming market rise or fall?\n            </div>\n\n        </div>\n\n</label>\n<div class=\"panel-content\"> Based on our observations, the scale of ASK LEPRECHAUN change and the scale of the subsequent market change do not necessarily correlate. The most important parameter to watch is the ASK LEPRECHAUN trend (up or down), not the steepness of this trend.</div>\n</div>\n\n<div class=\"faq-question\">\n<input id=\"q6\" type=\"checkbox\" class=\"panel\">\n<label for=\"q6\" class=\"panel-title\">\n\n\n\n    <div class=\"row\">\n\n        <div class=\"col-sm-3\">    <div class=\"plus\">+</div>   </div>\n\n        <div class=\"col-sm-8\">\n            How many crypto currencies does the ASK LEPRECHAUN predicts?\n        </div>\n\n    </div>\n\n</label>\n<div class=\"panel-content\">ASK LEPRECHAUN predicts around 10 coins whose volume is greater than 100 BTC.</div>\n</div>\n\n<div class=\"faq-question\">\n<input id=\"q7\" type=\"checkbox\" class=\"panel\">\n<label for=\"q7\" class=\"panel-title\">\n\n    <div class=\"row\">\n\n        <div class=\"col-sm-3\">    <div class=\"plus\">+</div>   </div>\n\n        <div class=\"col-sm-8\">\n            What is included in our services?\n        </div>\n\n    </div>\n\n\n</label>\n<div class=\"panel-content\">Using our proprietary technology platform, we calculate the ASK LEPRECHAUN on a regular basis and post the updated graphical ASK LEPRECHAUN trend line once every 3 days, along with the S&P 500 broad stock market index. Our subscribers will be able to access the graphical data and check for ASK LEPRECHAUN-predicted market trends at any time. This information will help you to adjust your investment portfolio to take full advantage of the upcoming market rise or decline.</div>\n</div>\n\n\n<div class=\"faq-question\">\n<input id=\"q8\" type=\"checkbox\" class=\"panel\">\n<label for=\"q8\" class=\"panel-title\">\n\n\n    <div class=\"row\">\n\n        <div class=\"col-sm-3\">    <div class=\"plus\">+</div>   </div>\n\n        <div class=\"col-sm-8\">\n            How much does it cost?\n        </div>\n\n    </div>\n\n   </label>\n<div class=\"panel-content\">We understand that due to the unique and novel nature of the ASK LEPRECHAUN investors may be cautious about this technology and may need time to evaluate its performance. Therefore, as an introductory limited time offer, new subscribers will receive full free access to our service for a trial period of 6 months (no credit card required). If you decide to continue using ASK LEPRECHAUN beyond the trial period, the cost to access our service will be $120 per year. As an option, you may consider to skip the trial period and immediately receive full subscription for just $60 per year. The currently shown rates will not change for the lifetime of your account as long as the account is in good standing. Subscription payments are non-refundable.</div>\n</div>\n\n\n\n</div>\n\n\n    </div>\n\n\n\n    <div class=\"col-sm-2\"> </div>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/faqs/faqs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway);", ""]);

// module
exports.push([module.i, "body {\n  color: #333;\n  background: #fcfcfc;\n  font-family: 'Raleway', sans-serif;\n  overflow-x: hidden; }\n\n.faq-header {\n  font-size: 42px;\n  border-bottom: 1px dotted #ccc;\n  padding: 24px; }\n\n.faq-content {\n  margin: 0 auto; }\n\n.faq-question {\n  padding: 20px 0;\n  border-bottom: 1px dotted #ccc; }\n\n.panel-title {\n  font-size: 24px;\n  width: 100%;\n  position: relative;\n  margin: 0;\n  padding: 10px 10px0 48px;\n  display: block;\n  cursor: pointer; }\n\n.panel-content {\n  font-size: 20px;\n  padding: 0px 14px;\n  margin: 0 40px;\n  height: 0;\n  overflow: hidden;\n  z-index: -1;\n  position: relative;\n  opacity: 0;\n  transition: .4s ease; }\n\n.panel:checked ~ .panel-content {\n  height: auto;\n  opacity: 1;\n  padding: 14px; }\n\n.plus {\n  position: absolute;\n  margin-left: 20px;\n  margin-top: 4px;\n  z-index: 5;\n  font-size: 42px;\n  line-height: 100%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  transition: .2s ease; }\n\n.panel:checked ~ .plus {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n.panel {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faqs/faqs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqsComponent = (function () {
    function FaqsComponent() {
    }
    FaqsComponent.prototype.ngOnInit = function () { };
    return FaqsComponent;
}());
FaqsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'faqs-landing',
        template: __webpack_require__("../../../../../src/app/faqs/faqs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/faqs/faqs.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FaqsComponent);

//# sourceMappingURL=faqs.component.js.map

/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    // first argument of filter is the array to filter and  
    // second argument of filter is the keyword on which array is filtered
    FilterPipe.prototype.transform = function (users, searchKeyword) {
        // check if search term is undefined (return all users)
        if (searchKeyword === undefined)
            return users;
        // return updated users array (if search keyword)
        return users.filter(function (user) {
            return user.username.toLowerCase().includes(searchKeyword.toLowerCase());
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/getcoin/dash/dash.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<br><br><br><br><br>\n<div id=\"container\"  >\n\n  <div id=\"sideMenu\">\n    <h1>COINS LISTS</h1>\n\n    <ul class=\"menu\">\n      <!--<li><a routerLink=\"/getcoin\">GET-PREDICTION</a></li>-->\n      <li><a routerLink=\"/getcoin/ETH\">ETHEREUM <span class=\"colorIcon red\"></span></a></li>\n      <li><a routerLink=\"/getcoin/LTC\">LITECOIN <span class=\"colorIcon orange\"></span></a></li>\n      <li><a routerLink=\"/getcoin/DASH\">DASHCOIN <span class=\"colorIcon green\"></span></a></li>\n      <li><a routerLink=\"/getcoin/DGB\">DIGIBYTE <span class=\"colorIcon green\"></span></a></li>\n      <li><a routerLink=\"/getcoin/ETC\">ETHEREUM CLASSIC <span class=\"colorIcon green\"></span></a></li>\n    </ul>\n  </div>\n  <div id=\"content\">\n    <div id=\"titleBar\">\n      <h2>DASH</h2>\n      <br>\n      <h2>{{countDown2 | async}}:{{countDown | async}}  {{timelimit}} </h2>\n      <br>\n      <a>\n        <button style=\"font-weight:bold;\" class=\"btn btn-warning btn-round btn-sm\" type=\"button\" (click)=\"getDashPrediction()\" name=\"button\">Prediction</button>\n      </a>\n      <a>\n        <button style=\"font-weight:bold;\" class=\"btn btn-success btn-round btn-sm\" type=\"button\" (click)=\"getDashTweet()\" name=\"button\">Tweet</button>\n      </a>\n      <div>\n      </div>\n\n\n\n\n      <br>\n\n      <div  id=\"tradingview_0d880\"></div>\n\n    </div>\n    <div id=\"content\">\n\n      <div class=\"mainChart\">\n        <canvas id=\"salesData\"></canvas>\n\n\n        <br><br><br><br><br><br><br><br><br><br>\n        <br><br><br><br><br><br><br><br><br><br>\n\n\n        <div class=\"row\">\n\n          <div class=\"col-xs-4\">\n            <h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              Current Price:</h2>\n          </div>\n\n          <div class=\"col-xs-4\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n\n          <div class=\"col-xs-4\">\n            <h2>Predicted Price:</h2>            </div>\n\n          <br><br>\n\n\n\n          <div class=\"row\">\n\n            <div class=\"col-xs-4\">\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n              <div _ngcontent-c3=\"\" class=\"coinmarketcap-currency-widget\" data-base=\"USD\" data-currencyid=\"131\" data-marketcap=\"true\" data-rank=\"true\" data-secondary=\"\" data-stats=\"USD\" data-statsticker=\"true\" data-ticker=\"true\" data-volume=\"true\" style=\"background: rgb(37, 49, 55); float: right; box-sizing: border-box; line-height: 1;\"><div style=\"border:2px solid #E4E6EB;border-radius: 10px;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;min-width:285px;\">    <div>        <div style=\"float:right;width:67%;border: 0px solid #000;text-align:left;padding:5px 0px;line-height:30px;\">            <span style=\"font-size: 18px;\"><a href=\"http://coinmarketcap.com/currencies/undefined/?utm_medium=widget&amp;utm_campaign=cmcwidget&amp;utm_source=localhost&amp;utm_content=undefined\" target=\"_blank\" style=\"text-decoration: none; color: rgb(66, 139, 202);\">Dash (DASH)</a></span> <br>            <span style=\"font-size: 16px;\">626.61 USD <span style=\"color:#093\">(3.20%)</span></span>                    </div>        <div style=\"text-align:center;padding:5px 0px;width:33%;\"><img src=\"https://files.coinmarketcap.com/static/img/coins/64x64/131.png\"></div>    </div><div style=\"border-top: 1px solid #E4E6EB;clear:both;\">                    <div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">                        RANK                        <br><br>                        <span style=\"font-size: 17px; \">10</span>                    </div>                    <div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">                        MARKET CAP                        <br><br>                        <span style=\"font-size: 14px; \">$4.95 B <span style=\"font-size:9px\">USD</span></span>                    </div>                    <div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;line-height:1.25em;\">                        VOLUME (24H)                        <br><br>                        <span style=\"font-size: 14px; \">$91.39 M <span style=\"font-size:9px\">USD</span></span>                    </div></div>    <div style=\"border-top: 1px solid #E4E6EB;text-align:center;clear:both;font-size:10px;font-style:italic;padding:5px 0;\">        <a href=\"http://coinmarketcap.com?utm_medium=widget&amp;utm_campaign=cmcwidget&amp;utm_source=localhost&amp;utm_content=undefined\" target=\"_blank\" style=\"text-decoration: none; color: rgb(66, 139, 202);\">Powered by CoinMarketCap</a>    </div></div></div>\n\n            </div>\n\n            <div class=\"col-xs-4\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n\n            <div class=\"col-xs-4\">\n              <div   style=\"background: rgb(37, 49, 55); float: right; box-sizing: border-box; line-height: 1;\">\n                <div style=\"border:2px solid #E4E6EB;border-radius: 10px;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;min-width:285px;\">\n                  <div>\n                    <div style=\"float:right;width:67%;border: 0px solid #000;text-align:left;padding:5px 0px;line-height:30px;\">\n                    <span style=\"font-size: 18px;\">\n                      <a  style=\"text-decoration: none; color: rgb(66, 139, 202);\">Ethereum (ETH)\n                      </a>\n                    </span>\n                      <br>\n                      <span style=\"font-size: 16px;\">818.83 USD <span style=\"color:#d14836\">\n                      (-2.61%)\n                    </span>\n                    </span>\n                    </div>\n                    <div style=\"text-align:center;padding:5px 0px;width:33%;\">\n                      <img src=\"https://files.coinmarketcap.com/static/img/coins_legacy/64x64/ethereum.png\">\n                    </div>\n                  </div>\n                  <!--<div style=\"border-top: 1px solid #E4E6EB;clear:both;\">-->\n                  <!--<div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">-->\n                  <!--RANK-->\n                  <!--<br><br>-->\n                  <!--<span style=\"font-size: 17px; \">2-->\n                  <!--</span>-->\n                  <!--</div>-->\n                  <!--<div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">-->\n                  <!--MARKET CAP-->\n                  <!--<br><br>-->\n                  <!--<span style=\"font-size: 14px; \">-->\n                  <!--$80.06 B-->\n                  <!--</span>-->\n                  <!--</div>-->\n                  <!--<div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;line-height:1.25em;\">-->\n                  <!--VOLUME (24H)-->\n                  <!--<br><br>-->\n                  <!--<span style=\"font-size: 14px; \">-->\n                  <!--$2.21 B-->\n                  <!--</span>-->\n                  <!--</div>-->\n                  <!--</div>-->\n                  <div style=\"border-top: 1px solid #E4E6EB;text-align:center;clear:both;font-size:10px;font-style:italic;padding:5px 0;\">\n                    <a style=\"text-decoration: none; color: rgb(66, 139, 202);\">\n                      Powered by ASK LEPRECHAUN\n                    </a>\n                  </div>\n                </div>\n              </div>\n\n\n\n            </div>\n\n\n          </div>\n\n\n\n\n\n          <div class=\"clearFix\"></div>\n\n          <!--<div id=\"totalSales\">-->\n          <!--<div class=\"col\">-->\n          <!--<div id=\"creditSales\" class=\"progressBar\" ></div>-->\n\n\n          <!--<h3>£5,390                        </h3>-->\n\n\n          <!--&lt;!&ndash;<div class=\"tradingview-widget-container\">&ndash;&gt;-->\n          <!--&lt;!&ndash;<div id=\"tradingview_0d880\"></div>&ndash;&gt;-->\n          <!--&lt;!&ndash;</div>&ndash;&gt;-->\n\n          <!--<span class=\"progressTitle\">Education Spend</span>-->\n          <!--</div>-->\n          <!--<div class=\"col\">-->\n          <!--<div id=\"channelSales\" class=\"progressBar\"></div>-->\n          <!--<h3>£904.37</h3>-->\n          <!--<span class=\"progressTitle\">Holiday Spend</span>-->\n          <!--</div>-->\n          <!--<div class=\"col\">-->\n          <!--<div id=\"directSales\" class=\"progressBar\"></div>-->\n          <!--<h3>£0</h3>-->\n          <!--<span class=\"progressTitle\">Cost of Living</span>-->\n          <!--</div>-->\n          <!--</div>-->\n\n\n          <br>\n\n          <br>\n\n\n          <br>\n\n          <br>\n\n\n          <!--<table>-->\n          <!--<tr>-->\n          <!--<th>Living Expenses</th>-->\n          <!--<th>Description</th>-->\n          <!--<th>Cost</th>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Travel<br></td>-->\n          <!--<td>TFL</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Grocery<br></td>-->\n          <!--<td>Lunches & Supermarket</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Social<br></td>-->\n          <!--<td>Drinks, Dinners & Clubs</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Wellbeing<br></td>-->\n          <!--<td>Massages, Pedicures etc.</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Misc.<br></td>-->\n          <!--<td>Miscellaneous</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n          <!--</table>-->\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n\n\n  <!--&lt;!&ndash;<div class=\"coinmarketcap-currency-widget\" style=\"background: rgb(37, 49, 55); float: right; box-sizing: border-box; line-height: 1;\" data-currency=\"bitcoin\" data-base=\"USD\" data-secondary=\"\" data-ticker=\"false\" data-rank=\"false\" data-marketcap=\"false\" data-volume=\"false\" data-stats=\"USD\" data-statsticker=\"false\"></div>&ndash;&gt;-->\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/getcoin/dash/dash.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:100,300,400,700);", ""]);

// module
exports.push([module.i, "html {\n  height: 100%;\n  font-family: 'Lato', sans-serif; }\n\nbody {\n  height: 100%;\n  margin: 0;\n  background: linear-gradient(135deg, #41839b 0%, #33627b 100%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/daniel-olahh.jpg")) + "); }\n\np {\n  word-spacing: 500px; }\n\n#container2 {\n  width: 960px;\n  position: relative;\n  margin: 0 auto;\n  line-height: 1.4em; }\n\n* {\n  box-sizing: border-box; }\n\n#container {\n  display: table;\n  background: #202b33;\n  border-radius: 4px; }\n\n/* Side Bar */\n#sideMenu {\n  width: 240px;\n  height: 100%;\n  padding: 30px;\n  border-right: 1px solid #111;\n  display: table-cell;\n  vertical-align: top;\n  color: #fff; }\n\n.menu {\n  list-style: none;\n  margin: 24px 0;\n  padding: 0; }\n\n.menu li {\n  display: block;\n  height: 30px;\n  width: 100%;\n  line-height: 30px;\n  font-size: 14px;\n  font-weight: 200;\n  color: rgba(255, 255, 255, 0.6);\n  position: relative; }\n\n.menu li:hover {\n  color: #239ae3; }\n\n.menu li:first-child {\n  height: 35px;\n  line-height: 35px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #fff; }\n\n.addCategory {\n  font-size: 13px;\n  font-weight: 200;\n  color: rgba(255, 255, 255, 0.2); }\n\n.addCategory:hover {\n  color: #fff; }\n\n/* Content */\n#content {\n  width: calc(100% - 240px);\n  height: 100%;\n  padding: 25px;\n  display: table-cell; }\n\n#titleBar {\n  height: 36px;\n  margin-bottom: 30px; }\n\n#profilePic {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #999;\n  float: right;\n  margin-top: -8px;\n  margin-left: 14px;\n  overflow: hidden; }\n\n#profilePic img {\n  width: 100%; }\n\n.controls {\n  display: block;\n  width: 70px;\n  height: 20px;\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 10px;\n  font-weight: 300;\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 20px;\n  float: right;\n  border-radius: 20px; }\n\n.activeControl {\n  background: rgba(255, 255, 255, 0.9);\n  color: #202b33;\n  font-weight: 600; }\n\n#salesData {\n  margin-bottom: 60px; }\n\n#totalSales {\n  height: 120px;\n  position: relative;\n  margin-top: 24px;\n  margin-bottom: 50px; }\n\n#totalSales .col {\n  float: left;\n  width: 33.33%;\n  height: 100%; }\n\n#totalSales .col .progressTitle {\n  float: left;\n  margin-left: 20px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.4); }\n\n.progressBar {\n  float: left;\n  height: 120px;\n  width: 120px;\n  font-size: 40px;\n  text-align: center;\n  line-height: 120px; }\n\n/* Icons */\n.notification {\n  display: block;\n  width: 20px;\n  height: 20px;\n  color: #202b33;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.6);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 2%;\n  margin: auto; }\n\n.colorIcon {\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 2%;\n  margin: auto; }\n\n.plus {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  color: #202b33;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 8px;\n  padding: 4px;\n  margin-right: 6px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  color: rgba(255, 255, 255, 0.2); }\n\n.red {\n  background: #ec1561; }\n\n.orange {\n  background: #ff9939; }\n\n.green {\n  background: #2bab51; }\n\n/* Table */\ntable {\n  width: 100%;\n  border-collapse: collapse; }\n\nth {\n  text-align: left;\n  color: #fff;\n  font-weight: 400;\n  font-size: 13px;\n  text-transform: uppercase;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 0 10px;\n  padding-bottom: 14px; }\n\ntr:not(:first-child):hover {\n  background: rgba(255, 255, 255, 0.1); }\n\ntd {\n  height: 40px;\n  line-height: 40px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.4);\n  padding: 0 10px; }\n\n/* Headers */\nh1 {\n  font-size: 13px;\n  font-weight: 200;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin: 0; }\n\nh2 {\n  float: left;\n  font-size: 19px;\n  font-weight: 200;\n  letter-spacing: 1px;\n  margin: 0;\n  color: rgba(255, 255, 255, 0.8); }\n\nh3 {\n  float: left;\n  color: #fff;\n  font-size: 32px;\n  font-weight: 300;\n  margin: 0;\n  margin-top: 8%;\n  margin-left: 20px;\n  margin-bottom: 6px; }\n\n.clearFix {\n  clear: both; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/getcoin/dash/dash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_coin_service__ = __webpack_require__("../../../../../src/app/services/coin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tweet_service__ = __webpack_require__("../../../../../src/app/services/tweet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__("../../../../rxjs/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(1, 2, 3).map(function (x) { return x + '!!!'; }); // etc
var DashComponent = (function () {
    function DashComponent(router, location, coinService, tweetService) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.coinService = coinService;
        this.tweetService = tweetService;
        this.d = new Date;
        this.min = this.d.getMinutes();
        this.count = this.d.getSeconds();
        this.settime();
        this.starttime();
        this.countDown2 = Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(0, 60000).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["take"])(this.count2), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function () { return --_this.count2; }));
        setInterval(function () { _this.starttime(); }, 60000);
        // setTimeout(() => {this.starttime();}, 60000);
        this.timelimit = ((this.count2 * 60)) * 1000;
        if (this.count2 == 0 || this.count2 == 15 || this.count2 == 30 || this.count2 == 45) {
            this.timelimit = 60000;
        }
        setTimeout(function () { _this.pagerefresh(); }, this.timelimit);
    }
    DashComponent.prototype.g = function () {
        new TradingView.widget({
            // "autosize": true,
            "symbol": "BITTREX:DASHBTC",
            "interval": "D",
            "timezone": "Etc/UTC",
            "width": 900,
            "height": 610,
            "theme": "Dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "details": true,
            "news": [
                "headlines"
            ],
            "hideideas": true,
            "show_popup_button": true,
            "popup_width": "1110",
            "popup_height": "600",
            "container_id": "tradingview_0d880"
        });
    };
    ;
    // get Dash Prediction
    DashComponent.prototype.getDashPrediction = function () {
        this.coinService.getDashPrediction().subscribe(function (data) {
            console.log(data);
        });
    };
    // get Dash Tweet
    DashComponent.prototype.getDashTweet = function () {
        this.tweetService.getDashTweet().subscribe(function (data) {
            console.log(data);
        });
    };
    DashComponent.prototype.starttime = function () {
        var _this = this;
        this.count = 60;
        this.countDown = Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(0, 1000).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["take"])(this.count), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function () { return --_this.count; }));
    };
    DashComponent.prototype.pagerefresh = function () { location.reload(); };
    // min = this.d.getMinutes();
    // fixedTimezone = '2015-06-15T09:03:01+0900';
    DashComponent.prototype.settime = function () {
        // location.reload();
        if (60 - this.min < 15) {
            this.count2 = 60 - this.min;
        }
        else if (45 - this.min < 15) {
            this.count2 = 45 - this.min;
        }
        else if (30 - this.min < 15) {
            this.count2 = 30 - this.min;
        }
        else {
            this.count2 = 15 - this.min;
        }
    };
    ;
    DashComponent.prototype.ngOnInit = function () {
        this.g();
    };
    return DashComponent;
}());
DashComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dash',
        template: __webpack_require__("../../../../../src/app/getcoin/dash/dash.component.html"),
        styles: [__webpack_require__("../../../../../src/app/getcoin/dash/dash.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_coin_service__["a" /* CoinService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_coin_service__["a" /* CoinService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_tweet_service__["a" /* TweetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_tweet_service__["a" /* TweetService */]) === "function" && _d || Object])
], DashComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dash.component.js.map

/***/ }),

/***/ "../../../../../src/app/getcoin/digibyte/digibyte.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<br><br><br><br><br>\n<div id=\"container\"  >\n\n  <div id=\"sideMenu\">\n    <h1>COINS LISTS</h1>\n\n    <ul class=\"menu\">\n      <!--<li><a routerLink=\"/getcoin\">GET-PREDICTION</a></li>-->\n      <li><a routerLink=\"/getcoin/ETH\">ETHEREUM <span class=\"colorIcon red\"></span></a></li>\n      <li><a routerLink=\"/getcoin/LTC\">LITECOIN <span class=\"colorIcon orange\"></span></a></li>\n      <li><a routerLink=\"/getcoin/DASH\">DASHCOIN <span class=\"colorIcon green\"></span></a></li>\n      <li><a routerLink=\"/getcoin/DGB\">DIGIBYTE <span class=\"colorIcon green\"></span></a></li>\n      <li><a routerLink=\"/getcoin/ETC\">ETHEREUM CLASSIC <span class=\"colorIcon green\"></span></a></li>\n    </ul>\n  </div>\n  <div id=\"content\">\n    <div id=\"titleBar\">\n      <h2>DIGIBYTE</h2>\n      <br>\n      <h2>{{countDown2 | async}}:{{countDown | async}}  {{timelimit}} </h2>\n      <br>\n      <a>\n        <button style=\"font-weight:bold;\" class=\"btn btn-warning btn-round btn-sm\" type=\"button\" (click)=\"getDigibytePrediction()\" name=\"button\">Prediction</button>\n      </a>\n      <a>\n        <button style=\"font-weight:bold;\" class=\"btn btn-success btn-round btn-sm\" type=\"button\" (click)=\"getDigibyteTweet()\" name=\"button\">Tweet</button>\n      </a>\n      <div>\n      </div>\n\n\n\n\n      <br>\n\n\n      <div  id=\"tradingview_0d880\"></div>\n\n    </div>\n    <div id=\"content\">\n\n      <div class=\"mainChart\">\n        <canvas id=\"salesData\"></canvas>\n\n\n        <br><br><br><br><br><br><br><br><br><br>\n        <br><br><br><br><br><br><br><br><br><br>\n\n\n        <div class=\"row\">\n\n          <div class=\"col-xs-4\">\n            <h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              Current Price:</h2>\n          </div>\n\n          <div class=\"col-xs-4\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n\n          <div class=\"col-xs-4\">\n            <h2>Predicted Price:</h2>            </div>\n\n          <br><br>\n\n\n\n          <div class=\"row\">\n\n            <div class=\"col-xs-4\">\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n              <div _ngcontent-c3=\"\" class=\"coinmarketcap-currency-widget\" data-base=\"USD\" data-currencyid=\"109\" data-marketcap=\"true\" data-rank=\"true\" data-secondary=\"\" data-stats=\"USD\" data-statsticker=\"true\" data-ticker=\"true\" data-volume=\"true\" style=\"background: rgb(37, 49, 55); float: right; box-sizing: border-box; line-height: 1;\"><div style=\"border:2px solid #E4E6EB;border-radius: 10px;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;min-width:285px;\">    <div>        <div style=\"float:right;width:67%;border: 0px solid #000;text-align:left;padding:5px 0px;line-height:30px;\">            <span style=\"font-size: 18px;\"><a href=\"http://coinmarketcap.com/currencies/undefined/?utm_medium=widget&amp;utm_campaign=cmcwidget&amp;utm_source=localhost&amp;utm_content=undefined\" target=\"_blank\" style=\"text-decoration: none; color: rgb(66, 139, 202);\">DigiByte (DGB)</a></span> <br>            <span style=\"font-size: 16px;\">0.034117 USD <span style=\"color:#093\">(4.11%)</span></span>                    </div>        <div style=\"text-align:center;padding:5px 0px;width:33%;\"><img src=\"https://files.coinmarketcap.com/static/img/coins/64x64/109.png\"></div>    </div><div style=\"border-top: 1px solid #E4E6EB;clear:both;\">                    <div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">                        RANK                        <br><br>                        <span style=\"font-size: 17px; \">57</span>                    </div>                    <div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">                        MARKET CAP                        <br><br>                        <span style=\"font-size: 14px; \">$337.20 M <span style=\"font-size:9px\">USD</span></span>                    </div>                    <div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;line-height:1.25em;\">                        VOLUME (24H)                        <br><br>                        <span style=\"font-size: 14px; \">$3.98 M <span style=\"font-size:9px\">USD</span></span>                    </div></div>    <div style=\"border-top: 1px solid #E4E6EB;text-align:center;clear:both;font-size:10px;font-style:italic;padding:5px 0;\">        <a href=\"http://coinmarketcap.com?utm_medium=widget&amp;utm_campaign=cmcwidget&amp;utm_source=localhost&amp;utm_content=undefined\" target=\"_blank\" style=\"text-decoration: none; color: rgb(66, 139, 202);\">Powered by CoinMarketCap</a>    </div></div></div>\n\n\n            </div>\n\n            <div class=\"col-xs-4\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n\n            <div class=\"col-xs-4\">\n              <div   style=\"background: rgb(37, 49, 55); float: right; box-sizing: border-box; line-height: 1;\">\n                <div style=\"border:2px solid #E4E6EB;border-radius: 10px;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;min-width:285px;\">\n                  <div>\n                    <div style=\"float:right;width:67%;border: 0px solid #000;text-align:left;padding:5px 0px;line-height:30px;\">\n                    <span style=\"font-size: 18px;\">\n                      <a  style=\"text-decoration: none; color: rgb(66, 139, 202);\">Ethereum (ETH)\n                      </a>\n                    </span>\n                      <br>\n                      <span style=\"font-size: 16px;\">818.83 USD <span style=\"color:#d14836\">\n                      (-2.61%)\n                    </span>\n                    </span>\n                    </div>\n                    <div style=\"text-align:center;padding:5px 0px;width:33%;\">\n                      <img src=\"https://files.coinmarketcap.com/static/img/coins_legacy/64x64/ethereum.png\">\n                    </div>\n                  </div>\n                  <!--<div style=\"border-top: 1px solid #E4E6EB;clear:both;\">-->\n                  <!--<div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">-->\n                  <!--RANK-->\n                  <!--<br><br>-->\n                  <!--<span style=\"font-size: 17px; \">2-->\n                  <!--</span>-->\n                  <!--</div>-->\n                  <!--<div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">-->\n                  <!--MARKET CAP-->\n                  <!--<br><br>-->\n                  <!--<span style=\"font-size: 14px; \">-->\n                  <!--$80.06 B-->\n                  <!--</span>-->\n                  <!--</div>-->\n                  <!--<div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;line-height:1.25em;\">-->\n                  <!--VOLUME (24H)-->\n                  <!--<br><br>-->\n                  <!--<span style=\"font-size: 14px; \">-->\n                  <!--$2.21 B-->\n                  <!--</span>-->\n                  <!--</div>-->\n                  <!--</div>-->\n                  <div style=\"border-top: 1px solid #E4E6EB;text-align:center;clear:both;font-size:10px;font-style:italic;padding:5px 0;\">\n                    <a style=\"text-decoration: none; color: rgb(66, 139, 202);\">\n                      Powered by ASK LEPRECHAUN\n                    </a>\n                  </div>\n                </div>\n              </div>\n\n\n\n            </div>\n\n\n          </div>\n\n\n\n\n\n\n          <div class=\"clearFix\"></div>\n\n          <!--<div id=\"totalSales\">-->\n          <!--<div class=\"col\">-->\n          <!--<div id=\"creditSales\" class=\"progressBar\" ></div>-->\n\n\n          <!--<h3>£5,390                        </h3>-->\n\n\n          <!--&lt;!&ndash;<div class=\"tradingview-widget-container\">&ndash;&gt;-->\n          <!--&lt;!&ndash;<div id=\"tradingview_0d880\"></div>&ndash;&gt;-->\n          <!--&lt;!&ndash;</div>&ndash;&gt;-->\n\n          <!--<span class=\"progressTitle\">Education Spend</span>-->\n          <!--</div>-->\n          <!--<div class=\"col\">-->\n          <!--<div id=\"channelSales\" class=\"progressBar\"></div>-->\n          <!--<h3>£904.37</h3>-->\n          <!--<span class=\"progressTitle\">Holiday Spend</span>-->\n          <!--</div>-->\n          <!--<div class=\"col\">-->\n          <!--<div id=\"directSales\" class=\"progressBar\"></div>-->\n          <!--<h3>£0</h3>-->\n          <!--<span class=\"progressTitle\">Cost of Living</span>-->\n          <!--</div>-->\n          <!--</div>-->\n\n\n          <br>\n\n          <br>\n\n\n          <br>\n\n          <br>\n\n\n          <!--<table>-->\n          <!--<tr>-->\n          <!--<th>Living Expenses</th>-->\n          <!--<th>Description</th>-->\n          <!--<th>Cost</th>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Travel<br></td>-->\n          <!--<td>TFL</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Grocery<br></td>-->\n          <!--<td>Lunches & Supermarket</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Social<br></td>-->\n          <!--<td>Drinks, Dinners & Clubs</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Wellbeing<br></td>-->\n          <!--<td>Massages, Pedicures etc.</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Misc.<br></td>-->\n          <!--<td>Miscellaneous</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n          <!--</table>-->\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n\n\n  <!--&lt;!&ndash;<div class=\"coinmarketcap-currency-widget\" style=\"background: rgb(37, 49, 55); float: right; box-sizing: border-box; line-height: 1;\" data-currency=\"bitcoin\" data-base=\"USD\" data-secondary=\"\" data-ticker=\"false\" data-rank=\"false\" data-marketcap=\"false\" data-volume=\"false\" data-stats=\"USD\" data-statsticker=\"false\"></div>&ndash;&gt;-->\n\n\n\n\n\n\n  </div>"

/***/ }),

/***/ "../../../../../src/app/getcoin/digibyte/digibyte.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:100,300,400,700);", ""]);

// module
exports.push([module.i, "html {\n  height: 100%;\n  font-family: 'Lato', sans-serif; }\n\nbody {\n  height: 100%;\n  margin: 0;\n  background: linear-gradient(135deg, #41839b 0%, #33627b 100%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/daniel-olahh.jpg")) + "); }\n\np {\n  word-spacing: 500px; }\n\n#container2 {\n  width: 960px;\n  position: relative;\n  margin: 0 auto;\n  line-height: 1.4em; }\n\n* {\n  box-sizing: border-box; }\n\n#container {\n  display: table;\n  background: #202b33;\n  border-radius: 4px; }\n\n/* Side Bar */\n#sideMenu {\n  width: 240px;\n  height: 100%;\n  padding: 30px;\n  border-right: 1px solid #111;\n  display: table-cell;\n  vertical-align: top;\n  color: #fff; }\n\n.menu {\n  list-style: none;\n  margin: 24px 0;\n  padding: 0; }\n\n.menu li {\n  display: block;\n  height: 30px;\n  width: 100%;\n  line-height: 30px;\n  font-size: 14px;\n  font-weight: 200;\n  color: rgba(255, 255, 255, 0.6);\n  position: relative; }\n\n.menu li:hover {\n  color: #239ae3; }\n\n.menu li:first-child {\n  height: 35px;\n  line-height: 35px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #fff; }\n\n.addCategory {\n  font-size: 13px;\n  font-weight: 200;\n  color: rgba(255, 255, 255, 0.2); }\n\n.addCategory:hover {\n  color: #fff; }\n\n/* Content */\n#content {\n  width: calc(100% - 240px);\n  height: 100%;\n  padding: 25px;\n  display: table-cell; }\n\n#titleBar {\n  height: 36px;\n  margin-bottom: 30px; }\n\n#profilePic {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #999;\n  float: right;\n  margin-top: -8px;\n  margin-left: 14px;\n  overflow: hidden; }\n\n#profilePic img {\n  width: 100%; }\n\n.controls {\n  display: block;\n  width: 70px;\n  height: 20px;\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 10px;\n  font-weight: 300;\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 20px;\n  float: right;\n  border-radius: 20px; }\n\n.activeControl {\n  background: rgba(255, 255, 255, 0.9);\n  color: #202b33;\n  font-weight: 600; }\n\n#salesData {\n  margin-bottom: 60px; }\n\n#totalSales {\n  height: 120px;\n  position: relative;\n  margin-top: 24px;\n  margin-bottom: 50px; }\n\n#totalSales .col {\n  float: left;\n  width: 33.33%;\n  height: 100%; }\n\n#totalSales .col .progressTitle {\n  float: left;\n  margin-left: 20px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.4); }\n\n.progressBar {\n  float: left;\n  height: 120px;\n  width: 120px;\n  font-size: 40px;\n  text-align: center;\n  line-height: 120px; }\n\n/* Icons */\n.notification {\n  display: block;\n  width: 20px;\n  height: 20px;\n  color: #202b33;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.6);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 2%;\n  margin: auto; }\n\n.colorIcon {\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 2%;\n  margin: auto; }\n\n.plus {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  color: #202b33;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 8px;\n  padding: 4px;\n  margin-right: 6px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  color: rgba(255, 255, 255, 0.2); }\n\n.red {\n  background: #ec1561; }\n\n.orange {\n  background: #ff9939; }\n\n.green {\n  background: #2bab51; }\n\n/* Table */\ntable {\n  width: 100%;\n  border-collapse: collapse; }\n\nth {\n  text-align: left;\n  color: #fff;\n  font-weight: 400;\n  font-size: 13px;\n  text-transform: uppercase;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 0 10px;\n  padding-bottom: 14px; }\n\ntr:not(:first-child):hover {\n  background: rgba(255, 255, 255, 0.1); }\n\ntd {\n  height: 40px;\n  line-height: 40px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.4);\n  padding: 0 10px; }\n\n/* Headers */\nh1 {\n  font-size: 13px;\n  font-weight: 200;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin: 0; }\n\nh2 {\n  float: left;\n  font-size: 19px;\n  font-weight: 200;\n  letter-spacing: 1px;\n  margin: 0;\n  color: rgba(255, 255, 255, 0.8); }\n\nh3 {\n  float: left;\n  color: #fff;\n  font-size: 32px;\n  font-weight: 300;\n  margin: 0;\n  margin-top: 8%;\n  margin-left: 20px;\n  margin-bottom: 6px; }\n\n.clearFix {\n  clear: both; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/getcoin/digibyte/digibyte.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DigibyteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_coin_service__ = __webpack_require__("../../../../../src/app/services/coin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tweet_service__ = __webpack_require__("../../../../../src/app/services/tweet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__("../../../../rxjs/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(1, 2, 3).map(function (x) { return x + '!!!'; }); // etc
var DigibyteComponent = (function () {
    function DigibyteComponent(router, location, coinService, tweetService) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.coinService = coinService;
        this.tweetService = tweetService;
        this.d = new Date;
        this.min = this.d.getMinutes();
        this.count = this.d.getSeconds();
        this.settime();
        this.starttime();
        this.countDown2 = Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(0, 60000).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["take"])(this.count2), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function () { return --_this.count2; }));
        setInterval(function () { _this.starttime(); }, 60000);
        // setTimeout(() => {this.starttime();}, 60000);
        this.timelimit = ((this.count2 * 60)) * 1000;
        if (this.count2 == 0 || this.count2 == 15 || this.count2 == 30 || this.count2 == 45) {
            this.timelimit = 60000;
        }
        setTimeout(function () { _this.pagerefresh(); }, this.timelimit);
    }
    DigibyteComponent.prototype.g = function () {
        new TradingView.widget({
            // "autosize": true,
            "symbol": "BITTREX:DGBBTC",
            "interval": "D",
            "timezone": "Etc/UTC",
            "width": 900,
            "height": 610,
            "theme": "Dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "details": true,
            "news": [
                "headlines"
            ],
            "hideideas": true,
            "show_popup_button": true,
            "popup_width": "1110",
            "popup_height": "600",
            "container_id": "tradingview_0d880"
        });
    };
    ;
    // get Digibyte Prediction
    DigibyteComponent.prototype.getDigibytePrediction = function () {
        this.coinService.getDigibytePrediction().subscribe(function (data) {
            console.log(data);
        });
    };
    // get Digibyte Tweet
    DigibyteComponent.prototype.getDigibyteTweet = function () {
        this.tweetService.getDigibyteTweet().subscribe(function (data) {
            console.log(data);
        });
    };
    DigibyteComponent.prototype.starttime = function () {
        var _this = this;
        this.count = 60;
        this.countDown = Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(0, 1000).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["take"])(this.count), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function () { return --_this.count; }));
    };
    // min = this.d.getMinutes();
    // fixedTimezone = '2015-06-15T09:03:01+0900';
    DigibyteComponent.prototype.settime = function () {
        // location.reload();
        if (60 - this.min < 15) {
            this.count2 = 60 - this.min;
        }
        else if (45 - this.min < 15) {
            this.count2 = 45 - this.min;
        }
        else if (30 - this.min < 15) {
            this.count2 = 30 - this.min;
        }
        else {
            this.count2 = 15 - this.min;
        }
    };
    ;
    DigibyteComponent.prototype.pagerefresh = function () { location.reload(); };
    DigibyteComponent.prototype.ngOnInit = function () {
        this.g();
    };
    return DigibyteComponent;
}());
DigibyteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-digibyte',
        template: __webpack_require__("../../../../../src/app/getcoin/digibyte/digibyte.component.html"),
        styles: [__webpack_require__("../../../../../src/app/getcoin/digibyte/digibyte.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_coin_service__["a" /* CoinService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_coin_service__["a" /* CoinService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_tweet_service__["a" /* TweetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_tweet_service__["a" /* TweetService */]) === "function" && _d || Object])
], DigibyteComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=digibyte.component.js.map

/***/ }),

/***/ "../../../../../src/app/getcoin/ethclassic/ethclassic.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<br><br><br><br><br>\n<div id=\"container\"  >\n\n  <div id=\"sideMenu\">\n    <h1>COINS LISTS</h1>\n\n    <ul class=\"menu\">\n      <!--<li><a routerLink=\"/getcoin\">GET-PREDICTION</a></li>-->\n      <li><a routerLink=\"/getcoin/ETH\">ETHEREUM <span class=\"colorIcon red\"></span></a></li>\n      <li><a routerLink=\"/getcoin/LTC\">LITECOIN <span class=\"colorIcon orange\"></span></a></li>\n      <li><a routerLink=\"/getcoin/DASH\">DASHCOIN <span class=\"colorIcon green\"></span></a></li>\n      <li><a routerLink=\"/getcoin/DGB\">DIGIBYTE <span class=\"colorIcon green\"></span></a></li>\n      <li><a routerLink=\"/getcoin/ETC\">ETHEREUM CLASSIC <span class=\"colorIcon green\"></span></a></li>\n    </ul>\n  </div>\n  <div id=\"content\">\n    <div id=\"titleBar\">\n      <h2>ETHEREUM CLASSIC</h2>\n      <br>\n\n      <br>\n      <h2>{{countDown2 | async}}:{{countDown | async}}  {{timelimit}} </h2>\nbr\n      <div>\n      </div>\n\n\n\n\n      <br>\n\n\n      <div  id=\"tradingview_0d880\"></div>\n\n    </div>\n    <div id=\"content\">\n\n      <div class=\"mainChart\">\n        <canvas id=\"salesData\"></canvas>\n\n\n        <br><br><br><br><br><br><br><br><br><br>\n        <br><br><br><br><br><br><br><br><br><br>\n\n\n        <div class=\"row\">\n\n          <div class=\"col-xs-4\">\n            <h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              Current Price:</h2>\n          </div>\n\n          <div class=\"col-xs-4\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n\n          <div class=\"col-xs-4\">\n            <h2>Predicted Price:</h2>            </div>\n\n          <br><br>\n\n\n\n          <div class=\"row\">\n\n            <div class=\"col-xs-4\">\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n              <div _ngcontent-c3=\"\" class=\"coinmarketcap-currency-widget\" data-base=\"USD\" data-currencyid=\"1321\" data-marketcap=\"true\" data-rank=\"true\" data-secondary=\"\" data-stats=\"USD\" data-statsticker=\"true\" data-ticker=\"true\" data-volume=\"true\" style=\"background: rgb(37, 49, 55); float: right; box-sizing: border-box; line-height: 1;\"><div style=\"border:2px solid #E4E6EB;border-radius: 10px;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;min-width:285px;\">    <div>        <div style=\"float:right;width:67%;border: 0px solid #000;text-align:left;padding:5px 0px;line-height:30px;\">            <span style=\"font-size: 18px;\"><a href=\"http://coinmarketcap.com/currencies/undefined/?utm_medium=widget&amp;utm_campaign=cmcwidget&amp;utm_source=localhost&amp;utm_content=undefined\" target=\"_blank\" style=\"text-decoration: none; color: rgb(66, 139, 202);\">Ethereum Classic (ETC)</a></span> <br>            <span style=\"font-size: 16px;\">36.06 USD <span style=\"color:#093\">(10.13%)</span></span>                    </div>        <div style=\"text-align:center;padding:5px 0px;width:33%;\"><img src=\"https://files.coinmarketcap.com/static/img/coins/64x64/1321.png\"></div>    </div><div style=\"border-top: 1px solid #E4E6EB;clear:both;\">                    <div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">                        RANK                        <br><br>                        <span style=\"font-size: 17px; \">14</span>                    </div>                    <div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">                        MARKET CAP                        <br><br>                        <span style=\"font-size: 14px; \">$3.61 B <span style=\"font-size:9px\">USD</span></span>                    </div>                    <div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;line-height:1.25em;\">                        VOLUME (24H)                        <br><br>                        <span style=\"font-size: 14px; \">$1.03 B <span style=\"font-size:9px\">USD</span></span>                    </div></div>    <div style=\"border-top: 1px solid #E4E6EB;text-align:center;clear:both;font-size:10px;font-style:italic;padding:5px 0;\">        <a href=\"http://coinmarketcap.com?utm_medium=widget&amp;utm_campaign=cmcwidget&amp;utm_source=localhost&amp;utm_content=undefined\" target=\"_blank\" style=\"text-decoration: none; color: rgb(66, 139, 202);\">Powered by CoinMarketCap</a>    </div></div></div>\n\n\n            </div>\n\n            <div class=\"col-xs-4\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n\n            <div class=\"col-xs-4\">\n              <div   style=\"background: rgb(37, 49, 55); float: right; box-sizing: border-box; line-height: 1;\">\n                <div style=\"border:2px solid #E4E6EB;border-radius: 10px;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;min-width:285px;\">\n                  <div>\n                    <div style=\"float:right;width:67%;border: 0px solid #000;text-align:left;padding:5px 0px;line-height:30px;\">\n                    <span style=\"font-size: 18px;\">\n                      <a  style=\"text-decoration: none; color: rgb(66, 139, 202);\">Ethereum (ETH)\n                      </a>\n                    </span>\n                      <br>\n                      <span style=\"font-size: 16px;\">818.83 USD <span style=\"color:#d14836\">\n                      (-2.61%)\n                    </span>\n                    </span>\n                    </div>\n                    <div style=\"text-align:center;padding:5px 0px;width:33%;\">\n                      <img src=\"https://files.coinmarketcap.com/static/img/coins_legacy/64x64/ethereum.png\">\n                    </div>\n                  </div>\n                  <div style=\"border-top: 1px solid #E4E6EB;text-align:center;clear:both;font-size:10px;font-style:italic;padding:5px 0;\">\n                    <a style=\"text-decoration: none; color: rgb(66, 139, 202);\">\n                      Powered by ASK LEPRECHAUN\n                    </a>\n                  </div>\n                </div>\n              </div>\n\n\n\n            </div>\n\n\n          </div>\n\n\n          <div class=\"clearFix\"></div>\n\n\n          <br>\n\n          <br>\n\n\n          <br>\n\n          <br>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/getcoin/ethclassic/ethclassic.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:100,300,400,700);", ""]);

// module
exports.push([module.i, "html {\n  height: 100%;\n  font-family: 'Lato', sans-serif; }\n\nbody {\n  height: 100%;\n  margin: 0;\n  background: linear-gradient(135deg, #41839b 0%, #33627b 100%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/daniel-olahh.jpg")) + "); }\n\np {\n  word-spacing: 500px; }\n\n#container2 {\n  width: 960px;\n  position: relative;\n  margin: 0 auto;\n  line-height: 1.4em; }\n\n* {\n  box-sizing: border-box; }\n\n#container {\n  display: table;\n  background: #202b33;\n  border-radius: 4px; }\n\n/* Side Bar */\n#sideMenu {\n  width: 240px;\n  height: 100%;\n  padding: 30px;\n  border-right: 1px solid #111;\n  display: table-cell;\n  vertical-align: top;\n  color: #fff; }\n\n.menu {\n  list-style: none;\n  margin: 24px 0;\n  padding: 0; }\n\n.menu li {\n  display: block;\n  height: 30px;\n  width: 100%;\n  line-height: 30px;\n  font-size: 14px;\n  font-weight: 200;\n  color: rgba(255, 255, 255, 0.6);\n  position: relative; }\n\n.menu li:hover {\n  color: #239ae3; }\n\n.menu li:first-child {\n  height: 35px;\n  line-height: 35px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #fff; }\n\n.addCategory {\n  font-size: 13px;\n  font-weight: 200;\n  color: rgba(255, 255, 255, 0.2); }\n\n.addCategory:hover {\n  color: #fff; }\n\n/* Content */\n#content {\n  width: calc(100% - 240px);\n  height: 100%;\n  padding: 25px;\n  display: table-cell; }\n\n#titleBar {\n  height: 36px;\n  margin-bottom: 30px; }\n\n#profilePic {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #999;\n  float: right;\n  margin-top: -8px;\n  margin-left: 14px;\n  overflow: hidden; }\n\n#profilePic img {\n  width: 100%; }\n\n.controls {\n  display: block;\n  width: 70px;\n  height: 20px;\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 10px;\n  font-weight: 300;\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 20px;\n  float: right;\n  border-radius: 20px; }\n\n.activeControl {\n  background: rgba(255, 255, 255, 0.9);\n  color: #202b33;\n  font-weight: 600; }\n\n#salesData {\n  margin-bottom: 60px; }\n\n#totalSales {\n  height: 120px;\n  position: relative;\n  margin-top: 24px;\n  margin-bottom: 50px; }\n\n#totalSales .col {\n  float: left;\n  width: 33.33%;\n  height: 100%; }\n\n#totalSales .col .progressTitle {\n  float: left;\n  margin-left: 20px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.4); }\n\n.progressBar {\n  float: left;\n  height: 120px;\n  width: 120px;\n  font-size: 40px;\n  text-align: center;\n  line-height: 120px; }\n\n/* Icons */\n.notification {\n  display: block;\n  width: 20px;\n  height: 20px;\n  color: #202b33;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.6);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 2%;\n  margin: auto; }\n\n.colorIcon {\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 2%;\n  margin: auto; }\n\n.plus {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  color: #202b33;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 8px;\n  padding: 4px;\n  margin-right: 6px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  color: rgba(255, 255, 255, 0.2); }\n\n.red {\n  background: #ec1561; }\n\n.orange {\n  background: #ff9939; }\n\n.green {\n  background: #2bab51; }\n\n/* Table */\ntable {\n  width: 100%;\n  border-collapse: collapse; }\n\nth {\n  text-align: left;\n  color: #fff;\n  font-weight: 400;\n  font-size: 13px;\n  text-transform: uppercase;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 0 10px;\n  padding-bottom: 14px; }\n\ntr:not(:first-child):hover {\n  background: rgba(255, 255, 255, 0.1); }\n\ntd {\n  height: 40px;\n  line-height: 40px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.4);\n  padding: 0 10px; }\n\n/* Headers */\nh1 {\n  font-size: 13px;\n  font-weight: 200;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin: 0; }\n\nh2 {\n  float: left;\n  font-size: 19px;\n  font-weight: 200;\n  letter-spacing: 1px;\n  margin: 0;\n  color: rgba(255, 255, 255, 0.8); }\n\nh3 {\n  float: left;\n  color: #fff;\n  font-size: 32px;\n  font-weight: 300;\n  margin: 0;\n  margin-top: 8%;\n  margin-left: 20px;\n  margin-bottom: 6px; }\n\n.clearFix {\n  clear: both; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/getcoin/ethclassic/ethclassic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EthclassicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__ = __webpack_require__("../../../../rxjs/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(1, 2, 3).map(function (x) { return x + '!!!'; }); // etc
var EthclassicComponent = (function () {
    function EthclassicComponent(router, location) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.d = new Date;
        this.min = this.d.getMinutes();
        this.count = this.d.getSeconds();
        this.settime();
        this.starttime();
        this.countDown2 = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__["timer"])(0, 60000).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["take"])(this.count2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function () { return --_this.count2; }));
        setInterval(function () { _this.starttime(); }, 60000);
        // setTimeout(() => {this.starttime();}, 60000);
        this.timelimit = ((this.count2 * 60)) * 1000;
        if (this.count2 == 0 || this.count2 == 15 || this.count2 == 30 || this.count2 == 45) {
            this.timelimit = 60000;
        }
        setTimeout(function () { _this.pagerefresh(); }, this.timelimit);
    }
    EthclassicComponent.prototype.g = function () {
        new TradingView.widget({
            // "autosize": true,
            "symbol": "BITTREX:ETCBTC",
            "interval": "D",
            "timezone": "Etc/UTC",
            "width": 900,
            "height": 610,
            "theme": "Dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "details": true,
            "news": [
                "headlines"
            ],
            "hideideas": true,
            "show_popup_button": true,
            "popup_width": "1110",
            "popup_height": "600",
            "container_id": "tradingview_0d880"
        });
    };
    ;
    EthclassicComponent.prototype.starttime = function () {
        var _this = this;
        this.count = 60;
        this.countDown = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__["timer"])(0, 1000).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["take"])(this.count), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function () { return --_this.count; }));
    };
    // min = this.d.getMinutes();
    // fixedTimezone = '2015-06-15T09:03:01+0900';
    EthclassicComponent.prototype.settime = function () {
        // location.reload();
        if (60 - this.min < 15) {
            this.count2 = 60 - this.min;
        }
        else if (45 - this.min < 15) {
            this.count2 = 45 - this.min;
        }
        else if (30 - this.min < 15) {
            this.count2 = 30 - this.min;
        }
        else {
            this.count2 = 15 - this.min;
        }
    };
    ;
    EthclassicComponent.prototype.pagerefresh = function () { location.reload(); };
    EthclassicComponent.prototype.ngOnInit = function () {
        this.g();
        // this.settime();
    };
    return EthclassicComponent;
}());
EthclassicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ethclassic',
        template: __webpack_require__("../../../../../src/app/getcoin/ethclassic/ethclassic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/getcoin/ethclassic/ethclassic.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _b || Object])
], EthclassicComponent);

var _a, _b;
//# sourceMappingURL=ethclassic.component.js.map

/***/ }),

/***/ "../../../../../src/app/getcoin/ethereum/ethereum.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<br><br><br><br><br>\n<div id=\"container\"  >\n\n  <div id=\"sideMenu\">\n    <h1>COINS LISTS</h1>\n\n    <ul class=\"menu\">\n      <!--<li><a routerLink=\"/getcoin\">GET-PREDICTION</a></li>-->\n      <li><a routerLink=\"/getcoin/ETH\">ETHEREUM <span class=\"colorIcon red\"></span></a></li>\n      <li><a routerLink=\"/getcoin/LTC\">LITECOIN <span class=\"colorIcon orange\"></span></a></li>\n      <li><a routerLink=\"/getcoin/DASH\">DASHCOIN <span class=\"colorIcon green\"></span></a></li>\n      <li><a routerLink=\"/getcoin/DGB\">DIGIBYTE <span class=\"colorIcon green\"></span></a></li>\n      <li><a routerLink=\"/getcoin/ETC\">ETHEREUM CLASSIC <span class=\"colorIcon green\"></span></a></li>\n    </ul>\n  </div>\n  <div id=\"content\">\n    <div id=\"titleBar\">\n      <h2>ETHEREUM</h2>\n      <br>\n      <h2>{{countDown2 | async}}:{{countDown | async}}  {{timelimit}} </h2>\n      <br>\n      <a>\n        <button style=\"font-weight:bold;\" class=\"btn btn-warning btn-round btn-sm\" type=\"button\" (click)=\"getEthereumPrediction()\" name=\"button\">Prediction</button>\n      </a>\n      <a>\n        <button style=\"font-weight:bold;\" class=\"btn btn-success btn-round btn-sm\" type=\"button\" (click)=\"getEthereumTweet()\" name=\"button\">Tweet</button>\n      </a>\n      <h1> Price: {{predicted}} </h1>\n      <div>\n      </div>\n\n\n\n\n      <br>\n\n      <div  id=\"tradingview_0d880\"></div>\n\n      </div>\n      <div id=\"content\">\n\n        <div class=\"mainChart\">\n          <canvas id=\"salesData\"></canvas>\n\n\n          <br><br><br><br><br><br><br><br><br><br>\n          <br><br><br><br><br><br><br><br><br><br>\n\n\n          <div class=\"row\">\n\n            <div class=\"col-xs-4\">\n             <h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n               Current Price:</h2>\n            </div>\n\n            <div class=\"col-xs-4\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n\n            <div class=\"col-xs-4\">\n              <h2>Predicted Price:</h2>            </div>\n\n            <br><br>\n\n\n\n          <div class=\"row\">\n\n            <div class=\"col-xs-4\">\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n              <div class=\"coinmarketcap-currency-widget\" data-base=\"USD\" data-currency=\"ethereum\" data-marketcap=\"true\" data-rank=\"true\" data-secondary=\"\" data-stats=\"USD\" data-statsticker=\"false\" data-ticker=\"true\" data-volume=\"true\" style=\"background: rgb(37, 49, 55); float: right; box-sizing: border-box; line-height: 1;\"><div style=\"border:2px solid #E4E6EB;border-radius: 10px;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;min-width:285px;\">    <div>        <div style=\"float:right;width:67%;border: 0px solid #000;text-align:left;padding:5px 0px;line-height:30px;\">            <span style=\"font-size: 18px;\"><a href=\"http://coinmarketcap.com/currencies/ethereum/?utm_medium=widget&amp;utm_campaign=cmcwidget&amp;utm_source=localhost&amp;utm_content=ethereum\" target=\"_blank\" style=\"text-decoration: none; color: rgb(66, 139, 202);\">Ethereum (ETH)</a></span> <br>            <span style=\"font-size: 16px;\">818.83 USD <span style=\"color:#d14836\">(-2.61%)</span></span>                    </div>        <div style=\"text-align:center;padding:5px 0px;width:33%;\"><img src=\"https://files.coinmarketcap.com/static/img/coins_legacy/64x64/ethereum.png\"></div>    </div><div style=\"border-top: 1px solid #E4E6EB;clear:both;\">                    <div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">                        RANK                        <br><br>                        <span style=\"font-size: 17px; \">2</span>                    </div>                    <div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">                        MARKET CAP                        <br><br>                        <span style=\"font-size: 14px; \">$80.06 B</span>                    </div>                    <div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;line-height:1.25em;\">                        VOLUME (24H)                        <br><br>                        <span style=\"font-size: 14px; \">$2.21 B</span>                    </div></div>    <div style=\"border-top: 1px solid #E4E6EB;text-align:center;clear:both;font-size:10px;font-style:italic;padding:5px 0;\">        <a href=\"http://coinmarketcap.com?utm_medium=widget&amp;utm_campaign=cmcwidget&amp;utm_source=localhost&amp;utm_content=ethereum\" target=\"_blank\" style=\"text-decoration: none; color: rgb(66, 139, 202);\">Powered by CoinMarketCap</a>    </div></div></div>\n            </div>\n\n            <div class=\"col-xs-4\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n\n            <div class=\"col-xs-4\">\n            <div   style=\"background: rgb(37, 49, 55); float: right; box-sizing: border-box; line-height: 1;\">\n              <div style=\"border:2px solid #E4E6EB;border-radius: 10px;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;min-width:285px;\">\n                <div>\n                  <div style=\"float:right;width:67%;border: 0px solid #000;text-align:left;padding:5px 0px;line-height:30px;\">\n                    <span style=\"font-size: 18px;\">\n                      <a  style=\"text-decoration: none; color: rgb(66, 139, 202);\">Ethereum (ETH)\n                      </a>\n                    </span>\n                    <br>\n                    <span style=\"font-size: 16px;\">818.83 USD <span style=\"color:#d14836\">\n                      (-2.61%)\n                    </span>\n                    </span>\n                  </div>\n                  <div style=\"text-align:center;padding:5px 0px;width:33%;\">\n                    <img src=\"https://files.coinmarketcap.com/static/img/coins_legacy/64x64/ethereum.png\">\n                  </div>\n                </div>\n                <!--<div style=\"border-top: 1px solid #E4E6EB;clear:both;\">-->\n                  <!--<div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">-->\n                    <!--RANK-->\n                    <!--<br><br>-->\n                    <!--<span style=\"font-size: 17px; \">2-->\n                    <!--</span>-->\n                  <!--</div>-->\n                  <!--<div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">-->\n                    <!--MARKET CAP-->\n                    <!--<br><br>-->\n                    <!--<span style=\"font-size: 14px; \">-->\n                      <!--$80.06 B-->\n                    <!--</span>-->\n                  <!--</div>-->\n                  <!--<div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;line-height:1.25em;\">-->\n                    <!--VOLUME (24H)-->\n                    <!--<br><br>-->\n                    <!--<span style=\"font-size: 14px; \">-->\n                      <!--$2.21 B-->\n                    <!--</span>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <div style=\"border-top: 1px solid #E4E6EB;text-align:center;clear:both;font-size:10px;font-style:italic;padding:5px 0;\">\n                  <a style=\"text-decoration: none; color: rgb(66, 139, 202);\">\n                Powered by ASK LEPRECHAUN\n              </a>\n              </div>\n              </div>\n            </div>\n\n\n\n            </div>\n\n\n          </div>\n\n\n\n\n\n          <div class=\"clearFix\"></div>\n\n          <!--<div id=\"totalSales\">-->\n            <!--<div class=\"col\">-->\n              <!--<div id=\"creditSales\" class=\"progressBar\" ></div>-->\n\n\n              <!--<h3>£5,390                        </h3>-->\n\n\n              <!--&lt;!&ndash;<div class=\"tradingview-widget-container\">&ndash;&gt;-->\n              <!--&lt;!&ndash;<div id=\"tradingview_0d880\"></div>&ndash;&gt;-->\n              <!--&lt;!&ndash;</div>&ndash;&gt;-->\n\n              <!--<span class=\"progressTitle\">Education Spend</span>-->\n            <!--</div>-->\n            <!--<div class=\"col\">-->\n              <!--<div id=\"channelSales\" class=\"progressBar\"></div>-->\n              <!--<h3>£904.37</h3>-->\n              <!--<span class=\"progressTitle\">Holiday Spend</span>-->\n            <!--</div>-->\n            <!--<div class=\"col\">-->\n              <!--<div id=\"directSales\" class=\"progressBar\"></div>-->\n              <!--<h3>£0</h3>-->\n              <!--<span class=\"progressTitle\">Cost of Living</span>-->\n            <!--</div>-->\n          <!--</div>-->\n\n\n          <br>\n\n          <br>\n\n\n          <br>\n\n          <br>\n\n\n          <!--<table>-->\n          <!--<tr>-->\n          <!--<th>Living Expenses</th>-->\n          <!--<th>Description</th>-->\n          <!--<th>Cost</th>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Travel<br></td>-->\n          <!--<td>TFL</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Grocery<br></td>-->\n          <!--<td>Lunches & Supermarket</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Social<br></td>-->\n          <!--<td>Drinks, Dinners & Clubs</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Wellbeing<br></td>-->\n          <!--<td>Massages, Pedicures etc.</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Misc.<br></td>-->\n          <!--<td>Miscellaneous</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n          <!--</table>-->\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n\n\n  <!--&lt;!&ndash;<div class=\"coinmarketcap-currency-widget\" style=\"background: rgb(37, 49, 55); float: right; box-sizing: border-box; line-height: 1;\" data-currency=\"bitcoin\" data-base=\"USD\" data-secondary=\"\" data-ticker=\"false\" data-rank=\"false\" data-marketcap=\"false\" data-volume=\"false\" data-stats=\"USD\" data-statsticker=\"false\"></div>&ndash;&gt;-->\n"

/***/ }),

/***/ "../../../../../src/app/getcoin/ethereum/ethereum.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:100,300,400,700);", ""]);

// module
exports.push([module.i, "html {\n  height: 100%;\n  font-family: 'Lato', sans-serif; }\n\nbody {\n  height: 100%;\n  margin: 0;\n  background: linear-gradient(135deg, #41839b 0%, #33627b 100%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/daniel-olahh.jpg")) + "); }\n\np {\n  word-spacing: 500px; }\n\n#container2 {\n  width: 960px;\n  position: relative;\n  margin: 0 auto;\n  line-height: 1.4em; }\n\n* {\n  box-sizing: border-box; }\n\n#container {\n  display: table;\n  background: #202b33;\n  border-radius: 4px; }\n\n/* Side Bar */\n#sideMenu {\n  width: 240px;\n  height: 100%;\n  padding: 30px;\n  border-right: 1px solid #111;\n  display: table-cell;\n  vertical-align: top;\n  color: #fff; }\n\n.menu {\n  list-style: none;\n  margin: 24px 0;\n  padding: 0; }\n\n.menu li {\n  display: block;\n  height: 30px;\n  width: 100%;\n  line-height: 30px;\n  font-size: 14px;\n  font-weight: 200;\n  color: rgba(255, 255, 255, 0.6);\n  position: relative; }\n\n.menu li:hover {\n  color: #239ae3; }\n\n.menu li:first-child {\n  height: 35px;\n  line-height: 35px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #fff; }\n\n.addCategory {\n  font-size: 13px;\n  font-weight: 200;\n  color: rgba(255, 255, 255, 0.2); }\n\n.addCategory:hover {\n  color: #fff; }\n\n/* Content */\n#content {\n  width: calc(100% - 240px);\n  height: 100%;\n  padding: 25px;\n  display: table-cell; }\n\n#titleBar {\n  height: 36px;\n  margin-bottom: 30px; }\n\n#profilePic {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #999;\n  float: right;\n  margin-top: -8px;\n  margin-left: 14px;\n  overflow: hidden; }\n\n#profilePic img {\n  width: 100%; }\n\n.controls {\n  display: block;\n  width: 70px;\n  height: 20px;\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 10px;\n  font-weight: 300;\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 20px;\n  float: right;\n  border-radius: 20px; }\n\n.activeControl {\n  background: rgba(255, 255, 255, 0.9);\n  color: #202b33;\n  font-weight: 600; }\n\n#salesData {\n  margin-bottom: 60px; }\n\n#totalSales {\n  height: 120px;\n  position: relative;\n  margin-top: 24px;\n  margin-bottom: 50px; }\n\n#totalSales .col {\n  float: left;\n  width: 33.33%;\n  height: 100%; }\n\n#totalSales .col .progressTitle {\n  float: left;\n  margin-left: 20px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.4); }\n\n.progressBar {\n  float: left;\n  height: 120px;\n  width: 120px;\n  font-size: 40px;\n  text-align: center;\n  line-height: 120px; }\n\n/* Icons */\n.notification {\n  display: block;\n  width: 20px;\n  height: 20px;\n  color: #202b33;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.6);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 2%;\n  margin: auto; }\n\n.colorIcon {\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 2%;\n  margin: auto; }\n\n.plus {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  color: #202b33;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 8px;\n  padding: 4px;\n  margin-right: 6px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  color: rgba(255, 255, 255, 0.2); }\n\n.red {\n  background: #ec1561; }\n\n.orange {\n  background: #ff9939; }\n\n.green {\n  background: #2bab51; }\n\n/* Table */\ntable {\n  width: 100%;\n  border-collapse: collapse; }\n\nth {\n  text-align: left;\n  color: #fff;\n  font-weight: 400;\n  font-size: 13px;\n  text-transform: uppercase;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 0 10px;\n  padding-bottom: 14px; }\n\ntr:not(:first-child):hover {\n  background: rgba(255, 255, 255, 0.1); }\n\ntd {\n  height: 40px;\n  line-height: 40px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.4);\n  padding: 0 10px; }\n\n/* Headers */\nh1 {\n  font-size: 13px;\n  font-weight: 200;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin: 0; }\n\nh2 {\n  float: left;\n  font-size: 19px;\n  font-weight: 200;\n  letter-spacing: 1px;\n  margin: 0;\n  color: rgba(255, 255, 255, 0.8); }\n\nh3 {\n  float: left;\n  color: #fff;\n  font-size: 32px;\n  font-weight: 300;\n  margin: 0;\n  margin-top: 8%;\n  margin-left: 20px;\n  margin-bottom: 6px; }\n\n.clearFix {\n  clear: both; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/getcoin/ethereum/ethereum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EthereumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_coin_service__ = __webpack_require__("../../../../../src/app/services/coin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tweet_service__ = __webpack_require__("../../../../../src/app/services/tweet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__("../../../../rxjs/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(1, 2, 3).map(function (x) { return x + '!!!'; }); // etc
var EthereumComponent = (function () {
    function EthereumComponent(router, location, coinService, tweetService) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.coinService = coinService;
        this.tweetService = tweetService;
        this.d = new Date;
        this.min = this.d.getMinutes();
        this.count = this.d.getSeconds();
        this.getEthereumPrediction();
        this.settime();
        this.starttime();
        this.countDown2 = Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(0, 60000).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["take"])(this.count2), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function () { return --_this.count2; }));
        setInterval(function () { _this.starttime(); }, 60000);
        // setTimeout(() => {this.starttime();}, 60000);
        this.timelimit = ((this.count2 * 60)) * 1000;
        if (this.count2 == 0 || this.count2 == 15 || this.count2 == 30 || this.count2 == 45) {
            this.timelimit = 60000;
        }
        setTimeout(function () { _this.pagerefresh(); }, this.timelimit);
    }
    // min = this.d.getMinutes();
    // fixedTimezone = '2015-06-15T09:03:01+0900';
    EthereumComponent.prototype.settime = function () {
        // location.reload();
        if (60 - this.min < 15) {
            this.count2 = 60 - this.min;
        }
        else if (45 - this.min < 15) {
            this.count2 = 45 - this.min;
        }
        else if (30 - this.min < 15) {
            this.count2 = 30 - this.min;
        }
        else {
            this.count2 = 15 - this.min;
        }
    };
    ;
    // get Ethereum Prediction
    EthereumComponent.prototype.getEthereumPrediction = function () {
        var _this = this;
        this.coinService.getEthereumPrediction().subscribe(function (data) {
            if (data.success) {
                _this.predicted = data.prices.predictedClose;
                console.log(_this.predicted);
            }
            else {
                _this.predicted = 410.32;
                console.log(_this.predicted);
            }
        });
    };
    // get Ethereum Tweet
    EthereumComponent.prototype.getEthereumTweet = function () {
        var sentiment;
        var SystemtimeStamp = Math.floor(Date.now() / 1000);
        this.tweetService.getEthereumTweet().subscribe(function (data) {
            if (data.success) {
                var DBtimestamp = data.polarity.timestamp;
                var pol = data.polarity.polarity;
                console.log(pol);
                SystemtimeStamp = SystemtimeStamp - 86400; // one day impact
                console.log(SystemtimeStamp);
                if (DBtimestamp > SystemtimeStamp) {
                    console.log("here");
                    if (pol >= 0 && pol <= 0.3) {
                        sentiment = "Normal Behaviour";
                        console.log(sentiment);
                    }
                    else if (pol > 0.3) {
                        sentiment = "Favourable Trading Conditions";
                        console.log(sentiment);
                    }
                    else if (pol < 0 && pol >= -0.3) {
                        sentiment = "Slightly Risky Trading Conditions";
                        console.log(sentiment);
                    }
                    else {
                        sentiment = "Highly Risky Trading Conditions";
                        console.log(sentiment);
                    }
                }
                else {
                    sentiment = "Normal Behaviour";
                    console.log(sentiment);
                }
            }
            else {
                sentiment = "Normal Behaviour";
                console.log(sentiment);
            }
        });
    };
    EthereumComponent.prototype.f = function () {
        new test();
    };
    EthereumComponent.prototype.g = function () {
        new TradingView.widget({
            // "autosize": true,
            "symbol": "BITTREX:ETHBTC",
            "interval": "D",
            "timezone": "Etc/UTC",
            "width": 900,
            "height": 610,
            "theme": "Dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "details": true,
            "news": [
                "headlines"
            ],
            "hideideas": true,
            "show_popup_button": true,
            "popup_width": "1110",
            "popup_height": "600",
            "container_id": "tradingview_0d880"
        });
    };
    ;
    EthereumComponent.prototype.starttime = function () {
        var _this = this;
        this.count = 60;
        this.countDown = Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(0, 1000).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["take"])(this.count), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function () { return --_this.count; }));
    };
    EthereumComponent.prototype.pagerefresh = function () { location.reload(); };
    EthereumComponent.prototype.ngOnInit = function () {
        this.g();
        // this.h();
    };
    return EthereumComponent;
}());
EthereumComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ethereum',
        template: __webpack_require__("../../../../../src/app/getcoin/ethereum/ethereum.component.html"),
        styles: [__webpack_require__("../../../../../src/app/getcoin/ethereum/ethereum.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_coin_service__["a" /* CoinService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_coin_service__["a" /* CoinService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_tweet_service__["a" /* TweetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_tweet_service__["a" /* TweetService */]) === "function" && _d || Object])
], EthereumComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=ethereum.component.js.map

/***/ }),

/***/ "../../../../../src/app/getcoin/getcoin.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div style=\"background-image: url('../../assets/img/daniel-olahh.jpg');\">\n\n<br><br><br>\n\n\n\n\n\n\n\n<div align=\"center\" class=\"container dropdown text-center\"><form action=\"../\">\n    <br><br><br><br><br><br><br>\n    <select name=\"mySelectbox\" class=\"selector\">\n        <option value=\"\">Choose a Coin to Predict...</option>\n        <option value=\"/getcoin/ETH\">ETHEREUM (ETH)</option>\n        <option value=\"/getcoin/ETC\">ETHEREUM CLASSIC (ETC)</option>\n        <option value=\"/getcoin/DASH\">DASH (DASH)</option>\n        <option value=\"/getcoin/LTC\">LITECOIN (LTC)</option>\n        <option value=\"/getcoin/DGB\">DIGIBYTE (DGB)</option>\n    </select>\n    <br>\n    <br>\n    <input type=\"button\" class=\"bootan\" onclick=\"window.open(this.form.mySelectbox.options[this.form.mySelectbox.selectedIndex].value,'_top')\"  value=\"GET PREDICTION\">\n</form></div>\n</div>\n\n<!--<div>-->\n<!--<input type=\"text\" [(ngModel)]=\"term\">-->\n<!--<div *ngFor = \"let item of items |filter:term\" >-->\n<!--<p>-->\n<!--{{item}}-->\n<!--</p>-->\n<!--</div>-->\n\n<!--</div>-->\n\n\n\n\n\n<!--<div class=\"wrapper\">-->\n    <!--<div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('../assets/img/fabio-mangione.jpg');\">-->\n        <!--<div class=\"filter\"></div>-->\n    <!--</div>-->\n    <!--<div class=\"section profile-content\">-->\n        <!--<div class=\"container\">-->\n            <!--<div class=\"owner\">-->\n                <!--<div class=\"avatar\">-->\n                    <!--<img src=\"../assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">-->\n                <!--</div>-->\n                <!--<div class=\"name\">-->\n                    <!--<h4 class=\"title\">Jane Faker<br /></h4>-->\n                    <!--<h6 class=\"description\">Music Producer</h6>-->\n                <!--</div>-->\n            <!--</div>-->\n            <!--<div class=\"row\">-->\n                <!--<div class=\"col-md-6 ml-auto mr-auto text-center\">-->\n                    <!--<p>An artist of considerable range, Jane Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>-->\n                    <!--<br />-->\n                    <!--<button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-cog\"></i> Settings</button>-->\n                <!--</div>-->\n            <!--</div>-->\n            <!--<br/>-->\n            <!--<div class=\"nav-tabs-navigation\">-->\n                <!--<div class=\"nav-tabs-wrapper\">-->\n                    <!--<ngb-tabset [justify]=\"'center'\">-->\n                        <!--<ngb-tab title=\"Follows\">-->\n                            <!--<ng-template ngbTabContent >-->\n                                <!--<div class=\"row following\" id=\"follows\">-->\n                                    <!--<div class=\"col-md-6 ml-auto mr-auto\">-->\n                                        <!--<ul class=\"list-unstyled follows\">-->\n                                            <!--<li>-->\n                                                <!--<div class=\"row\">-->\n                                                    <!--<div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">-->\n                                                        <!--<img src=\"../assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">-->\n                                                    <!--</div>-->\n                                                    <!--<div class=\"col-md-7 col-sm-4 ml-auto\">-->\n                                                        <!--<h6>Flume<br/><small>Musical Producer</small></h6>-->\n                                                    <!--</div>-->\n                                                    <!--<div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">-->\n                                                        <!--<div class=\"form-check\">-->\n                                                          <!--<label class=\"form-check-label\">-->\n                                                            <!--<input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">-->\n                                                            <!--<span class=\"form-check-sign\"></span>-->\n                                                          <!--</label>-->\n                                                        <!--</div>-->\n                                                    <!--</div>-->\n                                                <!--</div>-->\n                                            <!--</li>-->\n                                            <!--<hr />-->\n                                            <!--<li>-->\n                                                <!--<div class=\"row\">-->\n                                                    <!--<div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">-->\n                                                        <!--<img src=\"../assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">-->\n                                                    <!--</div>-->\n                                                    <!--<div class=\"col-md-7 col-sm-4 ml-auto\">-->\n                                                        <!--<h6>Banks<br /><small>Singer</small></h6>-->\n                                                    <!--</div>-->\n                                                    <!--<div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">-->\n                                                        <!--<div class=\"form-check\">-->\n                                                          <!--<label class=\"form-check-label\">-->\n                                                            <!--<input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">-->\n                                                            <!--<span class=\"form-check-sign\"></span>-->\n                                                          <!--</label>-->\n                                                        <!--</div>-->\n                                                    <!--</div>-->\n                                                <!--</div>-->\n                                            <!--</li>-->\n                                        <!--</ul>-->\n                                    <!--</div>-->\n                                <!--</div>-->\n                            <!--</ng-template>-->\n                        <!--</ngb-tab>-->\n                        <!--<ngb-tab title=\"Following\">-->\n                            <!--<ng-template ngbTabContent>-->\n                                <!--<h3 class=\"text-muted\">Not following anyone yet :(</h3>-->\n                                <!--<br>-->\n                                <!--<button class=\"btn btn-warning btn-round\">Find artists</button>-->\n                            <!--</ng-template>-->\n                        <!--</ngb-tab>-->\n                    <!--</ngb-tabset>-->\n                <!--</div>-->\n            <!--</div>-->\n        <!--</div>-->\n    <!--</div>-->\n<!--</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/getcoin/getcoin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Ubuntu);", ""]);

// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nbody {\n  padding: 3em; }\n\nnav {\n  width: 20%;\n  min-width: 18em;\n  margin: 0 auto; }\n\nh1 {\n  position: relative;\n  display: inline-block;\n  font: 2em/1em sans-serif;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 2.1em; }\n\nh1:after {\n  content: \"\";\n  border: 10px solid transparent;\n  border-top-color: #ccc;\n  position: absolute;\n  right: -30px;\n  top: 15px; }\n\nh1:hover + ul {\n  display: block; }\n\nul {\n  background: #eee;\n  border: 1px solid #ddd;\n  border-radius: 1%;\n  display: none;\n  position: relative;\n  top: -1.5em; }\n\nul:hover {\n  display: block; }\n\nli {\n  padding: 3% 5%;\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #ddd;\n  cursor: pointer; }\n\nli:first-child {\n  border-top: none; }\n\nli:last-child {\n  border-bottom: none; }\n\nli:hover {\n  background: linear-gradient(#eee, #ddd); }\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: 'Lato', sans-serif;\n  box-sizing: border-box; }\n\n.float-right {\n  float: right; }\n\n.fa {\n  font-size: .8em;\n  line-height: 22px !important; }\n\ndropdown {\n  display: inline-block;\n  margin: 20px 50px; }\n\ndropdown label, dropdown ul li {\n  display: block;\n  width: 200px;\n  background: #ECF0F1;\n  padding: 15px 20px; }\n\ndropdown label:hover, dropdown ul li:hover {\n  background: #1ABC9C;\n  color: white;\n  cursor: pointer; }\n\ndropdown label {\n  color: #1ABC9C;\n  border-left: 4px solid #1ABC9C;\n  border-radius: 0 5px 0 0;\n  position: relative;\n  z-index: 2; }\n\ndropdown input {\n  display: none; }\n\ndropdown input ~ ul {\n  position: relative;\n  visibility: hidden;\n  opacity: 0;\n  top: -20px;\n  z-index: 1; }\n\ndropdown input:checked + label {\n  background: #1ABC9C;\n  color: white; }\n\ndropdown input:checked ~ ul {\n  visibility: visible;\n  opacity: 1;\n  top: 0; }\n\ndropdown ul li:nth-child(1) {\n  border-left: 4px solid #E74C3C; }\n  dropdown ul li:nth-child(1) .fa {\n    color: #E74C3C; }\n  dropdown ul li:nth-child(1):hover {\n    background: #E74C3C;\n    color: white; }\n    dropdown ul li:nth-child(1):hover .fa {\n      color: white; }\n\ndropdown ul li:nth-child(2) {\n  border-left: 4px solid #0072B5; }\n  dropdown ul li:nth-child(2) .fa {\n    color: #0072B5; }\n  dropdown ul li:nth-child(2):hover {\n    background: #0072B5;\n    color: white; }\n    dropdown ul li:nth-child(2):hover .fa {\n      color: white; }\n\ndropdown ul li:nth-child(3) {\n  border-left: 4px solid #2C3E50; }\n  dropdown ul li:nth-child(3) .fa {\n    color: #2C3E50; }\n  dropdown ul li:nth-child(3):hover {\n    background: #2C3E50;\n    color: white; }\n    dropdown ul li:nth-child(3):hover .fa {\n      color: white; }\n\n.animate {\n  transition: all .3s;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  /* Chrome and Safari */\n  -moz-backface-visibility: hidden;\n  /* Firefox */\n  -ms-backface-visibility: hidden;\n  /* Internet Explorer */ }\n\n.selector {\n  width: 250px;\n  Height: 40px;\n  border: 0px;\n  border-bottom: 2px solid #ED4F13;\n  border-radius: 3px;\n  font: normal normal 13px/normal \"Raleway\", Helvetica, sans-serif; }\n\n.bootan {\n  box-shadow: none;\n  display: inline-block;\n  box-sizing: content-box;\n  width: 210px;\n  cursor: pointer;\n  padding: 10px 20px;\n  border: 2px solid #ED4F13;\n  border-radius: 3px;\n  font: normal normal 13px/normal \"Raleway\", Helvetica, sans-serif;\n  color: #fff;\n  text-overflow: clip;\n  background: #ED4F13;\n  transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1); }\n\n.bootan:hover {\n  box-shadow: none;\n  border: 2px solid #ED4F13;\n  color: #ED4F13;\n  background: #fff; }\n\n* {\n  padding: 0;\n  margin: 0; }\n\n.container {\n  width: 100vw;\n  height: 900px; }\n\n.container h1 {\n  text-align: center;\n  position: relative;\n  top: 50px;\n  color: white;\n  font-family: 'Ubuntu';\n  letter-spacing: 10px; }\n\n.hoverme {\n  top: 100px;\n  width: 400px;\n  left: 50%;\n  position: relative;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  overflow: hidden; }\n\n.hoverme p {\n  font-family: 'Lato', sans-serif;\n  list-style-type: none;\n  width: 400px;\n  height: 50px;\n  position: relative;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  text-align: center;\n  line-height: 50px;\n  color: white;\n  letter-spacing: 5px;\n  background-color: #f2a2e8;\n  transition: all 200ms ease-in-out;\n  z-index: 50; }\n\n.hoverme p:hover {\n  background-color: #ea69d9;\n  color: black;\n  letter-spacing: 6px; }\n\n.hoverme:hover nav {\n  top: 0; }\n\nnav {\n  position: relative;\n  top: -300px;\n  transition: all 300ms ease-in-out;\n  transition-delay: 200ms; }\n\nli {\n  font-family: 'Lato', sans-serif;\n  list-style-type: none;\n  width: 200px;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  color: white;\n  letter-spacing: 5px;\n  transition: all 200ms ease-in-out; }\n\nli:hover {\n  letter-spacing: 3px;\n  font-size: 16px;\n  color: black; }\n\n/*\r\n\r\nJASON KORABLIN\r\nDROP DOWN Menu\r\n\r\nHERE IS THE CSS NEEDED TO IMPLEMENT THE DROP DOWN MENU.\r\nIT IS DESIGNED TO TAKE UP THE WIDTH OF THE CONTAINER THAT IT IS PLACED INSIDE OF.\r\n\r\n*/\nbody {\n  background-color: #365670; }\n\n.container {\n  width: 90%;\n  max-width: 1500px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\nh1 {\n  font-family: 'Roboto', sans-serif;\n  color: #94B1E3;\n  text-align: center;\n  margin-bottom: 100px;\n  transition: all 100ms ease-in-out; }\n\nh1:hover {\n  color: white;\n  -webkit-transform: scale(1.025);\n          transform: scale(1.025);\n  cursor: pointer; }\n\n/* STYLING FOR THE NAME OF EACH DROP DOWN */\n.dropdown h3 {\n  color: white;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 10px; }\n\n/* TOP LEVEL LIST THAT WILL EITHER HOLD 1 <LI> FOR A SINGLE DROP DOWN; OR MULTIPLE <LI> FOR A NAV WITH DROP DOWN FUNCTIONALITY. */\n.dropdown ul {\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /* THIS IS FOR A RESPONSIVE HORIZONTAL LAYOUT OF THE TOP LEVEL LIST */\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n/* PROPERTIES FOR EACH <LI> IN THE TOP LEVEL LIST. */\n.dropdown ul li {\n  list-style: none;\n  position: relative;\n  margin-right: 15px;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /* THIS IS TO CENTER AND SPACE THE NAME AND ARROW SYMBOL */\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 13px;\n  background-color: #FAFCFC;\n  box-shadow: 0px 3px 0px #9C9C9C;\n  color: #121212; }\n\n/* STYLING FOR THE NAME OF EACH TOP LEVEL <LI> */\n.dropdown ul li p {\n  width: 100%;\n  text-align: center;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 900;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: bold;\n  word-wrap: break-word;\n  padding: 2px 10px 2px 10px; }\n\n/* STYLING FOR THE LINKS INSIDE OF THE LISTS */\n.dropdown ul li a {\n  padding: 10px;\n  color: #121212;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 900;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: bold;\n  word-wrap: break-word; }\n\n/* PROPERTIES OF THE BOTTOM LEVEL LIST. */\n.dropdown ul li ul {\n  position: absolute;\n  top: 100%;\n  bottom: 0;\n  left: 0;\n  visibility: hidden;\n  z-index: 1;\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  transition: all 300ms ease-in-out; }\n\n/* FUNCTIONALITY FOR THE FADE IN VISIBILITY FOR THE BOTTOM LEVEL MENU */\n.dropdown ul li:hover ul {\n  visibility: visible;\n  opacity: 1; }\n\n/* PROPERTIES OF EACH <LI> IN THE BOTTOM LEVEL LIST */\n.dropdown ul li ul li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 20px 0px 20px 0px;\n  text-align: center;\n  width: 100%;\n  transition: all 300ms ease-in-out; }\n\n/* FUNCTIONALITY FOR THE COLOR CHANGE WHEN HOVERING OVER A <LI> */\n.dropdown ul li ul li:hover {\n  background-color: #DEDEDE; }\n\n/* SYLING OF THE DOWN ARROW SYMBOL */\n.dropdown-arrow {\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid #293540;\n  margin-right: 6px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/getcoin/getcoin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetcoinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GetcoinComponent = (function () {
    // items = ['ahsan', 'bilal','Abudur-Rahman'];
    // items: string[] = [{ name: "archie" }, { name: "jake" }, { name: "richard" }];
    function GetcoinComponent() {
        //this.users = ['ahsan', 'bilal'];
        // items = ["1","2","3","4"];
    }
    GetcoinComponent.prototype.ngOnInit = function () { };
    return GetcoinComponent;
}());
GetcoinComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'get-coin',
        template: __webpack_require__("../../../../../src/app/getcoin/getcoin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/getcoin/getcoin.component.scss")],
    })
    // let items:string[];
    ,
    __metadata("design:paramtypes", [])
], GetcoinComponent);

//# sourceMappingURL=getcoin.component.js.map

/***/ }),

/***/ "../../../../../src/app/getcoin/litecoin/litecoin.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<br><br><br><br><br>\n<div id=\"container\"  >\n\n  <div id=\"sideMenu\">\n    <h1>COINS LISTS</h1>\n\n    <ul class=\"menu\">\n      <!--<li><a routerLink=\"/getcoin\">GET-PREDICTION</a></li>-->\n      <li><a routerLink=\"/getcoin/ETH\">ETHEREUM <span class=\"colorIcon red\"></span></a></li>\n      <li><a routerLink=\"/getcoin/LTC\">LITECOIN <span class=\"colorIcon orange\"></span></a></li>\n      <li><a routerLink=\"/getcoin/DASH\">DASHCOIN <span class=\"colorIcon green\"></span></a></li>\n      <li><a routerLink=\"/getcoin/DGB\">DIGIBYTE <span class=\"colorIcon green\"></span></a></li>\n      <li><a routerLink=\"/getcoin/ETC\">ETHEREUM CLASSIC <span class=\"colorIcon green\"></span></a></li>\n    </ul>\n  </div>\n  <div id=\"content\">\n    <div id=\"titleBar\">\n      <h2>LITECOIN</h2>\n      <br>\n      <h2>{{countDown2 | async}}:{{countDown | async}}  {{timelimit}} </h2>\n      <br>\n      <a>\n        <button style=\"font-weight:bold;\" class=\"btn btn-warning btn-round btn-sm\" type=\"button\" (click)=\"getLitePrediction()\" name=\"button\">Prediction</button>\n      </a>\n      <a>\n        <button style=\"font-weight:bold;\" class=\"btn btn-success btn-round btn-sm\" type=\"button\" (click)=\"getLiteTweet()\" name=\"button\">Tweet</button>\n      </a>\n      <div>\n      </div>\n\n\n\n\n      <br>\n\n\n      <div  id=\"tradingview_0d880\"></div>\n\n    </div>\n    <div id=\"content\">\n\n      <div class=\"mainChart\">\n        <canvas id=\"salesData\"></canvas>\n\n\n        <br><br><br><br><br><br><br><br><br><br>\n        <br><br><br><br><br><br><br><br><br><br>\n\n\n        <div class=\"row\">\n\n          <div class=\"col-xs-4\">\n            <h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              Current Price:</h2>\n          </div>\n\n          <div class=\"col-xs-4\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n\n          <div class=\"col-xs-4\">\n            <h2>Predicted Price:</h2>            </div>\n\n          <br><br>\n\n\n\n          <div class=\"row\">\n\n            <div class=\"col-xs-4\">\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n              <div _ngcontent-c3=\"\" class=\"coinmarketcap-currency-widget\" data-base=\"USD\" data-currencyid=\"2\" data-marketcap=\"true\" data-rank=\"true\" data-secondary=\"\" data-stats=\"USD\" data-statsticker=\"true\" data-ticker=\"true\" data-volume=\"true\" style=\"background: rgb(37, 49, 55); float: right; box-sizing: border-box; line-height: 1;\"><div style=\"border:2px solid #E4E6EB;border-radius: 10px;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;min-width:285px;\">    <div>        <div style=\"float:right;width:67%;border: 0px solid #000;text-align:left;padding:5px 0px;line-height:30px;\">            <span style=\"font-size: 18px;\"><a href=\"http://coinmarketcap.com/currencies/undefined/?utm_medium=widget&amp;utm_campaign=cmcwidget&amp;utm_source=localhost&amp;utm_content=undefined\" target=\"_blank\" style=\"text-decoration: none; color: rgb(66, 139, 202);\">Litecoin (LTC)</a></span> <br>            <span style=\"font-size: 16px;\">207.55 USD <span style=\"color:#093\">(5.62%)</span></span>                    </div>        <div style=\"text-align:center;padding:5px 0px;width:33%;\"><img src=\"https://files.coinmarketcap.com/static/img/coins/64x64/2.png\"></div>    </div><div style=\"border-top: 1px solid #E4E6EB;clear:both;\">                    <div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">                        RANK                        <br><br>                        <span style=\"font-size: 17px; \">5</span>                    </div>                    <div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">                        MARKET CAP                        <br><br>                        <span style=\"font-size: 14px; \">$11.49 B <span style=\"font-size:9px\">USD</span></span>                    </div>                    <div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;line-height:1.25em;\">                        VOLUME (24H)                        <br><br>                        <span style=\"font-size: 14px; \">$1.05 B <span style=\"font-size:9px\">USD</span></span>                    </div></div>    <div style=\"border-top: 1px solid #E4E6EB;text-align:center;clear:both;font-size:10px;font-style:italic;padding:5px 0;\">        <a href=\"http://coinmarketcap.com?utm_medium=widget&amp;utm_campaign=cmcwidget&amp;utm_source=localhost&amp;utm_content=undefined\" target=\"_blank\" style=\"text-decoration: none; color: rgb(66, 139, 202);\">Powered by CoinMarketCap</a>    </div></div></div>\n\n\n\n            </div>\n\n            <div class=\"col-xs-4\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n\n            <div class=\"col-xs-4\">\n              <div   style=\"background: rgb(37, 49, 55); float: right; box-sizing: border-box; line-height: 1;\">\n                <div style=\"border:2px solid #E4E6EB;border-radius: 10px;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;min-width:285px;\">\n                  <div>\n                    <div style=\"float:right;width:67%;border: 0px solid #000;text-align:left;padding:5px 0px;line-height:30px;\">\n                    <span style=\"font-size: 18px;\">\n                      <a  style=\"text-decoration: none; color: rgb(66, 139, 202);\">Ethereum (ETH)\n                      </a>\n                    </span>\n                      <br>\n                      <span style=\"font-size: 16px;\">818.83 USD <span style=\"color:#d14836\">\n                      (-2.61%)\n                    </span>\n                    </span>\n                    </div>\n                    <div style=\"text-align:center;padding:5px 0px;width:33%;\">\n                      <img src=\"https://files.coinmarketcap.com/static/img/coins_legacy/64x64/ethereum.png\">\n                    </div>\n                  </div>\n                  <!--<div style=\"border-top: 1px solid #E4E6EB;clear:both;\">-->\n                  <!--<div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">-->\n                  <!--RANK-->\n                  <!--<br><br>-->\n                  <!--<span style=\"font-size: 17px; \">2-->\n                  <!--</span>-->\n                  <!--</div>-->\n                  <!--<div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;border-right:1px solid #E4E6EB;line-height:1.25em;\">-->\n                  <!--MARKET CAP-->\n                  <!--<br><br>-->\n                  <!--<span style=\"font-size: 14px; \">-->\n                  <!--$80.06 B-->\n                  <!--</span>-->\n                  <!--</div>-->\n                  <!--<div style=\"text-align:center;float:left;width:33%;font-size:12px;padding:12px 0 16px 0;line-height:1.25em;\">-->\n                  <!--VOLUME (24H)-->\n                  <!--<br><br>-->\n                  <!--<span style=\"font-size: 14px; \">-->\n                  <!--$2.21 B-->\n                  <!--</span>-->\n                  <!--</div>-->\n                  <!--</div>-->\n                  <div style=\"border-top: 1px solid #E4E6EB;text-align:center;clear:both;font-size:10px;font-style:italic;padding:5px 0;\">\n                    <a style=\"text-decoration: none; color: rgb(66, 139, 202);\">\n                      Powered by ASK LEPRECHAUN\n                    </a>\n                  </div>\n                </div>\n              </div>\n\n\n\n            </div>\n\n\n          </div>\n\n\n\n\n\n          <div class=\"clearFix\"></div>\n\n          <!--<div id=\"totalSales\">-->\n          <!--<div class=\"col\">-->\n          <!--<div id=\"creditSales\" class=\"progressBar\" ></div>-->\n\n\n          <!--<h3>£5,390                        </h3>-->\n\n\n          <!--&lt;!&ndash;<div class=\"tradingview-widget-container\">&ndash;&gt;-->\n          <!--&lt;!&ndash;<div id=\"tradingview_0d880\"></div>&ndash;&gt;-->\n          <!--&lt;!&ndash;</div>&ndash;&gt;-->\n\n          <!--<span class=\"progressTitle\">Education Spend</span>-->\n          <!--</div>-->\n          <!--<div class=\"col\">-->\n          <!--<div id=\"channelSales\" class=\"progressBar\"></div>-->\n          <!--<h3>£904.37</h3>-->\n          <!--<span class=\"progressTitle\">Holiday Spend</span>-->\n          <!--</div>-->\n          <!--<div class=\"col\">-->\n          <!--<div id=\"directSales\" class=\"progressBar\"></div>-->\n          <!--<h3>£0</h3>-->\n          <!--<span class=\"progressTitle\">Cost of Living</span>-->\n          <!--</div>-->\n          <!--</div>-->\n\n\n          <br>\n\n          <br>\n\n\n          <br>\n\n          <br>\n\n\n          <!--<table>-->\n          <!--<tr>-->\n          <!--<th>Living Expenses</th>-->\n          <!--<th>Description</th>-->\n          <!--<th>Cost</th>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Travel<br></td>-->\n          <!--<td>TFL</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Grocery<br></td>-->\n          <!--<td>Lunches & Supermarket</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Social<br></td>-->\n          <!--<td>Drinks, Dinners & Clubs</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Wellbeing<br></td>-->\n          <!--<td>Massages, Pedicures etc.</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n\n          <!--<tr>-->\n          <!--<td>Misc.<br></td>-->\n          <!--<td>Miscellaneous</td>-->\n          <!--<td></td>-->\n          <!--</tr>-->\n          <!--</table>-->\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n\n\n  <!--&lt;!&ndash;<div class=\"coinmarketcap-currency-widget\" style=\"background: rgb(37, 49, 55); float: right; box-sizing: border-box; line-height: 1;\" data-currency=\"bitcoin\" data-base=\"USD\" data-secondary=\"\" data-ticker=\"false\" data-rank=\"false\" data-marketcap=\"false\" data-volume=\"false\" data-stats=\"USD\" data-statsticker=\"false\"></div>&ndash;&gt;-->\n"

/***/ }),

/***/ "../../../../../src/app/getcoin/litecoin/litecoin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:100,300,400,700);", ""]);

// module
exports.push([module.i, "html {\n  height: 100%;\n  font-family: 'Lato', sans-serif; }\n\nbody {\n  height: 100%;\n  margin: 0;\n  background: linear-gradient(135deg, #41839b 0%, #33627b 100%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/daniel-olahh.jpg")) + "); }\n\np {\n  word-spacing: 500px; }\n\n#container2 {\n  width: 960px;\n  position: relative;\n  margin: 0 auto;\n  line-height: 1.4em; }\n\n* {\n  box-sizing: border-box; }\n\n#container {\n  display: table;\n  background: #202b33;\n  border-radius: 4px; }\n\n/* Side Bar */\n#sideMenu {\n  width: 240px;\n  height: 100%;\n  padding: 30px;\n  border-right: 1px solid #111;\n  display: table-cell;\n  vertical-align: top;\n  color: #fff; }\n\n.menu {\n  list-style: none;\n  margin: 24px 0;\n  padding: 0; }\n\n.menu li {\n  display: block;\n  height: 30px;\n  width: 100%;\n  line-height: 30px;\n  font-size: 14px;\n  font-weight: 200;\n  color: rgba(255, 255, 255, 0.6);\n  position: relative; }\n\n.menu li:hover {\n  color: #239ae3; }\n\n.menu li:first-child {\n  height: 35px;\n  line-height: 35px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #fff; }\n\n.addCategory {\n  font-size: 13px;\n  font-weight: 200;\n  color: rgba(255, 255, 255, 0.2); }\n\n.addCategory:hover {\n  color: #fff; }\n\n/* Content */\n#content {\n  width: calc(100% - 240px);\n  height: 100%;\n  padding: 25px;\n  display: table-cell; }\n\n#titleBar {\n  height: 36px;\n  margin-bottom: 30px; }\n\n#profilePic {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #999;\n  float: right;\n  margin-top: -8px;\n  margin-left: 14px;\n  overflow: hidden; }\n\n#profilePic img {\n  width: 100%; }\n\n.controls {\n  display: block;\n  width: 70px;\n  height: 20px;\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 10px;\n  font-weight: 300;\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 20px;\n  float: right;\n  border-radius: 20px; }\n\n.activeControl {\n  background: rgba(255, 255, 255, 0.9);\n  color: #202b33;\n  font-weight: 600; }\n\n#salesData {\n  margin-bottom: 60px; }\n\n#totalSales {\n  height: 120px;\n  position: relative;\n  margin-top: 24px;\n  margin-bottom: 50px; }\n\n#totalSales .col {\n  float: left;\n  width: 33.33%;\n  height: 100%; }\n\n#totalSales .col .progressTitle {\n  float: left;\n  margin-left: 20px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.4); }\n\n.progressBar {\n  float: left;\n  height: 120px;\n  width: 120px;\n  font-size: 40px;\n  text-align: center;\n  line-height: 120px; }\n\n/* Icons */\n.notification {\n  display: block;\n  width: 20px;\n  height: 20px;\n  color: #202b33;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.6);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 2%;\n  margin: auto; }\n\n.colorIcon {\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 2%;\n  margin: auto; }\n\n.plus {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  color: #202b33;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 8px;\n  padding: 4px;\n  margin-right: 6px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  color: rgba(255, 255, 255, 0.2); }\n\n.red {\n  background: #ec1561; }\n\n.orange {\n  background: #ff9939; }\n\n.green {\n  background: #2bab51; }\n\n/* Table */\ntable {\n  width: 100%;\n  border-collapse: collapse; }\n\nth {\n  text-align: left;\n  color: #fff;\n  font-weight: 400;\n  font-size: 13px;\n  text-transform: uppercase;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 0 10px;\n  padding-bottom: 14px; }\n\ntr:not(:first-child):hover {\n  background: rgba(255, 255, 255, 0.1); }\n\ntd {\n  height: 40px;\n  line-height: 40px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.4);\n  padding: 0 10px; }\n\n/* Headers */\nh1 {\n  font-size: 13px;\n  font-weight: 200;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin: 0; }\n\nh2 {\n  float: left;\n  font-size: 19px;\n  font-weight: 200;\n  letter-spacing: 1px;\n  margin: 0;\n  color: rgba(255, 255, 255, 0.8); }\n\nh3 {\n  float: left;\n  color: #fff;\n  font-size: 32px;\n  font-weight: 300;\n  margin: 0;\n  margin-top: 8%;\n  margin-left: 20px;\n  margin-bottom: 6px; }\n\n.clearFix {\n  clear: both; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/getcoin/litecoin/litecoin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LitecoinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_coin_service__ = __webpack_require__("../../../../../src/app/services/coin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tweet_service__ = __webpack_require__("../../../../../src/app/services/tweet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__("../../../../rxjs/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(1, 2, 3).map(function (x) { return x + '!!!'; }); // etc
var LitecoinComponent = (function () {
    function LitecoinComponent(router, location, coinService, tweetService) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.coinService = coinService;
        this.tweetService = tweetService;
        this.d = new Date;
        this.min = this.d.getMinutes();
        this.count = this.d.getSeconds();
        this.settime();
        this.starttime();
        this.countDown2 = Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(0, 60000).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["take"])(this.count2), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function () { return --_this.count2; }));
        setInterval(function () { _this.starttime(); }, 60000);
        // setTimeout(() => {this.starttime();}, 60000);
        this.timelimit = ((this.count2 * 60)) * 1000;
        if (this.count2 == 0 || this.count2 == 15 || this.count2 == 30 || this.count2 == 45) {
            this.timelimit = 60000;
        }
        setTimeout(function () { _this.pagerefresh(); }, this.timelimit);
    }
    LitecoinComponent.prototype.g = function () {
        new TradingView.widget({
            // "autosize": true,
            "symbol": "BITTREX:LTCBTC",
            "interval": "D",
            "timezone": "Etc/UTC",
            "width": 900,
            "height": 610,
            "theme": "Dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "details": true,
            "news": [
                "headlines"
            ],
            "hideideas": true,
            "show_popup_button": true,
            "popup_width": "1110",
            "popup_height": "600",
            "container_id": "tradingview_0d880"
        });
    };
    ;
    // get Lite Prediction
    LitecoinComponent.prototype.getLitePrediction = function () {
        this.coinService.getLitePrediction().subscribe(function (data) {
            console.log(data);
        });
    };
    // get Lite Tweet
    LitecoinComponent.prototype.getLiteTweet = function () {
        this.tweetService.getLiteTweet().subscribe(function (data) {
            console.log(data);
        });
    };
    LitecoinComponent.prototype.starttime = function () {
        var _this = this;
        this.count = 60;
        this.countDown = Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(0, 1000).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["take"])(this.count), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function () { return --_this.count; }));
    };
    // min = this.d.getMinutes();
    // fixedTimezone = '2015-06-15T09:03:01+0900';
    LitecoinComponent.prototype.settime = function () {
        // location.reload();
        if (60 - this.min < 15) {
            this.count2 = 60 - this.min;
        }
        else if (45 - this.min < 15) {
            this.count2 = 45 - this.min;
        }
        else if (30 - this.min < 15) {
            this.count2 = 30 - this.min;
        }
        else {
            this.count2 = 15 - this.min;
        }
    };
    ;
    LitecoinComponent.prototype.pagerefresh = function () { location.reload(); };
    LitecoinComponent.prototype.ngOnInit = function () {
        this.g();
    };
    return LitecoinComponent;
}());
LitecoinComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-litecoin',
        template: __webpack_require__("../../../../../src/app/getcoin/litecoin/litecoin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/getcoin/litecoin/litecoin.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_coin_service__["a" /* CoinService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_coin_service__["a" /* CoinService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_tweet_service__["a" /* TweetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_tweet_service__["a" /* TweetService */]) === "function" && _d || Object])
], LitecoinComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=litecoin.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/adminAuth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminAuthGuard = (function () {
    function AdminAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminAuthGuard.prototype.canActivate = function (router, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.redirectUrl = state.url;
            this.router.navigate(['/admin/login']);
            return false;
        }
    };
    return AdminAuthGuard;
}());
AdminAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AdminAuthGuard);

var _a, _b;
//# sourceMappingURL=adminAuth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/adminNotAuth.gurad.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminNotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminNotAuthGuard = (function () {
    function AdminNotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminNotAuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/home']);
            return false;
        }
        else {
            return true;
        }
    };
    return AdminNotAuthGuard;
}());
AdminNotAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AdminNotAuthGuard);

var _a, _b;
//# sourceMappingURL=adminNotAuth.gurad.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (router, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.redirectUrl = state.url;
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/notAuth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NotAuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/home']);
            return false;
        }
        else {
            return true;
        }
    };
    return NotAuthGuard;
}());
NotAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], NotAuthGuard);

var _a, _b;
//# sourceMappingURL=notAuth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n    <div class=\"page-header parallax\"  style=\"background-image: url('assets/img/image3.webp');\">     \n\t <br> <br>\n\t <br> <br>\n        <div class=\"content-center\">\n            <div class=\"container\">\n               <div class=\"title-brand \">\n               <!--     <div class=\"angular-logo\">\n                        <img src=\"assets/img/logo.jpg\" alt=\"\">\n                    </div>\n\t\t\t\t\t-->\n                    <br> <br> <br> <br>\n\t\t\t\t\t<h1 style=\"color:white; font-weight:bold; font-size:80px; letter-spacing:2px;\">ASK LEPRECHAUN TO INVEST IN THE FUTURE</h1>\n                    <!--<div class=\"fog-low\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div>\n                    <div class=\"fog-low right\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div>\n\t\t\t\t\t-->\n                </div>\n\n                <h2 class=\"presentation-subtitle text-center\" style=\"font-size:30px;\">It's Magically Algorithmic!</h2>\n            </div>\n        </div>\n        <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div>\n        \n        <!-- <h6 class=\"category category-absolute\">Designed and coded by -->\n    </div>\n    \n        <app-components></app-components>\n\t\t</div>\n        <!--<div class=\"section section-dark section-nucleo-icons\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-12\">\n                        <h2 class=\"title\">Nucleo Icons</h2><br/>\n                        <p class=\"description\">\n                            Now UI Kit comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit Make sure you check all of them and use those that you like the most.\n                        </p><br/>\n                        <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-danger btn-round\">View Demo Icons</a>\n                        <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-outline-danger btn-round\" target=\"_blank\">View All Icons</a>\n                    </div>\n\n                    <div class=\"col-lg-6 col-md-12\">\n                        <div class=\"icons-container\">\n                            <i class=\"nc-icon nc-time-alarm\"></i>\n                            <i class=\"nc-icon nc-atom\"></i>\n                            <i class=\"nc-icon nc-camera-compact\"></i>\n                            <i class=\"nc-icon nc-watch-time\"></i>\n                            <i class=\"nc-icon nc-key-25\"></i>\n                            <i class=\"nc-icon nc-diamond\"></i>\n                            <i class=\"nc-icon nc-user-run\"></i>\n                            <i class=\"nc-icon nc-layout-11\"></i>\n                            <i class=\"nc-icon nc-badge\"></i>\n                            <i class=\"nc-icon nc-bulb-63\"></i>\n                            <i class=\"nc-icon nc-favourite-28\"></i>\n                            <i class=\"nc-icon nc-planet\"></i>\n                            <i class=\"nc-icon nc-tie-bow\"></i>\n                            <i class=\"nc-icon nc-zoom-split\"></i>\n                            <i class=\"nc-icon nc-cloud-download-93\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-dark\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">Completed with examples</h2>\n                        <p class=\"description\">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful kit.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"section\">\n            <div class=\"container text-center\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">Do you like what you see?</h2>\n                        <p class=\"description\">Cause if you do, it can be yours for Free. Hit the button below and download it. Start a new project or give an old Bootstrap 4 project a new look.</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6 download-area ml-auto mr-auto\">\n                        <a href=\"https://www.creative-tim.com/product/paper-kit-2\" class=\"btn btn-warning btn-round\">Download free HTML</a>\n                        <a href=\"https://www.creative-tim.com/product/paper-kit-2-angular\" class=\"btn btn-danger btn-round\">Download free Angular</a>\n                    </div>\n                </div>\n                <div class=\"row justify-content-md-center sharing-area text-center\">\n                    <div class=\"text-center col-md-12 col-lg-8\">\n                        <h3>Thank you for supporting us!</h3>\n                    </div>\n                    <div class=\"text-center col-md-12 col-lg-8\">\n                        <a href=\"#pablo\" class=\"btn btn-twitter-bg twitter-sharrre btn-round\" rel=\"tooltip\" title=\"Tweet!\">\n                            <i class=\"fa fa-twitter\"></i> Twitter\n                        </a>\n                        <a href=\"#pablo\" class=\"btn btn-google-bg linkedin-sharrre btn-round\" rel=\"tooltip\" title=\"Share!\">\n                            <i class=\"fa fa-google-plus\"></i> Google\n                        </a>\n                        <a href=\"#pablo\" class=\"btn btn-facebook-bg facebook-sharrre btn-round\" rel=\"tooltip\" title=\"Share!\">\n                            <i class=\"fa fa-facebook-square\"></i> Facebook\n                        </a>\n                        <a href=\"https://github.com/creativetimofficial/paper-kit\" class=\"btn btn-github-bg btn-github sharrre btn-round\" rel=\"tooltip\" title=\"Star on Github\">\n                            <i class=\"fa fa-github\"></i> Star\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n-->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */]],
        providers: []
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main\">\n    <div class=\"section text-center\">\n    <div class=\"container\">\n       \n            <div class=\"col-md-8 mr-auto ml-auto\"> <br> <br> <br>\n            <h2 class=\"title\" style=\"font-size:49px; color:black; letter-spacing: 0.06em; font-family:Arial,Helvetica,sans-serif;\">About Us?</h2>\n\t\t\t\t\n\t\t\t\t\n\t\t\t   <h5 class=\"description\" style=\"font-size:20px; color:black; letter-spacing: 0.06em; font-family:Arial,Helvetica,sans-serif;\">\n\t\t\n\t\t\t\t<span style=\"color:#00973A; font-weight:bold;\"> LEPRECHAUN </span>uses deep learning neural networks and twitter\n\t\t\t\t\tanalysis of various coins to predict the future. Leprechaun is smart.<br>So you should Ask <span style=\"color:#00973A; font-weight:bold;\">LEPRECHAUN </span></h5>\n            \n\t\t\t\t<br>\n\t\t\t\t\n\t\t\t\t<h5 class=\"description\" style=\"font-size:20px; color:black; letter-spacing: 0.06em; font-family:Arial,Helvetica,sans-serif;\">\n\t\t\t\t\n\t\t\t\tWe are in association with <span style=\"color:red; font-weight:bold;\">Ridge Private Limited</span>. It is a consultancy based firm in Karachi which consults its customers in tradings</h5>\n\t\t\t\t\t\n                \n            </div>\n        \n</div>\n\t</div>\n\t\t</div>\n\n\t\t<div style=\"background:#00973A; height:13px;\"> </div>\n\t\t<div class=\"parallax\" style=\"background-image: url('assets/img/image4.webp');\"> </div>\n        <br/><br/>\n\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-album-2\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Beautiful Gallery</h4>\n                        <p class=\"description\">Spend your time generating new ideas. You don't have to think of implementing.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-bulb-63\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">New Ideas</h4>\n                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-chart-bar-32\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Statistics</h4>\n                        <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-sun-fog-29\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Delightful design</h4>\n                        <p>Find unique and handmade delightful designs related items directly from our sellers.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n<br> <br>    \n<div style=\"background:#00973A; height:13px;\"> </div>\n<div class=\"section section-dark text-center\">\n    <div class=\"container\">\n        <h2 class=\"title\">Let's talk about us</h2>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"../assets/img/faces/abdurrehman.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Abdur Rehman</h4>\n                                <h6 class=\"card-category\">Backend Developer</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.\n                        </p>\n                    </div>\n                    <!--<div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>-->\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"../assets/img/faces/bilalaamir.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Bilal Aamir</h4>\n                                <h6 class=\"card-category\">Frontend Developer</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.\n                        </p>\n                    </div>\n                    <!--<div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>-->\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"../assets/img/faces/ahsanabrar.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Ahsan Abrar</h4>\n                                <h6 class=\"card-category\">Database Administrator</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.\n                        </p>\n                    </div>\n                    <!--<div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>-->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n    <div class=\"section landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"text-center\">Keep in touch?</h2>\n                    <form class=\"contact-form\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Name</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-single-02\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label>Email</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-email-85\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n                                </div>\n                            </div>\n                        </div>\n                        <label>Message</label>\n                        <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 mr-auto ml-auto\">\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"section landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"text-center\" style=\"font-family: Arial,Helvetica,sans-serif; letter-spacing:0.06em; font-size:49px; font-weight:bold; color:#252525;\">LOG IN</h2>\n                    \n                    <!--custom error/success message class-->\n                    <div class=\"row show-hide-message\">\n                        <div [ngClass]=\"messageClass\">\n                            {{ message }}\n                        </div>\n                    </div>\n\n                    <!-- Login Form -->\n                    <form class=\"contact-form\" [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\n                        \n                           <!-- Username Input -->\n                            <div class=\"col-md-6\">\n                                <label style=\"color:black; \">Username</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-single-02\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" name=\"username\"  placeholder=\"Username\" formControlName=\"username\">\n                                </div>\n                                <div [ngClass]=\"{'field_error': (form.controls.username.errors && form.controls.username.dirty),\n                                                 'field_success': form.controls.username.valid && form.controls.username.dirty}\">\n                                    <ul class=\"help-block\">\n                                        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">\n                                            This field is required\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n\n                            <!-- Password Input -->\n                         <div class=\"col-md-6\">\n                                <label style=\"color:black;\">Password</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-lock-circle-open\"></i>\n                                    </span>\n                                    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                                </div>\n                                <div [ngClass]=\"{'field_error': (form.controls.password.errors && form.controls.password.dirty),\n                                                 'field_success': form.controls.password.valid && form.controls.password.dirty}\">\n                                    <ul class=\"help-block\">\n                                        <li *ngIf=\"form.controls.password.errors?.required &&\n                                                   form.controls.password.dirty\">This field is required\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        \n                            <!-- Submit Form Button -->\n                            <div  style=\"padding-left:15px;\">\n                                <!--<button class=\"btn btn-success btn-lg btn-fill\">Sign In</button>-->\n                                        \n                                <input type=\"submit\" class=\"btn btn-success btn-lg btn-fill\" value=\"Sign In\"\n                                [disabled]=\"!form.valid || processing\">\n\n                                <button type=\"button\" (click)=\"resendActivationLink()\" class=\"btn btn-success btn-lg btn-fill\"\n                                [disabled]=\"!form.valid || processing\">Resend Activation Link</button>\n                            </div>    \n                    </form>\n                </div>\n            </div>\n\t\t\t\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".field_error {\n  color: red; }\n\n.field_success {\n  color: green; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.test = new Date();
        this.processing = false;
        this.createForm();
    }
    // Function to create registration form
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
    };
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.login(user).subscribe(function (data) {
            if (!data.success) {
                _this.processing = false;
                _this.message = data.message;
                _this.messageClass = 'alert alert-danger';
                _this.enableForm();
            }
            else {
                _this.message = data.message;
                _this.messageClass = 'alert alert-success';
                _this.disableForm();
                _this.authService.storeUserData(data.token, data.user);
                console.log(data.user.username);
                setTimeout(function () {
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]);
                    }
                    else {
                        _this.router.navigate(['/faqs']);
                    }
                }, 2000);
            }
        });
    };
    LoginComponent.prototype.resendActivationLink = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.resendActivationLink(user).subscribe(function (data) {
            if (!data.success) {
                _this.processing = false;
                _this.message = data.message;
                _this.messageClass = 'alert alert-danger';
                _this.enableForm();
            }
            else {
                _this.message = data.message;
                _this.messageClass = 'alert alert-success';
                _this.disableForm();
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () { };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('../assets/img/fabio-mangione.jpg');\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div class=\"avatar\">\n                    <img src=\"../assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Jane Faker<br /></h4>\n                    <h6 class=\"description\">Music Producer</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>An artist of considerable range, Jane Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>\n                    <br />\n                    <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-cog\"></i> Settings</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"nav-tabs-navigation\">\n                <div class=\"nav-tabs-wrapper\">\n                    <ngb-tabset [justify]=\"'center'\">\n                        <ngb-tab title=\"Follows\">\n                            <ng-template ngbTabContent >\n                                <div class=\"row following\" id=\"follows\">\n                                    <div class=\"col-md-6 ml-auto mr-auto\">\n                                        <ul class=\"list-unstyled follows\">\n                                            <li>\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n                                                        <img src=\"../assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                    </div>\n                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\n                                                        <h6>Flume<br/><small>Musical Producer</small></h6>\n                                                    </div>\n                                                    <div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                                                            <span class=\"form-check-sign\"></span>\n                                                          </label>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                            <hr />\n                                            <li>\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n                                                        <img src=\"../assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                    </div>\n                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\n                                                        <h6>Banks<br /><small>Singer</small></h6>\n                                                    </div>\n                                                    <div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                                                            <span class=\"form-check-sign\"></span>\n                                                          </label>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Following\">\n                            <ng-template ngbTabContent>\n                                <h3 class=\"text-muted\">Not following anyone yet :(</h3>\n                                <br>\n                                <button class=\"btn btn-warning btn-round\">Find artists</button>\n                            </ng-template>\n                        </ngb-tab>\n                    </ngb-tabset>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".field_error {\r\n    color: red\r\n}\r\n\r\n.field_success {\r\n    color: green;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"section landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"text-center\" style=\"font-family: Arial,Helvetica,sans-serif; letter-spacing:0.06em; font-size:49px; font-weight:bold; color:#252525;\">Reset Password Link</h2>\n                    \n                    <!--custom error/success message class-->\n                    <div class=\"row show-hide-message\">\n                        <div [ngClass]=\"messageClass\">\n                            {{ message }}\n                        </div>\n                    </div>\n\n                    <!-- Login Form -->\n                    <form class=\"contact-form\" [formGroup]=\"form\" (submit)=\"onResetPassword()\">\n                        \n                           <!-- Email Input -->\n                            <div class=\"col-md-6\">\n                                <label style=\"color:black; \">Email</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-email-85\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" name=\"email\" autocomplete=\"off\"\n                                    placeholder=\"Email\" formControlName=\"email\" >\n                                </div>\n                                <div [ngClass]=\"{'field_error': (form.controls.email.errors && form.controls.email.dirty),\n                                                 'field_success': form.controls.email.valid && form.controls.email.dirty}\">\n                                    <ul class=\"help-block\">\n                                        <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">\n                                            This field is required\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        \n                            <!-- Submit Form Button -->\n                            <div style=\"padding-left:15px;\">\n                                <!--<button class=\"btn btn-success btn-lg btn-fill\">Sign In</button>-->\n                                <input type=\"submit\" class=\"btn btn-success btn-lg btn-fill\" value=\"Send Link\"\n                                [disabled]=\"!form.valid || processing\">\n                            </div>\n                        \n                    </form>\n                </div>\n            </div>\n\t\t\t\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm();
    }
    // Function to create registration form
    ResetPasswordComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    ResetPasswordComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
    };
    ResetPasswordComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
    };
    ResetPasswordComponent.prototype.onResetPassword = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            email: this.form.get('email').value
        };
        this.authService.resetPassword(user).subscribe(function (data) {
            if (!data.success) {
                _this.processing = false;
                _this.message = data.message;
                _this.messageClass = 'alert alert-danger';
                _this.enableForm();
            }
            else {
                _this.message = data.message;
                _this.messageClass = 'alert alert-success';
                _this.disableForm();
            }
        });
    };
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reset-password',
        template: __webpack_require__("../../../../../src/app/reset-password/reset-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reset-password/reset-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ResetPasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=reset-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/save-password/save-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".field_error {\r\n    color: red\r\n}\r\n\r\n.field_success {\r\n    color: green;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/save-password/save-password.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"section landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"text-center\" style=\"font-family: Arial,Helvetica,sans-serif; letter-spacing:0.06em; font-size:49px;\n                     font-weight:bold; color:#252525;\">Change Password</h2>\n                    \n                    <!--custom error/success message class-->\n                    <div class=\"row show-hide-message\">\n                        <div [ngClass]=\"messageClass\">\n                            {{ message }}\n                        </div>\n                    </div>\n\n                    <!-- Login Form -->\n                    <form class=\"contact-form\" [formGroup]=\"form\" (submit)=\"onChangePassword()\">\n                        \n                           <!-- Username Input -->\n                            <div class=\"col-md-6\">\n                                <label style=\"color:black; \">Username</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-single-02\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" name=\"username\"  placeholder=\"Username\" formControlName=\"username\">\n                                </div>\n                                <div [ngClass]=\"{'field_error': (form.controls.username.errors && form.controls.username.dirty),\n                                                 'field_success': form.controls.username.valid && form.controls.username.dirty}\">\n                                    <ul class=\"help-block\">\n                                        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">\n                                            This field is required\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n\n                            <!-- Password Input -->\n                         <div class=\"col-md-6\">\n                                <label style=\"color:black;\">New Password</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-lock-circle-open\"></i>\n                                    </span>\n                                    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                                </div>\n                                <div [ngClass]=\"{'field_error': (form.controls.password.errors && form.controls.password.dirty),\n                                                 'field_success': form.controls.password.valid && form.controls.password.dirty}\">\n                                    <ul class=\"help-block\">\n                                        <li *ngIf=\"form.controls.password.errors?.required &&\n                                                   form.controls.password.dirty\">This field is required\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        \n                            <!-- Submit Form Button -->\n                            <div style=\"padding-left:15px;\">\n                                <!--<button class=\"btn btn-success btn-lg btn-fill\">Sign In</button>-->\n                                <input type=\"submit\" class=\"btn btn-success btn-lg btn-fill\" value=\"Change Password\"\n                                [disabled]=\"!form.valid || processing\">\n                            </div>\n                        \n                    </form>\n                </div>\n            </div>\n\t\t\t\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/save-password/save-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SavePasswordComponent = (function () {
    function SavePasswordComponent(formBuilder, authService, route, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.processing = false;
        this.createForm();
    }
    // Function to create registration form
    SavePasswordComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    SavePasswordComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
    };
    SavePasswordComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
    };
    SavePasswordComponent.prototype.onChangePassword = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.changePassword(user).subscribe(function (data) {
            if (!data.success) {
                _this.processing = false;
                _this.message = data.message;
                _this.messageClass = 'alert alert-danger';
                _this.enableForm();
            }
            else {
                _this.message = data.message;
                _this.messageClass = 'alert alert-success';
                _this.disableForm();
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 5000);
            }
        });
    };
    SavePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.route.snapshot.paramMap.get('token');
        this.authService.checkCredentials(token).subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = 'alert alert-danger';
                _this.valid = data.success;
            }
            else {
                _this.message = data.message;
                _this.messageClass = 'alert alert-success';
                _this.valid = data.success;
            }
        });
    };
    return SavePasswordComponent;
}());
SavePasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-save-password',
        template: __webpack_require__("../../../../../src/app/save-password/save-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/save-password/save-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
], SavePasswordComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=save-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminService = (function () {
    function AdminService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.domain = "http://localhost:8080";
    }
    AdminService.prototype.login = function (user) {
        return this.http.post(this.domain + '/admin/login', user).map(function (res) { return res.json(); });
    };
    // function to get all users from database
    AdminService.prototype.getAllUsers = function () {
        return this.http.get(this.domain + '/admin/allUsers').map(function (res) { return res.json(); });
    };
    // block user
    AdminService.prototype.blockUser = function (id) {
        this.authService.createAuthenticationHeaders();
        return this.http.put(this.domain + '/admin/block/' + id, this.authService.options).map(function (res) { return res.json(); });
    };
    // unblock user
    AdminService.prototype.unblockUser = function (id) {
        this.authService.createAuthenticationHeaders();
        return this.http.put(this.domain + '/admin/unblock/' + id, this.authService.options).map(function (res) { return res.json(); });
    };
    // delete user
    AdminService.prototype.deleteUser = function (id) {
        this.authService.createAuthenticationHeaders();
        return this.http.delete(this.domain + '/admin/deleteuser/' + id, this.authService.options).map(function (res) { return res.json(); });
    };
    return AdminService;
}());
AdminService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AdminService);

var _a, _b;
//# sourceMappingURL=admin.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = "http://localhost:8080";
    }
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken
            })
        });
    };
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
    };
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + '/authentication/register', user).map(function (res) { return res.json(); });
    };
    AuthService.prototype.checkUsername = function (username) {
        console.log('auth service checkUsername: ', username);
        return this.http.get(this.domain + '/authentication/checkUsername/' + username).map(function (res) { return res.json(); });
    };
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + '/authentication/checkEmail/' + email).map(function (res) { return res.json(); });
    };
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + '/authentication/login', user).map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    // store user data in browser to keep login
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + '/authentication/profile', this.options).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.activateUser = function (token) {
        return this.http.put(this.domain + '/authentication/activate/' + token, token).map(function (res) { return res.json(); });
    };
    AuthService.prototype.resendActivationLink = function (user) {
        return this.http.put(this.domain + '/authentication/resend', user).map(function (res) { return res.json(); });
    };
    AuthService.prototype.resetUsername = function (user) {
        return this.http.post(this.domain + '/authentication/resetUsername', user).map(function (res) { return res.json(); });
    };
    AuthService.prototype.resetPassword = function (user) {
        return this.http.put(this.domain + '/authentication/resetPassword', user).map(function (res) { return res.json(); });
    };
    AuthService.prototype.checkCredentials = function (token) {
        return this.http.get(this.domain + '/authentication/resetPassword/' + token).map(function (res) { return res.json(); });
    };
    AuthService.prototype.changePassword = function (user) {
        return this.http.put(this.domain + '/authentication/savepassword', user).map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/coin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoinService = (function () {
    function CoinService(http) {
        this.http = http;
        this.domain = "http://localhost:8080";
    }
    // get ethereum prediction 
    CoinService.prototype.getEthereumPrediction = function () {
        return this.http.get(this.domain + '/price/ethereum').map(function (res) { return res.json(); });
    };
    // get lite prediction 
    CoinService.prototype.getLitePrediction = function () {
        return this.http.get(this.domain + '/price/lite').map(function (res) { return res.json(); });
    };
    // get dash prediction 
    CoinService.prototype.getDashPrediction = function () {
        return this.http.get(this.domain + '/price/dash').map(function (res) { return res.json(); });
    };
    // get digibyte prediction 
    CoinService.prototype.getDigibytePrediction = function () {
        return this.http.get(this.domain + '/price/digibyte').map(function (res) { return res.json(); });
    };
    // get ripple prediction 
    CoinService.prototype.getRipplePrediction = function () {
        return this.http.get(this.domain + '/price/ripple').map(function (res) { return res.json(); });
    };
    return CoinService;
}());
CoinService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CoinService);

var _a;
//# sourceMappingURL=coin.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/tweet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TweetService = (function () {
    function TweetService(http) {
        this.http = http;
        this.domain = "http://localhost:8080";
    }
    // get ethereum prediction 
    TweetService.prototype.getEthereumTweet = function () {
        return this.http.get(this.domain + '/tweet/ethereum').map(function (res) { return res.json(); });
    };
    // get lite prediction 
    TweetService.prototype.getLiteTweet = function () {
        return this.http.get(this.domain + '/tweet/lite').map(function (res) { return res.json(); });
    };
    // get dash prediction 
    TweetService.prototype.getDashTweet = function () {
        return this.http.get(this.domain + '/tweet/dash').map(function (res) { return res.json(); });
    };
    // get digibyte prediction 
    TweetService.prototype.getDigibyteTweet = function () {
        return this.http.get(this.domain + '/tweet/digibyte').map(function (res) { return res.json(); });
    };
    // get ripple prediction 
    TweetService.prototype.getRippleTweet = function () {
        return this.http.get(this.domain + '/tweet/ripple').map(function (res) { return res.json(); });
    };
    return TweetService;
}());
TweetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], TweetService);

var _a;
//# sourceMappingURL=tweet.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" style=\"background:#252525;\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\" >\n                <ul>\n                    \n                   <li style=\"color:white;font-weight:bold;\">Abdur Rehman</li>\n\t\t\t\t   <li style=\"color:white;font-weight:bold;\">Ahsan Abrar</li>\n\t\t\t\t   <li style=\"color:white;font-weight:bold;\">Bilal Aamir</li>\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\" style=\"color:white;\">\n                    © {{test | date: 'yyyy'}} Ask Leprechaun, All Rights Reserved. \n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "    <nav class=\"navbar navbar-expand-lg fixed-top \" color-on-scroll=\"500\">\n\t\n\n\t\n\t\n    <div class=\"container\">\n        <div class=\"navbar-translate\" >\n\t\t\t\n            <a class=\"navbar-brand\" style=\"color:black; font-size:25px;  font-family:Arial,Helvetica,sans-serif; \">\n\t\t\t<img style=\"padding-right:10px;\" src=\"../../../assets/img/Lucky_the_leprechaun.png\">\n\t\t\t\n\t\t\tAsk <span style=\"color:#00973A;\">LEPRECHAUN</span></a>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\n            <ul class=\"navbar-nav ml-auto\">\n\n                <li class=\"nav-item\">\n                    <a style=\"color:black; font-size:16px;  font-family:Arial,Helvetica,sans-serif;\" class=\"nav-link\"  routerLink=\"/home\">HOME</a>\n                </li>\n\n                <li class=\"nav-item\">\n                    <a style=\"color:black; font-size:16px;  font-family:Arial,Helvetica,sans-serif;\" class=\"nav-link\" routerLink=\"/aboutus\">ABOUT US</a>\n                </li>\n\n                <li class=\"nav-item\">\n                    <a style=\"color:black; font-size:16px;  font-family:Arial,Helvetica,sans-serif;\" class=\"nav-link\" routerLink=\"/faqs\">FAQS</a>\n                </li>\n\n                <li class=\"nav-item\">\n                    <a style=\"color:black; font-size:16px;  font-family:Arial,Helvetica,sans-serif;\" class=\"nav-link\" routerLink=\"/getcoin\">GET-COIN</a>\n                </li>\n\n                <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\">\n                    <a style=\"color:black; font-size:16px;  font-family:Arial,Helvetica,sans-serif;\" class=\"nav-link\" routerLink=\"/login\">LOGIN</a>\n                </li>   \n\n                <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\">\n                    <a style=\"color:black; font-size:16px;  font-family:Arial,Helvetica,sans-serif;\" class=\"nav-link\" routerLink=\"/signup\">REGISTER</a>\n                </li>\n\n                <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\">\n                    <a style=\"color:black; font-size:16px;  font-family:Arial,Helvetica,sans-serif;\" class=\"nav-link\" href=\"#\" (click)=\"onLogoutClick()\">LOGOUT</a>\n                </li>\n\n\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(location, element, authService, router) {
        this.location = location;
        this.element = element;
        this.authService = authService;
        this.router = router;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/home']);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"section landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"text-center\" style=\"font-family: Arial,Helvetica,sans-serif; letter-spacing:0.06em; font-size:49px; font-weight:bold; color:#252525;\">SIGN UP</h2>\n\n                    <!--custom error/success message class-->\n                    <div class=\"row show-hide-message\">\n                        <div [ngClass]=\"messageClass\">\n                            {{ message }}\n                        </div>\n                    </div>\n                    \n                    <!-- Registration Form -->\n                    <form class=\"contact-form\" [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\n\n                        <!-- Username Input -->\n                            <div class=\"col-md-6\">\n                                <label style=\" color:black;\">Username</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-single-02\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" name=\"username\" autocomplete=\"off\" \n                                    placeholder=\"Username\" formControlName=\"username\" (input)=\"checkUsername()\">\n                                </div>\n                                <div [ngClass]=\"{'field_error': (form.controls.username.errors && form.controls.username.dirty) ||\n                                                 (!usernameValid && form.controls.username.dirty), \n                                                 'field_success': !form.controls.username.errors && usernameValid}\">\n                                    <ul class=\"help-block\">\n                                        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">\n                                            This field is required</li>\n                                        <li *ngIf=\"(form.controls.username.errors?.minlength && form.controls.username.dirty) ||\n                                            (form.controls.username.errors?.maxlength && form.controls.username.dirty)\">\n                                            Minimum characters: 3, Maximum characters: 15</li>\n                                        <li *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\">\n                                            Username must not have any special characters</li>\n                                        <li *ngIf=\"usernameMessage && !form.controls.username.errors\"> {{ usernameMessage }} </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        \n                      \n                           <!-- Email Input -->\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n                                <label style=\" color:black;\" >Email</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-email-85\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" name=\"email\" autocomplete=\"off\"\n                                    placeholder=\"Email\" formControlName=\"email\" (input)=\"checkEmail()\">\n                                </div>\n                                <div [ngClass]=\"{'field_error': (form.controls.email.errors && form.controls.email.dirty) ||\n                                                 (!emailValid && form.controls.email.dirty), \n                                                 'field_success': !form.controls.email.errors && emailValid}\">\n                                    <ul class=\"help-block\">\n                                        <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">\n                                            This field is required</li>\n                                        <li *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty) ||\n                                            (form.controls.email.errors?.maxlength && form.controls.email.dirty)\">\n                                            Minimum characters: 5, Maximum characters: 30</li>\n                                        <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">\n                                            This must be a valid email</li>\n                                        <li *ngIf=\"emailMessage && !form.controls.email.errors\"> {{ emailMessage }} </li>\n                                    </ul>\n                                </div>\n                            </div>\n\n                        <!-- Password Input -->\n                        <div class=\"col-md-6\">\n                            <label style=\" color:black;\">Password</label>\n                            <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-lock-circle-open\"></i>\n                                    </span>\n                                <input type=\"password\" class=\"form-control\" name=\"password\" autocomplete=\"off\"\n                                placeholder=\"Password\" formControlName=\"password\">\n                            </div>\n                            <div [ngClass]=\"{'field_error': form.controls.password.errors && form.controls.password.dirty, \n                                                 'field_success': !form.controls.password.errors}\">\n                                <ul class=\"help-block\">\n                                        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">\n                                            This field is required</li>\n                                        <li *ngIf=\"(form.controls.password.errors?.minlength && form.controls.password.dirty) ||\n                                            (form.controls.password.errors?.maxlength && form.controls.password.dirty)\">\n                                            Minimum characters: 8, Maximum characters: 35</li>\n                                        <li *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">\n                                            Password must have atleast one uppercase, lowercase, special characters and numbers</li>\n                                </ul>\n                            </div>\n                        </div>\n\n                        <!-- Confirm Password Input -->\n                        <div class=\"col-md-6\">\n                            <label style=\" color:black;\">Re-type Password</label>\n                            <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-lock-circle-open\"></i>\n                                    </span>\n                                    <input type=\"password\" class=\"form-control\" name=\"confirm\" autocomplete=\"off\"\n                                    placeholder=\"Re-type Password\" formControlName=\"confirm\">\n                            </div>\n                            <div [ngClass]=\"{'field_error': (form.controls.confirm.errors && form.controls.confirm.dirty) ||\n                                             (form.errors?.matchingPasswords && form.controls.confirm.dirty), \n                                            'field_success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\">\n                                <ul class=\"help-block\">\n                                        <li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">\n                                            This field is required</li>\n                                        <li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">\n                                            Passwords do not match</li>\n                                </ul>\n                            </div>\n                        </div>\n\t\t\t\t\t\t\n                        <!-- Submit Form Button -->\n                        <div class=\"row\">\n                            <div style=\"padding-left:30px;\">\n                                <!--<button class=\"btn btn-success btn-lg btn-fill\">Sign Up</button>-->\n                                <input type=\"submit\" class=\"btn btn-success btn-lg btn-fill\" value=\"Sign Up\"\n                                [disabled]=\"!form.valid || processing || !emailValid || !usernameValid\">\n                            </div>\n                        </div>\n\n\t\t\t\t\t</form>\t\n                </div>\n            </div>\n\t\t\t\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".field_error {\n  color: red; }\n\n.field_success {\n  color: green; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.test = new Date();
        this.valid = true;
        this.processing = false;
        this.createForm();
    }
    // Function to create registration form
    SignupComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(15),
                    this.validateUsername // Custom validation
                ])],
            // Email Input
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(30),
                    this.validateEmail
                ])],
            // Password Input
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(35),
                    this.validatePassword
                ])],
            // Confirm Password Input
            confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
    };
    SignupComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable();
        this.form.controls['email'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    SignupComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable();
        this.form.controls['email'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
    };
    // Function to validate e-mail is proper format
    SignupComponent.prototype.validateEmail = function (controls) {
        if (controls.value === "") {
            return null;
        }
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateEmail': true };
        }
    };
    // Function to validate username is proper format
    SignupComponent.prototype.validateUsername = function (controls) {
        if (controls.value === "") {
            return null;
        }
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateUsername': true };
        }
    };
    // Function to validate password
    SignupComponent.prototype.validatePassword = function (controls) {
        if (controls.value === "") {
            return null;
        }
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validatePassword': true };
        }
    };
    // Funciton to ensure passwords match
    SignupComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            if (group.controls[confirm].value === "") {
                return null;
            }
            if (group.controls[password].value === group.controls[confirm].value) {
                return null;
            }
            else {
                return { 'matchingPasswords': true };
            }
        };
    };
    // Function to submit form
    SignupComponent.prototype.onRegisterSubmit = function () {
        //console.log(this.form); 
        //console.log('form submitted');
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.registerUser(user).subscribe(function (data) {
            console.log(data);
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                _this.enableForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 5000);
            }
        });
    };
    SignupComponent.prototype.checkUsername = function () {
        var _this = this;
        var username = this.form.get('username').value;
        if (username === "") {
            return;
        }
        this.authService.checkUsername(username).subscribe(function (data) {
            console.log(data);
            if (!data.success) {
                _this.usernameValid = false;
                _this.usernameMessage = data.message;
            }
            else {
                _this.usernameValid = true;
                _this.usernameMessage = data.message;
            }
        });
        //console.log("checkUsername end");
    };
    SignupComponent.prototype.checkEmail = function () {
        var _this = this;
        var email = this.form.get('email').value;
        if (email === "") {
            return;
        }
        this.authService.checkEmail(email).subscribe(function (data) {
            if (!data.success) {
                _this.emailValid = false;
                _this.emailMessage = data.message;
            }
            else {
                _this.emailValid = true;
                _this.emailMessage = data.message;
            }
        });
    };
    SignupComponent.prototype.ngOnInit = function () { };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/daniel-olahh.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "daniel-olahh.facbbdb787d77f975904.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map