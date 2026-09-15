Add the "Search" component from Bencho to my project.

It is MIT licensed — bencho.dev/licence. Please:

1. Create the component at a sensible path for this
   project, named Search, from the source below.
2. It needs nothing beyond React.
3. Add the CSS to the project's stylesheet.

4. THE PART THAT NEEDS YOUR JUDGEMENT. The CSS reads
   these custom properties and does not define them:

     --bg
     --font-ui
     --g-blur
     --g-sat
     --ink
     --ink-2
     --ink-3
     --ink-4
     --ink-5
     --ink-rgb
     --pane
     --pane-edge

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

--- Search.tsx ---

import { useEffect, useRef, useState } from "react";

/* ══ Seek ═════════════════════════════════════════════════
   A search icon that becomes a search field.

   ONE OBJECT, NOT TWO. Everything here follows from that. The
   obvious build is an icon that fades out and an input that
   fades in, and it is obvious because it is easy — but two
   things swapping is never mistaken for one thing changing,
   however well the crossfade is tuned. So there is a single
   box whose WIDTH is the state, and the icon and the field
   are both inside it the whole time.

   Which turns the interesting problems into geometry rather
   than choreography:

   · The lens never moves relative to the box. It sits at a
     fixed inset from the left edge, and at the closed width
     that inset happens to centre it — (44 - 18) / 2 is 13,
     and 13 is also the padding the open field wants. So one
     number is both "centred in a circle" and "aligned in a
     field", and the lens travelling leftward across the page
     is not an animation anybody wrote. It is the box growing
     around a mark that stayed put.

   · The box grows from its middle, so the composition stays
     centred at every frame. Growing from the left would pin
     the lens and throw the field off-centre; growing from the
     right would slide the lens across the page. Neither is
     the object transforming, and both are what you get by
     accident.

   · Height never changes and the corner is fully round at
     every width, so the SHAPE is one rule rather than a tween
     with two ends. At 44 it is a circle and at 320 a pill,
     and those are the same statement. The radius used to
     interpolate 22 → 13, which was a second thing that had
     to agree with the first; a stadium corner needs no
     agreement at all.

   The press is a real beat. A click compresses the object for
   a moment before it expands, because a thing that yields
   before it moves reads as having been pushed, and a thing
   that only moves reads as having been triggered. */

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/* The closed object: a circle, so the width IS the height.
   Was 44, which is a header control — and this is not in a
   header, it is the whole component, sitting alone on a card
   with 96px of frame around it. At 44 the shut state read as a
   small button somebody had left in the middle of a large
   card. 60 is the size of the thing itself rather than the
   size it would be inside something else.

   The stylesheet reads this through --shut rather than
   repeating it: the skin's height and the closed width are the
   same number by definition, and two places holding it is two
   places to get it wrong. */
const SHUT = 64;
/* the lens, and its inset. See the note above — this number
   is doing two jobs and they agree by construction.

   28, measured against the rest of the bench rather than
   picked. Every round icon button here sits between 0.44 and
   0.50 of its button — .gdock-item 20/44, .bar-tool 17/38,
   .gnav-item 17/38, the nav's own 18/36 — and this button is
   64 across, so 28 puts it at 0.44, in with the others. 18
   was 0.28 and read as a small mark in a large circle.

   The STROKE is independent of this, which is the part I got
   wrong twice. The svg is an 18-unit viewBox, so a
   stroke-width of u units always draws at u/18 of the glyph's
   own size, whatever that size is — and lucide's 2-on-18 is
   the same 0.111. `stroke-width: 2` therefore matches the
   bench at any LENS, and resizing the icon does not disturb
   it. */
const LENS = 28;
const INSET = (SHUT - LENS) / 2;

/* the field's corner. 32 is half of its 64px height, which is
   the circle it is when shut and the pill it is when open. */
const CORNER = 32;

/* the resting field, wide screen and narrow. See the note on
   the `width` prop for why there are two.

   280 and not 240, which was the first answer and overshot:
   the button on a phone card is 64 x (260 / (field + 26)), so
   240 drew it at 63 against the 44 it started at — half again
   as big, which is a different component rather than a legible
   one. 280 lands at 54. The move that was actually wanted is
   the one you notice without being able to name it. */
const WIDE = 320;
const SNUG = 280;

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

export function Seek({
  /* how far it leans toward the cursor, 0..100 */
  give = 50,
  /* how the width settles, 0..100 */
  spring = 50,
  /* The field's resting width, px. Back to 320 from 380, and
     that is what makes the BUTTON bigger rather than what makes
     the component smaller: the wall fits a card's contents by
     their bounding box, so on this card the button's size on
     screen is 64 x (fit / frame width). Widening the field
     spends the same budget on the part of the object you are
     not looking at while it is shut.

     ── AND THE DEFAULT IS NARROWER ON A PHONE ─────────────
     Undefined here rather than 320, because the two callers
     want different things. The panel always passes a number,
     so the knob stays live across its whole range wherever you
     are. The WALL passes nothing — it renders every card with
     no options at all — so a card falls through to the number
     below, and on a narrow column that number is 240.

     The arithmetic is the note above, run on a phone: a 375px
     screen gives the card a 260px fit, so a 346 frame drew the
     shut button at 48 and a 306 frame draws it at 54. Nothing
     about the object changed; the room reserved beside it did.

     Still well inside the knob's own 240..400 range, so this
     is a setting the component was drawn for rather than a
     number invented for one screen. */
  width,
  /* the field's own corner, 0..32 */
  corner = CORNER,
}: {
  give?: number;
  spring?: number;
  width?: number;
  corner?: number;
} = {}) {
  /* ── narrow, and it can change under you ────────────────
     A phone rotates and a desktop window gets dragged narrow;
     read once at mount and the frame would be wrong for the
     rest of the session. State rather than a ref because the
     width below is rendered, so it has to re-render. */
  const [snug, setSnug] = useState(
    () => typeof window !== "undefined"
      && window.matchMedia("(max-width: 760px)").matches,
  );
  /* ── and whether the screen has a keyboard of its own ────
     A different question from `snug` and it needs its own
     query: `snug` is about how much ROOM there is, and this is
     about what opening the field costs. A narrow desktop
     window is snug and types fine; a tablet is roomy and still
     throws half its screen away to a keyboard. */
  const [touch, setTouch] = useState(
    () => typeof window !== "undefined"
      && window.matchMedia("(pointer: coarse)").matches,
  );
  useEffect(() => {
    const room = window.matchMedia("(max-width: 760px)");
    const coarse = window.matchMedia("(pointer: coarse)");
    const read = () => { setSnug(room.matches); setTouch(coarse.matches); };
    room.addEventListener("change", read);
    coarse.addEventListener("change", read);
    return () => {
      room.removeEventListener("change", read);
      coarse.removeEventListener("change", read);
    };
  }, []);
  const span = width ?? (snug ? SNUG : WIDE);

  const frame = useRef<HTMLDivElement | null>(null);
  const field = useRef<HTMLInputElement | null>(null);
  const beat = useRef(0);
  const rest = useRef(0);

  const [open, setOpen] = useState(false);
  const [press, setPress] = useState(false);
  const [value, setValue] = useState("");
  const [busy, setBusy] = useState(false);
  const [lean, setLean] = useState({ x: 0, y: 0 });
  const still = stillness();

  useEffect(() => () => {
    window.clearTimeout(beat.current);
    window.clearTimeout(rest.current);
  }, []);

  /* ── the width is the state ──────────────────────────────
     Tuned toward the top of the range by default: this is a
     control, and a control that wobbles reads as decoration.
     What the spring is for here is the tiny overshoot at the
     end — enough that the object arrives rather than stops,
     and not enough to notice as a bounce. */
  const target = open ? Math.max(SHUT, span) : SHUT;
  const w = useSpring(target, clamp(spring, 0, 100), still);

  /* how far through the transformation, 0 shut and 1 open */
  const p = clamp((w - SHUT) / Math.max(1, Math.max(SHUT, span) - SHUT), 0, 1);

  /* ── the magnet ──────────────────────────────────────────
     Measured from the FRAME, which never moves, and not from
     the object, which does. A vector read off a thing the
     vector is currently displacing is a feedback loop: it
     converges, but it converges by ringing, and the ring is
     visible as a shiver on an object this small.

     Off entirely once open. A field that drifts toward the
     pointer while you are trying to click into it is a field
     fighting you. */
  useEffect(() => {
    const el = frame.current;
    if (!el || open || still) return;
    let raf = 0;
    let at = { x: 0, y: 0 };
    const publish = () => { raf = 0; setLean(at); };
    const read = (e: PointerEvent) => {
      const b = el.getBoundingClientRect();
      /* the wall draws this at a fraction and the canvas at a
         zoom; a radius measured in screen pixels would be a
         different radius at each */
      const k = b.width / (el.offsetWidth || b.width) || 1;
      const dx = (e.clientX - (b.left + b.width / 2)) / k;
      const dy = (e.clientY - (b.top + b.height / 2)) / k;
      const d = Math.hypot(dx, dy);
      const R = 110;
      if (d > R) {
        if (at.x || at.y) { at = { x: 0, y: 0 }; if (!raf) raf = requestAnimationFrame(publish); }
        return;
      }
      /* A FEW PIXELS. The brief for this is "responsive, not
         following" and the difference is entirely in the
         ceiling: past about seven the object stops being a
         thing that acknowledges you and starts being a thing
         you are dragging around. */
      const pull = (1 - d / R) ** 1.4 * (2 + (give / 100) * 5);
      at = { x: (dx / (d || 1)) * pull, y: (dy / (d || 1)) * pull };
      if (!raf) raf = requestAnimationFrame(publish);
    };
    const gone = () => { at = { x: 0, y: 0 }; if (!raf) raf = requestAnimationFrame(publish); };
    document.addEventListener("pointermove", read, { passive: true });
    document.addEventListener("pointerleave", gone);
    return () => {
      document.removeEventListener("pointermove", read);
      document.removeEventListener("pointerleave", gone);
      cancelAnimationFrame(raf);
    };
  }, [open, give, still]);

  /* ── opening ─────────────────────────────────────────────
     Compress, then expand, then focus. The order matters and
     the gap is short: 90ms is long enough to be felt as the
     object yielding and short enough that nobody waits for
     it. Focus lands with the expansion rather than at the end
     of it, so the caret is already there when the field
     arrives — waiting for the width to settle puts a visible
     pause between the box being ready and the box being
     usable. */
  /* ── THE OBJECT OPENING, HEARD ───────────────────────────
     `expand` and `collapse` are the bench's pair for a thing
     opening and closing, and this is the block that most
     obviously does both — a circle becoming a field and back.
     They land on the press and on the release rather than on
     the width settling: the sound belongs to the decision, not
     to the animation catching up with it. */
  const start = () => {
    if (open) return;
    setPress(true);
    window.clearTimeout(beat.current);
    beat.current = window.setTimeout(() => {
      setPress(false);
      setOpen(true);
      field.current?.focus();
    }, still ? 0 : 90);
  };

  /* Away with nothing typed and it goes back. Away with
     something typed and it stays: the value IS the reason the
     field exists, and closing over it would either hide it or
     throw it away. */
  const away = () => {
    if (value.trim()) return;
    setOpen(false);
  };

  /* the lens acknowledges typing without performing it — one
     short beat per burst, not one per character */
  /* One short mark per BURST of typing, not one per key — the
     lens already works this way visually and the sound follows
     the same rule. A note per character is a typewriter, which
     is a different component. */
  const tapped = () => {
    if (!busy) setBusy(true);
    window.clearTimeout(rest.current);
    rest.current = window.setTimeout(() => setBusy(false), 340);
  };

  return (
    <div
      className="sek"
      ref={frame}
      data-open={open}
      data-press={press}
      data-busy={busy}
      data-flat={still || undefined}
      style={{
        "--sek-r": `${clamp(corner, 0, CORNER)}px`,
        "--w": `${w.toFixed(2)}px`,
        "--p": p.toFixed(3),
        /* the placeholder and the caret arrive in the last
           third, once there is somewhere for them to be */
        "--say": clamp((p - 0.55) / 0.45, 0, 1).toFixed(3),
        "--lx": `${lean.x.toFixed(2)}px`,
        "--ly": `${lean.y.toFixed(2)}px`,
        "--inset": `${INSET}px`,
        "--lens": `${LENS}px`,
        "--shut": `${SHUT}px`,
        /* ── THE FRAME FOLLOWS THE FIELD ──────────────────
           It was a fixed 440x116, sized for the widest the
           knob goes. The wall scales a component down by its
           BOUNDING BOX, so a frame sized for the maximum makes
           every smaller setting draw smaller — growing the
           object inside a fixed frame made the button on the
           card 35px where it had been 30, when the point was
           to make it considerably bigger.

           Tight to what is actually set, and the wall's own fit
           does the rest. It still never moves during an
           interaction: this changes with a knob, not with the
           open/shut state, which is what the magnet needs. */
        "--frame": `${Math.max(SHUT, span) + 26}px`,
        "--frameh": `${SHUT + 40}px`,
      } as React.CSSProperties}
    >
      <div className="sek-skin">
        {/* Drawn rather than imported. The lens has to take a
            state — it thickens a hair while you type — and an
            icon you cannot address is an icon that can only
            be swapped for another one. */}
        <svg className="sek-lens" viewBox="0 0 18 18" aria-hidden="true">
          <circle cx="7.6" cy="7.6" r="5.4" />
          <path d="M11.6 11.6 L15.4 15.4" />
        </svg>

        <input
          ref={field}
          className="sek-field"
          type="text"
          value={value}
          placeholder="Search"
          aria-label="Search"
          /* ── NO SOFTWARE KEYBOARD ON A TOUCH SCREEN ──────
             This is a block on a wall, not a search anybody is
             performing: tapping it threw up the keyboard, which
             on a phone covers half the page and hides the very
             transformation the block exists to show.

             `inputMode` and not `readOnly`, and not skipping
             the focus() in start(). Both of those would fix the
             keyboard and break something: readOnly kills typing
             for a tablet with a real keyboard attached, and not
             focusing kills the only way this closes — `away` is
             a blur handler, so a field that never takes focus
             never gives it back and would stay open for good.

             none means "I am focusable, I have a caret, do not
             raise the on-screen one", which is exactly the
             difference being asked for. */
          inputMode={touch ? "none" : undefined}
          tabIndex={open ? 0 : -1}
          onChange={(e) => { setValue(e.target.value); tapped(); }}
          onBlur={away}
          onKeyDown={(e) => {
            if (e.key !== "Escape") return;
            e.preventDefault();
            setValue("");
            setOpen(false);
            field.current?.blur();
          }}
        />

        {/* The way in, and only while there is a way in. When
            the field is open this is the field's own job, and
            a second target sitting over it would swallow the
            click that places the caret. */}
        {!open && (
          <button className="sek-hit" aria-label="Search" onClick={start} />
        )}
      </div>
    </div>
  );
}

--- css ---

/* ── flat panes ────────────────────────────────────────────
   Set data-surface="flat" on any ancestor and every glass
   surface under it becomes a solid fill with a hairline. The
   inner buttons already sit on rgba(var(--ink-rgb), 0.05)
   with no border, which is what flat wants anyway, so they
   need nothing.

   The frost is switched off at the element rather than through
   a token. A var() holding a url() filter cannot be validated
   at parse time, so the browser would treat it as invalid at
   computed-value time and drop the property outright — which
   breaks the two-declaration fallback the glass depends on. */
/* ══ stroke ═════════════════════════════════════════════════
   Whether a component draws a hairline round itself. OFF by
   default, which is the change: every glass surface carried
   one unconditionally, and a grey line round everything makes
   a wall of components look like a wall of boxes rather than
   a wall of things.

   The line is not load-bearing. A flat pane is a fill against
   a different fill and reads on its own; the ring was there
   to sharpen an edge that was already there.

   Placed ABOVE the glass rules on purpose. Glass draws its
   own lit rim, and that rim is the material rather than a
   stroke — it is what gives a pane thickness. So glass wins
   the border wherever the two meet, and Stroke governs the
   drawn line that flat surfaces would otherwise have. */
[data-stroke="on"] .lab::before,
[data-stroke="on"] .gcard::before,
[data-stroke="on"] .gpane::before,
[data-stroke="on"] .gnav::before,
[data-stroke="on"] .gdock::before,
/* the playful blocks. None of them is glass, so none has a
   lit rim for the stroke to lose to — the hairline is the
   only edge they can have, and it is the whole of what this
   control does for them. */
[data-stroke="on"] .esc-btn::before,
[data-stroke="on"] .slo-track::before,
[data-stroke="on"] .sek-skin::before {
  border-color: var(--pane-edge);}

/* ══ Seek ═══════════════════════════════════════════════════
   A search icon that becomes a search field, as one object.

   Everything below is width and radius. There is no crossfade
   between two components, no second element to keep in sync,
   and nothing that animates on a clock of its own — the box
   is sprung in JS and every other value here is derived from
   how far through that spring it is. That is the whole reason
   the transformation reads as continuous: there is only one
   number, so nothing can arrive at the wrong time relative to
   anything else. */
.sek {
  /* the frame is the composition. It never moves, which is
     what gives the magnet a stable home to measure from and
     keeps the object centred at every width. */
  position: relative;
  display: grid;
  place-items: center;
  /* ── THE FRAME IS `--frame`, and it was not ──────────────
     Seek.tsx computes `--frame` and `--frameh` from the width
     that is actually set — its note explains why at length:
     the wall fits a card by the BOUNDING BOX, so a frame sized
     for the widest the knob goes makes every smaller setting
     draw smaller. It has been publishing those two numbers to
     a stylesheet that ignored them and used a hard 380 x 96.

     Measured on a phone card: the frame reserved 380 for a
     field set to 320, the wall fitted 380 into 260, and the
     shut button — the only thing drawn at rest — came out at
     44px. The 36px of nothing was being paid for in the one
     part of the object you are looking at.

     With the variables wired up the knob does what its own
     comment says it does, and the frame is tight to what is
     set on every screen. */
  width: var(--frame, 380px);
  height: var(--frameh, 96px);
  font-family: var(--font-ui);}

/* ── the object ─────────────────────────────────────────────
   Width is the state. Height is fixed, so the radius can be
   derived from the width rather than animated beside it —
   at 44 the corner is 22 and the shape IS a circle, and there
   is no frame where the two disagree.

   The surface is the quietest thing that still reads as an
   object: a low-alpha ink fill and a hairline. No shadow, no
   glass, no gradient — at this size any of them would be the
   loudest thing on an otherwise empty page. */
.sek-skin {
  position: relative;
  width: var(--w);
  /* --shut, NOT a number. The component sets the closed width
     and the height from one constant precisely so they cannot
     drift, and its own comment says so: "the skin's height and
     the closed width are the same number by definition, and
     two places holding it is two places to get it wrong."
     Hard-coded here at 44 against a --shut of 64, the closed
     state was a 64x44 lozenge — a circle that is not round is
     the one shape everybody notices. */
  height: var(--shut);
  /* ── ONE SHAPE RULE ─────────────────────────────────────
     Fully round, at every width. The radius used to
     interpolate 22 → 13, which was a second thing to keep in
     agreement with the first; a stadium corner needs no
     agreement at all. At --shut wide it is a circle and at 320
     a pill, and those are the same rule rather than two ends
     of a tween. Height is fixed, so it cannot be anything
     else. */
  /* the Corner knob's, and ::before and .sek-hit inherit it */
  border-radius: var(--sek-r, 999px);
  /* ── FLAT, and glass only if asked ──────────────────────
     `--pane` is the bench's own material token, so this
     follows the Glass dial rather than deciding for itself:
     at 0 it resolves to a solid board and at 100 to the
     frosted pane. It was a translucent ink wash with an inset
     hairline, which is glass by every visual measure while
     answering to no control — the worst of both, since it
     could not be turned off.

     And it picks up Fill for free. Flat resolves --pane to
     --board, and Fill redeclares --board, so a dark fill
     gives a dark pill without this rule naming a colour. */
  background: var(--pane);
  -webkit-backdrop-filter:
    blur(var(--g-blur, 2px)) saturate(var(--g-sat, 150%)) brightness(var(--g-bright, 100%));
  backdrop-filter:
    blur(var(--g-blur, 2px)) saturate(var(--g-sat, 150%)) brightness(var(--g-bright, 100%));
  isolation: isolate;
  /* the magnet, and the press, on one transform — two
     transforms on one element is one of them winning */
  transform: translate(var(--lx), var(--ly)) scale(var(--sk, 1));
  transition:
    transform 260ms cubic-bezier(0.22, 0.9, 0.28, 1),
    background 220ms ease;
  /* the field is inside from the first frame; this is what
     keeps it from spilling out of a 44px circle */
  overflow: hidden;}

/* the edge, and NOTHING until Stroke asks for it. A hairline
   nobody switched on is a hairline the control cannot remove,
   which is the same bug the background had. */
.sek-skin::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid transparent;
  pointer-events: none;
  z-index: 2;}

/* Hover: it comes up a hair and lifts off the ground. Both
   are small enough to be felt rather than seen, which is the
   point — a hover state you notice is a hover state that has
   said too much. */
.sek:not([data-open="true"]) .sek-skin:hover {
  --sk: 1.045;
  /* the surface answers, without drawing an edge it was not
     given — brightness rather than an outline */
  --g-bright: 104%;}

/* pressed: it yields before it moves. A thing that gives
   under a click reads as having been pushed; a thing that
   only expands reads as having been triggered. */
.sek[data-press="true"] .sek-skin {
  --sk: 0.93;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1);}

/* the field is a text target, and the object is a button */
.sek[data-open="true"] .sek-skin { cursor: text; }

/* ── the lens ───────────────────────────────────────────────
   Fixed to the box's left inset and never animated. At the
   shut width that inset centres it; at the open width it is
   the field's padding. The lens crossing the page is the box
   growing around a mark that stayed still. */
.sek-lens {
  position: absolute;
  left: var(--inset);
  top: 50%;
  width: var(--lens);
  height: var(--lens);
  margin-top: calc(var(--lens) / -2);
  fill: none;
  stroke: var(--ink-3);
  /* 1.5, AND THE NUMBER CANNOT BE COMPARED TO LUCIDE'S.
     Every lucide glyph is drawn on a 24-unit grid; this one is
     drawn on 18. A stroke-width of u paints at u/viewBox of
     the icon's size, so lucide's 2-on-24 is 0.0833 and a 2
     here would be 0.1111 — the same number, a third heavier.
     1.5/18 is 0.0833 exactly, which is the radial menu's
     weight and the nav's.

     The value that stood here was 1.6 (0.0889). That was very
     nearly right; it was changed to 2 on the assumption that
     the two viewBoxes matched, and they never did. */
  stroke-width: 1.5;
  stroke-linecap: round;
  pointer-events: none;
  transition: stroke 200ms ease, stroke-width 200ms ease;}

.sek-skin:hover .sek-lens { stroke: var(--ink); }

.sek[data-open="true"] .sek-lens { stroke: var(--ink-4); }

/* typing: the lens thickens a hair and darkens. One beat per
   burst, not one per keystroke — a mark that flickers at the
   rate of your typing is noise wearing the costume of
   feedback. */
/* still "a hair", and still the same proportion of the base it
   always was — 1.9 was to 1.6 as 1.8 is to 1.5 */
.sek[data-busy="true"] .sek-lens { stroke: var(--ink-2); stroke-width: 1.8; }

/* ── the field ──────────────────────────────────────────────
   Present from the first frame and revealed by --say, which
   is the last third of the width's own progress. It slides a
   few pixels as it arrives, from the left, so it reads as
   having come out of the lens rather than as having faded up
   where it stood. */
.sek-field {
  position: absolute;
  left: calc(var(--inset) + var(--lens) + 11px);
  right: 14px;
  top: 0;
  height: 100%;
  border: 0;
  background: none;
  font: inherit;
  /* 14 is the NAV's size, and the nav's field is 44px tall.
     This pill is --shut, 64, and carrying header type in it
     left the words looking like a caption inside the object
     rather than its content. 18 restores roughly the
     proportion the bar has — 0.28 of the height against the
     bar's 0.32 — on a control that is the whole component
     rather than one item in a row of them. */
  font-size: 18px;
  letter-spacing: -0.005em;
  color: var(--ink);
  outline: none;
  opacity: var(--say);
  transform: translateX(calc((1 - var(--say)) * -6px));
  /* until it is most of the way open it is not a target, and
     a caret that can be placed in a 44px circle is a caret in
     the wrong place */
  pointer-events: var(--say-hit, none);}

.sek[data-open="true"] .sek-field { --say-hit: auto; }

.sek-field::placeholder { color: var(--ink-5); }

/* the way in, while there is one */
.sek-hit {
  position: absolute;
  inset: 0;
  border: 0;
  border-radius: inherit;
  background: none;
  cursor: pointer;}

.sek-hit:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px rgba(var(--ink-rgb), 0.4);}
