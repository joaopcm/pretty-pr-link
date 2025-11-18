/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `copy-formatted-link` command */
  export type CopyFormattedLink = ExtensionPreferences & {
  /** Prefix - The prefix to use when copying a non urgent pull request link */
  "prefix": string
}
  /** Preferences accessible in the `copy-formatted-urgent-link` command */
  export type CopyFormattedUrgentLink = ExtensionPreferences & {
  /** Prefix - The prefix to use when copying a urgent pull request link */
  "prefix": string
}
}

declare namespace Arguments {
  /** Arguments passed to the `copy-formatted-link` command */
  export type CopyFormattedLink = {}
  /** Arguments passed to the `copy-formatted-urgent-link` command */
  export type CopyFormattedUrgentLink = {}
}

