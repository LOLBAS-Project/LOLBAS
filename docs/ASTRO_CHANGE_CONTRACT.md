# Astro site migration contract

Implementation, fork push, fork CI build, isolated fork-hosted preview and upstream
pull request are authorized. Fork preview deployment belongs to a separate
fork-owned workflow outside the upstream PR.
Production publication and merging remain separate maintainer actions.
Canonical content remains `yml/`; source records must not change. Branding is
LOLBAS only. No analytics, external runtime data dependencies, or backend required.

| Behavior | Acceptance evidence |
| --- | --- |
| LOL-SITE-001 | Static catalog includes every legacy-published record; links retain `/lolbas/{type}/{filename}/` and category anchors. |
| LOL-SITE-002 | Search matches name, descriptions, ATT&CK IDs, command metadata and legacy `/function` / `#type` syntax. Combined category, type, technique, detection filters, column sorting, clear, pagination and URL reload work. |
| LOL-SITE-003 | Details expose all commands, paths, detections/IOCs, aliases, tags, resources, code samples, author and acknowledgements; copy controls provide honest feedback. |
| LOL-SITE-004 | Timeline aggregates YAML `Created` dates by year, explains methodology and has accessible chart data and catalog filter links. |
| LOL-API-001 | JSON retains legacy fields and URLs; CSV retains exact 17-column header and one row per command; Navigator and count badge remain available. Source-derived tests and escaping fixtures. |
| LOL-CI-001 | Fork branch and PR builds are read-only, cached and tested against production output, producing review artifacts. External publication is opt-in, restricted to upstream master, uses the same tested artifact, and cannot be triggered by forks or PRs. Legacy publication remains until deliberate cutover. |

Assurance: A2 site/API with A3 publication boundary review. Independent review
required. No authentication boundary exists. Evidence: data tests, Astro check,
production build verification, desktop/mobile/no-JS/URL/API/console browser checks,
visual screenshots and independent review. Remote CI/publication not run locally;
repository settings and external branch backup precede future cutover.

Stop at a fork-hosted branch, verified fork CI build, clickable fork preview and
upstream PR with screenshots and recorded evidence. Do not merge or publish the
official LOLBAS site.
