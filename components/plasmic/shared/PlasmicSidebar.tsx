// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: FZWTu4L61t
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
import SidebarItemGroup from "../../SidebarItemGroup"; // plasmic-import: JQWYItyW5A/component

import { useScreenVariants as useScreenVariantsszbTUtTUfDw81Pi } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicSidebar.module.css"; // plasmic-import: FZWTu4L61t/css

import LockIconsvgIcon from "./icons/PlasmicIcon__LockIconsvg"; // plasmic-import: 1tBTTGMGvG/icon

export type PlasmicSidebar__VariantMembers = {
  hasInput: "hasInput";
  isPublic: "isPublic";
  isDropdown: "isDropdown";
};

export type PlasmicSidebar__VariantsArgs = {
  hasInput?: SingleBooleanChoiceArg<"hasInput">;
  isPublic?: SingleBooleanChoiceArg<"isPublic">;
  isDropdown?: SingleBooleanChoiceArg<"isDropdown">;
};

type VariantPropType = keyof PlasmicSidebar__VariantsArgs;
export const PlasmicSidebar__VariantProps = new Array<VariantPropType>(
  "hasInput",
  "isPublic",
  "isDropdown"
);

export type PlasmicSidebar__ArgsType = {
  userName?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSidebar__ArgsType;
export const PlasmicSidebar__ArgProps = new Array<ArgPropType>("userName");

export type PlasmicSidebar__OverridesType = {
  root?: p.Flex<"div">;
  topSidebar?: p.Flex<"div">;
  accountSettings?: p.Flex<"div">;
  photoAvatar?: p.Flex<typeof PhotoAvatar>;
  dropdown?: p.Flex<typeof ProfileDropdown>;
  scrollContainer?: p.Flex<"div">;
  itemGroupContainer?: p.Flex<"div">;
  sidebarItemGroup?: p.Flex<typeof SidebarItemGroup>;
  freeBox?: p.Flex<"div">;
  viewCreateVenture?: p.Flex<"a"> & Partial<LinkProps>;
  svg?: p.Flex<"svg">;
};

export interface DefaultSidebarProps {
  userName?: React.ReactNode;
  hasInput?: SingleBooleanChoiceArg<"hasInput">;
  isPublic?: SingleBooleanChoiceArg<"isPublic">;
  isDropdown?: SingleBooleanChoiceArg<"isDropdown">;
  className?: string;
}

export const defaultSidebar__Args: Partial<PlasmicSidebar__ArgsType> = {};

function PlasmicSidebar__RenderFunc(props: {
  variants: PlasmicSidebar__VariantsArgs;
  args: PlasmicSidebar__ArgsType;
  overrides: PlasmicSidebar__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultSidebar__Args, props.args);
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
        { [sty.roothasInput]: hasVariant(variants, "hasInput", "hasInput") }
      )}
    >
      <div
        data-plasmic-name={"topSidebar"}
        data-plasmic-override={overrides.topSidebar}
        className={classNames(projectcss.all, sty.topSidebar, {
          [sty.topSidebarhasInput]: hasVariant(
            variants,
            "hasInput",
            "hasInput"
          ),
        })}
      >
        {(
          hasVariant(variants, "isPublic", "isPublic")
            ? false
            : hasVariant(variants, "hasInput", "hasInput") &&
              hasVariant(globalVariants, "screen", "mobile")
            ? true
            : hasVariant(variants, "hasInput", "hasInput")
            ? true
            : hasVariant(globalVariants, "screen", "mobile")
            ? true
            : true
        ) ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"accountSettings"}
            data-plasmic-override={overrides.accountSettings}
            hasGap={true}
            className={classNames(projectcss.all, sty.accountSettings, {
              [sty.accountSettingshasInput]: hasVariant(
                variants,
                "hasInput",
                "hasInput"
              ),
              [sty.accountSettingsisDropdown]: hasVariant(
                variants,
                "isDropdown",
                "isDropdown"
              ),
              [sty.accountSettingsisPublic]: hasVariant(
                variants,
                "isPublic",
                "isPublic"
              ),
            })}
          >
            <PhotoAvatar
              data-plasmic-name={"photoAvatar"}
              data-plasmic-override={overrides.photoAvatar}
              className={classNames("__wab_instance", sty.photoAvatar)}
            />

            {p.renderPlasmicSlot({
              defaultContents: "Name",
              value: args.userName,
              className: classNames(sty.slotTargetUserName, {
                [sty.slotTargetUserNamehasInput]: hasVariant(
                  variants,
                  "hasInput",
                  "hasInput"
                ),
              }),
            })}

            {(
              hasVariant(variants, "isDropdown", "isDropdown") ? true : false
            ) ? (
              <ProfileDropdown
                data-plasmic-name={"dropdown"}
                data-plasmic-override={overrides.dropdown}
                className={classNames("__wab_instance", sty.dropdown, {
                  [sty.dropdownisDropdown]: hasVariant(
                    variants,
                    "isDropdown",
                    "isDropdown"
                  ),
                })}
                prop={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jYiYa,
                      {
                        [sty.textisDropdown__jYiYAmySg3]: hasVariant(
                          variants,
                          "isDropdown",
                          "isDropdown"
                        ),
                      }
                    )}
                  >
                    {"Create new Venture"}
                  </div>
                }
                prop3={"Log Out"}
              />
            ) : null}
          </p.Stack>
        ) : null}

        <p.Stack
          as={"div"}
          data-plasmic-name={"scrollContainer"}
          data-plasmic-override={overrides.scrollContainer}
          hasGap={true}
          className={classNames(projectcss.all, sty.scrollContainer, {
            [sty.scrollContainerhasInput]: hasVariant(
              variants,
              "hasInput",
              "hasInput"
            ),
            [sty.scrollContainerisDropdown]: hasVariant(
              variants,
              "isDropdown",
              "isDropdown"
            ),
            [sty.scrollContainerisPublic]: hasVariant(
              variants,
              "isPublic",
              "isPublic"
            ),
          })}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"itemGroupContainer"}
            data-plasmic-override={overrides.itemGroupContainer}
            hasGap={true}
            className={classNames(projectcss.all, sty.itemGroupContainer, {
              [sty.itemGroupContainerhasInput]: hasVariant(
                variants,
                "hasInput",
                "hasInput"
              ),
            })}
          >
            {(hasVariant(variants, "hasInput", "hasInput") ? true : true) ? (
              <SidebarItemGroup
                data-plasmic-name={"sidebarItemGroup"}
                data-plasmic-override={overrides.sidebarItemGroup}
                className={classNames("__wab_instance", sty.sidebarItemGroup, {
                  [sty.sidebarItemGrouphasInput]: hasVariant(
                    variants,
                    "hasInput",
                    "hasInput"
                  ),
                  [sty.sidebarItemGroupisPublic]: hasVariant(
                    variants,
                    "isPublic",
                    "isPublic"
                  ),
                })}
                isOwner={
                  hasVariant(variants, "hasInput", "hasInput")
                    ? true
                    : undefined
                }
                isPublic={
                  hasVariant(variants, "isPublic", "isPublic")
                    ? true
                    : undefined
                }
              />
            ) : null}
          </p.Stack>

          {(hasVariant(variants, "isPublic", "isPublic") ? true : false) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox, {
                [sty.freeBoxisPublic]: hasVariant(
                  variants,
                  "isPublic",
                  "isPublic"
                ),
              })}
            >
              {(hasVariant(variants, "isPublic", "isPublic") ? false : true) ? (
                <p.PlasmicLink
                  data-plasmic-name={"viewCreateVenture"}
                  data-plasmic-override={overrides.viewCreateVenture}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.viewCreateVenture,
                    {
                      [sty.viewCreateVentureisPublic]: hasVariant(
                        variants,
                        "isPublic",
                        "isPublic"
                      ),
                    }
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  {"Create New Venture"}
                </p.PlasmicLink>
              ) : null}
              {(hasVariant(variants, "isPublic", "isPublic") ? true : false) ? (
                <LockIconsvgIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg, {
                    [sty.svgisPublic]: hasVariant(
                      variants,
                      "isPublic",
                      "isPublic"
                    ),
                  })}
                  role={"img"}
                />
              ) : null}
              {(hasVariant(variants, "isPublic", "isPublic") ? true : false) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mR9P,
                    {
                      [sty.textisPublic__mR9Pxw1PM]: hasVariant(
                        variants,
                        "isPublic",
                        "isPublic"
                      ),
                    }
                  )}
                >
                  {hasVariant(variants, "isPublic", "isPublic")
                    ? "Connect with this venture to recieve access to other timelines and recieve future updates"
                    : "Enter some text"}
                </div>
              ) : null}
            </p.Stack>
          ) : null}
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "topSidebar",
    "accountSettings",
    "photoAvatar",
    "dropdown",
    "scrollContainer",
    "itemGroupContainer",
    "sidebarItemGroup",
    "freeBox",
    "viewCreateVenture",
    "svg",
  ],
  topSidebar: [
    "topSidebar",
    "accountSettings",
    "photoAvatar",
    "dropdown",
    "scrollContainer",
    "itemGroupContainer",
    "sidebarItemGroup",
    "freeBox",
    "viewCreateVenture",
    "svg",
  ],
  accountSettings: ["accountSettings", "photoAvatar", "dropdown"],
  photoAvatar: ["photoAvatar"],
  dropdown: ["dropdown"],
  scrollContainer: [
    "scrollContainer",
    "itemGroupContainer",
    "sidebarItemGroup",
    "freeBox",
    "viewCreateVenture",
    "svg",
  ],
  itemGroupContainer: ["itemGroupContainer", "sidebarItemGroup"],
  sidebarItemGroup: ["sidebarItemGroup"],
  freeBox: ["freeBox", "viewCreateVenture", "svg"],
  viewCreateVenture: ["viewCreateVenture"],
  svg: ["svg"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  topSidebar: "div";
  accountSettings: "div";
  photoAvatar: typeof PhotoAvatar;
  dropdown: typeof ProfileDropdown;
  scrollContainer: "div";
  itemGroupContainer: "div";
  sidebarItemGroup: typeof SidebarItemGroup;
  freeBox: "div";
  viewCreateVenture: "a";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSidebar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSidebar__VariantsArgs;
    args?: PlasmicSidebar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSidebar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSidebar__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSidebar__ArgProps,
      internalVariantPropNames: PlasmicSidebar__VariantProps,
    });

    return PlasmicSidebar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSidebar";
  } else {
    func.displayName = `PlasmicSidebar.${nodeName}`;
  }
  return func;
}

export const PlasmicSidebar = Object.assign(
  // Top-level PlasmicSidebar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    topSidebar: makeNodeComponent("topSidebar"),
    accountSettings: makeNodeComponent("accountSettings"),
    photoAvatar: makeNodeComponent("photoAvatar"),
    dropdown: makeNodeComponent("dropdown"),
    scrollContainer: makeNodeComponent("scrollContainer"),
    itemGroupContainer: makeNodeComponent("itemGroupContainer"),
    sidebarItemGroup: makeNodeComponent("sidebarItemGroup"),
    freeBox: makeNodeComponent("freeBox"),
    viewCreateVenture: makeNodeComponent("viewCreateVenture"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicSidebar
    internalVariantProps: PlasmicSidebar__VariantProps,
    internalArgProps: PlasmicSidebar__ArgProps,
  }
);

export default PlasmicSidebar;
/* prettier-ignore-end */
