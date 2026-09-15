Add the "Wheel" component from Bencho to my project.

It is MIT licensed — bencho.dev/licence. Please:

1. Create the component at a sensible path for this
   project, named Wheel, from the source below.
2. It needs nothing beyond React.
3. Add the CSS to the project's stylesheet.

4. THE PART THAT NEEDS YOUR JUDGEMENT. The CSS reads
   these custom properties and does not define them:

     --fill-on
     --font-ui
     --ink

   They are Bencho's design tokens. Map each one to
   whatever this project already uses for the same
   job — its own ink, ground, surface and UI font —
   rather than defining them as new globals. If the
   project has no equivalent, define it locally on
   the component's own root so nothing leaks out.
   Anything ending -rgb wants three bare numbers,
   because the CSS builds rgba() from it.

Keep the comments. They say why the numbers are what
they are, and they are most of what makes this worth
copying rather than rewriting.

--- Wheel.tsx ---

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/* ── the wheel · a draggable instrument ring ────────────────
   60 ticks over a 300° sweep with a 60° gap at the bottom.
   The value is a spring, not a transition, so it overshoots
   and settles. Active ticks carry a slow travelling wave
   whose amplitude scales with the reading. Drag the ring. */

const N = 60;
const START = 120;   // degrees, bottom left
const SWEEP = 300;   // degrees, clockwise to bottom right
const CX = 100;
const CY = 100;
const R = 52;        // inner radius of the tick band

const rad = (d: number) => (d * Math.PI) / 180;
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

/* ── FOUR BANDS, AND THE COLOUR LIVES IN CSS ───────────────
   It was three, and their hexes were written here: amber under
   25, blue over 80, a green between. Two things were wrong
   with that and one thing was missing.

   Wrong first: a hard hex cannot answer the theme. Every other
   signal colour on this bench is a token that swaps with the
   ramp, and these three stayed put — the green in particular
   was #16a34a, a text green, where the balance chart had
   already worked out that a THIN STROKE needs a brighter one
   to read as the same colour. These ticks are 2px.

   So this returns a NAME and the stylesheet holds the values,
   which is how the wheel gets both a light and a dark palette
   and how its green can be the chart's green without either
   file naming a number the other has to match.

   And the thing missing: red. "Critical" was amber, which is
   the colour of a warning rather than of a problem — there was
   nothing left to say when it got worse. So the bottom splits:
   under 12 is red and means it, 12 to 25 is the amber warning
   it always was.

   The labels stay even though nothing renders them. They are
   what the four numbers MEAN, and a band called "low" reads
   better at the call site than `v < 25`. */
function stateFor(v: number) {
  if (v < 12) return { label: "Critical", key: "crit" };
  if (v < 25) return { label: "Low", key: "low" };
  if (v > 80) return { label: "High", key: "high" };
  return { label: "Normal", key: "ok" };
}

/* ── inlined from ./Gooey ──────────────────────── */
/* ══ Gooey ════════════════════════════════════════════════
   What is left of the two library-surfaced components that
   used to live here: the measurement every liquid-gooey group
   on the bench needs. Liquid tabs and the Plus menu are gone;
   this is the part of them that turned out to be the reusable
   half, and Balance, the Selection list, the Humidity wheel
   and the Sleep dial all still call it.

   ── what the library actually does ──────────────────────
   The usual gooey effect runs blur + alpha-contrast over your
   real UI, which is why it is normally confined to decorative
   circles: text goes soft, images smear, and the contrast step
   eats shadows. liquid-gooey splits it in two. An SVG layer
   carries a silhouette of your elements and takes the whole
   filter; your actual DOM rides crisp on top of it, untouched.
   Same liquid, none of the tax — and it is the same discipline
   our own filter needs, since text under an alpha threshold
   loses its edges and then itself.

   ── the two patterns, which are not interchangeable ─────
   MORPH gives the library the position: pass x/y and it
   animates the element and the liquid together, so pieces that
   separate stay bridged until the goo can no longer hold them.
   The split IS the effect.

   MOVE gives the position to you: move the element however you
   like and the surface trails it as liquid rubber with a
   droplet tail. A filter has no memory of motion — a shape
   that crossed two pixels and one that crossed the whole track
   arrive identical — and this is the part that fixes that. */

/* ── the zoom correction, applied to someone else's SVG ──────
   liquid-gooey measures its items with getBoundingClientRect
   and draws them as SVG user units. Those are the same number
   only while no ancestor is scaled — and on this bench every
   component sits inside a scaled card, so the transform lands
   twice and the silhouette drifts from its element in
   proportion to both the scale and the distance from the
   origin. Measured: 0.1px at scale 1, 22px at 1.09, 124px at
   1.4.

   Everything the library computes is in screen px, so scaling
   its layer by 1/k converts the whole coordinate space back to
   layout px in one move, and the card's own transform then
   renders it correctly. Same k = rect.width / offsetWidth the
   rest of the bench uses.

   MOVE ONLY. Morph positions its items with a CSS transform on
   a real wrapper, in layout px, which scales correctly on its
   own — apply this there and you over-correct: the silhouette
   comes out 1/k the size of its button, so the blob is smaller
   than the element and every icon looks off-centre inside it.
   Measured on the plus menu: button 58px, blob 46px, and up to
   10px of offset. Without it, 58 and 58, dead on. */
function useGooScale() {
  const box = useRef<HTMLDivElement | null>(null);
  const [k, setK] = useState(1);
  useLayoutEffect(() => {
    const el = box.current;
    if (!el) return;
    const read = () => {
      const r = el.getBoundingClientRect();
      const next = (r.width / (el.offsetWidth || r.width)) || 1;
      setK((was) => (Math.abs(was - next) < 0.001 ? was : next));
    };
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    /* the card also rescales when the overlay opens, which is a
       transform change and not a resize */
    const t = window.setInterval(read, 500);
    return () => { ro.disconnect(); window.clearInterval(t); };
  }, []);
  return { box, k };
}

export default function Humidity({
  /* how finely the band is cut. Few and it reads as a scale,
     many and it reads as a surface. */
  ticks = N,
  /* how much of the circle the band covers, the rest being the
     gap at the bottom */
  sweep = SWEEP,
  /* the travelling wave the lit ticks carry. At 0 the ring is
     a static gauge; this is the one number that decides
     whether it looks alive. */
  wave: waveAmp = 2.6,
}: {
  ticks?: number;
  sweep?: number;
  wave?: number;
}) {
  const [target, setTarget] = useState(62);
  const [display, setDisplay] = useState(62);
  const [dragging, setDragging] = useState(false);
  /* the library measures in screen pixels and every card on
     this bench is drawn at a fraction — see Gooey.tsx */
  const { box, k } = useGooScale();

  const cur = useRef(62);
  const vel = useRef(0);
  const wave = useRef(0);
  const raf = useRef<number | undefined>(undefined);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  /* spring toward the target, plus a free running wave clock */
  useEffect(() => {
    let last = performance.now();
    const tick = (t: number) => {
      const dt = Math.min(34, t - last) / 16.67;
      last = t;

      if (reduced) {
        cur.current = target;
      } else {
        const k = 0.16;   // stiffness
        const d = 0.76;   // damping
        vel.current += (target - cur.current) * k * dt;
        vel.current *= Math.pow(d, dt);
        cur.current += vel.current * dt;
        if (Math.abs(target - cur.current) < 0.02 && Math.abs(vel.current) < 0.02) {
          cur.current = target;
          vel.current = 0;
        }
      }

      wave.current += dt * 0.055;
      setDisplay(cur.current);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [target, reduced]);

  /* pointer angle to value */
  const fromPointer = (e: React.PointerEvent) => {
    const svg = svgRef.current;
    if (!svg) return;
    const b = svg.getBoundingClientRect();
    const x = ((e.clientX - b.left) / b.width) * 200 - CX;
    const y = ((e.clientY - b.top) / b.height) * 200 - CY;
    let deg = (Math.atan2(y, x) * 180) / Math.PI;
    if (deg < 0) deg += 360;
    let rel = deg - START;
    if (rel < 0) rel += 360;
    if (rel > sweep) rel = rel < sweep + 30 ? sweep : 0;  // snap across the gap
    const next = Math.round((rel / sweep) * 100);
    /* the reading is the pitch: the ring sounds like what it
       is showing, and dragging it round is a slide */
    if (next !== target) setTarget(next);
  };

  const st = stateFor(display);
  const f = clamp(display, 0, 100) / 100;
  const amp = reduced ? 0 : 1 + (display / 100) * waveAmp;

  const band = Array.from({ length: ticks }, (_, i) => {
    const tf = i / (ticks - 1);
    const on = tf <= f + 0.001;
    const behind = f - tf;                         // >0 when the tick trails the head
    const comet = on && behind < 0.14 ? (1 - behind / 0.14) * 8 : 0;
    const undulate = on ? Math.sin(wave.current + i * 0.5) * amp : 0;
    /* ── 23 lit against 21 unlit, and it was 26 ──────────────
       Length is the coarse signal here and OPACITY is the fine
       one — the lit ticks run 0.42 to 1 depending on how far
       behind the head they are, which is the part carrying the
       reading. At 26 the length was saying it too, loudly, and
       the ring read as a solid block with a ragged edge rather
       than as a band of marks.

       24 and not 23, and the difference is the WAVE. The lit
       ticks undulate by about 2.6 either way at the default,
       so a base of 23 put the trough at 20.4 against an unlit
       21 — some lit ticks were SHORTER than unlit ones, and a
       band whose edge dips below the ground it sits on reads
       as noise rather than as a run. 24 keeps the trough at
       21.4, just clear of it. Measured both.

       The comet came down with it: at 8 the head still stands
       out from the band by more than twice the base
       difference, which is what makes it a head. */
    const len = (on ? 24 : 21) + comet + undulate;
    const a = rad(START + tf * sweep);
    const cos = Math.cos(a);
    const sin = Math.sin(a);
    return {
      key: i,
      x1: CX + cos * R,
      y1: CY + sin * R,
      x2: CX + cos * (R + len),
      y2: CY + sin * (R + len),
      on,
      opacity: on ? 0.42 + (1 - clamp(behind, 0, 1)) * 0.58 : 1,
    };
  });

  return (
    /* ── NO PANE ────────────────────────────────────────────
       Same move the sleep dial made, and for the same reason:
       a ring of ticks is already a shape, and putting a
       frosted rectangle round it only said "this is a
       component" to a page that has already said so with a
       card.

       What the pane WAS doing, quietly, was supplying
       contrast — see the tick opacity below. */
    <div className="hum" ref={box} data-state={st.key} style={{ "--k": k } as React.CSSProperties}>
      <div className="hum-dial">
      <svg
        ref={svgRef}
        className="hwheel"
        viewBox="0 0 200 200"
        data-dragging={dragging}
        role="slider"
        tabIndex={0}
        aria-label="Humidity"
        aria-valuenow={Math.round(display)}
        aria-valuemin={0}
        aria-valuemax={100}
        onPointerDown={(e) => {
          e.stopPropagation();
          setDragging(true);
          (e.target as Element).setPointerCapture?.(e.pointerId);
          fromPointer(e);
        }}
        onPointerMove={(e) => dragging && fromPointer(e)}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowUp") setTarget((v) => clamp(v + 2, 0, 100));
          if (e.key === "ArrowLeft" || e.key === "ArrowDown") setTarget((v) => clamp(v - 2, 0, 100));
        }}
      >
        {band.map((t) => (
          <line
            key={t.key}
            x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
            /* a style and not the `stroke` attribute: an
               attribute cannot hold a var(), and the band's
               colour is one — see stateFor and the .hum block
               in the stylesheet */
            style={{ stroke: t.on ? "var(--hum-lit)" : "currentColor" }}
            /* 0.24, not 0.13. The frosted pane used to sit a
               step lighter than the wall and an unlit tick had
               that to be dark against; straight onto the card's
               grey it measured about 1.2:1 and simply was not
               there. Same correction the sleep dial needed. */
            strokeOpacity={t.on ? t.opacity : 0.24}
            strokeWidth={2}
            strokeLinecap="round"
          />
        ))}
      </svg>

      <div className="hwheel-readout">
        <span className="hum-figure">{Math.round(display)}</span>
        <span className="hum-unit">%</span>
      </div>
      </div>

    </div>
  );
}

--- css ---

/* ── humidity ──────────────────────────────────────────── */
/* ── humidity wheel ─────────────────────────────────────────
   No pane. The wheel and its pill, stacked, standing directly
   on whatever the section is made of — the same arrangement
   the sleep dial uses, and they should read as a pair. */
/* ── the wheel's four bands ─────────────────────────────────
   Humidity.tsx names the band and this holds the colour, so
   the palette can answer the theme — the hexes used to be
   written in the component and could not.

   The green is the BALANCE CHART'S green, not the site's --ok,
   and for the reason written up on .bal-plot: --ok is a text
   green, and a 2px tick is a thin stroke, which always reads
   darker and duller than a block of the same colour. Two
   blocks drawing thin lines in green should be drawing the
   same one.

   Red under 12 and amber from 12 to 25 — the band used to be
   one amber "Critical", which is the colour of a warning
   rather than of a problem, and left nothing to say when it
   got worse. Blue at the top is unchanged: high humidity is
   not an alarm, it is the other end. */
.hum {
  --hum-lit: #12b055;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  font-family: var(--font-ui);
  color: var(--fill-on, var(--ink));}

.hum[data-state="crit"] { --hum-lit: #e8443a; }

.hum[data-state="low"] { --hum-lit: #d97706; }

.hum[data-state="high"] { --hum-lit: #2563eb; }

/* the same lift the chart takes on a dark page, and the warm
   pair with it: a red and an amber picked for white sit heavy
   on near-black, where the ticks have no mass to carry them */
[data-theme="dark"] .hum { --hum-lit: #3ce085; }

[data-theme="dark"] .hum[data-state="crit"] { --hum-lit: #ff6b5e; }

[data-theme="dark"] .hum[data-state="low"] { --hum-lit: #f0a02a; }

[data-theme="dark"] .hum[data-state="high"] { --hum-lit: #5b9bff; }

.hum-dial { position: relative; width: 250px; height: 250px; }

.hwheel {
  position: absolute;
  inset: 0;
  width: 250px;
  height: 250px;
  cursor: grab;
  touch-action: none;
  outline: none;}

.hwheel[data-dragging="true"] { cursor: grabbing; }

.hwheel:focus,
.hwheel:focus-visible {
  outline: none !important;
  box-shadow: none;
  -webkit-tap-highlight-color: transparent;}

.hwheel-readout {
  position: absolute;
  left: 0; right: 0;
  /* centred on the dial rather than measured from the pane's
     top, which is what 152px was */
  top: 50%;
  translate: 0 -50%;
  display: flex; align-items: baseline; justify-content: center; gap: 2px;
  pointer-events: none;}

/* Inter, not DM Mono — tabular figures give the stable advance
   the mono face was there for, and this number counts as you
   drag. Same swap the sleep dial made. */
.hum-figure {
  font-family: var(--font-ui);
  font-size: 34px;
  font-weight: 500;
  /* -0.045, not -0.03. At 34px the figures are large enough to
     carry tighter tracking than body copy wants, and the unit
     is set at the same size now — so the pair reads as one
     word rather than as a number with a symbol after it. The
     unit takes the same value for exactly that reason. */
  letter-spacing: -0.045em;
  line-height: 1;
  font-variant-numeric: tabular-nums;}

/* ── the unit is part of the number ────────────────────────
   14px at 35% opacity beside a 34px figure was a footnote to
   it: a caption explaining what the digits meant, in a
   component where the digits and the ring are the only two
   things there. At the figure's own size and full ink the two
   read as ONE reading — "62%" — which is what it is. The
   margin goes with it; at matching sizes the pair needs no
   more air than the readout's own 2px gap. */
.hum-unit {
  font-family: var(--font-ui);
  font-size: 34px;
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 1;}
