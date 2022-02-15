---
id: stories-data-tables
title: Data Tables - Overview
sidebar_label: Overview
slug: /stories-data-tables
---

After [adding User stories](hypi-tink-stories.md), you will have an idea of what kind of data needs to be stored. Based on that, you can design your data models. From the `Stories` board, you can go to `Tables` to [add your data models/tables](data-tables.md).

Let's check some of the terminologies used under Data Tables.

### Release

A `Release` represents a version of your app. You may create independent releases for different stages of application development.

### Instance

An `instance` is an isolated copy of your app. Every instance gets a `domain`. Hypi Tink generates one by default.  A domain has a unique set of values attributed to various data fields.

This domain allows you to access the APIs provided by [Hypi's low code backend](https://docs.hypi.app/docs/api-references).


