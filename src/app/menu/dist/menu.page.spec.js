"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var menu_page_1 = require("./menu.page");
describe('MenuPage', function () {
    var component;
    var fixture;
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(menu_page_1.MenuPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
