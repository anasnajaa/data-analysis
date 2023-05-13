const express = require("express");

const {a1_q1} = require('../answers/a1_q1');
const {a1_q2} = require('../answers/a1_q2');
const {a1_q3} = require('../answers/a1_q3');
const {a1_q4} = require('../answers/a1_q4');
const {a1_q5} = require('../answers/a1_q5');
const {b1_q6} = require('../answers/b1_q6');
const {b1_q7} = require('../answers/b1_q7');
const {b1_q8} = require('../answers/b1_q8');
const {b1_q9} = require('../answers/b1_q9');
const {b1_q10} = require('../answers/b1_q10');

const {a2_q1} = require('../answers/a2_q1');


const router = express.Router();

router.get("/a1_q1", async (req, res, next) => {
    const data = await a1_q1();
    res.render('pages/a1_q1', { data });
});

router.get("/a1_q2", async (req, res, next) => {
    const data = await a1_q2();
    res.render('pages/a1_q2', { data });
});

router.get("/a1_q3", async (req, res, next) => {
    const data = await a1_q3();
    res.render('pages/a1_q3', { data });
});

router.get("/a1_q4", async (req, res, next) => {
    const data = await a1_q4();
    res.render('pages/a1_q4', { data });
});

router.get("/a1_q5", async (req, res, next) => {
    const data = await a1_q5();
    res.render('pages/a1_q5', { data });
});



router.get("/b1_q6", async (req, res, next) => {
    const data = await b1_q6();
    res.render('pages/b1_q6', { data });
});

router.get("/b1_q7", async (req, res, next) => {
    const data = await b1_q7();
    res.render('pages/b1_q7', { data });
});

router.get("/b1_q8", async (req, res, next) => {
    const data = await b1_q8();
    res.render('pages/b1_q8', { data });
});

router.get("/b1_q9", async (req, res, next) => {
    const data = await b1_q9();
    res.render('pages/b1_q9', { data });
});

router.get("/b1_q10", async (req, res, next) => {
    const data = await b1_q10();
    res.render('pages/b1_q10', { data });
});

router.get("/a2_q1", async (req, res, next) => {
    const data = await a2_q1();
    res.render('pages/a2_q1', { data });
});

module.exports = router;