---
id: wiki-readme
title: Knowledge Base README
type: overview
status: active
created: 2026-06-30
updated: 2026-06-30
owner: Engineering
tags: [readme, guidelines]
---

# Project Knowledge Base

This `.wiki/` directory serves as the project's second brain for both humans and AI coding agents. It follows the [Open Knowledge Format (OKF)](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md).

## Purpose
- Accelerate onboarding for new developers.
- Preserve durable project knowledge.
- Reduce context drift and repeated AI-agent mistakes.
- Improve Developer Experience (DX) and Agent Experience (AX).

## Contribution Rules
- **Markdown-first**: Write clear, human-readable markdown.
- **Frontmatter**: Every document MUST include standard YAML frontmatter.
- **One Concept per Document**: Keep documents focused. Link related documents instead of duplicating content.
- **Stable Links**: Use relative links to connect knowledge.
- **Durable Facts Only**: Record facts, accepted decisions, and conventions. Do not store scratch notes, chat logs, or temporary work.
- **Supersede, Don't Rewrite History**: When major decisions change, create new documents and mark old ones as superseded.

## Navigation
Start at [index.md](index.md) to explore the knowledge base.
