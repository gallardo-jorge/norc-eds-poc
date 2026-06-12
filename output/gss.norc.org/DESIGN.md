---
name: "gss.norc.org"
description: "Design tokens extracted from https://gss.norc.org/"
colors:
  primary: "#F3901D"
  secondary: "#F89A2C"
  surface: "#FFFFFF"
  on-surface: "#000000"
typography:
  text-1:
    fontFamily: "Open Sans"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: 1.1
  text-2:
    fontFamily: "Open Sans"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.1
  text-3:
    fontFamily: "Open Sans"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.1
  text-4:
    fontFamily: "Open Sans"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.1
  text-5:
    fontFamily: "Open Sans"
    fontSize: "24px"
    fontWeight: 900
    lineHeight: 1.1
  text-6:
    fontFamily: "Open Sans"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.5
  text-7:
    fontFamily: "Open Sans"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.8
  text-8:
    fontFamily: "Helvetica"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1
  text-9:
    fontFamily: "roboto"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1
  text-10:
    fontFamily: "roboto"
    fontSize: "15px"
    fontWeight: 700
  text-11:
    fontFamily: "roboto"
    fontSize: "14px"
    fontWeight: 700
  text-12:
    fontFamily: "Open Sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  text-13:
    fontFamily: "Open Sans"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.3
  text-14:
    fontFamily: "Open Sans"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.07
  text-15:
    fontFamily: "Open Sans"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.4
  text-16:
    fontFamily: "Open Sans"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.54
  text-17:
    fontFamily: "Open Sans"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.1
  text-18:
    fontFamily: "Open Sans"
    fontSize: "11.62px"
    fontWeight: 700
    lineHeight: 1.1
spacing:
  base: "8px"
  xs: "2px"
  sm: "3px"
  md: "4px"
  lg: "5px"
  xl: "6px"
  xxl: "7px"
  xxxl: "8px"
  xxxxl: "9px"
rounded:
  sm: "1px"
  md: "4px"
  lg: "20px"
  full: "9999px"
components:
  button-observed:
    backgroundColor: "#353435"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  input-observed:
    textColor: "#777777"
    rounded: "0px"
    padding: "3px 0px 0px 10px"
---

# Design System

## Overview
Design tokens extracted from gss.norc.org. The YAML front matter contains machine-readable values observed by Dembrandt when available; the sections below summarize the extracted evidence without redesigning or correcting the source site.

## Colors
- **Primary** (#F3901D): Observed color token extracted from the site's palette, semantic CSS, or component styles.
- **Secondary** (#F89A2C): Observed color token extracted from the site's palette, semantic CSS, or component styles.
- **Surface** (#FFFFFF): Observed color token extracted from the site's palette, semantic CSS, or component styles.
- **On Surface** (#000000): Observed color token extracted from the site's palette, semantic CSS, or component styles.

## Typography
- **Text 1**: Open Sans, 36px, regular
- **Text 2**: Open Sans, 24px, regular
- **Text 3**: Open Sans, 24px, bold
- **Text 4**: Open Sans, 24px, medium
- **Text 5**: Open Sans, 24px, extra-bold
- **Text 6**: Open Sans, 18px, medium

## Layout
Observed spacing scale: 8px spacing scale.
- **Spacing tokens**: base 8px, xs 2px, sm 3px, md 4px, lg 5px, xl 6px, xxl 7px, xxxl 8px, xxxxl 9px
- **Responsive breakpoints**: 1680px, 1320px, 1200px, 992px, 900px, 851px

## Elevation & Depth
Observed box-shadow styles: rgba(198, 198, 198, 0.1) 0px 1px 1px 1px; rgb(204, 204, 204) 0px 0px 2px 2px

## Shapes
Observed rounded-corner tokens: sm 1px, md 4px, lg 20px, full 9999px.

## Components
- **Buttons**: Observed sample with radius 4px, background #353435, text #FFFFFF, padding 8px 12px, border 1px solid rgb(255, 255, 255)
- **Inputs**: Observed sample with 0px radius
