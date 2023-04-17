
/*eslint-env browser */
"use strict";

//Variables
var parent = document.getElementById("dynamiccontent");
var resume = document.getElementById("resume");
var boltz = document.getElementById("boltz");
var discord = document.getElementById("discord");
var stick = document.getElementById("stick");
var me = document.getElementById("about");



//initially clears to the About me section
cleartome();
//console.log(parent.childElementCount);
//console.log(parent.children);

//These functions find out which element is currently being displayed and replaces it with the element of the icon you click on
function getboltz() {
    if(parent.children[0] == resume){
        parent.replaceChild(boltz, resume);
    }
    if(parent.children[0] == discord){
        parent.replaceChild(boltz, discord);
    }
    if(parent.children[0] == stick){
        parent.replaceChild(boltz, stick);
    }
    if(parent.children[0] == me){
        parent.replaceChild(boltz, me);
    }
}

function getresume() {
        if(parent.children[0] == boltz){
        parent.replaceChild(resume, boltz);
    }
    if(parent.children[0] == discord){
        parent.replaceChild(resume, discord);
    }
    if(parent.children[0] == stick){
        parent.replaceChild(resume, stick);
    }
    if(parent.children[0] == me){
        parent.replaceChild(resume, me);
    }
}

function getstick() {
        if(parent.children[0] == resume){
        parent.replaceChild(stick, resume);
    }
    if(parent.children[0] == discord){
        parent.replaceChild(stick, discord);
    }
    if(parent.children[0] == boltz){
        parent.replaceChild(stick, boltz);
    }
    if(parent.children[0] == me){
        parent.replaceChild(stick, me);
    }
}

function getdisco() {
        if(parent.children[0] == resume){
        parent.replaceChild(discord, resume);
    }
    if(parent.children[0] == boltz){
        parent.replaceChild(discord, boltz);
    }
    if(parent.children[0] == stick){
        parent.replaceChild(discord, stick);
    }
    if(parent.children[0] == me){
        parent.replaceChild(discord, me);
    }
}

function getme() {
        if(parent.children[0] == resume){
        parent.replaceChild(me, resume);
    }
    if(parent.children[0] == discord){
        parent.replaceChild(me, discord);
    }
    if(parent.children[0] == stick){
        parent.replaceChild(me, stick);
    }
    if(parent.children[0] == boltz){
        parent.replaceChild(me, boltz);
    }
}


function cleartome(){
    //I dont use remove as it isn't supported in all browsers
    parent.replaceChild(me, boltz);
    parent.replaceChild(me, discord);
    parent.replaceChild(me, stick);
    parent.replaceChild(me, resume);
}