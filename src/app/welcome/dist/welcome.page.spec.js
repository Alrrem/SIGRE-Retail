"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var welcome_page_1 = require("./welcome.page");
describe('WelcomePage', function () {
    var component;
    var fixture;
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(welcome_page_1.WelcomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
