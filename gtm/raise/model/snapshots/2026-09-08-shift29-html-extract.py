#!/usr/bin/env python3
"""Strip <script>, <style>, comments and tags from an HTML file; unescape
entities; collapse whitespace; print one non-empty line per block. Used by
the shift-29 glossary receipt. Blind spot: it keeps text in the page's
navigation, footer and any hidden element -- it cannot tell a glossary
entry from a menu item; the receipt cites line numbers of the OUTPUT and
the reader grades whether the line is a definition."""
import html, re, sys
raw = open(sys.argv[1], encoding="utf-8", errors="replace").read()
raw = re.sub(r"(?is)<(script|style|noscript)\b.*?</\1\s*>", " ", raw)
raw = re.sub(r"(?s)<!--.*?-->", " ", raw)
raw = re.sub(r"(?i)<\s*(br|/p|/div|/li|/h[1-6]|/tr|/dt|/dd|/section|/article)\b[^>]*>", "\n", raw)
raw = re.sub(r"(?s)<[^>]+>", " ", raw)
text = html.unescape(raw)
for line in text.split("\n"):
    line = re.sub(r"[ \t\r\f\v ]+", " ", line).strip()
    if line:
        print(line)
