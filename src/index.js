Add the following declaration at the top of your index.js file
/*********************************************************************************
* WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic
Policy.
* No part of this assignment has been copied manually or electronically from any
other source
* (including web sites) or distributed to other students.
*
* Name: John Angelo Cambi Student ID: 110671153 Date: May 17, 2019
*
*
********************************************************************************/

$(document).ready(function() {
    define(function(require) {
        const prettyPrintJson = require('pretty-print-json');
    });
    console.log('jQuery working');

    const well = $('.well');

    $('#teams-menu').on('click', function(event) {
        event.preventDefault();
        well.empty();
        well.append('<h3>Teams</h3>');
        $.ajax({
            url: 'https://shielded-coast-83209.herokuapp.com/teams',
            type: 'GET',
            contentType: 'application/json'
        })
            .done(data => {
                well.append(prettyPrintJson.toHtml(data));
            })
            .fail(err => {
                console.log('error: ' + err.statusText);
            });
    });

    $('#employees-menu').on('click', function(event) {
        event.preventDefault();
        well.empty();
        well.append('<h3>Employees</h3>');
        $.ajax({
            url: 'https://shielded-coast-83209.herokuapp.com/employees',
            type: 'GET',
            contentType: 'application/json'
        })
            .done(data => {
                well.append(prettyPrintJson.toHtml(data));
            })
            .fail(err => {
                console.log('error: ' + err.statusText);
            });
    });

    $('#projects-menu').on('click', function(event) {
        event.preventDefault();
        well.empty();
        well.append('<h3>Projects</h3>');
        $.ajax({
            url: 'https://shielded-coast-83209.herokuapp.com/projects',
            type: 'GET',
            contentType: 'application/json'
        })
            .done(data => {
                well.append(prettyPrintJson.toHtml(data));
            })
            .fail(err => {
                console.log('error: ' + err.statusText);
            });
    });

    $('#positions-menu').on('click', function(event) {
        event.preventDefault();
        well.empty();
        well.append('<h3>Positions</h3>');
        $.ajax({
            url: 'https://shielded-coast-83209.herokuapp.com/positions',
            type: 'GET',
            contentType: 'application/json'
        })
            .done(data => {
                well.append(prettyPrintJson.toHtml(data));
            })
            .fail(err => {
                console.log('error: ' + err.statusText);
            });
    });

    //https://shielded-coast-83209.herokuapp.com/employees
});
