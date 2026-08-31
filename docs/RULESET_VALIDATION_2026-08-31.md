# Courida-site Ruleset Validation — 2026-08-31

Purpose: validate that the active default-branch ruleset requires pull-request review and the approved status checks before merge.

This change is documentation-only. It does not alter application behavior, deployment configuration, secrets, or production content.

Expected checks:
- build-and-audit
- secret-scan
- Vercel

Disposition: leave this pull request unmerged until enforcement evidence is reviewed.
