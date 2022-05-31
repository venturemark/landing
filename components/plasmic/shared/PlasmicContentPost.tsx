// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mTVXT6w3HHjZ4d74q3gB76
// Component: A1UjtYt6k0
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
import Dropdown from "../../Dropdown"; // plasmic-import: Umq3CDOCIR/component
import PhotoAvatar from "../../PhotoAvatar"; // plasmic-import: uaoIqTcPRC-/component
import TimelineLink from "../../TimelineLink"; // plasmic-import: PGPJmONwto/component
import Button from "../../Button"; // plasmic-import: JU1t0P9pFY/component

import { useScreenVariants as useScreenVariantsszbTUtTUfDw81Pi } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: szbTUtTUfDW81Pi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_shared.module.css"; // plasmic-import: mTVXT6w3HHjZ4d74q3gB76/projectcss
import sty from "./PlasmicContentPost.module.css"; // plasmic-import: A1UjtYt6k0/css

import IconDotMenuIcon from "./icons/PlasmicIcon__IconDotMenu"; // plasmic-import: Dz069s-rE/icon
import IconPlusIcon from "./icons/PlasmicIcon__IconPlus"; // plasmic-import: B5QLKmr2tW/icon
import IconRightIcon from "./icons/PlasmicIcon__IconRight"; // plasmic-import: v822ZhrBq/icon
import LockIconsvgIcon from "./icons/PlasmicIcon__LockIconsvg"; // plasmic-import: 1tBTTGMGvG/icon

export type PlasmicContentPost__VariantMembers = {
  state: "isOwner" | "isPostDetails" | "isPublic";
  isUserOnClick: "isUserOnClick";
};

export type PlasmicContentPost__VariantsArgs = {
  state?: SingleChoiceArg<"isOwner" | "isPostDetails" | "isPublic">;
  isUserOnClick?: SingleBooleanChoiceArg<"isUserOnClick">;
};

type VariantPropType = keyof PlasmicContentPost__VariantsArgs;
export const PlasmicContentPost__VariantProps = new Array<VariantPropType>(
  "state",
  "isUserOnClick"
);

export type PlasmicContentPost__ArgsType = {
  userName?: React.ReactNode;
  date?: React.ReactNode;
  userInitials?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicContentPost__ArgsType;
export const PlasmicContentPost__ArgProps = new Array<ArgPropType>(
  "userName",
  "date",
  "userInitials",
  "children"
);

export type PlasmicContentPost__OverridesType = {
  root?: p.Flex<"div">;
  editorContainer?: p.Flex<"div">;
  textContainer2?: p.Flex<"div">;
  title?: p.Flex<"div">;
  description?: p.Flex<"div">;
  iconMenu?: p.Flex<"svg">;
  dropdown?: p.Flex<typeof Dropdown>;
  archiveOption?: p.Flex<"div">;
  photoAvatar?: p.Flex<typeof PhotoAvatar>;
  span?: p.Flex<"span">;
  timelineNamesContainer?: p.Flex<"div">;
  timelineLink?: p.Flex<typeof TimelineLink>;
  viewReplies?: p.Flex<typeof Button>;
  text?: p.Flex<"div">;
  text2?: p.Flex<"div">;
};

export interface DefaultContentPostProps {
  userName?: React.ReactNode;
  date?: React.ReactNode;
  userInitials?: React.ReactNode;
  children?: React.ReactNode;
  state?: SingleChoiceArg<"isOwner" | "isPostDetails" | "isPublic">;
  isUserOnClick?: SingleBooleanChoiceArg<"isUserOnClick">;
  className?: string;
}

export const defaultContentPost__Args: Partial<PlasmicContentPost__ArgsType> =
  {};

function PlasmicContentPost__RenderFunc(props: {
  variants: PlasmicContentPost__VariantsArgs;
  args: PlasmicContentPost__ArgsType;
  overrides: PlasmicContentPost__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultContentPost__Args, props.args);
  const $props = args;

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover,
  };

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
          [sty.rootisUserOnClick]: hasVariant(
            variants,
            "isUserOnClick",
            "isUserOnClick"
          ),
          [sty.rootstate_isOwner]: hasVariant(variants, "state", "isOwner"),
          [sty.rootstate_isOwner_isUserOnClick]:
            hasVariant(variants, "isUserOnClick", "isUserOnClick") &&
            hasVariant(variants, "state", "isOwner"),
          [sty.rootstate_isPostDetails]: hasVariant(
            variants,
            "state",
            "isPostDetails"
          ),
        }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <div
        data-plasmic-name={"editorContainer"}
        data-plasmic-override={overrides.editorContainer}
        className={classNames(projectcss.all, sty.editorContainer, {
          [sty.editorContainerstate_isOwner]: hasVariant(
            variants,
            "state",
            "isOwner"
          ),
          [sty.editorContainerstate_isOwner_isUserOnClick]:
            hasVariant(variants, "isUserOnClick", "isUserOnClick") &&
            hasVariant(variants, "state", "isOwner"),
          [sty.editorContainerstate_isPostDetails]: hasVariant(
            variants,
            "state",
            "isPostDetails"
          ),
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__z3Q65, {
            [sty.freeBoxstate_isOwner__z3Q65U0Xnn]: hasVariant(
              variants,
              "state",
              "isOwner"
            ),
          })}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"textContainer2"}
            data-plasmic-override={overrides.textContainer2}
            hasGap={true}
            className={classNames(projectcss.all, sty.textContainer2, {
              [sty.textContainer2state_isOwner]: hasVariant(
                variants,
                "state",
                "isOwner"
              ),
            })}
          >
            <div
              data-plasmic-name={"title"}
              data-plasmic-override={overrides.title}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.title,
                {
                  [sty.titlestate_isOwner]: hasVariant(
                    variants,
                    "state",
                    "isOwner"
                  ),
                  [sty.titlestate_isPostDetails]: hasVariant(
                    variants,
                    "state",
                    "isPostDetails"
                  ),
                }
              )}
            >
              {hasVariant(variants, "state", "isOwner")
                ? "Lorem i ut ullamcorper dui "
                : "Lorem ipsumNam mollis varius ex. In ornare #scelerisque ex, ut ullamcorper dui "}
            </div>

            <div
              data-plasmic-name={"description"}
              data-plasmic-override={overrides.description}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.description,
                {
                  [sty.descriptionstate_isOwner]: hasVariant(
                    variants,
                    "state",
                    "isOwner"
                  ),
                  [sty.descriptionstate_isOwner_isUserOnClick]:
                    hasVariant(variants, "isUserOnClick", "isUserOnClick") &&
                    hasVariant(variants, "state", "isOwner"),
                  [sty.descriptionstate_isPostDetails]: hasVariant(
                    variants,
                    "state",
                    "isPostDetails"
                  ),
                }
              )}
            >
              {hasVariant(variants, "state", "isOwner")
                ? "Lorem ipsum #dolor sit amet, consectetur "
                : "Lorem ipsum #dolor sit amet, consectetur adipiscing elit. Nam mollis varius ex. In ornare #scelerisque ex, ut 35 ullamcorper dui suscipit id. Mauris #maximus congue ante, sed varius"}
            </div>
          </p.Stack>

          {(hasVariant(variants, "state", "isOwner") ? true : false) ? (
            <div
              className={classNames(projectcss.all, sty.freeBox__vVNrv, {
                [sty.freeBoxstate_isOwner__vVNrvU0Xnn]: hasVariant(
                  variants,
                  "state",
                  "isOwner"
                ),
              })}
            >
              <IconDotMenuIcon
                data-plasmic-name={"iconMenu"}
                data-plasmic-override={overrides.iconMenu}
                className={classNames(projectcss.all, sty.iconMenu, {
                  [sty.iconMenustate_isOwner]: hasVariant(
                    variants,
                    "state",
                    "isOwner"
                  ),
                })}
                role={"img"}
              />

              {(
                hasVariant(variants, "isUserOnClick", "isUserOnClick") &&
                hasVariant(variants, "state", "isOwner") &&
                triggers.hover_root
                  ? true
                  : hasVariant(variants, "state", "isOwner") &&
                    triggers.hover_root
                  ? false
                  : triggers.hover_root
                  ? true
                  : hasVariant(variants, "isUserOnClick", "isUserOnClick")
                  ? true
                  : false
              ) ? (
                <Dropdown
                  data-plasmic-name={"dropdown"}
                  data-plasmic-override={overrides.dropdown}
                  className={classNames("__wab_instance", sty.dropdown, {
                    [sty.dropdownisUserOnClick]: hasVariant(
                      variants,
                      "isUserOnClick",
                      "isUserOnClick"
                    ),
                    [sty.dropdownstate_isOwner]: hasVariant(
                      variants,
                      "state",
                      "isOwner"
                    ),
                    [sty.dropdownstate_isOwner_isUserOnClick]:
                      hasVariant(variants, "isUserOnClick", "isUserOnClick") &&
                      hasVariant(variants, "state", "isOwner"),
                  })}
                  rename2={
                    <div
                      data-plasmic-name={"archiveOption"}
                      data-plasmic-override={overrides.archiveOption}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.archiveOption,
                        {
                          [sty.archiveOptionstate_isOwner]: hasVariant(
                            variants,
                            "state",
                            "isOwner"
                          ),
                          [sty.archiveOptionstate_isOwner_isUserOnClick]:
                            hasVariant(
                              variants,
                              "isUserOnClick",
                              "isUserOnClick"
                            ) && hasVariant(variants, "state", "isOwner"),
                        }
                      )}
                    >
                      {"Remove"}
                    </div>
                  }
                />
              ) : null}
            </div>
          ) : null}
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ehjLr, {
            [sty.freeBoxstate_isOwner__ehjLrU0Xnn]: hasVariant(
              variants,
              "state",
              "isOwner"
            ),
            [sty.freeBoxstate_isPostDetails__ehjLrNeiX5]: hasVariant(
              variants,
              "state",
              "isPostDetails"
            ),
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__kyNpO, {
              [sty.freeBoxstate_isOwner_isUserOnClick__kyNpOu0XnnG87Sf]:
                hasVariant(variants, "state", "isOwner") &&
                hasVariant(variants, "isUserOnClick", "isUserOnClick"),
            })}
          >
            <PhotoAvatar
              data-plasmic-name={"photoAvatar"}
              data-plasmic-override={overrides.photoAvatar}
              className={classNames("__wab_instance", sty.photoAvatar)}
              userInitials={p.renderPlasmicSlot({
                defaultContents: "KO",
                value: args.userInitials,
              })}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__mkSty)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fjL5B, {
                  [sty.freeBoxstate_isOwner__fjL5Bu0Xnn]: hasVariant(
                    variants,
                    "state",
                    "isOwner"
                  ),
                })}
              >
                <div className={classNames(projectcss.all, sty.freeBox__nwWG)}>
                  {p.renderPlasmicSlot({
                    defaultContents: (
                      <span
                        className={classNames(
                          projectcss.all,
                          projectcss.span,
                          projectcss.__wab_text,
                          sty.span__kq2PL
                        )}
                      >
                        <React.Fragment>
                          <React.Fragment>{""}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ fontWeight: 700 }}
                          >
                            {"The Rock"}
                          </span>
                          <React.Fragment>{""}</React.Fragment>
                        </React.Fragment>
                      </span>
                    ),

                    value: args.userName,
                    className: classNames(sty.slotTargetUserName),
                  })}
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__wDBh5, {
                    [sty.freeBoxstate_isOwner__wDBh5U0Xnn]: hasVariant(
                      variants,
                      "state",
                      "isOwner"
                    ),
                  })}
                >
                  <span
                    data-plasmic-name={"span"}
                    data-plasmic-override={overrides.span}
                    className={classNames(
                      projectcss.all,
                      projectcss.span,
                      projectcss.__wab_text,
                      sty.span,
                      {
                        [sty.spanstate_isOwner]: hasVariant(
                          variants,
                          "state",
                          "isOwner"
                        ),
                      }
                    )}
                  >
                    {"•"}
                  </span>

                  {p.renderPlasmicSlot({
                    defaultContents: (
                      <span
                        className={classNames(
                          projectcss.all,
                          projectcss.span,
                          projectcss.__wab_text,
                          sty.span__iEzaX
                        )}
                      >
                        {"3 hours ago"}
                      </span>
                    ),

                    value: args.date,
                    className: classNames(sty.slotTargetDate, {
                      [sty.slotTargetDatestate_isOwner]: hasVariant(
                        variants,
                        "state",
                        "isOwner"
                      ),
                    }),
                  })}
                </p.Stack>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__vvzri, {
                  [sty.freeBoxstate_isOwner_isUserOnClick__vvzriu0XnnG87Sf]:
                    hasVariant(variants, "state", "isOwner") &&
                    hasVariant(variants, "isUserOnClick", "isUserOnClick"),
                })}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"timelineNamesContainer"}
                  data-plasmic-override={overrides.timelineNamesContainer}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    sty.timelineNamesContainer,
                    {
                      [sty.timelineNamesContainerstate_isOwner_isUserOnClick]:
                        hasVariant(variants, "state", "isOwner") &&
                        hasVariant(variants, "isUserOnClick", "isUserOnClick"),
                    }
                  )}
                >
                  <TimelineLink
                    data-plasmic-name={"timelineLink"}
                    data-plasmic-override={overrides.timelineLink}
                    className={classNames("__wab_instance", sty.timelineLink, {
                      [sty.timelineLinkstate_isOwner_isUserOnClick]:
                        hasVariant(variants, "state", "isOwner") &&
                        hasVariant(variants, "isUserOnClick", "isUserOnClick"),
                    })}
                    name={p.renderPlasmicSlot({
                      defaultContents: "Wins",
                      value: args.children,
                      className: classNames(sty.slotTargetChildren),
                    })}
                  />
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </p.Stack>

          {(hasVariant(variants, "state", "isPostDetails") ? false : true) ? (
            <div
              className={classNames(projectcss.all, sty.freeBox__iRFwS, {
                [sty.freeBoxstate_isPostDetails__iRFwSNeiX5]: hasVariant(
                  variants,
                  "state",
                  "isPostDetails"
                ),
              })}
            >
              <Button
                data-plasmic-name={"viewReplies"}
                data-plasmic-override={overrides.viewReplies}
                buttonFeatures={
                  hasVariant(variants, "state", "isPublic")
                    ? ["isRounded", "showEndIcon"]
                    : ["isRounded", "showEndIcon", "showCount"]
                }
                buttonStyle={"secondaryPurple" as const}
                className={classNames("__wab_instance", sty.viewReplies, {
                  [sty.viewRepliesstate_isOwner_isUserOnClick]:
                    hasVariant(variants, "state", "isOwner") &&
                    hasVariant(variants, "isUserOnClick", "isUserOnClick"),
                  [sty.viewRepliesstate_isPublic]: hasVariant(
                    variants,
                    "state",
                    "isPublic"
                  ),
                })}
                count={
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text,
                      {
                        [sty.textstate_isPublic]: hasVariant(
                          variants,
                          "state",
                          "isPublic"
                        ),
                      }
                    )}
                  >
                    {"1"}
                  </div>
                }
                isDisabled={
                  hasVariant(variants, "state", "isPublic") ? true : undefined
                }
                slot={
                  <IconPlusIcon
                    className={classNames(projectcss.all, sty.svg__w2QpP)}
                    role={"img"}
                  />
                }
                text2={
                  <div
                    data-plasmic-name={"text2"}
                    data-plasmic-override={overrides.text2}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text2,
                      {
                        [sty.text2state_isPostDetails]: hasVariant(
                          variants,
                          "state",
                          "isPostDetails"
                        ),
                        [sty.text2state_isPublic]: hasVariant(
                          variants,
                          "state",
                          "isPublic"
                        ),
                      }
                    )}
                  >
                    {hasVariant(variants, "state", "isPublic")
                      ? "Reply"
                      : "Replies"}
                  </div>
                }
              >
                <p.PlasmicIcon
                  PlasmicIconType={
                    hasVariant(variants, "state", "isPublic")
                      ? LockIconsvgIcon
                      : IconRightIcon
                  }
                  className={classNames(projectcss.all, sty.svg__i90Xz, {
                    [sty.svgstate_isPublic__i90XzYirUl]: hasVariant(
                      variants,
                      "state",
                      "isPublic"
                    ),
                  })}
                  role={"img"}
                />
              </Button>
            </div>
          ) : null}
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "editorContainer",
    "textContainer2",
    "title",
    "description",
    "iconMenu",
    "dropdown",
    "archiveOption",
    "photoAvatar",
    "span",
    "timelineNamesContainer",
    "timelineLink",
    "viewReplies",
    "text",
    "text2",
  ],
  editorContainer: [
    "editorContainer",
    "textContainer2",
    "title",
    "description",
    "iconMenu",
    "dropdown",
    "archiveOption",
    "photoAvatar",
    "span",
    "timelineNamesContainer",
    "timelineLink",
    "viewReplies",
    "text",
    "text2",
  ],
  textContainer2: ["textContainer2", "title", "description"],
  title: ["title"],
  description: ["description"],
  iconMenu: ["iconMenu"],
  dropdown: ["dropdown", "archiveOption"],
  archiveOption: ["archiveOption"],
  photoAvatar: ["photoAvatar"],
  span: ["span"],
  timelineNamesContainer: ["timelineNamesContainer", "timelineLink"],
  timelineLink: ["timelineLink"],
  viewReplies: ["viewReplies", "text", "text2"],
  text: ["text"],
  text2: ["text2"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  editorContainer: "div";
  textContainer2: "div";
  title: "div";
  description: "div";
  iconMenu: "svg";
  dropdown: typeof Dropdown;
  archiveOption: "div";
  photoAvatar: typeof PhotoAvatar;
  span: "span";
  timelineNamesContainer: "div";
  timelineLink: typeof TimelineLink;
  viewReplies: typeof Button;
  text: "div";
  text2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContentPost__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContentPost__VariantsArgs;
    args?: PlasmicContentPost__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContentPost__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicContentPost__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicContentPost__ArgProps,
      internalVariantPropNames: PlasmicContentPost__VariantProps,
    });

    return PlasmicContentPost__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContentPost";
  } else {
    func.displayName = `PlasmicContentPost.${nodeName}`;
  }
  return func;
}

export const PlasmicContentPost = Object.assign(
  // Top-level PlasmicContentPost renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    editorContainer: makeNodeComponent("editorContainer"),
    textContainer2: makeNodeComponent("textContainer2"),
    title: makeNodeComponent("title"),
    description: makeNodeComponent("description"),
    iconMenu: makeNodeComponent("iconMenu"),
    dropdown: makeNodeComponent("dropdown"),
    archiveOption: makeNodeComponent("archiveOption"),
    photoAvatar: makeNodeComponent("photoAvatar"),
    span: makeNodeComponent("span"),
    timelineNamesContainer: makeNodeComponent("timelineNamesContainer"),
    timelineLink: makeNodeComponent("timelineLink"),
    viewReplies: makeNodeComponent("viewReplies"),
    text: makeNodeComponent("text"),
    text2: makeNodeComponent("text2"),

    // Metadata about props expected for PlasmicContentPost
    internalVariantProps: PlasmicContentPost__VariantProps,
    internalArgProps: PlasmicContentPost__ArgProps,
  }
);

export default PlasmicContentPost;
/* prettier-ignore-end */
