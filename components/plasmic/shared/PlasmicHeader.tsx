// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: MkyvVOg5Ik
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import PhotoAvatar from "../../PhotoAvatar"; // plasmic-import: uaoIqTcPRC-/component
import ProfileDropdown from "../../ProfileDropdown"; // plasmic-import: bGjqf-R4Tc/component

import { useScreenVariants as useScreenVariantsszbTUtTUfDw81Pi } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: MkyvVOg5Ik/css

import IconMenuIcon from "./icons/PlasmicIcon__IconMenu"; // plasmic-import: gDL0fFl2pD/icon
import Logosvg3Icon from "./icons/PlasmicIcon__Logosvg3"; // plasmic-import: o58_ERQlgq/icon

export type PlasmicHeader__VariantMembers = {
  mobileMenu: "mobileMenu";
  profileDropdown: "profileDropdown";
  views: "userAccount" | "publicView";
};

export type PlasmicHeader__VariantsArgs = {
  mobileMenu?: SingleBooleanChoiceArg<"mobileMenu">;
  profileDropdown?: SingleBooleanChoiceArg<"profileDropdown">;
  views?: SingleChoiceArg<"userAccount" | "publicView">;
};

type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>(
  "mobileMenu",
  "profileDropdown",
  "views"
);

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
  toggleMobileSidebar?: p.Flex<"svg">;
  svg?: p.Flex<"svg">;
  text?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  avatar?: p.Flex<typeof PhotoAvatar>;
  dropdown?: p.Flex<typeof ProfileDropdown>;
};

export interface DefaultHeaderProps {
  mobileMenu?: SingleBooleanChoiceArg<"mobileMenu">;
  profileDropdown?: SingleBooleanChoiceArg<"profileDropdown">;
  views?: SingleChoiceArg<"userAccount" | "publicView">;
  className?: string;
}

export const defaultHeader__Args: Partial<PlasmicHeader__ArgsType> = {};

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHeader__Args, props.args);
  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsszbTUtTUfDw81Pi(),
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootmobileMenu]: hasVariant(
            variants,
            "mobileMenu",
            "mobileMenu"
          ),
          [sty.rootviews_publicView]: hasVariant(
            variants,
            "views",
            "publicView"
          ),
        }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ky7Rm, {
          [sty.freeBoxmobileMenu__ky7RmdUXmX]: hasVariant(
            variants,
            "mobileMenu",
            "mobileMenu"
          ),
          [sty.freeBoxviews_publicView__ky7RmYpLjb]: hasVariant(
            variants,
            "views",
            "publicView"
          ),
          [sty.freeBoxviews_userAccount__ky7RmUjVqz]: hasVariant(
            variants,
            "views",
            "userAccount"
          ),
        })}
      >
        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__wE8Ym)}
          >
            {(
              hasVariant(variants, "mobileMenu", "mobileMenu") &&
              hasVariant(globalVariants, "screen", "mobile")
                ? false
                : hasVariant(variants, "mobileMenu", "mobileMenu")
                ? true
                : hasVariant(globalVariants, "screen", "mobile")
                ? true
                : false
            ) ? (
              <IconMenuIcon
                data-plasmic-name={"toggleMobileSidebar"}
                data-plasmic-override={overrides.toggleMobileSidebar}
                className={classNames(projectcss.all, sty.toggleMobileSidebar, {
                  [sty.toggleMobileSidebarmobileMenu]: hasVariant(
                    variants,
                    "mobileMenu",
                    "mobileMenu"
                  ),
                  [sty.toggleMobileSidebarviews_publicView]: hasVariant(
                    variants,
                    "views",
                    "publicView"
                  ),
                })}
                role={"img"}
              />
            ) : null}
            {(
              hasVariant(variants, "views", "publicView") &&
              hasVariant(globalVariants, "screen", "mobile")
                ? true
                : hasVariant(globalVariants, "screen", "mobile")
                ? false
                : true
            ) ? (
              <Logosvg3Icon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg, {
                  [sty.svgmobileMenu]: hasVariant(
                    variants,
                    "mobileMenu",
                    "mobileMenu"
                  ),
                  [sty.svgviews_publicView]: hasVariant(
                    variants,
                    "views",
                    "publicView"
                  ),
                })}
                role={"img"}
              />
            ) : null}
          </p.Stack>
        ) : null}
        {(hasVariant(variants, "views", "publicView") ? true : false) ? (
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text,
              {
                [sty.textviews_publicView]: hasVariant(
                  variants,
                  "views",
                  "publicView"
                ),
              }
            )}
          >
            {hasVariant(variants, "views", "publicView")
              ? "The easiest way to track and share your progress with anyone."
              : "The easiest way to track and share your progress with anyone."}
          </div>
        ) : null}
        {(hasVariant(variants, "views", "publicView") ? true : false) ? (
          <p.PlasmicLink
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link,
              {
                [sty.linkviews_publicView]: hasVariant(
                  variants,
                  "views",
                  "publicView"
                ),
              }
            )}
            component={Link}
            href={
              hasVariant(variants, "views", "publicView")
                ? ("http://venturemark.co/" as const)
                : ("https://www.plasmic.app/" as const)
            }
            platform={"nextjs"}
          >
            {hasVariant(variants, "views", "publicView")
              ? "Join Waitlist"
              : "Some link text"}
          </p.PlasmicLink>
        ) : null}
        {(hasVariant(variants, "views", "userAccount") ? true : false) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___4Ktdl, {
              [sty.freeBoxprofileDropdown___4KtdlZi9Pu]: hasVariant(
                variants,
                "profileDropdown",
                "profileDropdown"
              ),
              [sty.freeBoxviews_userAccount___4KtdlUjVqz]: hasVariant(
                variants,
                "views",
                "userAccount"
              ),
            })}
          >
            <PhotoAvatar
              data-plasmic-name={"avatar"}
              data-plasmic-override={overrides.avatar}
              className={classNames("__wab_instance", sty.avatar, {
                [sty.avatarprofileDropdown]: hasVariant(
                  variants,
                  "profileDropdown",
                  "profileDropdown"
                ),
              })}
              userInitials={"KO"}
            />

            {(
              hasVariant(variants, "profileDropdown", "profileDropdown")
                ? true
                : false
            ) ? (
              <ProfileDropdown
                data-plasmic-name={"dropdown"}
                data-plasmic-override={overrides.dropdown}
                className={classNames("__wab_instance", sty.dropdown, {
                  [sty.dropdownprofileDropdown]: hasVariant(
                    variants,
                    "profileDropdown",
                    "profileDropdown"
                  ),
                })}
                isMobile={true}
                prop3={"Log Out"}
              />
            ) : null}
          </p.Stack>
        ) : null}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "toggleMobileSidebar",
    "svg",
    "text",
    "link",
    "avatar",
    "dropdown",
  ],
  toggleMobileSidebar: ["toggleMobileSidebar"],
  svg: ["svg"],
  text: ["text"],
  link: ["link"],
  avatar: ["avatar"],
  dropdown: ["dropdown"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  toggleMobileSidebar: "svg";
  svg: "svg";
  text: "div";
  link: "a";
  avatar: typeof PhotoAvatar;
  dropdown: typeof ProfileDropdown;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps,
    });

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    toggleMobileSidebar: makeNodeComponent("toggleMobileSidebar"),
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),
    link: makeNodeComponent("link"),
    avatar: makeNodeComponent("avatar"),
    dropdown: makeNodeComponent("dropdown"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps,
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
