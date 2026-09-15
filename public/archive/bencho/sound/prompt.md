Add the "Now playing" component from Bencho to my project.

It is MIT licensed — bencho.dev/licence. Please:

1. Create the component at a sensible path for this
   project, named NowPlaying, from the source below.
2. Install what it needs: npm i lucide-react
3. Add the CSS to the project's stylesheet.

4. THE PART THAT NEEDS YOUR JUDGEMENT. The CSS reads
   these custom properties and does not define them:

     --card
     --font-num
     --font-ui
     --ink
     --ink-3
     --ink-4
     --ink-rgb
     --on-ink
     --on-slab
     --pane
     --pane-edge
     --slab
     --surface-2
     --surface-3

   They are Bencho's design tokens. Map each one to
   whatever this project already uses for the same
   job — its own ink, ground, surface and UI font —
   rather than defining them as new globals. If the
   project has no equivalent, define it locally on
   the component's own root so nothing leaks out.
   Anything ending -rgb wants three bare numbers,
   because the CSS builds rgba() from it.

5. COVER is a stub
   — Bencho's own pictures are not licensed to
   travel. Point it at this project's images, or
   leave the placeholder and tell me.

Keep the comments. They say why the numbers are what
they are, and they are most of what makes this worth
copying rather than rewriting.

--- NowPlaying.tsx ---

import { useEffect, useRef, useState } from "react";
import { Heart, SkipBack, SkipForward } from "lucide-react";

/* COVER was Bencho's own pictures, which are not licensed
   to travel. Point this at yours. */
const COVER: string = "";

/* ══ Sound ════════════════════════════════════════════════
   A now-playing pill that opens into a player.

   ONE NUMBER IS THE STATE. There is a single spring running
   0 → 100, and every position, size, radius and type size
   below is read off it. Nothing has a transition of its own
   and nothing is on a clock — which is the whole reason the
   transformation reads as one object changing rather than as
   several elements that were told to move at the same time.
   With eight CSS transitions there are eight chances for one
   of them to arrive early; with one spring there are none.

   THE COVER IS THE HINGE. It is the only thing on the pill
   big enough to be recognised, so it is the thing the eye
   tracks, and it never disappears or crossfades — it travels
   from a 44px square at the left of a bar to a 220px square
   at the top of a card. Everything else takes its lead from
   where the cover went.

   The width never changes. A pill that also got wider would
   be growing in two directions at once, and the second one
   adds nothing: what a player does when it opens is show you
   more, downward. Holding the width still also means the
   right-hand controls only have to travel, not resize and
   travel — they slide in from the end of the bar and settle
   into a row under the art. */

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const mix = (a: number, b: number, t: number) => a + (b - a) * t;

/* ── eased, NOT sprung ─────────────────────────────────────
   The bench's shared useSpring is the wrong tool for this one
   thing, and the reason is the corner. A spring past its
   target takes every value derived from it along — measured
   at the tuned default it reached 492 against a target of
   404, and the radius went with it, dipping under 26 and
   coming back. That is a wobble, not a bounce, and it is the
   same mistake the create menu made and had removed.

   So: a curve that is quick off the mark and lands without
   ever passing the number it is going to. Quart-out is
   cubic-bezier(0.22, 1, 0.36, 1) in all but name, which is
   what every other one-shot morph on this bench uses.

   It reads its start from wherever it currently IS, so
   pressing again mid-flight turns the object around rather
   than snapping it to an end it never reached. */
const BASE = 460;

const QUART = (t: number) => 1 - (1 - t) ** 4;
/* the swell's clock — see the note where it is used */
const FLAT = (t: number) => t;
/* in AND out, for the one thing here that is a round trip
   between two shapes rather than an arrival at one */
const SWING = (t: number) =>
  t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2;

function useTween(to: number, ms: number, instant = false, ease = QUART) {
  const [at, setAt] = useState(to);
  const cur = useRef(to);
  const raf = useRef(0);

  useEffect(() => {
    if (instant) {
      cur.current = to;
      setAt(to);
      return;
    }
    const from = cur.current;
    if (from === to) return;
    const t0 = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / ms);
      cur.current = from + (to - from) * ease(t);
      setAt(cur.current);
      raf.current = t < 1 ? requestAnimationFrame(step) : 0;
    };
    raf.current = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf.current);
      raf.current = 0;
    };
  }, [to, ms, instant, ease]);

  return at;
}

/* One width for both states, and the frame's width too. */
const W = 260;
/* the bar, and the card. The frame is sized to the CARD —
   the wall fits a component by its bounding box, so a frame
   that grew would rescale the whole card mid-morph. */
/* 78, not 70. The track needs a band of its own at the foot —
   at 70 it cleared the sleeve by seven pixels, which reads as
   crowding it rather than as a line of its own. */
const SHUT = 78;
/* ── the card is the bar, grown ────────────────────────────
   It used to put a 232px sleeve across the top with the words
   underneath — a different LAYOUT at the far end of the morph,
   which meant the words had to travel from beside the cover to
   below it while the cover itself moved and quadrupled. Three
   things rearranging at once is a transition you watch rather
   than an object you opened.

   So the arrangement is the same at both ends: sleeve left,
   words beside it, and the only thing that MOVES between the
   two is the transport — from the end of the row down to the
   middle, which is the one change worth reading. Everything
   else simply gets bigger.

   398 to 218 as a side effect, and that is not a small one:
   the wall fits a component by its bounding box, so the frame
   is what decided how small the bar was drawn. At 260x398 the
   longest side was the height and everything rendered at 0.64.
   At 260x218 the width wins and it draws at full size.

   Its HEIGHT is declared under the stack it falls out of. */

/* ── ONE margin, both states ───────────────────────────────
   Not one per state. It was 10 on the bar and 16 on the card,
   which meant the sleeve, the track and the transport all
   slid inward as the thing opened — a fourth motion nobody
   asked for, on top of the three that are the point. The
   object grows; its frame does not move.

   Everything answers to it: the sleeve's inset, the rail's
   inset, where the transport row ends, and the room under it.
   These used to be four numbers agreeing by luck — 8 here, 10
   there, 16 for the vertical — which is also why nothing
   looked tight.

   The sleeve is square, so one number is its width and its
   height at each end — and on the card it is the number the
   whole stack below is measured from. */
const PAD = 10;
const ART = { s: [40, 64] } as const;

/* ── the two corners, and they are CONCENTRIC ──────────────
   The box's radius is the sleeve's plus the margin between
   them. That is not a preference, it is what makes a corner
   hug what is inside it: two curves offset by a constant
   distance stay parallel, and any other pair pinches at 45°.

   32 was picked by eye and it was 6 too many — the card's
   curve swept wider than the sleeve's and left the artwork's
   top-left sitting inside a bend that had already turned.
   26 = 16 + 10 hugs it, and the bar's 20 = 10 + 10 does the
   same at its own size.

   ── AND THAT IS WHY IT CAN BE A KNOB AGAIN ────────────────
   It was a control once and it was removed, because what it
   set was the BOX's corner on its own: turn it down and the
   card squared off around a sleeve that had not, turn it up
   and the card's curve swept wide of the picture inside it.
   Every setting but one was wrong, so the honest fix was to
   delete the knob and keep the one.

   What the knob sets now is the SLEEVE, and the box is
   derived from it — `sleeve + PAD`, the same rule as before.
   So the two corners stay concentric at every value, and
   there is no setting that pinches. The knob moves a
   relationship rather than one of its two halves.

   It runs to 32 and stops there because that is where the
   64px sleeve becomes a circle; there is nothing past it but
   the same shape with a bigger number. The bar's sleeve
   scales by the ratio of the two squares, so it reaches its
   own circle at exactly the same setting. Square at one end
   of the slider, pill at the other, and the default sits
   where it always was. */
const CORNER = 16;
const CORNER_MAX = 32;

/* ── the card's stack, measured from the sleeve down ───────
   Each gap is the distance from the thing above it, and the
   card's HEIGHT falls out of the sum rather than being a
   number somebody kept in step by hand. Change the sleeve and
   the rail, the times, the transport and the foot all follow.

   The bar needs none of this: it is one row and a track, and
   both are placed off the same margin. */
const RAIL_GAP = 22;
const CLOCK_GAP = 8;   /* also .snd-bar's own gap */
const OPS_GAP = 16;
const RAIL_H = 3;
const CLOCK_H = 10;
const LEAD = 46;       /* the play button, opened */

const RAIL_Y = PAD + ART.s[1] + RAIL_GAP;
const OPS_Y = RAIL_Y + RAIL_H + CLOCK_GAP + CLOCK_H + OPS_GAP + LEAD / 2;
/* the transport's own bottom, and one more margin under it */
const OPEN = Math.round(OPS_Y + LEAD / 2 + PAD);

const TOTAL = 214;

/* ── the play mark is DRAWN, not swapped ───────────────────
   Two icons exchanged is a cut, however short you make the
   crossfade, and a transport button is the one control here
   you press more than once — a cut you see forty times is the
   thing you end up looking at.

   So both marks are the SAME two quadrilaterals, and the
   difference between them is where eight points are. The
   pause is a pair of bars; the play is that pair with the
   inner edges pulled to the middle and collapsed to a point,
   which is a triangle split down its own axis. Nothing
   appears and nothing leaves — the shapes are continuous the
   whole way, so there is no frame where the button is
   ambiguous about what it does.

   The points are lucide's own, so it sits at the same weight
   as the skip glyphs beside it: bars at x 6..10 and 14..18,
   a triangle from 6.5 to 20, stroked 2 with a round join,
   which is where the softened corners come from.

   Wound the same way in both — top-left, top-right,
   bottom-right, bottom-left — or the halves would turn
   inside out on the way across. The play's right half is a
   triangle written as a quad with its two right points on
   top of each other. */
const PAUSE_L = [6, 4, 10, 4, 10, 20, 6, 20] as const;
const PLAY_L = [6.5, 4, 13.25, 8, 13.25, 16, 6.5, 20] as const;
const PAUSE_R = [14, 4, 18, 4, 18, 20, 14, 20] as const;
const PLAY_R = [13.25, 8, 20, 12, 20, 12, 13.25, 16] as const;

const quad = (a: readonly number[], b: readonly number[], t: number) => {
  let d = "";
  for (let i = 0; i < 8; i += 2)
    d += `${i ? "L" : "M"}${mix(a[i], b[i], t).toFixed(2)} ${mix(
      a[i + 1],
      b[i + 1],
      t,
    ).toFixed(2)}`;
  return `${d}Z`;
};

function Mark({
  playing,
  size,
  still,
}: {
  playing: boolean;
  size: number;
  still: boolean;
}) {
  /* 0 is the pause, 1 is the play. Eased both ends, unlike
     the box's own move: this one leaves a shape as well as
     arriving at one, and a curve that only softens the
     landing snaps out of the shape it was. */
  const t = useTween(playing ? 0 : 1, 300, still, SWING);

  /* ── the goo ─────────────────────────────────────────────
     Zero at both ends and one in the middle, so everything
     below is a bulge on the way rather than a difference
     between the two states — press twice and it lands on
     exactly what it started as.

     Three things ride it, and they are all the same idea:
     the mark squashes across as it stretches up, the two
     halves lean into each other until they touch, and the
     whole thing tips a few degrees and comes back level. A
     shape that changes size without ever changing volume is
     what makes something read as soft rather than as
     redrawn. The tilt swaps sign with the direction, so
     pausing is not just playing run backwards. */
  const goo = Math.sin(clamp(t, 0, 1) * Math.PI);
  const pull = 1.6 * goo;
  const tip = (playing ? -9 : 9) * goo;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
      strokeLinecap="round"
      /* per cent, not pixels: this is the element's own box
         and the box is whatever size the morph is at. */
      style={{
        transformOrigin: "50% 50%",
        transform: `rotate(${tip}deg) scale(${1 - 0.13 * goo}, ${1 + 0.11 * goo})`,
      }}
    >
      <path d={quad(PAUSE_L, PLAY_L, t)} transform={`translate(${pull} 0)`} />
      <path d={quad(PAUSE_R, PLAY_R, t)} transform={`translate(${-pull} 0)`} />
    </svg>
  );
}

/* the heart's box, and the room the words give up for it */
const LIKE = 30;

const clock = (s: number) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

/* ── inlined from ./motion ──────────────────────── */
/* ── elastic, as numbers a person can hold ─────────────────
   Several blocks here are the same idea in different clothes:
   something travels, stretches on the way, and overshoots
   when it lands. Their character lives in a duration and in
   one control point of a bezier — which is exactly the kind
   of thing nobody should have to name in order to tune.

   So the outside of every elastic knob is 0..100 and the
   inside is real units, and **50 is always what the component
   was already tuned to**. Turn every knob on the bench to the
   middle and nothing has changed. That is what makes these
   safe to expose: the default is not a number somebody has to
   remember, it is the middle of the slider.

   Both ends have to be shippable, which is the constraint
   that actually shapes these curves. The ranges below stop
   where the effect stops being the thing it is — a bar that
   moves in 40ms still reads as a bar snapping to a slot; one
   that moves in 20ms reads as broken. */

/* How long it takes, slower to faster, as a multiplier on
   whatever the component's own tuned duration is. 0 is a
   little over half again as slow, 100 is two and a half times
   as fast, 50 is exactly 1. */
const rate = (speed: number) => 1.6 - (speed / 100) * 1.2;

/* How hard it lands.

   In a cubic-bezier the second control point's y is the whole
   of an overshoot: at 1 the thing stops dead on its target,
   and past 1 it travels beyond and comes back. Everything
   else in the curve is the approach and stays put.

   `tuned` is the y this component was drawn with, so 50
   returns it unchanged and the slider is centred on the
   design rather than on some shared average. */
const overshoot = (bounce: number, tuned: number) =>
  Number((1 + (bounce / 100) * (tuned - 1) * 2).toFixed(3));

/* the same, ready to drop into a transition */
const curve = (bounce: number, tuned: number, x1 = 0.28, x2 = 0.36) =>
  `cubic-bezier(${x1}, ${overshoot(bounce, tuned)}, ${x2}, 1)`;

/* ── inlined from ./spring ──────────────────────── */
/* ── one spring, for everything that settles ───────────────
   The maths was already on this bench twice, copied by hand:
   Humidity's wheel and Brightness's column both accumulate
   velocity toward a target, damp it, and snap when both the
   delta and the velocity fall under 0.02. Two copies is a
   coincidence; five would be a policy, so it comes out here
   before the elastic blocks are written against it.

   The two shipped copies are deliberately NOT refactored onto
   this. They work, they are tuned, and rewriting the innards
   of two live components to prove a point about duplication
   is how a good afternoon becomes a bad one. This is the one
   new code uses.

   Frames, not milliseconds. `dt` is expressed in sixtieths of
   a second and the damping is RAISED to it rather than
   multiplied by it, so a dropped frame decays the same amount
   of energy as the two frames it replaced. Multiplying is the
   version that makes a spring behave differently on a busy
   page, which is the hardest kind of bug to see.

   The loop parks itself the moment the value has settled.
   CLAUDE.md is not complimentary about the one permanent
   requestAnimationFrame already on this bench and there is no
   case for five more. */

/* 0..100 into the two numbers a spring actually has.

   50 is what Humidity and Brightness were tuned at, which is
   the rule every elastic knob on this bench follows — see
   lab/motion. Turn the panel to the middle and nothing has
   changed.

   Both ends have to be usable, which is what fixes the range:
   at 0 it is slow and heavy and still arrives, at 100 it is
   quick with a visible overshoot, and nowhere in between does
   it ring for longer than it takes to read. */
/* The pair is chosen by DAMPING RATIO and then written back
   as stiffness and decay, because the ratio is the thing a
   person is actually setting and the two numbers on their own
   do not say what they add up to.

     zeta = -ln(d) / (2 * sqrt(k))

   The first version of this ran 0.06..0.26 stiffness against
   0.93..0.74 decay, which reads as a sensible spread and is
   not one: it puts zeta between 0.15 and 0.16 across the
   WHOLE range, so every setting overshot by about sixty per
   cent and the knob only changed how fast it did it. Pull's
   return went 130px past its own resting position and lifted
   the content off the top of the card.

     0   → zeta ~0.85, heavy, arrives without a ring
     50  → zeta ~0.41, near where Humidity and Brightness sit
     100 → zeta ~0.20, lively, two visible rebounds

   Both ends shippable, which is the constraint that fixed the
   numbers rather than taste. */
const springOf = (tune: number) => ({
  /* stiffness: how hard it is pulled toward the target */
  k: 0.08 + (tune / 100) * 0.16,
  /* decay, per frame: how much of the velocity survives */
  d: 0.62 + (tune / 100) * 0.2,
});

/* Units matter. The snap threshold is absolute, so a caller
   works in pixels or in 0..100 — a spring driven over 0..1
   would be "settled" before it had visibly moved. */
function useSpring(target: number, tune = 50, instant = false) {
  const [at, setAt] = useState(target);
  const cur = useRef(target);
  const vel = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    if (instant) {
      cur.current = target;
      vel.current = 0;
      setAt(target);
      return;
    }
    const { k, d } = springOf(tune);
    let prev = 0;
    const tick = (t: number) => {
      const dt = prev ? clamp((t - prev) / 16.67, 0, 2.5) : 1;
      prev = t;
      vel.current += (target - cur.current) * k * dt;
      vel.current *= Math.pow(d, dt);
      cur.current += vel.current * dt;
      if (Math.abs(target - cur.current) < 0.02 && Math.abs(vel.current) < 0.02) {
        cur.current = target;
        vel.current = 0;
        setAt(target);
        raf.current = 0;
        return;
      }
      setAt(cur.current);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf.current);
      raf.current = 0;
    };
    /* `tune` sits here beside `target` for the reason
       Brightness spells out: the loop closes over it, so
       without it a knob turned mid-flight would do nothing
       until something else restarted the effect. Restarting
       picks up from the refs, so it continues rather than
       snapping. */
  }, [target, tune, instant]);

  return at;
}

/* Read once, the way the wheel and the pill nav do. A
   preference, not a live input. */
const stillness = () =>
  typeof window !== "undefined" &&
  !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function Sound({
  /* how quickly the shape changes, 0..100 — 50 is the tuned
     460ms, and neither end is broken: 736 reads as deliberate
     and 184 as brisk. */
  morph = 50,
  /* the sleeve's corner on the card, 0..32, and the box's
     corner follows it — see the note above */
  corner = CORNER,
}: { morph?: number; corner?: number } = {}) {
  const skin = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [going, setGoing] = useState(false);
  const [liked, setLiked] = useState(false);
  const [at, setAt] = useState(52);
  const still = stillness();

  const dur = BASE * rate(clamp(morph, 0, 100));

  /* the sleeve's corner at each end, and the box's from it.
     The bar's sleeve is the smaller square, so it takes the
     same fraction of its own side — a 16 on a 64 and a 10 on
     a 40 are the same corner at two sizes. */
  const cr = clamp(corner, 0, CORNER_MAX);
  const artR = [(cr * ART.s[0]) / ART.s[1], cr] as const;

  /* ── the offset FADES IN, it is not a constant ───────────
     `outer = inner + margin` is the right rule for a corner
     hugging what is inside it, and it was applied flat: ten
     pixels of offset at every setting, including zero. Which
     meant the bottom of the slider drew a perfectly sharp
     picture inside a card that was still visibly rounded —
     geometrically concentric and, to look at, two different
     decisions in the same object. The rule was answering a
     question nobody had asked there: at radius zero there is
     no curve to stay parallel to.

     So the offset is scaled by how far up the slider you are,
     and reaches its full ten by the default. Below that the
     two corners converge until they are both square together;
     above it the rule takes over, which is where it earns its
     keep — a mismatch at 32 pinches, a mismatch at 2 is just
     a card that did not follow.

     The default and the top of the range are untouched: at
     16 the offset is exactly 10 and at 32 it is capped there,
     so the shipping shape is the shape it always was. */
  const off = PAD * Math.min(1, cr / CORNER);
  const boxR = [artR[0] + off, artR[1] + off] as const;

  /* 0 shut, 1 open. Tweened once, read everywhere. */
  const p = useTween(open ? 1 : 0, dur, still);

  /* ── the swell, and why it is a SECOND number ────────────
     The bench had this as a spring once and it was removed,
     for the reason written at the top of this file: a value
     past its target takes everything derived from it along,
     and what is derived here is the corner. The radius dipped
     under its own end value and came back — the box arrived,
     and then its corner arrived. That is a wobble.

     So the bounce is not put back into `p`. `p` stays
     monotonic and the composition stays internally consistent
     at every frame — the sleeve, the box and the margin
     between them are always in the ratio that makes the
     corners concentric.

     What bounces is the whole object, uniformly. A scale
     takes the box, the sleeve, the corners and the type
     together, so nothing can get out of step with anything
     else: it is the same picture, briefly larger. All the
     life, none of the wobble.

     It rides its own LINEAR clock rather than `p`, because
     `p` is quart-out and near its end for most of the move —
     a swell read off it would spike in the first two frames
     and be flat for the rest. And the peak is pushed late
     (^1.5 puts it at 0.63) so the object gathers on the way
     out and releases as it lands, which is what reads as a
     bounce rather than as a pulse.

     Zero at BOTH ends by construction, so it costs the
     resting shape nothing — sin(0) and sin(π) are the same
     number.

     ── ON THE CLOSE ONLY ────────────────────────────────────
     It grew on the way out too, and that was one motion too
     many. Opening already HAS its event: the box goes from 78
     to 189 and that is the whole thing you are meant to
     watch. A scale on top of it is a second size change
     running at the same time in the same direction, and two
     of those do not add up to more life — they read as the
     card being unsure how big it is.

     Closing is the opposite problem. The card collapses into
     a bar and most of it simply stops existing, so there is
     nothing to watch except the disappearance. The dip gives
     it a gather to go with it — the object pulls in on itself
     before it lands — and because it is subtractive it is
     working WITH the shrink rather than against it.

     An object coming towards you and one folding away are not
     the same move run backwards. */
  const u = useTween(open ? 1 : 0, dur, still, FLAT);
  const swell = Math.sin(Math.PI * clamp(u, 0, 1) ** 1.5);
  const zoom = open ? 1 : 1 - 0.035 * swell;

  /* ── the clock ───────────────────────────────────────────
     Nothing moves until somebody presses play, which is the
     difference between a component and a screensaver. It is
     also why the wall can hold twenty of these: at rest this
     component has no timer at all. */
  useEffect(() => {
    if (!going) return;
    const id = window.setInterval(
      () => setAt((s) => (s >= TOTAL ? 0 : s + 1)),
      1000,
    );
    return () => window.clearInterval(id);
  }, [going]);

  /* ── outside closes it ───────────────────────────────────
     Only while it is open, and only for a press that started
     outside the box. `pointerdown` rather than click: a press
     that begins outside and drifts in is still somebody
     reaching past this component, and waiting for the click
     lets it land on whatever is underneath first.

     Bound on the document because the thing being dismissed
     has no idea what is around it — the wall, the canvas and
     the detail overlay all show this block and none of them
     should have to know it can be open. */
  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => {
      /* ── isTrusted, or the demonstrations close it ────────
         Every card on the wall that carries a `demo` drives a
         scripted pointer at its own component, and those
         events bubble to the document like any other. Without
         this guard, a rehearsal anywhere on the page — this
         block's own included — read as somebody reaching past
         this player and shut it a frame after it opened.
         Measured: it climbed to 403 and then turned around on
         its own.

         The same guard Orbit's ring carries, for the same
         reason. Only a real hand dismisses this. */
      if (!e.isTrusted) return;
      const el = skin.current;
      if (el && !el.contains(e.target as Node)) setOpen(false);
    };
    /* the next tick, or the press that opened it closes it */
    const id = window.setTimeout(
      () => document.addEventListener("pointerdown", away),
      0,
    );
    return () => {
      window.clearTimeout(id);
      document.removeEventListener("pointerdown", away);
    };
  }, [open]);

  const art = {
    x: PAD,
    /* At the margin in both states, and NOT centred in the bar
       any more: the bar is not symmetric top to bottom, because
       the track has a band of its own down there. The sleeve,
       the words and the transport are one row against the top
       margin; everything below them belongs to the track. */
    y: PAD,
    s: mix(ART.s[0], ART.s[1], p),
  };

  /* Everything below is derived, never stored. A second piece
     of state describing the same transformation is a second
     thing that can be out of step with the first. */
  const h = mix(SHUT, OPEN, p);

  /* the transport: at the end of the bar, then centred under
     the art. The row's own width changes, so it is placed by
     its centre rather than by an edge. */
  /* ── the transport, at both ends ─────────────────────────
     All three buttons exist in both states now. Shut they are
     smaller and almost touching — 24, 30, 24 with a single
     pixel between — and the row is pinned to the right so the
     play button lands where a thumb goes without looking.
     Open they spread and the play grows.

     Placed by the row's CENTRE, because the row's own width
     changes: an edge would move even in the frames where the
     middle of it did not. 212 is the box less 8 of margin and
     half of the 80 the row is when shut. */
  const side = mix(24, 34, p);
  const lead = mix(30, LEAD, p);
  /* 1 was three controls touching, which reads as one object
     with three parts rather than as three things you press */
  const gap = mix(5, 14, p);
  /* the box, less its margin and half of the 88 the row is
     when shut */
  const opsX = mix(W - PAD - 44, W / 2, p);
  /* the type grows with the sleeve rather than on its own */
  /* level with the sleeve on the bar, and under everything on
     the card */
  /* 360, and it is measured rather than picked: the times sit
     under the rail and the row has to clear them. At 358 with
     the clock at its natural line height the two overlapped by
     7px — the buttons sat BESIDE the numbers rather than under
     them, which only reads as intentional if you never look at
     the left end of the row. */
  const opsY = mix(PAD + ART.s[0] / 2, OPS_Y, p);

  /* the deep half of the morph, for the things that only
     exist in the card. Held back to the last 40% so they
     arrive into a shape that has stopped growing rather than
     sliding about inside one that has not. */
  const late = clamp((p - 0.6) / 0.4, 0, 1);

  const flip = () => {
    setOpen((v) => !v);
  };

  return (
    <div className="snd" style={{ width: W, height: OPEN }}>
      <div
        className="snd-box"
        ref={skin}
        data-open={open || undefined}
        style={{
          width: W,
          height: h,
          borderRadius: mix(boxR[0], boxR[1], p),
          scale: zoom,
        }}
      >
        {/* the hinge. The sleeve is inlined rather than linked
            — see scripts/cover.sh — because the bundle is one
            file and a linked image is a dead square the moment
            it leaves this machine. */}
        <span
          className="snd-art"
          aria-hidden="true"
          style={{
            backgroundImage: `url(${COVER})`,
            left: art.x,
            top: art.y,
            width: art.s,
            height: art.s,
            /* Squared, and near enough constant: the sleeve
               belongs to the same family as the box around it,
               and a disc inside a rounded rectangle is a
               different object. */
            borderRadius: mix(artR[0], artR[1], p),
          }}
        />

        <span
          className="snd-say"
          style={{
            /* beside the sleeve at BOTH ends — the gap grows
               with everything else and nothing reflows */
            left: mix(PAD + ART.s[0] + 10, PAD + ART.s[1] + 10, p),
            /* Level with the sleeve, and centred BY it: same
               top, same height, and the words centre
               themselves inside that. It was a top edge
               placed against a guess at how tall two lines
               are, which held until the type sizes changed —
               see the note in the stylesheet. */
            top: PAD,
            height: art.s,
            /* what is left between the sleeve and the row */
            /* what the smaller sleeve gives back */
            /* less the heart, which lives in the corner the
               words would otherwise run into. On the bar
               there is no heart and nothing to give up. */
            width: mix(94, W - PAD - (PAD + ART.s[1] + 10) - (LIKE + 10), p),
          }}
        >
          <span className="snd-title" style={{ fontSize: mix(13, 15.5, p) }}>
            Cabra Field
          </span>
          <span className="snd-by" style={{ fontSize: mix(11, 12, p) }}>
            Side B
          </span>
        </span>

        {/* ── the track ─────────────────────────────────────
            Only in the card, and it says so by not being
            there: opacity AND height, so it cannot leave a
            gap in the bar that nothing occupies. */}
        {/* ── the track ─────────────────────────────────────
            It is on the bar too, along the foot, edge to edge
            — a bar with no sense of how far through it is is
            missing the one thing a bar is for. Full bleed
            rather than tucked under the words: at 60px tall
            there is no room for a fourth line, and the pill's
            own corner clips the ends for free.

            The TIMES are the part that only belongs to the
            card. They fade with the deep half of the move and
            are clipped by the box until then, so they cost the
            bar no room at all. */}
        <span
          className="snd-bar"
          style={{
            /* OFF the edge on the bar too. It sat flush at the
               foot, which is a different object — a loading
               line belongs to the box's edge, and a track
               belongs to the thing playing. Inset by the same
               margin as everything else, it reads as part of
               the composition rather than as the box's own
               bottom border. */
            top: mix(SHUT - PAD - RAIL_H, RAIL_Y, p),
            /* one margin, so the track's ends never move */
            left: PAD,
            width: W - PAD * 2,
          }}
        >
          <span className="snd-rail">
            <span className="snd-run" style={{ width: `${(at / TOTAL) * 100}%` }} />
          </span>
          <span className="snd-clock" style={{ opacity: late }}>
            <span>{clock(at)}</span>
            <span>−{clock(TOTAL - at)}</span>
          </span>
        </span>

        {/* ── the one thing you press to change shape ───────
            Invisible, and it is the WHOLE bar when shut — the
            track's band at the foot is part of the object, and
            a bar that only answers along the row its sleeve is
            in has a dead third nobody can see the edge of.

            Opened, it is the sleeve and the words only, so a
            player you have opened does not collapse because
            you reached for the title.

            Declared BEFORE the transport on purpose: both are
            positioned, so the later one paints on top, and the
            buttons have to win a press that lands on both. */}
        <button
          className="snd-tap"
          onClick={flip}
          aria-expanded={open}
          aria-label={open ? "Collapse the player" : "Open the player"}
          style={{
            left: mix(0, PAD, p),
            top: mix(0, PAD, p),
            width: mix(W, W - PAD * 2, p),
            /* every pixel of the bar, and the sleeve's own
               height once it is a card */
            height: mix(SHUT, ART.s[1], p),
            borderRadius: mix(boxR[0], artR[1], p),
          }}
        />

        {/* ── the heart ─────────────────────────────────────
            The card's one control that is not transport, and
            the only reason the card has a top-right corner
            worth anything: everything else here is a row.

            It belongs to the card alone. On the bar there is
            no room for a fourth control beside three that are
            already touching, and a heart is not what a pill
            is for — so it rides `late`, arriving after the
            box has stopped growing, and takes its hit area
            with it rather than sitting invisible over the
            words.

            After the tap, like the transport, so a press in
            the corner reaches the heart rather than closing
            the player underneath it. */}
        <button
          className="snd-like"
          data-on={liked || undefined}
          onClick={() => {
            setLiked((v) => !v);
          }}
          aria-label={liked ? "Remove from liked songs" : "Add to liked songs"}
          aria-pressed={liked}
          tabIndex={open ? 0 : -1}
          style={{
            left: W - PAD - LIKE,
            top: PAD,
            width: LIKE,
            height: LIKE,
            opacity: late,
            pointerEvents: late > 0.9 ? "auto" : "none",
          }}
        >
          <Heart size={16} strokeWidth={2} fill={liked ? "currentColor" : "none"} />
        </button>

        <span
          className="snd-ops"
          style={{ left: opsX, top: opsY, gap }}
        >
          {/* DRAWN, not filled — unlike the play. Three solid
              marks in a row of eighty pixels is a lot of ink
              for two controls you press rarely, and the
              difference in weight is what says which one is
              the button and which two are beside it. */}
          <button
            className="snd-op"
            style={{ width: side, height: side }}
            onClick={() => { setAt(0); }}
            aria-label="Restart"
          >
            <SkipBack size={mix(13, 16, p)} strokeWidth={2} />
          </button>

          <button
            className="snd-op"
            data-lead
            style={{ width: lead, height: lead }}
            onClick={() => { setGoing((v) => !v); }}
            aria-label={going ? "Pause" : "Play"}
            aria-pressed={going}
          >
            {/* ── FILLED, not drawn ─────────────────────────
                Transport marks are solid everywhere a person
                has met them, and an outlined triangle reads as
                a diagram of play rather than as play. The skip
                glyphs keep their stroke for a different
                reason: the bar beside each triangle is a line
                with no area, and dropping the stroke would
                drop the bar.

                This one is not a lucide icon at all — see
                Mark, above — because it is the only mark here
                that changes into another one. */}
            <Mark playing={going} size={mix(14, 18, p)} still={still} />
          </button>

          <button
            className="snd-op"
            style={{ width: side, height: side }}
            onClick={() => { setAt(0); }}
            aria-label="Next"
          >
            <SkipForward size={mix(13, 16, p)} strokeWidth={2} />
          </button>
        </span>

      </div>
    </div>
  );
}

--- css ---

@media (prefers-reduced-motion: reduce) {
  .snd-op, .snd-art, .snd-like { transition-duration: 1ms; }
}

@media (prefers-reduced-motion: reduce) {
  .snd-like[data-on] .lucide { animation: none; }
}

/* ══ Sound board ════════════════════════════════════════════
   A canvas tool, not a component: twelve keys, numbered by
   their order in site/sound.ts, so a voice can be auditioned
   and then referred to by number. */
.snd {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 460px;
  font-family: var(--font-ui);}

.snd-wake {
  align-self: flex-start;
  height: 30px;
  padding: 0 13px;
  border: 0;
  border-radius: 999px;
  background: var(--slab);
  color: var(--on-slab);
  font-family: inherit;
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;}

.snd-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;}

.snd-key {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3px;
  height: 62px;
  padding: 0 12px;
  border: 0;
  border-radius: 12px;
  background: rgba(var(--ink-rgb), 0.05);
  cursor: pointer;
  transition: background 140ms ease, transform 160ms cubic-bezier(0.28, 1.3, 0.36, 1);}

.snd-key:hover { background: rgba(var(--ink-rgb), 0.1); }

.snd-key:active { transform: scale(0.96); }

/* the one that carries a position says so — drag across it */
.snd-key[data-pitched] { background: rgba(var(--ink-rgb), 0.08); cursor: ew-resize; }

.snd-key[data-pitched]:hover { background: rgba(var(--ink-rgb), 0.14); }

.snd-num {
  font-family: var(--font-num);
  font-size: 17px;
  line-height: 1;
  color: var(--ink);
  font-variant-numeric: tabular-nums;}

.snd-name {
  font-size: 11.5px;
  letter-spacing: -0.005em;
  color: var(--ink-4);}

/* ══ Sound ══════════════════════════════════════════════════
   A now-playing bar that opens into a player.

   There is almost nothing here, and that is deliberate: every
   position, size and radius in this component is written by
   the spring in Sound.tsx and arrives as an inline style. A
   transition on any of these rules would be a SECOND opinion
   about where a thing is, fighting the first one every frame.

   What is left is the material — the surfaces, the type and
   the two hover states — which never animates with the shape
   and so has nothing to fight. */

.snd {
  position: relative;
  display: grid;
  place-items: center;
  font-family: var(--font-ui);}

/* The object. It is the only thing on the card, so it is the
   quietest surface that still reads as one: the pane the rest
   of the bench uses, and a hairline. */
.snd-box {
  position: relative;
  background: var(--pane);
  -webkit-backdrop-filter: blur(2px) saturate(150%);
  backdrop-filter: blur(2px) saturate(150%);
  overflow: hidden;}

/* NO BORDER of its own. The hairline is the Stroke control's
   to give, the way it is for every other block — a spread
   shadow rather than a border, because the box has
   `overflow: hidden` and a border would be one more thing the
   morph has to carry through every frame. See the Stroke
   section above. */
[data-stroke="on"] .snd-box { box-shadow: 0 0 0 1px var(--pane-edge); }

/* ── the cover ──────────────────────────────────────────────
   A real sleeve, inlined by scripts/cover.sh. It was drawn in
   CSS first, on the reasoning that the morph is about the
   SQUARE rather than about what is printed on it — which is
   true of the animation and not true of the component: a
   player with a grey gradient where the artwork goes is a
   wireframe of a player.

   `cover`, not `contain`: the square is the fixed thing here
   and the picture is cropped to it, so the sleeve is never
   letterboxed at either end of the morph.

   The gradient stays underneath as the ground. It is what
   shows for the frame before a 464px image has decoded, and
   it is what the shape is if the file is ever missing. */
.snd-art {
  position: absolute;
  background-color: var(--surface-2);
  background-image:
    linear-gradient(148deg, var(--surface-3), var(--surface-2));
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;}

/* ── the words ──────────────────────────────────────────────
   One block that travels from beside the cover to under it.
   Both lines are in it, so the pair moves as a unit and the
   artist never arrives before the title. */
/* ── the words ──────────────────────────────────────────────
   Centred by the BOX, not by a number. It used to be placed
   by its top edge against a hard-coded guess at how tall two
   lines of type are — which was right until the type sizes
   changed, and then the words sat 1.8px above the middle of
   the sleeve at one end of the morph and somewhere else at
   the other.

   Now it is given the sleeve's own height and told to centre
   inside it, so the two are level at every size the morph
   passes through and nothing has to be kept in step by hand.
   Two magic numbers gone with it. */
.snd-say {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  min-width: 0;
  pointer-events: none;}

.snd-title {
  color: var(--ink);
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;}

.snd-by {
  color: var(--ink-4);
  line-height: 1.25;
  white-space: nowrap;}

/* ── the track ──────────────────────────────────────────────
   A rail and a run, and the times at either end under it.
   Nothing here is interactive: this component is about the
   shape changing, and a scrubber you can drag is a different
   component that happens to live in the same box. */
.snd-bar {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;}

.snd-rail {
  display: block;
  height: 3px;
  border-radius: 999px;
  background: rgba(var(--ink-rgb), 0.12);
  overflow: hidden;}

.snd-run {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: var(--ink);}

.snd-clock {
  display: flex;
  justify-content: space-between;
  /* ── the interface face, with tabular figures ─────────────
     It was the mono stack, for the reason clocks usually are:
     a proportional 1 is narrower than a 0, so a counter set in
     one shifts on its own every second — which on a track
     that reads 0:57 → 0:58 → 0:59 is a number that fidgets
     while you watch it.

     `tabular-nums` is the same guarantee without the second
     typeface. It asks the UI font for its fixed-width figures,
     which it has, so the digits stop moving and the component
     stops carrying a face nothing else here uses. */
  font-family: var(--font-ui);
  font-variant-numeric: tabular-nums;
  font-size: 10.5px;
  /* 1, so the row is the height of the digits and not of the
     font's own leading — nineteen pixels for a ten pixel
     number is eight of empty space the layout above has to
     find room for */
  line-height: 1;
  letter-spacing: 0.04em;
  color: var(--ink-4);}

/* ── the transport ──────────────────────────────────────────
   Placed by its CENTRE — the row's own width changes between
   the two states, so an edge would move even when the middle
   of it did not. */
.snd-ops {
  position: absolute;
  display: flex;
  align-items: center;
  translate: -50% -50%;}

.snd-op {
  flex: none;
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--ink-3);
  cursor: pointer;
  overflow: hidden;
  transition: color 160ms ease, background 160ms ease, scale 130ms cubic-bezier(0.3, 0.9, 0.4, 1);}

.snd-op:hover { color: var(--ink); background: rgba(var(--ink-rgb), 0.07); }

/* ── the press ──────────────────────────────────────────────
   It yields before it acts. A control that only changes state
   reads as having been triggered; one that gives under the
   finger first reads as having been pushed, and the whole
   difference is about 40ms and four per cent.

   `scale` as its own property, not inside a transform: the
   row is placed with `translate` and the play button's size
   is written by the tween, so anything sharing the transform
   shorthand here would be overwritten every frame. */
.snd-op:active { scale: 0.9; }

/* the one you press most, and the only one that is filled */
.snd-op[data-lead] {
  background: var(--ink);
  color: var(--on-ink);}

.snd-op[data-lead]:hover { background: var(--ink); opacity: 0.88; }

.snd-op:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--card), 0 0 0 4px rgba(var(--ink-rgb), 0.35);}

/* ── the heart ──────────────────────────────────────────────
   Built off .snd-op rather than sharing it: it is the same
   size and the same give, but it is not in the transport row
   and it is the only control here that stays on after you let
   go — so it needs a state the row has no use for.

   Ink when it is on, not red. A heart is already the shape
   that carries the meaning, so the colour has only one job
   left — to say FILLED — and the loudest ink on the block is
   what does that without introducing a hue nothing else here
   uses. It also puts the heart at the same weight as the play
   button, which is the other solid mark on the card, so the
   two read as the same kind of thing rather than as a control
   and a warning. */
.snd-like {
  position: absolute;
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--ink-3);
  cursor: pointer;
  transition: color 160ms ease, background 160ms ease,
    scale 130ms cubic-bezier(0.3, 0.9, 0.4, 1);}

.snd-like:hover { color: var(--ink); background: rgba(var(--ink-rgb), 0.07); }

.snd-like:active { scale: 0.9; }

.snd-like[data-on] { color: var(--ink); }

.snd-like[data-on]:hover { color: var(--ink); background: rgba(var(--ink-rgb), 0.07); }

/* ── the beat ───────────────────────────────────────────────
   On the way ON only, which is why it is keyed to the state
   and not to the press: unliking something does not deserve a
   flourish, and one that plays both ways reads as a button
   animating rather than as a thing being liked.

   Overshoot is the whole effect — 1.34 and back, on a curve
   that passes its target — so it lands as a pulse rather than
   as a grow. */
.snd-like[data-on] .lucide {
  animation: snd-beat 340ms cubic-bezier(0.3, 1.4, 0.5, 1);}

.snd-like:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--card), 0 0 0 4px rgba(var(--ink-rgb), 0.35);}

/* the hit area, and nothing else — see the note in Sound.tsx */
.snd-tap {
  position: absolute;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;}

/* the cover gives too — it is the thing you press to change
   the shape, so it should answer the same way the transport
   does. Scoped to the ART, not to this: the hit area is
   invisible and scaling nothing looks like nothing. */
.snd-box:has(.snd-tap:active) .snd-art { scale: 0.96; }

.snd-art { transition: scale 130ms cubic-bezier(0.3, 0.9, 0.4, 1); }

.snd-tap:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--card), 0 0 0 4px rgba(var(--ink-rgb), 0.35);}

@keyframes snd-beat {
  0% { scale: 1; }
  38% { scale: 1.34; }
  100% { scale: 1; }}
