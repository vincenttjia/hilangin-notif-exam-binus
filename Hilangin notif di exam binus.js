// ==UserScript==
// @name         Script untuk hilangin notif di exam.apps.binus.ac.id
// @namespace    http://tampermonkey.net/
// @version      6.9
// @description  buat orang-orang yang males ngilangin notif di exam binus
// @author       Vincent Tjianattan
// @match        https://exam.apps.binus.ac.id/Home/Exam
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('.swal2-cancel').click();
    $('#btnSearch').click();
})();