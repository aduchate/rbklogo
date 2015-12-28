LogoParser = function() {
    "use strict";
    function peg$subclass(child, parent) {
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype, child.prototype = new ctor();
    }
    function peg$SyntaxError(message, expected, found, location) {
        this.message = message, this.expected = expected, this.found = found, this.location = location, 
        this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, peg$SyntaxError);
    }
    function peg$DefaultTracer() {
        this.indentLevel = 0;
    }
    function peg$parse(input) {
        function location() {
            return peg$computeLocation(peg$savedPos, peg$currPos);
        }
        function peg$computePosDetails(pos) {
            var p, ch, details = peg$posDetailsCache[pos];
            if (details) return details;
            for (p = pos - 1; !peg$posDetailsCache[p]; ) p--;
            for (details = peg$posDetailsCache[p], details = {
                line: details.line,
                column: details.column,
                seenCR: details.seenCR
            }; pos > p; ) ch = input.charAt(p), "\n" === ch ? (details.seenCR || details.line++, 
            details.column = 1, details.seenCR = !1) : "\r" === ch || "\u2028" === ch || "\u2029" === ch ? (details.line++, 
            details.column = 1, details.seenCR = !0) : (details.column++, details.seenCR = !1), 
            p++;
            return peg$posDetailsCache[pos] = details, details;
        }
        function peg$computeLocation(startPos, endPos) {
            var startPosDetails = peg$computePosDetails(startPos), endPosDetails = peg$computePosDetails(endPos);
            return {
                start: {
                    offset: startPos,
                    line: startPosDetails.line,
                    column: startPosDetails.column
                },
                end: {
                    offset: endPos,
                    line: endPosDetails.line,
                    column: endPosDetails.column
                }
            };
        }
        function peg$fail(expected) {
            peg$maxFailPos > peg$currPos || (peg$currPos > peg$maxFailPos && (peg$maxFailPos = peg$currPos, 
            peg$maxFailExpected = []), peg$maxFailExpected.push(expected));
        }
        function peg$buildException(message, expected, found, location) {
            function cleanupExpected(expected) {
                var i = 1;
                for (expected.sort(function(a, b) {
                    return a.description < b.description ? -1 : a.description > b.description ? 1 : 0;
                }); i < expected.length; ) expected[i - 1] === expected[i] ? expected.splice(i, 1) : i++;
            }
            function buildMessage(expected, found) {
                function stringEscape(s) {
                    function hex(ch) {
                        return ch.charCodeAt(0).toString(16).toUpperCase();
                    }
                    return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) {
                        return "\\x0" + hex(ch);
                    }).replace(/[\x10-\x1F\x80-\xFF]/g, function(ch) {
                        return "\\x" + hex(ch);
                    }).replace(/[\u0100-\u0FFF]/g, function(ch) {
                        return "\\u0" + hex(ch);
                    }).replace(/[\u1000-\uFFFF]/g, function(ch) {
                        return "\\u" + hex(ch);
                    });
                }
                var expectedDesc, foundDesc, i, expectedDescs = new Array(expected.length);
                for (i = 0; i < expected.length; i++) expectedDescs[i] = expected[i].description;
                return expectedDesc = expected.length > 1 ? expectedDescs.slice(0, -1).join(", ") + " or " + expectedDescs[expected.length - 1] : expectedDescs[0], 
                foundDesc = found ? '"' + stringEscape(found) + '"' : "end of input", "Expected " + expectedDesc + " but " + foundDesc + " found.";
            }
            return null !== expected && cleanupExpected(expected), new peg$SyntaxError(null !== message ? message : buildMessage(expected, found), expected, found, location);
        }
        function peg$parsestart() {
            var s0, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "start",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$parseprog(), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "start",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "start",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseprog() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, startPos = peg$currPos;
            if (peg$tracer.trace({
                type: "rule.enter",
                rule: "prog",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, s1 = peg$parse_(), s1 !== peg$FAILED) if (s2 = peg$parseline(), 
            s2 !== peg$FAILED) {
                for (s3 = [], s4 = peg$currPos, s5 = peg$parse_(), s5 !== peg$FAILED ? (s6 = peg$parseEOL(), 
                s6 !== peg$FAILED ? (s7 = peg$parse_(), s7 !== peg$FAILED ? (s8 = peg$parseline(), 
                s8 === peg$FAILED && (s8 = null), s8 !== peg$FAILED ? (s5 = [ s5, s6, s7, s8 ], 
                s4 = s5) : (peg$currPos = s4, s4 = peg$FAILED)) : (peg$currPos = s4, s4 = peg$FAILED)) : (peg$currPos = s4, 
                s4 = peg$FAILED)) : (peg$currPos = s4, s4 = peg$FAILED); s4 !== peg$FAILED; ) s3.push(s4), 
                s4 = peg$currPos, s5 = peg$parse_(), s5 !== peg$FAILED ? (s6 = peg$parseEOL(), s6 !== peg$FAILED ? (s7 = peg$parse_(), 
                s7 !== peg$FAILED ? (s8 = peg$parseline(), s8 === peg$FAILED && (s8 = null), s8 !== peg$FAILED ? (s5 = [ s5, s6, s7, s8 ], 
                s4 = s5) : (peg$currPos = s4, s4 = peg$FAILED)) : (peg$currPos = s4, s4 = peg$FAILED)) : (peg$currPos = s4, 
                s4 = peg$FAILED)) : (peg$currPos = s4, s4 = peg$FAILED);
                s3 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c0(s2, s3), s0 = s1) : (peg$currPos = s0, 
                s0 = peg$FAILED);
            } else peg$currPos = s0, s0 = peg$FAILED; else peg$currPos = s0, s0 = peg$FAILED;
            return s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "prog",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "prog",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseline() {
            var s0, s1, s2, s3, s4, s5, s6, startPos = peg$currPos;
            if (peg$tracer.trace({
                type: "rule.enter",
                rule: "line",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, s1 = peg$parseprocDecl(), s1 !== peg$FAILED && (peg$savedPos = s0, 
            s1 = peg$c1(s1)), s0 = s1, s0 === peg$FAILED) {
                if (s0 = peg$currPos, s1 = peg$parse_(), s1 !== peg$FAILED) if (s2 = peg$parseexec(), 
                s2 !== peg$FAILED) {
                    for (s3 = [], s4 = peg$currPos, s5 = peg$parse__(), s5 !== peg$FAILED ? (s6 = peg$parseexec(), 
                    s6 !== peg$FAILED ? (s5 = [ s5, s6 ], s4 = s5) : (peg$currPos = s4, s4 = peg$FAILED)) : (peg$currPos = s4, 
                    s4 = peg$FAILED); s4 !== peg$FAILED; ) s3.push(s4), s4 = peg$currPos, s5 = peg$parse__(), 
                    s5 !== peg$FAILED ? (s6 = peg$parseexec(), s6 !== peg$FAILED ? (s5 = [ s5, s6 ], 
                    s4 = s5) : (peg$currPos = s4, s4 = peg$FAILED)) : (peg$currPos = s4, s4 = peg$FAILED);
                    s3 !== peg$FAILED ? (s4 = peg$parse_(), s4 !== peg$FAILED ? (s5 = peg$parseCOMMENT(), 
                    s5 === peg$FAILED && (s5 = null), s5 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c2(s2, s3), 
                    s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
                    s0 = peg$FAILED);
                } else peg$currPos = s0, s0 = peg$FAILED; else peg$currPos = s0, s0 = peg$FAILED;
                s0 === peg$FAILED && (s0 = peg$currPos, s1 = peg$parseCOMMENT(), s1 !== peg$FAILED && (peg$savedPos = s0, 
                s1 = peg$c3()), s0 = s1, s0 === peg$FAILED && (s0 = peg$currPos, s1 = peg$parseprint(), 
                s1 !== peg$FAILED ? (s2 = peg$parse_(), s2 !== peg$FAILED ? (s3 = peg$parseCOMMENT(), 
                s3 === peg$FAILED && (s3 = null), s3 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c3(), 
                s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
                s0 = peg$FAILED), s0 === peg$FAILED && (s0 = peg$currPos, s1 = peg$c4, s1 !== peg$FAILED && (peg$savedPos = s0, 
                s1 = peg$c3()), s0 = s1)));
            }
            return s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "line",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "line",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseexec() {
            var s0, s1, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "exec",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$parserepeat(), s0 === peg$FAILED && (s0 = peg$currPos, s1 = peg$parsecmd(), 
            s1 !== peg$FAILED && (peg$savedPos = s0, s1 = peg$c5(s1)), s0 = s1, s0 === peg$FAILED && (s0 = peg$parseifelse(), 
            s0 === peg$FAILED && (s0 = peg$parseife(), s0 === peg$FAILED && (s0 = peg$parsefore(), 
            s0 === peg$FAILED && (s0 = peg$parseprocInvoke()))))), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "exec",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "exec",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsecmd() {
            var s0, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "cmd",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$parsefd(), s0 === peg$FAILED && (s0 = peg$parsebk(), s0 === peg$FAILED && (s0 = peg$parsert(), 
            s0 === peg$FAILED && (s0 = peg$parselt(), s0 === peg$FAILED && (s0 = peg$parsecs(), 
            s0 === peg$FAILED && (s0 = peg$parsepu(), s0 === peg$FAILED && (s0 = peg$parsepd(), 
            s0 === peg$FAILED && (s0 = peg$parseht(), s0 === peg$FAILED && (s0 = peg$parsest(), 
            s0 === peg$FAILED && (s0 = peg$parsestop(), s0 === peg$FAILED && (s0 = peg$parsepc(), 
            s0 === peg$FAILED && (s0 = peg$parsecc(), s0 === peg$FAILED && (s0 = peg$parsepause(), 
            s0 === peg$FAILED && (s0 = peg$parseds(), s0 === peg$FAILED && (s0 = peg$parsefontsize(), 
            s0 === peg$FAILED && (s0 = peg$parsefontstyle(), s0 === peg$FAILED && (s0 = peg$parsefontname(), 
            s0 === peg$FAILED && (s0 = peg$parseprint(), s0 === peg$FAILED && (s0 = peg$parsehome(), 
            s0 === peg$FAILED && (s0 = peg$parsesetxy(), s0 === peg$FAILED && (s0 = peg$parsemake(), 
            s0 === peg$FAILED && (s0 = peg$parselocalmake()))))))))))))))))))))), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "cmd",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "cmd",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseprocInvoke() {
            var s0, s1, s2, s3, s4, s5, startPos = peg$currPos;
            if (peg$tracer.trace({
                type: "rule.enter",
                rule: "procInvoke",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, s1 = peg$parse_(), s1 !== peg$FAILED) if (s2 = peg$parseSTRING(), 
            s2 !== peg$FAILED) if (s3 = peg$parse__(), s3 !== peg$FAILED) {
                for (s4 = [], s5 = peg$parseexpression(); s5 !== peg$FAILED; ) s4.push(s5), s5 = peg$parseexpression();
                s4 !== peg$FAILED ? (s5 = peg$parse_(), s5 !== peg$FAILED ? (peg$savedPos = s0, 
                s1 = peg$c6(s2, s4), s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
                s0 = peg$FAILED);
            } else peg$currPos = s0, s0 = peg$FAILED; else peg$currPos = s0, s0 = peg$FAILED; else peg$currPos = s0, 
            s0 = peg$FAILED;
            return s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "procInvoke",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "procInvoke",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseprocDecl() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, startPos = peg$currPos;
            if (peg$tracer.trace({
                type: "rule.enter",
                rule: "procDecl",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, s1 = peg$parse_(), s1 !== peg$FAILED) if (input.substr(peg$currPos, 2) === peg$c7 ? (s2 = peg$c7, 
            peg$currPos += 2) : (s2 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c8)), 
            s2 !== peg$FAILED) if (s3 = peg$parse__(), s3 !== peg$FAILED) if (s4 = peg$parseSTRING(), 
            s4 !== peg$FAILED) if (s5 = peg$parse__(), s5 !== peg$FAILED) if (s6 = peg$currPos, 
            s7 = peg$parseparameterDeclarations(), s7 !== peg$FAILED ? (s8 = peg$parse_(), s8 !== peg$FAILED ? (s7 = [ s7, s8 ], 
            s6 = s7) : (peg$currPos = s6, s6 = peg$FAILED)) : (peg$currPos = s6, s6 = peg$FAILED), 
            s6 === peg$FAILED && (s6 = null), s6 !== peg$FAILED) if (s7 = peg$parseEOL(), s7 === peg$FAILED && (s7 = null), 
            s7 !== peg$FAILED) {
                if (s8 = [], s9 = peg$currPos, s10 = peg$parseline(), s10 === peg$FAILED && (s10 = null), 
                s10 !== peg$FAILED ? (s11 = peg$parseEOL(), s11 !== peg$FAILED ? (s10 = [ s10, s11 ], 
                s9 = s10) : (peg$currPos = s9, s9 = peg$FAILED)) : (peg$currPos = s9, s9 = peg$FAILED), 
                s9 !== peg$FAILED) for (;s9 !== peg$FAILED; ) s8.push(s9), s9 = peg$currPos, s10 = peg$parseline(), 
                s10 === peg$FAILED && (s10 = null), s10 !== peg$FAILED ? (s11 = peg$parseEOL(), 
                s11 !== peg$FAILED ? (s10 = [ s10, s11 ], s9 = s10) : (peg$currPos = s9, s9 = peg$FAILED)) : (peg$currPos = s9, 
                s9 = peg$FAILED); else s8 = peg$FAILED;
                s8 !== peg$FAILED ? (s9 = peg$parse_(), s9 !== peg$FAILED ? (input.substr(peg$currPos, 3) === peg$c9 ? (s10 = peg$c9, 
                peg$currPos += 3) : (s10 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c10)), 
                s10 !== peg$FAILED ? (s11 = peg$parse_(), s11 !== peg$FAILED ? (peg$savedPos = s0, 
                s1 = peg$c11(s4, s6, s8), s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
                s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED);
            } else peg$currPos = s0, s0 = peg$FAILED; else peg$currPos = s0, s0 = peg$FAILED; else peg$currPos = s0, 
            s0 = peg$FAILED; else peg$currPos = s0, s0 = peg$FAILED; else peg$currPos = s0, 
            s0 = peg$FAILED; else peg$currPos = s0, s0 = peg$FAILED; else peg$currPos = s0, 
            s0 = peg$FAILED;
            return s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "procDecl",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "procDecl",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseparameterDeclarations() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, startPos = peg$currPos;
            if (peg$tracer.trace({
                type: "rule.enter",
                rule: "parameterDeclarations",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, 58 === input.charCodeAt(peg$currPos) ? (s1 = peg$c12, peg$currPos++) : (s1 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c13)), s1 !== peg$FAILED) if (s2 = peg$parseSTRING(), 
            s2 !== peg$FAILED) if (s3 = peg$parse_(), s3 !== peg$FAILED) {
                for (s4 = [], s5 = peg$currPos, 44 === input.charCodeAt(peg$currPos) ? (s6 = peg$c14, 
                peg$currPos++) : (s6 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c15)), 
                s6 !== peg$FAILED ? (s7 = peg$parse_(), s7 !== peg$FAILED ? (s8 = peg$parseparameterDeclarations(), 
                s8 !== peg$FAILED ? (s6 = [ s6, s7, s8 ], s5 = s6) : (peg$currPos = s5, s5 = peg$FAILED)) : (peg$currPos = s5, 
                s5 = peg$FAILED)) : (peg$currPos = s5, s5 = peg$FAILED); s5 !== peg$FAILED; ) s4.push(s5), 
                s5 = peg$currPos, 44 === input.charCodeAt(peg$currPos) ? (s6 = peg$c14, peg$currPos++) : (s6 = peg$FAILED, 
                0 === peg$silentFails && peg$fail(peg$c15)), s6 !== peg$FAILED ? (s7 = peg$parse_(), 
                s7 !== peg$FAILED ? (s8 = peg$parseparameterDeclarations(), s8 !== peg$FAILED ? (s6 = [ s6, s7, s8 ], 
                s5 = s6) : (peg$currPos = s5, s5 = peg$FAILED)) : (peg$currPos = s5, s5 = peg$FAILED)) : (peg$currPos = s5, 
                s5 = peg$FAILED);
                s4 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c16(s2, s4), s0 = s1) : (peg$currPos = s0, 
                s0 = peg$FAILED);
            } else peg$currPos = s0, s0 = peg$FAILED; else peg$currPos = s0, s0 = peg$FAILED; else peg$currPos = s0, 
            s0 = peg$FAILED;
            return s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "parameterDeclarations",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "parameterDeclarations",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsefunc() {
            var s0, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "func",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$parserandom(), s0 === peg$FAILED && (s0 = peg$parserepcount(), s0 === peg$FAILED && (s0 = peg$parsegetangle(), 
            s0 === peg$FAILED && (s0 = peg$parsegetx(), s0 === peg$FAILED && (s0 = peg$parsegety())))), 
            s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "func",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "func",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parserepeat() {
            var s0, s1, s2, s3, s4, s5, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "repeat",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 6) === peg$c17 ? (s1 = peg$c17, 
            peg$currPos += 6) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c18)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 6) === peg$c19 ? (s1 = peg$c19, 
            peg$currPos += 6) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c20))), 
            s1 !== peg$FAILED ? (s2 = peg$parse__(), s2 !== peg$FAILED ? (s3 = peg$parseexpression(), 
            s3 !== peg$FAILED ? (s4 = peg$parse__(), s4 !== peg$FAILED ? (s5 = peg$parseblock(), 
            s5 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c21(s3, s5), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "repeat",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "repeat",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseblock() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, startPos = peg$currPos;
            if (peg$tracer.trace({
                type: "rule.enter",
                rule: "block",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, 91 === input.charCodeAt(peg$currPos) ? (s1 = peg$c22, peg$currPos++) : (s1 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c23)), s1 !== peg$FAILED) if (s2 = peg$parse_(), 
            s2 !== peg$FAILED) {
                for (s3 = [], s4 = peg$parseEOL(); s4 !== peg$FAILED; ) s3.push(s4), s4 = peg$parseEOL();
                if (s3 !== peg$FAILED) {
                    if (s4 = [], s5 = peg$currPos, s6 = peg$parse_(), s6 !== peg$FAILED) if (s7 = peg$parseexec(), 
                    s7 !== peg$FAILED) if (s8 = peg$parse_(), s8 !== peg$FAILED) {
                        for (s9 = [], s10 = peg$parseEOL(); s10 !== peg$FAILED; ) s9.push(s10), s10 = peg$parseEOL();
                        s9 !== peg$FAILED ? (s6 = [ s6, s7, s8, s9 ], s5 = s6) : (peg$currPos = s5, s5 = peg$FAILED);
                    } else peg$currPos = s5, s5 = peg$FAILED; else peg$currPos = s5, s5 = peg$FAILED; else peg$currPos = s5, 
                    s5 = peg$FAILED;
                    if (s5 !== peg$FAILED) for (;s5 !== peg$FAILED; ) if (s4.push(s5), s5 = peg$currPos, 
                    s6 = peg$parse_(), s6 !== peg$FAILED) if (s7 = peg$parseexec(), s7 !== peg$FAILED) if (s8 = peg$parse_(), 
                    s8 !== peg$FAILED) {
                        for (s9 = [], s10 = peg$parseEOL(); s10 !== peg$FAILED; ) s9.push(s10), s10 = peg$parseEOL();
                        s9 !== peg$FAILED ? (s6 = [ s6, s7, s8, s9 ], s5 = s6) : (peg$currPos = s5, s5 = peg$FAILED);
                    } else peg$currPos = s5, s5 = peg$FAILED; else peg$currPos = s5, s5 = peg$FAILED; else peg$currPos = s5, 
                    s5 = peg$FAILED; else s4 = peg$FAILED;
                    s4 !== peg$FAILED ? (s5 = peg$parse_(), s5 !== peg$FAILED ? (93 === input.charCodeAt(peg$currPos) ? (s6 = peg$c24, 
                    peg$currPos++) : (s6 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c25)), 
                    s6 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c26(s4), s0 = s1) : (peg$currPos = s0, 
                    s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED);
                } else peg$currPos = s0, s0 = peg$FAILED;
            } else peg$currPos = s0, s0 = peg$FAILED; else peg$currPos = s0, s0 = peg$FAILED;
            return s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "block",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "block",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseife() {
            var s0, s1, s2, s3, s4, s5, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "ife",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 2) === peg$c27 ? (s1 = peg$c27, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c28)), 
            s1 !== peg$FAILED ? (s2 = peg$parse__(), s2 !== peg$FAILED ? (s3 = peg$parsecomparison(), 
            s3 !== peg$FAILED ? (s4 = peg$parse_(), s4 !== peg$FAILED ? (s5 = peg$parseblock(), 
            s5 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c29(s3, s5), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "ife",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "ife",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseifelse() {
            var s0, s1, s2, s3, s4, s5, s6, s7, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "ifelse",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 6) === peg$c30 ? (s1 = peg$c30, 
            peg$currPos += 6) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c31)), 
            s1 !== peg$FAILED ? (s2 = peg$parse__(), s2 !== peg$FAILED ? (s3 = peg$parsecomparison(), 
            s3 !== peg$FAILED ? (s4 = peg$parse_(), s4 !== peg$FAILED ? (s5 = peg$parseblock(), 
            s5 !== peg$FAILED ? (s6 = peg$parse_(), s6 !== peg$FAILED ? (s7 = peg$parseblock(), 
            s7 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c32(s3, s5, s7), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "ifelse",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "ifelse",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsecomparison() {
            var s0, s1, s2, s3, s4, s5, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "comparison",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, s1 = peg$parseexpression(), s1 !== peg$FAILED ? (s2 = peg$parse_(), 
            s2 !== peg$FAILED ? (s3 = peg$parsecomparisonOperator(), s3 !== peg$FAILED ? (s4 = peg$parse_(), 
            s4 !== peg$FAILED ? (s5 = peg$parseexpression(), s5 !== peg$FAILED ? (peg$savedPos = s0, 
            s1 = peg$c33(s1, s3, s5), s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "comparison",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "comparison",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsecomparisonOperator() {
            var s0, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "comparisonOperator",
                location: peg$computeLocation(startPos, startPos)
            }), input.substr(peg$currPos, 2) === peg$c34 ? (s0 = peg$c34, peg$currPos += 2) : (s0 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c35)), s0 === peg$FAILED && (input.substr(peg$currPos, 2) === peg$c36 ? (s0 = peg$c36, 
            peg$currPos += 2) : (s0 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c37)), 
            s0 === peg$FAILED && (input.substr(peg$currPos, 2) === peg$c38 ? (s0 = peg$c38, 
            peg$currPos += 2) : (s0 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c39)), 
            s0 === peg$FAILED && (input.substr(peg$currPos, 2) === peg$c40 ? (s0 = peg$c40, 
            peg$currPos += 2) : (s0 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c41)), 
            s0 === peg$FAILED && (input.substr(peg$currPos, 2) === peg$c42 ? (s0 = peg$c42, 
            peg$currPos += 2) : (s0 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c43)), 
            s0 === peg$FAILED && (60 === input.charCodeAt(peg$currPos) ? (s0 = peg$c44, peg$currPos++) : (s0 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c45)), s0 === peg$FAILED && (62 === input.charCodeAt(peg$currPos) ? (s0 = peg$c46, 
            peg$currPos++) : (s0 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c47)), 
            s0 === peg$FAILED && (61 === input.charCodeAt(peg$currPos) ? (s0 = peg$c48, peg$currPos++) : (s0 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c49))))))))), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "comparisonOperator",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "comparisonOperator",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsemake() {
            var s0, s1, s2, s3, s4, s5, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "make",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 4) === peg$c50 ? (s1 = peg$c50, 
            peg$currPos += 4) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c51)), 
            s1 !== peg$FAILED ? (s2 = peg$parse__(), s2 !== peg$FAILED ? (s3 = peg$parseSTRINGLITERAL(), 
            s3 !== peg$FAILED ? (s4 = peg$parse__(), s4 !== peg$FAILED ? (s5 = peg$parsevalue(), 
            s5 !== peg$FAILED ? (s1 = [ s1, s2, s3, s4, s5 ], s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "make",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "make",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parselocalmake() {
            var s0, s1, s2, s3, s4, s5, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "localmake",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 9) === peg$c52 ? (s1 = peg$c52, 
            peg$currPos += 9) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c53)), 
            s1 !== peg$FAILED ? (s2 = peg$parse__(), s2 !== peg$FAILED ? (s3 = peg$parseSTRINGLITERAL(), 
            s3 !== peg$FAILED ? (s4 = peg$parse__(), s4 !== peg$FAILED ? (s5 = peg$parsevalue(), 
            s5 !== peg$FAILED ? (s1 = [ s1, s2, s3, s4, s5 ], s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "localmake",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "localmake",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseprint() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "print",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 5) === peg$c54 ? (s1 = peg$c54, 
            peg$currPos += 5) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c55)), 
            s1 !== peg$FAILED ? (s2 = peg$parse__(), s2 !== peg$FAILED ? (s3 = peg$parsevalue(), 
            s3 === peg$FAILED && (s3 = peg$parsequotedstring()), s3 !== peg$FAILED ? (s1 = [ s1, s2, s3 ], 
            s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "print",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "print",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsequotedstring() {
            var s0, s1, s2, s3, s4, s5, s6, s7, startPos = peg$currPos;
            if (peg$tracer.trace({
                type: "rule.enter",
                rule: "quotedstring",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, 91 === input.charCodeAt(peg$currPos) ? (s1 = peg$c22, peg$currPos++) : (s1 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c23)), s1 !== peg$FAILED) if (s2 = peg$parse_(), 
            s2 !== peg$FAILED) if (s3 = peg$parseSTRINGLITERAL(), s3 === peg$FAILED && (s3 = null), 
            s3 !== peg$FAILED) {
                for (s4 = [], s5 = peg$currPos, s6 = peg$parse__(), s6 !== peg$FAILED ? (s7 = peg$parseSTRINGLITERAL(), 
                s7 !== peg$FAILED ? (s6 = [ s6, s7 ], s5 = s6) : (peg$currPos = s5, s5 = peg$FAILED)) : (peg$currPos = s5, 
                s5 = peg$FAILED); s5 !== peg$FAILED; ) s4.push(s5), s5 = peg$currPos, s6 = peg$parse__(), 
                s6 !== peg$FAILED ? (s7 = peg$parseSTRINGLITERAL(), s7 !== peg$FAILED ? (s6 = [ s6, s7 ], 
                s5 = s6) : (peg$currPos = s5, s5 = peg$FAILED)) : (peg$currPos = s5, s5 = peg$FAILED);
                s4 !== peg$FAILED ? (s5 = peg$parse_(), s5 !== peg$FAILED ? (93 === input.charCodeAt(peg$currPos) ? (s6 = peg$c24, 
                peg$currPos++) : (s6 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c25)), 
                s6 !== peg$FAILED ? (s1 = [ s1, s2, s3, s4, s5, s6 ], s0 = s1) : (peg$currPos = s0, 
                s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED);
            } else peg$currPos = s0, s0 = peg$FAILED; else peg$currPos = s0, s0 = peg$FAILED; else peg$currPos = s0, 
            s0 = peg$FAILED;
            return s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "quotedstring",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "quotedstring",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsevalue() {
            var s0, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "value",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$parseSTRINGLITERAL(), s0 === peg$FAILED && (s0 = peg$parseexpression(), 
            s0 === peg$FAILED && (s0 = peg$parsederef())), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "value",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "value",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseparenExpression() {
            var s0, s1, s2, s3, s4, s5, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "parenExpression",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, 40 === input.charCodeAt(peg$currPos) ? (s1 = peg$c56, peg$currPos++) : (s1 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c57)), s1 !== peg$FAILED ? (s2 = peg$parse_(), 
            s2 !== peg$FAILED ? (s3 = peg$parseexpression(), s3 !== peg$FAILED ? (s4 = peg$parse_(), 
            s4 !== peg$FAILED ? (41 === input.charCodeAt(peg$currPos) ? (s5 = peg$c58, peg$currPos++) : (s5 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c59)), s5 !== peg$FAILED ? (peg$savedPos = s0, 
            s1 = peg$c60(s3), s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "parenExpression",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "parenExpression",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsesignExpression() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "signExpression",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, 43 === input.charCodeAt(peg$currPos) ? (s1 = peg$c61, peg$currPos++) : (s1 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c62)), s1 === peg$FAILED && (45 === input.charCodeAt(peg$currPos) ? (s1 = peg$c63, 
            peg$currPos++) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c64))), 
            s1 === peg$FAILED && (s1 = null), s1 !== peg$FAILED ? (s2 = peg$parse_(), s2 !== peg$FAILED ? (s3 = peg$parseNUMBER(), 
            s3 === peg$FAILED && (s3 = peg$parsederef(), s3 === peg$FAILED && (s3 = peg$parsefunc(), 
            s3 === peg$FAILED && (s3 = peg$parseparenExpression()))), s3 !== peg$FAILED ? (peg$savedPos = s0, 
            s1 = peg$c65(s1, s3), s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "signExpression",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "signExpression",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsepowerExpression() {
            var s0, s1, s2, s3, s4, s5, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "powerExpression",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, s1 = peg$parsesignExpression(), s1 !== peg$FAILED ? (s2 = peg$currPos, 
            s3 = peg$parse_(), s3 !== peg$FAILED ? (94 === input.charCodeAt(peg$currPos) ? (s4 = peg$c66, 
            peg$currPos++) : (s4 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c67)), 
            s4 !== peg$FAILED ? (s5 = peg$parsepowerExpression(), s5 !== peg$FAILED ? (s3 = [ s3, s4, s5 ], 
            s2 = s3) : (peg$currPos = s2, s2 = peg$FAILED)) : (peg$currPos = s2, s2 = peg$FAILED)) : (peg$currPos = s2, 
            s2 = peg$FAILED), s2 === peg$FAILED && (s2 = null), s2 !== peg$FAILED ? (peg$savedPos = s0, 
            s1 = peg$c68(s1, s2), s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "powerExpression",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "powerExpression",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsemultiplyingExpression() {
            var s0, s1, s2, s3, s4, s5, s6, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "multiplyingExpression",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, s1 = peg$parsepowerExpression(), s1 !== peg$FAILED ? (s2 = peg$currPos, 
            s3 = peg$parse_(), s3 !== peg$FAILED ? (42 === input.charCodeAt(peg$currPos) ? (s4 = peg$c69, 
            peg$currPos++) : (s4 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c70)), 
            s4 === peg$FAILED && (47 === input.charCodeAt(peg$currPos) ? (s4 = peg$c71, peg$currPos++) : (s4 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c72)), s4 === peg$FAILED && (37 === input.charCodeAt(peg$currPos) ? (s4 = peg$c73, 
            peg$currPos++) : (s4 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c74)))), 
            s4 !== peg$FAILED ? (s5 = peg$parse_(), s5 !== peg$FAILED ? (s6 = peg$parsemultiplyingExpression(), 
            s6 !== peg$FAILED ? (s3 = [ s3, s4, s5, s6 ], s2 = s3) : (peg$currPos = s2, s2 = peg$FAILED)) : (peg$currPos = s2, 
            s2 = peg$FAILED)) : (peg$currPos = s2, s2 = peg$FAILED)) : (peg$currPos = s2, s2 = peg$FAILED), 
            s2 === peg$FAILED && (s2 = null), s2 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c75(s1, s2), 
            s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), 
            s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "multiplyingExpression",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "multiplyingExpression",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseexpression() {
            var s0, s1, s2, s3, s4, s5, s6, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "expression",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, s1 = peg$parsemultiplyingExpression(), s1 !== peg$FAILED ? (s2 = peg$currPos, 
            s3 = peg$parse_(), s3 !== peg$FAILED ? (45 === input.charCodeAt(peg$currPos) ? (s4 = peg$c63, 
            peg$currPos++) : (s4 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c64)), 
            s4 === peg$FAILED && (43 === input.charCodeAt(peg$currPos) ? (s4 = peg$c61, peg$currPos++) : (s4 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c62))), s4 !== peg$FAILED ? (s5 = peg$parse_(), 
            s5 !== peg$FAILED ? (s6 = peg$parseexpression(), s6 !== peg$FAILED ? (s3 = [ s3, s4, s5, s6 ], 
            s2 = s3) : (peg$currPos = s2, s2 = peg$FAILED)) : (peg$currPos = s2, s2 = peg$FAILED)) : (peg$currPos = s2, 
            s2 = peg$FAILED)) : (peg$currPos = s2, s2 = peg$FAILED), s2 === peg$FAILED && (s2 = null), 
            s2 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c76(s1, s2), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "expression",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "expression",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsederef() {
            var s0, s1, s2, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "deref",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, 58 === input.charCodeAt(peg$currPos) ? (s1 = peg$c12, peg$currPos++) : (s1 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c13)), s1 !== peg$FAILED ? (s2 = peg$parseSTRING(), 
            s2 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c77(s2), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "deref",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "deref",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsefd() {
            var s0, s1, s2, s3, s4, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "fd",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 2) === peg$c78 ? (s1 = peg$c78, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c79)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 7) === peg$c80 ? (s1 = peg$c80, 
            peg$currPos += 7) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c81)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 6) === peg$c82 ? (s1 = peg$c82, 
            peg$currPos += 6) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c83)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 2) === peg$c84 ? (s1 = peg$c84, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c85))))), 
            s1 !== peg$FAILED ? (s2 = peg$currPos, peg$silentFails++, peg$c86.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), 
            peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c87)), 
            peg$silentFails--, s3 === peg$FAILED ? s2 = void 0 : (peg$currPos = s2, s2 = peg$FAILED), 
            s2 !== peg$FAILED ? (s3 = peg$parse__(), s3 !== peg$FAILED ? (s4 = peg$parseexpression(), 
            s4 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c88(s4), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "fd",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "fd",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsebk() {
            var s0, s1, s2, s3, s4, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "bk",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 2) === peg$c89 ? (s1 = peg$c89, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c90)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 8) === peg$c91 ? (s1 = peg$c91, 
            peg$currPos += 8) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c92)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 4) === peg$c93 ? (s1 = peg$c93, 
            peg$currPos += 4) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c94)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 6) === peg$c95 ? (s1 = peg$c95, 
            peg$currPos += 6) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c96)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 2) === peg$c97 ? (s1 = peg$c97, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c98)))))), 
            s1 !== peg$FAILED ? (s2 = peg$currPos, peg$silentFails++, peg$c86.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), 
            peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c87)), 
            peg$silentFails--, s3 === peg$FAILED ? s2 = void 0 : (peg$currPos = s2, s2 = peg$FAILED), 
            s2 !== peg$FAILED ? (s3 = peg$parse__(), s3 !== peg$FAILED ? (s4 = peg$parseexpression(), 
            s4 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c99(s4), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "bk",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "bk",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsert() {
            var s0, s1, s2, s3, s4, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "rt",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 2) === peg$c100 ? (s1 = peg$c100, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c101)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 5) === peg$c102 ? (s1 = peg$c102, 
            peg$currPos += 5) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c103)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 6) === peg$c104 ? (s1 = peg$c104, 
            peg$currPos += 6) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c105)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 2) === peg$c106 ? (s1 = peg$c106, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c107))))), 
            s1 !== peg$FAILED ? (s2 = peg$currPos, peg$silentFails++, peg$c86.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), 
            peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c87)), 
            peg$silentFails--, s3 === peg$FAILED ? s2 = void 0 : (peg$currPos = s2, s2 = peg$FAILED), 
            s2 !== peg$FAILED ? (s3 = peg$parse__(), s3 !== peg$FAILED ? (s4 = peg$parseexpression(), 
            s4 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c108(s4), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "rt",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "rt",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parselt() {
            var s0, s1, s2, s3, s4, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "lt",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 2) === peg$c109 ? (s1 = peg$c109, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c110)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 4) === peg$c111 ? (s1 = peg$c111, 
            peg$currPos += 4) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c112)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 6) === peg$c113 ? (s1 = peg$c113, 
            peg$currPos += 6) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c114)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 2) === peg$c115 ? (s1 = peg$c115, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c116))))), 
            s1 !== peg$FAILED ? (s2 = peg$currPos, peg$silentFails++, peg$c86.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), 
            peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c87)), 
            peg$silentFails--, s3 === peg$FAILED ? s2 = void 0 : (peg$currPos = s2, s2 = peg$FAILED), 
            s2 !== peg$FAILED ? (s3 = peg$parse__(), s3 !== peg$FAILED ? (s4 = peg$parseexpression(), 
            s4 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c117(s4), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "lt",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "lt",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsecs() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "cs",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 2) === peg$c118 ? (s1 = peg$c118, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c119)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 11) === peg$c120 ? (s1 = peg$c120, 
            peg$currPos += 11) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c121)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 3) === peg$c122 ? (s1 = peg$c122, 
            peg$currPos += 3) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c123)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 5) === peg$c124 ? (s1 = peg$c124, 
            peg$currPos += 5) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c125)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 2) === peg$c126 ? (s1 = peg$c126, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c127)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 9) === peg$c128 ? (s1 = peg$c128, 
            peg$currPos += 9) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c129))))))), 
            s1 !== peg$FAILED ? (s2 = peg$currPos, peg$silentFails++, peg$c86.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), 
            peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c87)), 
            peg$silentFails--, s3 === peg$FAILED ? s2 = void 0 : (peg$currPos = s2, s2 = peg$FAILED), 
            s2 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c130(), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "cs",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "cs",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsepu() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "pu",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 2) === peg$c131 ? (s1 = peg$c131, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c132)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 5) === peg$c133 ? (s1 = peg$c133, 
            peg$currPos += 5) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c134)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 10) === peg$c135 ? (s1 = peg$c135, 
            peg$currPos += 10) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c136)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 2) === peg$c137 ? (s1 = peg$c137, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c138))))), 
            s1 !== peg$FAILED ? (s2 = peg$currPos, peg$silentFails++, peg$c86.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), 
            peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c87)), 
            peg$silentFails--, s3 === peg$FAILED ? s2 = void 0 : (peg$currPos = s2, s2 = peg$FAILED), 
            s2 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c139(), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "pu",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "pu",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsepd() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "pd",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 2) === peg$c140 ? (s1 = peg$c140, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c141)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 7) === peg$c142 ? (s1 = peg$c142, 
            peg$currPos += 7) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c143)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 12) === peg$c144 ? (s1 = peg$c144, 
            peg$currPos += 12) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c145)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 2) === peg$c146 ? (s1 = peg$c146, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c147))))), 
            s1 !== peg$FAILED ? (s2 = peg$currPos, peg$silentFails++, peg$c86.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), 
            peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c87)), 
            peg$silentFails--, s3 === peg$FAILED ? s2 = void 0 : (peg$currPos = s2, s2 = peg$FAILED), 
            s2 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c148(), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "pd",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "pd",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseht() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "ht",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 2) === peg$c149 ? (s1 = peg$c149, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c150)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 10) === peg$c151 ? (s1 = peg$c151, 
            peg$currPos += 10) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c152)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 2) === peg$c153 ? (s1 = peg$c153, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c154)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 11) === peg$c155 ? (s1 = peg$c155, 
            peg$currPos += 11) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c156))))), 
            s1 !== peg$FAILED ? (s2 = peg$currPos, peg$silentFails++, peg$c86.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), 
            peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c87)), 
            peg$silentFails--, s3 === peg$FAILED ? s2 = void 0 : (peg$currPos = s2, s2 = peg$FAILED), 
            s2 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c157(), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "ht",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "ht",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsest() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "st",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 2) === peg$c158 ? (s1 = peg$c158, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c159)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 10) === peg$c160 ? (s1 = peg$c160, 
            peg$currPos += 10) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c161)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 2) === peg$c162 ? (s1 = peg$c162, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c163)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 12) === peg$c164 ? (s1 = peg$c164, 
            peg$currPos += 12) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c165))))), 
            s1 !== peg$FAILED ? (s2 = peg$currPos, peg$silentFails++, peg$c86.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), 
            peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c87)), 
            peg$silentFails--, s3 === peg$FAILED ? s2 = void 0 : (peg$currPos = s2, s2 = peg$FAILED), 
            s2 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c166(), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "st",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "st",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsehome() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "home",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 4) === peg$c167 ? (s1 = peg$c167, 
            peg$currPos += 4) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c168)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 6) === peg$c169 ? (s1 = peg$c169, 
            peg$currPos += 6) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c170)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 6) === peg$c171 ? (s1 = peg$c171, 
            peg$currPos += 6) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c172)))), 
            s1 !== peg$FAILED ? (s2 = peg$currPos, peg$silentFails++, peg$c86.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), 
            peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c87)), 
            peg$silentFails--, s3 === peg$FAILED ? s2 = void 0 : (peg$currPos = s2, s2 = peg$FAILED), 
            s2 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c173(), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "home",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "home",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsestop() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "stop",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 4) === peg$c174 ? (s1 = peg$c174, 
            peg$currPos += 4) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c175)), 
            s1 !== peg$FAILED ? (s2 = peg$currPos, peg$silentFails++, peg$c86.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), 
            peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c87)), 
            peg$silentFails--, s3 === peg$FAILED ? s2 = void 0 : (peg$currPos = s2, s2 = peg$FAILED), 
            s2 !== peg$FAILED ? (s1 = [ s1, s2 ], s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "stop",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "stop",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsesetxy() {
            var s0, s1, s2, s3, s4, s5, s6, s7, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "setxy",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 5) === peg$c176 ? (s1 = peg$c176, 
            peg$currPos += 5) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c177)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 4) === peg$c178 ? (s1 = peg$c178, 
            peg$currPos += 4) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c179))), 
            s1 !== peg$FAILED ? (s2 = peg$parse__(), s2 !== peg$FAILED ? (s3 = peg$parseexpression(), 
            s3 !== peg$FAILED ? (s4 = peg$parse__(), s4 !== peg$FAILED ? (s5 = peg$parseexpression(), 
            s5 !== peg$FAILED ? (s6 = peg$currPos, peg$silentFails++, peg$c86.test(input.charAt(peg$currPos)) ? (s7 = input.charAt(peg$currPos), 
            peg$currPos++) : (s7 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c87)), 
            peg$silentFails--, s7 === peg$FAILED ? s6 = void 0 : (peg$currPos = s6, s6 = peg$FAILED), 
            s6 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c180(s3, s5), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), 
            s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "setxy",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "setxy",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parserandom() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "random",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 6) === peg$c181 ? (s1 = peg$c181, 
            peg$currPos += 6) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c182)), 
            s1 !== peg$FAILED ? (s2 = peg$parse__(), s2 !== peg$FAILED ? (s3 = peg$parseexpression(), 
            s3 !== peg$FAILED ? (s1 = [ s1, s2, s3 ], s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "random",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "random",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsegetangle() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "getangle",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 8) === peg$c183 ? (s1 = peg$c183, 
            peg$currPos += 8) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c184)), 
            s1 !== peg$FAILED ? (s2 = peg$currPos, peg$silentFails++, peg$c86.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), 
            peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c87)), 
            peg$silentFails--, s3 === peg$FAILED ? s2 = void 0 : (peg$currPos = s2, s2 = peg$FAILED), 
            s2 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c185(), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "getangle",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "getangle",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsegetx() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "getx",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 4) === peg$c186 ? (s1 = peg$c186, 
            peg$currPos += 4) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c187)), 
            s1 !== peg$FAILED ? (s2 = peg$currPos, peg$silentFails++, peg$c86.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), 
            peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c87)), 
            peg$silentFails--, s3 === peg$FAILED ? s2 = void 0 : (peg$currPos = s2, s2 = peg$FAILED), 
            s2 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c188(), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "getx",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "getx",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsegety() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "gety",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 4) === peg$c189 ? (s1 = peg$c189, 
            peg$currPos += 4) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c190)), 
            s1 !== peg$FAILED ? (s2 = peg$currPos, peg$silentFails++, peg$c86.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), 
            peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c87)), 
            peg$silentFails--, s3 === peg$FAILED ? s2 = void 0 : (peg$currPos = s2, s2 = peg$FAILED), 
            s2 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c191(), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "gety",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "gety",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parserepcount() {
            var s0, s1, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "repcount",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 8) === peg$c192 ? (s1 = peg$c192, 
            peg$currPos += 8) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c193)), 
            s1 !== peg$FAILED && (peg$savedPos = s0, s1 = peg$c194()), s0 = s1, s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "repcount",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "repcount",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsefore() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "fore",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 3) === peg$c195 ? (s1 = peg$c195, 
            peg$currPos += 3) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c196)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 6) === peg$c197 ? (s1 = peg$c197, 
            peg$currPos += 6) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c198))), 
            s1 !== peg$FAILED ? (s2 = peg$parse_(), s2 !== peg$FAILED ? (91 === input.charCodeAt(peg$currPos) ? (s3 = peg$c22, 
            peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c23)), 
            s3 !== peg$FAILED ? (s4 = peg$parse_(), s4 !== peg$FAILED ? (s5 = peg$parseSTRING(), 
            s5 !== peg$FAILED ? (s6 = peg$parse__(), s6 !== peg$FAILED ? (s7 = peg$parseexpression(), 
            s7 !== peg$FAILED ? (s8 = peg$parse__(), s8 !== peg$FAILED ? (s9 = peg$parseexpression(), 
            s9 !== peg$FAILED ? (s10 = peg$currPos, s11 = peg$parse__(), s11 !== peg$FAILED ? (s12 = peg$parseexpression(), 
            s12 !== peg$FAILED ? (s11 = [ s11, s12 ], s10 = s11) : (peg$currPos = s10, s10 = peg$FAILED)) : (peg$currPos = s10, 
            s10 = peg$FAILED), s10 === peg$FAILED && (s10 = null), s10 !== peg$FAILED ? (s11 = peg$parse_(), 
            s11 !== peg$FAILED ? (93 === input.charCodeAt(peg$currPos) ? (s12 = peg$c24, peg$currPos++) : (s12 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c25)), s12 !== peg$FAILED ? (s13 = peg$parse_(), 
            s13 !== peg$FAILED ? (s14 = peg$parseblock(), s14 !== peg$FAILED ? (s1 = [ s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14 ], 
            s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), 
            s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "fore",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "fore",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsepc() {
            var s0, s1, s2, s3, s4, s5, s6, s7, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "pc",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 2) === peg$c199 ? (s1 = peg$c199, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c200)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 8) === peg$c201 ? (s1 = peg$c201, 
            peg$currPos += 8) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c202)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 2) === peg$c203 ? (s1 = peg$c203, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c204)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 13) === peg$c205 ? (s1 = peg$c205, 
            peg$currPos += 13) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c206))))), 
            s1 !== peg$FAILED ? (s2 = peg$parse__(), s2 !== peg$FAILED ? (s3 = peg$parseSTRING(), 
            s3 === peg$FAILED && (s3 = peg$currPos, s4 = peg$parseexpression(), s4 !== peg$FAILED ? (s5 = peg$parseexpression(), 
            s5 !== peg$FAILED ? (s6 = peg$parseexpression(), s6 !== peg$FAILED ? (s7 = peg$parseexpression(), 
            s7 === peg$FAILED && (s7 = null), s7 !== peg$FAILED ? (s4 = [ s4, s5, s6, s7 ], 
            s3 = s4) : (peg$currPos = s3, s3 = peg$FAILED)) : (peg$currPos = s3, s3 = peg$FAILED)) : (peg$currPos = s3, 
            s3 = peg$FAILED)) : (peg$currPos = s3, s3 = peg$FAILED), s3 === peg$FAILED && (s3 = peg$parsehexcolor())), 
            s3 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c207(s3), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), 
            s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "pc",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "pc",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsecc() {
            var s0, s1, s2, s3, s4, s5, s6, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "cc",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 2) === peg$c203 ? (s1 = peg$c203, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c204)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 11) === peg$c208 ? (s1 = peg$c208, 
            peg$currPos += 11) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c209))), 
            s1 !== peg$FAILED ? (s2 = peg$parse__(), s2 !== peg$FAILED ? (s3 = peg$parseSTRING(), 
            s3 === peg$FAILED && (s3 = peg$currPos, s4 = peg$parseexpression(), s4 !== peg$FAILED ? (s5 = peg$parseexpression(), 
            s5 !== peg$FAILED ? (s6 = peg$parseexpression(), s6 !== peg$FAILED ? (s4 = [ s4, s5, s6 ], 
            s3 = s4) : (peg$currPos = s3, s3 = peg$FAILED)) : (peg$currPos = s3, s3 = peg$FAILED)) : (peg$currPos = s3, 
            s3 = peg$FAILED), s3 === peg$FAILED && (s3 = peg$parsehexcolor())), s3 !== peg$FAILED ? (s1 = [ s1, s2, s3 ], 
            s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "cc",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "cc",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsehexcolor() {
            var s0, s1, s2, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "hexcolor",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, 35 === input.charCodeAt(peg$currPos) ? (s1 = peg$c210, peg$currPos++) : (s1 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c211)), s1 !== peg$FAILED ? (s2 = peg$parseHEX(), 
            s2 !== peg$FAILED ? (s1 = [ s1, s2 ], s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "hexcolor",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "hexcolor",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseHEX() {
            var s0, s1, s2, s3, s4, s5, s6, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "HEX",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, peg$c212.test(input.charAt(peg$currPos)) ? (s1 = input.charAt(peg$currPos), 
            peg$currPos++) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c213)), 
            s1 !== peg$FAILED ? (peg$c212.test(input.charAt(peg$currPos)) ? (s2 = input.charAt(peg$currPos), 
            peg$currPos++) : (s2 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c213)), 
            s2 !== peg$FAILED ? (peg$c212.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), 
            peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c213)), 
            s3 !== peg$FAILED ? (peg$c212.test(input.charAt(peg$currPos)) ? (s4 = input.charAt(peg$currPos), 
            peg$currPos++) : (s4 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c213)), 
            s4 !== peg$FAILED ? (peg$c212.test(input.charAt(peg$currPos)) ? (s5 = input.charAt(peg$currPos), 
            peg$currPos++) : (s5 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c213)), 
            s5 !== peg$FAILED ? (peg$c212.test(input.charAt(peg$currPos)) ? (s6 = input.charAt(peg$currPos), 
            peg$currPos++) : (s6 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c213)), 
            s6 !== peg$FAILED ? (s1 = [ s1, s2, s3, s4, s5, s6 ], s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), 
            s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "HEX",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "HEX",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsepause() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "pause",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 5) === peg$c214 ? (s1 = peg$c214, 
            peg$currPos += 5) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c215)), 
            s1 !== peg$FAILED ? (s2 = peg$parse__(), s2 !== peg$FAILED ? (s3 = peg$parseexpression(), 
            s3 !== peg$FAILED ? (s1 = [ s1, s2, s3 ], s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "pause",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "pause",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseds() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "ds",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 2) === peg$c216 ? (s1 = peg$c216, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c217)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 10) === peg$c218 ? (s1 = peg$c218, 
            peg$currPos += 10) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c219)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 5) === peg$c220 ? (s1 = peg$c220, 
            peg$currPos += 5) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c221)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 10) === peg$c222 ? (s1 = peg$c222, 
            peg$currPos += 10) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c223)), 
            s1 === peg$FAILED && (input.substr(peg$currPos, 2) === peg$c224 ? (s1 = peg$c224, 
            peg$currPos += 2) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c225)))))), 
            s1 !== peg$FAILED ? (s2 = peg$parse__(), s2 !== peg$FAILED ? (s3 = peg$parsevalue(), 
            s3 !== peg$FAILED ? (s1 = [ s1, s2, s3 ], s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "ds",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "ds",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsefontname() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "fontname",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 8) === peg$c226 ? (s1 = peg$c226, 
            peg$currPos += 8) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c227)), 
            s1 !== peg$FAILED ? (s2 = peg$parse__(), s2 !== peg$FAILED ? (s3 = peg$parseSTRING(), 
            s3 !== peg$FAILED ? (s1 = [ s1, s2, s3 ], s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "fontname",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "fontname",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsefontsize() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "fontsize",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 8) === peg$c228 ? (s1 = peg$c228, 
            peg$currPos += 8) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c229)), 
            s1 !== peg$FAILED ? (s2 = peg$parse__(), s2 !== peg$FAILED ? (s3 = peg$parseexpression(), 
            s3 !== peg$FAILED ? (s1 = [ s1, s2, s3 ], s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "fontsize",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "fontsize",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsefontstyle() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "fontstyle",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, input.substr(peg$currPos, 9) === peg$c230 ? (s1 = peg$c230, 
            peg$currPos += 9) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c231)), 
            s1 !== peg$FAILED ? (s2 = peg$parse__(), s2 !== peg$FAILED ? (s3 = peg$parsestyle(), 
            s3 !== peg$FAILED ? (s1 = [ s1, s2, s3 ], s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED)) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "fontstyle",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "fontstyle",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parsestyle() {
            var s0, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "style",
                location: peg$computeLocation(startPos, startPos)
            }), input.substr(peg$currPos, 4) === peg$c232 ? (s0 = peg$c232, peg$currPos += 4) : (s0 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c233)), s0 === peg$FAILED && (input.substr(peg$currPos, 5) === peg$c234 ? (s0 = peg$c234, 
            peg$currPos += 5) : (s0 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c235)), 
            s0 === peg$FAILED && (input.substr(peg$currPos, 6) === peg$c236 ? (s0 = peg$c236, 
            peg$currPos += 6) : (s0 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c237)))), 
            s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "style",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "style",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseSTRINGLITERAL() {
            var s0, s1, s2, startPos = peg$currPos;
            return peg$tracer.trace({
                type: "rule.enter",
                rule: "STRINGLITERAL",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, 34 === input.charCodeAt(peg$currPos) ? (s1 = peg$c238, peg$currPos++) : (s1 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c239)), s1 !== peg$FAILED ? (s2 = peg$parseSTRING(), 
            s2 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c240(s2), s0 = s1) : (peg$currPos = s0, 
            s0 = peg$FAILED)) : (peg$currPos = s0, s0 = peg$FAILED), s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "STRINGLITERAL",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "STRINGLITERAL",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseSTRING() {
            var s0, s1, s2, s3, startPos = peg$currPos;
            if (peg$tracer.trace({
                type: "rule.enter",
                rule: "STRING",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, peg$c241.test(input.charAt(peg$currPos)) ? (s1 = input.charAt(peg$currPos), 
            peg$currPos++) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c242)), 
            s1 !== peg$FAILED) {
                for (s2 = [], peg$c86.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), 
                peg$currPos++) : (s3 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c87)); s3 !== peg$FAILED; ) s2.push(s3), 
                peg$c86.test(input.charAt(peg$currPos)) ? (s3 = input.charAt(peg$currPos), peg$currPos++) : (s3 = peg$FAILED, 
                0 === peg$silentFails && peg$fail(peg$c87));
                s2 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c243(s1, s2), s0 = s1) : (peg$currPos = s0, 
                s0 = peg$FAILED);
            } else peg$currPos = s0, s0 = peg$FAILED;
            return s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "STRING",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "STRING",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseNUMBER() {
            var s0, s1, s2, s3, s4, s5, startPos = peg$currPos;
            if (peg$tracer.trace({
                type: "rule.enter",
                rule: "NUMBER",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, s1 = [], peg$c244.test(input.charAt(peg$currPos)) ? (s2 = input.charAt(peg$currPos), 
            peg$currPos++) : (s2 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c245)), 
            s2 !== peg$FAILED) for (;s2 !== peg$FAILED; ) s1.push(s2), peg$c244.test(input.charAt(peg$currPos)) ? (s2 = input.charAt(peg$currPos), 
            peg$currPos++) : (s2 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c245)); else s1 = peg$FAILED;
            if (s1 !== peg$FAILED) {
                if (s2 = peg$currPos, 46 === input.charCodeAt(peg$currPos) ? (s3 = peg$c246, peg$currPos++) : (s3 = peg$FAILED, 
                0 === peg$silentFails && peg$fail(peg$c247)), s3 !== peg$FAILED) {
                    if (s4 = [], peg$c244.test(input.charAt(peg$currPos)) ? (s5 = input.charAt(peg$currPos), 
                    peg$currPos++) : (s5 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c245)), 
                    s5 !== peg$FAILED) for (;s5 !== peg$FAILED; ) s4.push(s5), peg$c244.test(input.charAt(peg$currPos)) ? (s5 = input.charAt(peg$currPos), 
                    peg$currPos++) : (s5 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c245)); else s4 = peg$FAILED;
                    s4 !== peg$FAILED ? (s3 = [ s3, s4 ], s2 = s3) : (peg$currPos = s2, s2 = peg$FAILED);
                } else peg$currPos = s2, s2 = peg$FAILED;
                s2 === peg$FAILED && (s2 = null), s2 !== peg$FAILED ? (peg$savedPos = s0, s1 = peg$c248(s1, s2), 
                s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED);
            } else peg$currPos = s0, s0 = peg$FAILED;
            return s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "NUMBER",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "NUMBER",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseCOMMENT() {
            var s0, s1, s2, s3, s4, startPos = peg$currPos;
            if (peg$tracer.trace({
                type: "rule.enter",
                rule: "COMMENT",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = peg$currPos, s1 = peg$c4, s1 !== peg$FAILED) {
                for (s2 = peg$currPos, peg$silentFails++, s3 = [], peg$c249.test(input.charAt(peg$currPos)) ? (s4 = input.charAt(peg$currPos), 
                peg$currPos++) : (s4 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c250)); s4 !== peg$FAILED; ) s3.push(s4), 
                peg$c249.test(input.charAt(peg$currPos)) ? (s4 = input.charAt(peg$currPos), peg$currPos++) : (s4 = peg$FAILED, 
                0 === peg$silentFails && peg$fail(peg$c250));
                peg$silentFails--, s3 === peg$FAILED ? s2 = void 0 : (peg$currPos = s2, s2 = peg$FAILED), 
                s2 !== peg$FAILED ? (s1 = [ s1, s2 ], s0 = s1) : (peg$currPos = s0, s0 = peg$FAILED);
            } else peg$currPos = s0, s0 = peg$FAILED;
            return s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "COMMENT",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "COMMENT",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parseEOL() {
            var s0, s1, startPos = peg$currPos;
            if (peg$tracer.trace({
                type: "rule.enter",
                rule: "EOL",
                location: peg$computeLocation(startPos, startPos)
            }), peg$silentFails++, s0 = [], peg$c249.test(input.charAt(peg$currPos)) ? (s1 = input.charAt(peg$currPos), 
            peg$currPos++) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c250)), 
            s1 !== peg$FAILED) for (;s1 !== peg$FAILED; ) s0.push(s1), peg$c249.test(input.charAt(peg$currPos)) ? (s1 = input.charAt(peg$currPos), 
            peg$currPos++) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c250)); else s0 = peg$FAILED;
            return peg$silentFails--, s0 === peg$FAILED && (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c251)), 
            s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "EOL",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "EOL",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parse_() {
            var s0, s1, startPos = peg$currPos;
            for (peg$tracer.trace({
                type: "rule.enter",
                rule: "_",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = [], peg$c252.test(input.charAt(peg$currPos)) ? (s1 = input.charAt(peg$currPos), 
            peg$currPos++) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c253)); s1 !== peg$FAILED; ) s0.push(s1), 
            peg$c252.test(input.charAt(peg$currPos)) ? (s1 = input.charAt(peg$currPos), peg$currPos++) : (s1 = peg$FAILED, 
            0 === peg$silentFails && peg$fail(peg$c253));
            return s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "_",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "_",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function peg$parse__() {
            var s0, s1, startPos = peg$currPos;
            if (peg$tracer.trace({
                type: "rule.enter",
                rule: "__",
                location: peg$computeLocation(startPos, startPos)
            }), s0 = [], peg$c252.test(input.charAt(peg$currPos)) ? (s1 = input.charAt(peg$currPos), 
            peg$currPos++) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c253)), 
            s1 !== peg$FAILED) for (;s1 !== peg$FAILED; ) s0.push(s1), peg$c252.test(input.charAt(peg$currPos)) ? (s1 = input.charAt(peg$currPos), 
            peg$currPos++) : (s1 = peg$FAILED, 0 === peg$silentFails && peg$fail(peg$c253)); else s0 = peg$FAILED;
            return s0 !== peg$FAILED ? peg$tracer.trace({
                type: "rule.match",
                rule: "__",
                result: s0,
                location: peg$computeLocation(startPos, peg$currPos)
            }) : peg$tracer.trace({
                type: "rule.fail",
                rule: "__",
                location: peg$computeLocation(startPos, startPos)
            }), s0;
        }
        function async(sync, loc, local, global, extra) {
            var deferred = $.Deferred();
            return logo.delay >= 0 || globalSteps > 100 ? setTimeout(function() {
                logoCode.setSelection({
                    line: loc.start.line - 1,
                    ch: loc.start.column - 1
                }, {
                    line: loc.end.line - 1,
                    ch: loc.end.column - 1
                }), logo.breakPoints[loc.start.line] && logo.pause();
                var fn = function() {
                    if (logo.aborted) return void deferred.fail("Interrupted");
                    if (logo.paused) setTimeout(fn, 100); else try {
                        deferred.resolve(sync(local, global, extra)), globalSteps = 0;
                    } catch (e) {
                        deferred.fail(e);
                    }
                };
                fn();
            }, logo.delay) : (deferred.resolve(sync(local, global, extra)), globalSteps++), 
            deferred.promise();
        }
        var peg$result, options = arguments.length > 1 ? arguments[1] : {}, peg$FAILED = {}, peg$startRuleFunctions = {
            start: peg$parsestart
        }, peg$startRuleFunction = peg$parsestart, peg$c0 = function(head, tail) {
            return function() {
                var global = {}, local = {}, p = head(global, local);
                return tail.forEach(function(f) {
                    f[3] && (p = p.then(function() {
                        return f[3](global, local);
                    }));
                }), p;
            };
        }, peg$c1 = function(p) {
            return function(global, local) {
                return p(global, local), $.Deferred().resolveWith(this);
            };
        }, peg$c2 = function(head, tail) {
            return function(global, local) {
                var p = head(global, local);
                return tail.forEach(function(f) {
                    p = p.then(function() {
                        return f[1](global, local);
                    });
                }), p;
            };
        }, peg$c3 = function() {
            return function() {
                return $.Deferred().resolveWith(this);
            };
        }, peg$c4 = "", peg$c5 = function(cmd) {
            var loc = location();
            return function(global, local, location) {
                return async(cmd, loc, global, local);
            };
        }, peg$c6 = function(name, params) {
            return function(global, local) {
                var newLocal = {}, proc = global[name()];
                if (proc) {
                    var i = 0;
                    return proc.params.forEach(function(p) {
                        newLocal[p] = params[i++](global, local);
                    }), proc.body(global, newLocal);
                }
            };
        }, peg$c7 = "to", peg$c8 = {
            type: "literal",
            value: "to",
            description: '"to"'
        }, peg$c9 = "end", peg$c10 = {
            type: "literal",
            value: "end",
            description: '"end"'
        }, peg$c11 = function(name, params, lines) {
            return function(global) {
                global[name()] = {
                    params: params[0].map(function(p) {
                        return p();
                    }),
                    body: function(global, local) {
                        var p = $.Deferred().resolveWith(this);
                        return lines.forEach(function(f) {
                            p = p.then(function() {
                                return f[0](global, local);
                            });
                        }), p;
                    }
                };
            };
        }, peg$c12 = ":", peg$c13 = {
            type: "literal",
            value: ":",
            description: '":"'
        }, peg$c14 = ",", peg$c15 = {
            type: "literal",
            value: ",",
            description: '","'
        }, peg$c16 = function(head, tail) {
            var params = [ head ];
            return tail.forEach(function(p) {
                params.push(p);
            }), params;
        }, peg$c17 = "repeat", peg$c18 = {
            type: "literal",
            value: "repeat",
            description: '"repeat"'
        }, peg$c19 = "repete", peg$c20 = {
            type: "literal",
            value: "repete",
            description: '"repete"'
        }, peg$c21 = function(ex, blk) {
            return function(global, local) {
                for (var p = $.Deferred().resolveWith(this), i = 0; i < ex(global, local); i++) !function(count) {
                    p = p.then(function() {
                        return blk(global, local, {
                            $repCount: count
                        });
                    });
                }(i);
                return p;
            };
        }, peg$c22 = "[", peg$c23 = {
            type: "literal",
            value: "[",
            description: '"["'
        }, peg$c24 = "]", peg$c25 = {
            type: "literal",
            value: "]",
            description: '"]"'
        }, peg$c26 = function(cmds) {
            return function(global, local, extra) {
                var newLocal = {};
                Object.keys(local).forEach(function(k) {
                    newLocal[k] = local[k];
                }), extra && Object.keys(extra).forEach(function(k) {
                    newLocal[k] = extra[k];
                });
                var p = $.Deferred().resolveWith(this);
                return cmds.forEach(function(f) {
                    p = p.then(function() {
                        return f[1](global, newLocal);
                    });
                }), p;
            };
        }, peg$c27 = "if", peg$c28 = {
            type: "literal",
            value: "if",
            description: '"if"'
        }, peg$c29 = function(cmp, blk) {
            return function(global, local) {
                return cmp(global, local) ? blk(global, local) : $.Deferred().resolveWith(this);
            };
        }, peg$c30 = "ifelse", peg$c31 = {
            type: "literal",
            value: "ifelse",
            description: '"ifelse"'
        }, peg$c32 = function(cmp, blk, blkelse) {
            return function(global, local) {
                return cmp(global, local) ? blk(global, local) : blkelse(global, local);
            };
        }, peg$c33 = function(ex1, op, ex2) {
            return function(global, local) {
                return "<" === op ? ex1(global, local) < ex2(global, local) : ">" === op ? ex1(global, local) > ex2(global, local) : "=" === op ? ex1(global, local) == ex2(global, local) : "<=" === op ? ex1(global, local) <= ex2(global, local) : ">=" === op ? ex1(global, local) >= ex2(global, local) : "==" === op ? ex1(global, local) == ex2(global, local) : "!=" === op ? ex1(global, local) != ex2(global, local) : "<>" === op ? ex1(global, local) != ex2(global, local) : !1;
            };
        }, peg$c34 = "<=", peg$c35 = {
            type: "literal",
            value: "<=",
            description: '"<="'
        }, peg$c36 = ">=", peg$c37 = {
            type: "literal",
            value: ">=",
            description: '">="'
        }, peg$c38 = "==", peg$c39 = {
            type: "literal",
            value: "==",
            description: '"=="'
        }, peg$c40 = "!=", peg$c41 = {
            type: "literal",
            value: "!=",
            description: '"!="'
        }, peg$c42 = "<>", peg$c43 = {
            type: "literal",
            value: "<>",
            description: '"<>"'
        }, peg$c44 = "<", peg$c45 = {
            type: "literal",
            value: "<",
            description: '"<"'
        }, peg$c46 = ">", peg$c47 = {
            type: "literal",
            value: ">",
            description: '">"'
        }, peg$c48 = "=", peg$c49 = {
            type: "literal",
            value: "=",
            description: '"="'
        }, peg$c50 = "make", peg$c51 = {
            type: "literal",
            value: "make",
            description: '"make"'
        }, peg$c52 = "localmake", peg$c53 = {
            type: "literal",
            value: "localmake",
            description: '"localmake"'
        }, peg$c54 = "print", peg$c55 = {
            type: "literal",
            value: "print",
            description: '"print"'
        }, peg$c56 = "(", peg$c57 = {
            type: "literal",
            value: "(",
            description: '"("'
        }, peg$c58 = ")", peg$c59 = {
            type: "literal",
            value: ")",
            description: '")"'
        }, peg$c60 = function(ex) {
            return ex;
        }, peg$c61 = "+", peg$c62 = {
            type: "literal",
            value: "+",
            description: '"+"'
        }, peg$c63 = "-", peg$c64 = {
            type: "literal",
            value: "-",
            description: '"-"'
        }, peg$c65 = function(op, atomic) {
            return op && "-" == op ? function(global, local) {
                return -atomic(global, local);
            } : atomic;
        }, peg$c66 = "^", peg$c67 = {
            type: "literal",
            value: "^",
            description: '"^"'
        }, peg$c68 = function(head, tail) {
            return tail ? function(global, local) {
                return Math.pow(head(global, local), tail[2](global, local));
            } : head;
        }, peg$c69 = "*", peg$c70 = {
            type: "literal",
            value: "*",
            description: '"*"'
        }, peg$c71 = "/", peg$c72 = {
            type: "literal",
            value: "/",
            description: '"/"'
        }, peg$c73 = "%", peg$c74 = {
            type: "literal",
            value: "%",
            description: '"%"'
        }, peg$c75 = function(head, tail) {
            if (tail) {
                var l = head, op = tail[1], r = tail[3];
                return function(global, local) {
                    return "*" == op ? l(global, local) * r(global, local) : "/" == op ? l(global, local) / r(global, local) : l(global, local) % r(global, local);
                };
            }
            return head;
        }, peg$c76 = function(head, tail) {
            if (tail) {
                var l = head, op = tail[1], r = tail[3];
                return function(global, local) {
                    return "-" == op ? l(global, local) - r(global, local) : l(global, local) + r(global, local);
                };
            }
            return head;
        }, peg$c77 = function(name) {
            return function(global, local) {
                return local[name()] ? local[name()] : global[name()];
            };
        }, peg$c78 = "fd", peg$c79 = {
            type: "literal",
            value: "fd",
            description: '"fd"'
        }, peg$c80 = "forward", peg$c81 = {
            type: "literal",
            value: "forward",
            description: '"forward"'
        }, peg$c82 = "avance", peg$c83 = {
            type: "literal",
            value: "avance",
            description: '"avance"'
        }, peg$c84 = "av", peg$c85 = {
            type: "literal",
            value: "av",
            description: '"av"'
        }, peg$c86 = /^[a-zA-Z0-9_]/, peg$c87 = {
            type: "class",
            value: "[a-zA-Z0-9_]",
            description: "[a-zA-Z0-9_]"
        }, peg$c88 = function(val) {
            return function(global, local) {
                logo.turtle.fw(val(global, local));
            };
        }, peg$c89 = "bk", peg$c90 = {
            type: "literal",
            value: "bk",
            description: '"bk"'
        }, peg$c91 = "backward", peg$c92 = {
            type: "literal",
            value: "backward",
            description: '"backward"'
        }, peg$c93 = "back", peg$c94 = {
            type: "literal",
            value: "back",
            description: '"back"'
        }, peg$c95 = "recule", peg$c96 = {
            type: "literal",
            value: "recule",
            description: '"recule"'
        }, peg$c97 = "re", peg$c98 = {
            type: "literal",
            value: "re",
            description: '"re"'
        }, peg$c99 = function(val) {
            return function(global, local) {
                logo.turtle.fw(-val(global, local));
            };
        }, peg$c100 = "rt", peg$c101 = {
            type: "literal",
            value: "rt",
            description: '"rt"'
        }, peg$c102 = "right", peg$c103 = {
            type: "literal",
            value: "right",
            description: '"right"'
        }, peg$c104 = "droite", peg$c105 = {
            type: "literal",
            value: "droite",
            description: '"droite"'
        }, peg$c106 = "dr", peg$c107 = {
            type: "literal",
            value: "dr",
            description: '"dr"'
        }, peg$c108 = function(val) {
            return function(global, local) {
                logo.turtle.lt(-val(global, local));
            };
        }, peg$c109 = "lt", peg$c110 = {
            type: "literal",
            value: "lt",
            description: '"lt"'
        }, peg$c111 = "left", peg$c112 = {
            type: "literal",
            value: "left",
            description: '"left"'
        }, peg$c113 = "gauche", peg$c114 = {
            type: "literal",
            value: "gauche",
            description: '"gauche"'
        }, peg$c115 = "ga", peg$c116 = {
            type: "literal",
            value: "ga",
            description: '"ga"'
        }, peg$c117 = function(val) {
            return function(global, local) {
                logo.turtle.lt(val(global, local));
            };
        }, peg$c118 = "cs", peg$c119 = {
            type: "literal",
            value: "cs",
            description: '"cs"'
        }, peg$c120 = "clearscreen", peg$c121 = {
            type: "literal",
            value: "clearscreen",
            description: '"clearscreen"'
        }, peg$c122 = "cls", peg$c123 = {
            type: "literal",
            value: "cls",
            description: '"cls"'
        }, peg$c124 = "clear", peg$c125 = {
            type: "literal",
            value: "clear",
            description: '"clear"'
        }, peg$c126 = "ve", peg$c127 = {
            type: "literal",
            value: "ve",
            description: '"ve"'
        }, peg$c128 = "videecran", peg$c129 = {
            type: "literal",
            value: "videecran",
            description: '"videecran"'
        }, peg$c130 = function() {
            return function() {
                logo.clear();
            };
        }, peg$c131 = "pu", peg$c132 = {
            type: "literal",
            value: "pu",
            description: '"pu"'
        }, peg$c133 = "penup", peg$c134 = {
            type: "literal",
            value: "penup",
            description: '"penup"'
        }, peg$c135 = "levecrayon", peg$c136 = {
            type: "literal",
            value: "levecrayon",
            description: '"levecrayon"'
        }, peg$c137 = "lc", peg$c138 = {
            type: "literal",
            value: "lc",
            description: '"lc"'
        }, peg$c139 = function() {
            return function() {
                logo.turtle.pen = !1;
            };
        }, peg$c140 = "pd", peg$c141 = {
            type: "literal",
            value: "pd",
            description: '"pd"'
        }, peg$c142 = "pendown", peg$c143 = {
            type: "literal",
            value: "pendown",
            description: '"pendown"'
        }, peg$c144 = "baissecrayon", peg$c145 = {
            type: "literal",
            value: "baissecrayon",
            description: '"baissecrayon"'
        }, peg$c146 = "bc", peg$c147 = {
            type: "literal",
            value: "bc",
            description: '"bc"'
        }, peg$c148 = function() {
            return function() {
                logo.turtle.pen = !0;
            };
        }, peg$c149 = "ht", peg$c150 = {
            type: "literal",
            value: "ht",
            description: '"ht"'
        }, peg$c151 = "hideturtle", peg$c152 = {
            type: "literal",
            value: "hideturtle",
            description: '"hideturtle"'
        }, peg$c153 = "ct", peg$c154 = {
            type: "literal",
            value: "ct",
            description: '"ct"'
        }, peg$c155 = "cachetortue", peg$c156 = {
            type: "literal",
            value: "cachetortue",
            description: '"cachetortue"'
        }, peg$c157 = function() {
            return function() {
                logo.turtle.hide();
            };
        }, peg$c158 = "st", peg$c159 = {
            type: "literal",
            value: "st",
            description: '"st"'
        }, peg$c160 = "showturtle", peg$c161 = {
            type: "literal",
            value: "showturtle",
            description: '"showturtle"'
        }, peg$c162 = "mt", peg$c163 = {
            type: "literal",
            value: "mt",
            description: '"mt"'
        }, peg$c164 = "montretortue", peg$c165 = {
            type: "literal",
            value: "montretortue",
            description: '"montretortue"'
        }, peg$c166 = function() {
            return function() {
                logo.turtle.show();
            };
        }, peg$c167 = "home", peg$c168 = {
            type: "literal",
            value: "home",
            description: '"home"'
        }, peg$c169 = "maison", peg$c170 = {
            type: "literal",
            value: "maison",
            description: '"maison"'
        }, peg$c171 = "centre", peg$c172 = {
            type: "literal",
            value: "centre",
            description: '"centre"'
        }, peg$c173 = function() {
            return function() {
                logo.turtle.home();
            };
        }, peg$c174 = "stop", peg$c175 = {
            type: "literal",
            value: "stop",
            description: '"stop"'
        }, peg$c176 = "setxy", peg$c177 = {
            type: "literal",
            value: "setxy",
            description: '"setxy"'
        }, peg$c178 = "vaxy", peg$c179 = {
            type: "literal",
            value: "vaxy",
            description: '"vaxy"'
        }, peg$c180 = function(x, y) {
            return function(global, local) {
                logo.turtle.set(x(global, local), y(global, local));
            };
        }, peg$c181 = "random", peg$c182 = {
            type: "literal",
            value: "random",
            description: '"random"'
        }, peg$c183 = "getangle", peg$c184 = {
            type: "literal",
            value: "getangle",
            description: '"getangle"'
        }, peg$c185 = function() {
            return function() {
                return logo.turtle.direction;
            };
        }, peg$c186 = "getx", peg$c187 = {
            type: "literal",
            value: "getx",
            description: '"getx"'
        }, peg$c188 = function() {
            return function() {
                return logo.turtle.x;
            };
        }, peg$c189 = "gety", peg$c190 = {
            type: "literal",
            value: "gety",
            description: '"gety"'
        }, peg$c191 = function() {
            return function() {
                return logo.turtle.y;
            };
        }, peg$c192 = "repcount", peg$c193 = {
            type: "literal",
            value: "repcount",
            description: '"repcount"'
        }, peg$c194 = function() {
            return function(global, local) {
                return local.$repCount ? local.$repCount : 0;
            };
        }, peg$c195 = "for", peg$c196 = {
            type: "literal",
            value: "for",
            description: '"for"'
        }, peg$c197 = "boucle", peg$c198 = {
            type: "literal",
            value: "boucle",
            description: '"boucle"'
        }, peg$c199 = "pc", peg$c200 = {
            type: "literal",
            value: "pc",
            description: '"pc"'
        }, peg$c201 = "pencolor", peg$c202 = {
            type: "literal",
            value: "pencolor",
            description: '"pencolor"'
        }, peg$c203 = "cc", peg$c204 = {
            type: "literal",
            value: "cc",
            description: '"cc"'
        }, peg$c205 = "couleurcrayon", peg$c206 = {
            type: "literal",
            value: "couleurcrayon",
            description: '"couleurcrayon"'
        }, peg$c207 = function(color) {
            return function(global, local) {
                return local.$repCount ? local.$repCount : 0;
            };
        }, peg$c208 = "canvascolor", peg$c209 = {
            type: "literal",
            value: "canvascolor",
            description: '"canvascolor"'
        }, peg$c210 = "#", peg$c211 = {
            type: "literal",
            value: "#",
            description: '"#"'
        }, peg$c212 = /^[0-9a-fA-F]/, peg$c213 = {
            type: "class",
            value: "[0-9a-fA-F]",
            description: "[0-9a-fA-F]"
        }, peg$c214 = "pause", peg$c215 = {
            type: "literal",
            value: "pause",
            description: '"pause"'
        }, peg$c216 = "ds", peg$c217 = {
            type: "literal",
            value: "ds",
            description: '"ds"'
        }, peg$c218 = "drawstring", peg$c219 = {
            type: "literal",
            value: "drawstring",
            description: '"drawstring"'
        }, peg$c220 = "label", peg$c221 = {
            type: "literal",
            value: "label",
            description: '"label"'
        }, peg$c222 = "tracetexte", peg$c223 = {
            type: "literal",
            value: "tracetexte",
            description: '"tracetexte"'
        }, peg$c224 = "tt", peg$c225 = {
            type: "literal",
            value: "tt",
            description: '"tt"'
        }, peg$c226 = "fontname", peg$c227 = {
            type: "literal",
            value: "fontname",
            description: '"fontname"'
        }, peg$c228 = "fontsize", peg$c229 = {
            type: "literal",
            value: "fontsize",
            description: '"fontsize"'
        }, peg$c230 = "fontstyle", peg$c231 = {
            type: "literal",
            value: "fontstyle",
            description: '"fontstyle"'
        }, peg$c232 = "bold", peg$c233 = {
            type: "literal",
            value: "bold",
            description: '"bold"'
        }, peg$c234 = "plain", peg$c235 = {
            type: "literal",
            value: "plain",
            description: '"plain"'
        }, peg$c236 = "italic", peg$c237 = {
            type: "literal",
            value: "italic",
            description: '"italic"'
        }, peg$c238 = '"', peg$c239 = {
            type: "literal",
            value: '"',
            description: '"\\""'
        }, peg$c240 = function(lit) {
            return lit;
        }, peg$c241 = /^[a-zA-Z]/, peg$c242 = {
            type: "class",
            value: "[a-zA-Z]",
            description: "[a-zA-Z]"
        }, peg$c243 = function(head, tail) {
            return function() {
                return head + tail.join("");
            };
        }, peg$c244 = /^[0-9]/, peg$c245 = {
            type: "class",
            value: "[0-9]",
            description: "[0-9]"
        }, peg$c246 = ".", peg$c247 = {
            type: "literal",
            value: ".",
            description: '"."'
        }, peg$c248 = function(intpart, fracpart) {
            fracpart && fracpart.splice(0, 1);
            var val = parseInt(intpart.join("")) + (fracpart ? 1 * parseInt(fracpart.join("")) / Math.pow(10, fracpart.length) : 0);
            return function() {
                return val;
            };
        }, peg$c249 = /^[\r\n]/, peg$c250 = {
            type: "class",
            value: "[\\r\\n]",
            description: "[\\r\\n]"
        }, peg$c251 = {
            type: "other",
            description: "end of line"
        }, peg$c252 = /^[ \t]/, peg$c253 = {
            type: "class",
            value: "[ \\t]",
            description: "[ \\t]"
        }, peg$currPos = 0, peg$savedPos = 0, peg$posDetailsCache = [ {
            line: 1,
            column: 1,
            seenCR: !1
        } ], peg$maxFailPos = 0, peg$maxFailExpected = [], peg$silentFails = 0, peg$tracer = "tracer" in options ? options.tracer : new peg$DefaultTracer();
        if ("startRule" in options) {
            if (!(options.startRule in peg$startRuleFunctions)) throw new Error("Can't start parsing from rule \"" + options.startRule + '".');
            peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
        }
        var globalSteps = 0;
        if (peg$result = peg$startRuleFunction(), peg$result !== peg$FAILED && peg$currPos === input.length) return peg$result;
        throw peg$result !== peg$FAILED && peg$currPos < input.length && peg$fail({
            type: "end",
            description: "end of input"
        }), peg$buildException(null, peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
    }
    return peg$subclass(peg$SyntaxError, Error), peg$DefaultTracer.prototype.trace = function(event) {
        function log(event) {
            function repeat(string, n) {
                var i, result = "";
                for (i = 0; n > i; i++) result += string;
                return result;
            }
            function pad(string, length) {
                return string + repeat(" ", length - string.length);
            }
            "object" == typeof console && console.log(event.location.start.line + ":" + event.location.start.column + "-" + event.location.end.line + ":" + event.location.end.column + " " + pad(event.type, 10) + " " + repeat("  ", that.indentLevel) + event.rule);
        }
        var that = this;
        switch (event.type) {
          case "rule.enter":
            log(event), this.indentLevel++;
            break;

          case "rule.match":
            this.indentLevel--, log(event);
            break;

          case "rule.fail":
            this.indentLevel--, log(event);
            break;

          default:
            throw new Error("Invalid event type: " + event.type + ".");
        }
    }, {
        SyntaxError: peg$SyntaxError,
        DefaultTracer: peg$DefaultTracer,
        parse: peg$parse
    };
}();