Benchmark of React Dom Updates
==============================

What's the cost of virtual dom v real dom?

- With dom:
  - 520ms
- With fragment:
  - 320ms
- With direct (`Renderer()` vs `<Renderer />`):
  - 180ms
- With direct no fragment:
  - 9ms

Measurement using performance recorder
